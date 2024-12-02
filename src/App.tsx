import { useEffect, useReducer, useRef, useState } from "react";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
const {VITE_BACKEND_URL} = import.meta.env;

// Polyfill para global
/*if (typeof global === "undefined") {
  (window as any).global = window;
}*/

interface ProductoDeLaLista {
  id: number;
  nombre: string;
  unidades: number;
  restButton: () => void;
  sumButton: () => void;
  quitButton: () => void;
  comprado: boolean;
}

type Action =
  | { type: "ADD_PRODUCT"; payload: { nombre: string; unidades: number } }
  | { type: "SUM_UNITS"; payload: { id: number; nombre: string } }
  | { type: "REST_UNITS"; payload: { nombre: string } }
  | { type: "QUIT_PRODUCT"; payload: { id: number; nombre: string } }
  | { type: "TOGGLE_COMPRADO"; payload: { id: number; nombre: string } }
  | { type: "SYNC_LIST"; payload: ProductoDeLaLista[] };

function reducer(state: ProductoDeLaLista[], action: Action) {
  switch (action.type) {
    case "TOGGLE_COMPRADO":
      return state.map((product) =>
        product.id === action.payload.id
          ? { ...product, comprado: !product.comprado }
          : product
      );
    case "SUM_UNITS":
      return state.map((product) =>
        product.nombre === action.payload.nombre
          ? { ...product, unidades: product.unidades + 1 }
          : product
      );
    case "REST_UNITS":
      return state.map((product) =>
        product.nombre === action.payload.nombre
          ? { ...product, unidades: product.unidades - 1 }
          : product
      );
    case "ADD_PRODUCT":
      return [
        ...state,
        {
          nombre: action.payload.nombre,
          unidades: action.payload.unidades,
          restButton: () => null,
          sumButton: () => null,
          quitButton: () => null,
          comprado: false,
        },
      ];
    case "QUIT_PRODUCT":
      return state.filter((producto) => producto.id !== action.payload.id);
    case "SYNC_LIST":
      return action.payload;
    default:
      return state;
  }
}

function App() {
  const valorInicial: ProductoDeLaLista[] = [];

  const [listaCompra, dispatch] = useReducer(reducer, valorInicial);
  const [productoActual, setProductoActual] = useState("");

  const clientRef = useRef<Client | null>(null);

  // Fetch inicial de la lista de productos
  const fetchListaCompra = async () => {
    console.log(VITE_BACKEND_URL)
    console.log(import.meta.env.VITE_BACKEND_URL);
    try {
      const response = await fetch("https://back-appcompraws-1.onrender.com/productos");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: ProductoDeLaLista[] = await response.json();
      dispatch({ type: "SYNC_LIST", payload: data });
    } catch (error) {
      console.error("Error al obtener la lista de compra:", error);
    }
  };

  // Configuración del WebSocket
  useEffect(() => {
    const client = new Client({
      webSocketFactory: () => new SockJS("https://back-appcompraws-1.onrender.com/ws"),
      onConnect: () => {
        console.log("Conectado a WebSocket");

        // Suscribirse a mensajes del servidor
        client.subscribe("/topic/lista-compra", (message) => {
          console.log("Mensaje recibido:", message.body);
          const updatedList: ProductoDeLaLista[] = JSON.parse(message.body);
          dispatch({ type: "SYNC_LIST", payload: updatedList });
        });
      },
      onDisconnect: () => {
        console.log("Desconectado de WebSocket");
      },
      onStompError: (error) => {
        console.error("Error STOMP:", error);
      },
    });

    client.activate();
    clientRef.current = client;

    fetchListaCompra();

    return () => {
      client.deactivate();
    };
  }, []);

  // Enviar actualizaciones al backend cuando se agrega, elimina o modifica un producto
  const sendUpdate = (destination: string, product: ProductoDeLaLista) => {
    console.log('sendUpdate is:'+JSON.stringify(product))
    if (clientRef.current && clientRef.current.connected) {
      clientRef.current.publish({
        destination,
        body: JSON.stringify(product),
      });
    }
  };

  // Acciones para los botones de la lista
  const handleAddProduct = () => {
    const newProduct = { nombre: productoActual, unidades: 1, comprado: false };
    dispatch({ type: "ADD_PRODUCT", payload: newProduct });
    sendUpdate("/app/addProductos", newProduct); // Enviar al backend
    setProductoActual(""); // Limpiar el campo de texto
  };

  const handleRemoveProduct = (id: number) => {
    dispatch({ type: "QUIT_PRODUCT", payload: { id } });
    sendUpdate("/app/removeProductos", { id } as ProductoDeLaLista); // Enviar al backend
  };

  const handleToggleComprado = (id: number) => {
    dispatch({ type: "TOGGLE_COMPRADO", payload: { id } });
    let product = listaCompra.find((p) => p.id === id);
    if (product) {
      product.comprado = !product.comprado;
      sendUpdate("/app/updateProducto", product as ProductoDeLaLista);
    }
  };

  const handleSum = (id: number) => {
    dispatch({ type: "SUM_UNITS", payload: { id } });
    let product = listaCompra.find((p) => p.id === id);
    if (product) {
      product.unidades = product.unidades + 1;
      sendUpdate("/app/updateProducto", product as ProductoDeLaLista);
    }
  };

  const handleRes = (id: number) => {
    dispatch({ type: "REST_UNITS", payload: { id } });
    let product = listaCompra.find((p) => p.id === id);
    if (product) {
      product.unidades = product.unidades - 1;
      sendUpdate("/app/updateProducto", product as ProductoDeLaLista);
    }
  };

  return (
    <>
      <div className="titulo">
        <h1>Lista Compra</h1>
      </div>
      <div className="encabezado">
        Producto:
        <input
          type="text"
          value={productoActual}
          onChange={(e) => setProductoActual(e.target.value)}
        />
        <button onClick={handleAddProduct}>Añadir</button>
      </div>
      <div className="tablaProductos">
        {listaCompra.map((product: ProductoDeLaLista) => (
          <li
            key={product.nombre}
            style={{
              backgroundColor: product.comprado ? "#d4edda" : "#f8d7da",
            }}
          >
            <span>{product.nombre}</span><span>({product.unidades} uds)</span>
            <button
              onClick={() => handleRes(product.id)}
            >
              -
            </button>
            <button
              onClick={() => handleSum(product.id)}
            >
              +
            </button>
            <button onClick={() => handleRemoveProduct(product.id)}>X</button>
            <button onClick={() => handleToggleComprado(product.id)}>
              {product.comprado ? <FontAwesomeIcon icon={faCartShopping} /> : "✓"}
            </button>
          </li>
        ))}
      </div>
    </>
  );
}

export default App;
