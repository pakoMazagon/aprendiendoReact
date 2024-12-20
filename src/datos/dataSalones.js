const dataSalones = [
    {
        'numero':'1',
        'sector':'salonBarra',
        'nombreTradicional':'1',
        'nombreActual':'cliente1',
        'ocupada':true,
        'camarero':'paco'
    },
    {
        'numero':'2',
        'sector':'salonBarra',
        'nombreTradicional':'2',
        'nombreActual':'cliente2',
        'ocupada':true,
        'camarero':'paco'
    },
    {
        'numero':'3',
        'sector':'salonBarra',
        'nombreTradicional':'3',
        'nombreActual':'cliente3',
        'ocupada':true,
        'camarero':'paco'
    },
    {
        'numero':'4',
        'sector':'salonBarra',
        'nombreTradicional':'4',
        'nombreActual':'cliente4',
        'ocupada':true,
        'camarero':'paco'
    },
    {
        'numero':'5',
        'sector':'salonBarra',
        'nombreTradicional':'5',
        'nombreActual':'cliente5',
        'ocupada':true,
        'camarero':'paco'
    },
    {
        'numero':'6',
        'sector':'salonBarra',
        'nombreTradicional':'6',
        'nombreActual':'',
        'ocupada':false,
        'camarero':''
    },
    {
        'numero':'7',
        'sector':'salonBarra',
        'nombreTradicional':'7',
        'nombreActual':'',
        'ocupada':false,
        'camarero':''
    },
    {
        'numero':'8',
        'sector':'salonBarra',
        'nombreTradicional':'8',
        'nombreActual':'',
        'ocupada':false,
        'camarero':''
    },
    {
        'numero':'1',
        'sector':'salonComedor',
        'nombreTradicional':'1',
        'nombreActual':'cliente1',
        'ocupada':true,
        'camarero':'paco'
    },
    {
        'numero':'2',
        'sector':'salonComedor',
        'nombreTradicional':'2',
        'nombreActual':'cliente2',
        'ocupada':true,
        'camarero':'paco'
    },
    {
        'numero':'3',
        'sector':'salonComedor',
        'nombreTradicional':'3',
        'nombreActual':'cliente3',
        'ocupada':true,
        'camarero':'paco'
    },
    {
        'numero':'4',
        'sector':'salonComedor',
        'nombreTradicional':'4',
        'nombreActual':'cliente4',
        'ocupada':true,
        'camarero':'paco'
    },
    {
        'numero':'5',
        'sector':'salonComedor',
        'nombreTradicional':'5',
        'nombreActual':'cliente5 Rincon derecha',
        'ocupada':true,
        'camarero':'paco'
    },
    {
        'numero':'6',
        'sector':'salonComedor',
        'nombreTradicional':'6',
        'nombreActual':'',
        'ocupada':false,
        'camarero':''
    },
    {
        'numero':'7',
        'sector':'salonComedor',
        'nombreTradicional':'7',
        'nombreActual':'',
        'ocupada':false,
        'camarero':''
    },
    {
        'numero':'8',
        'sector':'salonComedor',
        'nombreTradicional':'8',
        'nombreActual':'',
        'ocupada':false,
        'camarero':''
    },
    {
        'numero':'9',
        'sector':'salonComedor',
        'nombreTradicional':'9',
        'nombreActual':'',
        'ocupada':false,
        'camarero':''
    },
    {
        'numero':'10',
        'sector':'salonComedor',
        'nombreTradicional':'10',
        'nombreActual':'',
        'ocupada':false,
        'camarero':''
    },
    {
        'numero':'11',
        'sector':'salonComedor',
        'nombreTradicional':'11',
        'nombreActual':'',
        'ocupada':false,
        'camarero':''
    },
    {
        'numero':'12',
        'sector':'salonComedor',
        'nombreTradicional':'12',
        'nombreActual':'',
        'ocupada':false,
        'camarero':''
    },
    {
        'numero': '1',
        'sector': 'barra',
        'nombreTradicional': '1',
        'nombreActual': 'cliente1',
        'ocupada': true,
        'camarero': 'paco'
    },
    {
        'numero': '2',
        'sector': 'barra',
        'nombreTradicional': '2',
        'nombreActual': 'cliente2',
        'ocupada': true,
        'camarero': 'paco'
    },
    {
        'numero': '3',
        'sector': 'barra',
        'nombreTradicional': '3',
        'nombreActual': 'cliente3',
        'ocupada': true,
        'camarero': 'paco'
    },
    {
        'numero': '4',
        'sector': 'barra',
        'nombreTradicional': '4',
        'nombreActual': 'cliente4',
        'ocupada': true,
        'camarero': 'paco'
    },
    {
        'numero': '5',
        'sector': 'barra',
        'nombreTradicional': '5',
        'nombreActual': 'cliente5',
        'ocupada': true,
        'camarero': 'paco'
    },
    {
        'numero': '6',
        'sector': 'barra',
        'nombreTradicional': '6',
        'nombreActual': '',
        'ocupada': false,
        'camarero': ''
    },
    {
        'numero': '7',
        'sector': 'barra',
        'nombreTradicional': '7',
        'nombreActual': '',
        'ocupada': false,
        'camarero': ''
    },
    {
        'numero': '8',
        'sector': 'barra',
        'nombreTradicional': '8',
        'nombreActual': '',
        'ocupada': false,
        'camarero': ''
    },
    {
        'numero': '9',
        'sector': 'barra',
        'nombreTradicional': '9',
        'nombreActual': '',
        'ocupada': false,
        'camarero': ''
    },
    {
        'numero': '10',
        'sector': 'barra',
        'nombreTradicional': '10',
        'nombreActual': '',
        'ocupada': false,
        'camarero': ''
    },
    // Mesas de terraza
    ...Array.from({ length: 40 }, (_, index) => ({
        'numero': (index + 1).toString(),
        'sector': 'terraza',
        'nombreTradicional': (index + 1).toString(),
        'nombreActual': '',
        'ocupada': index % 3 === 0, // Algunas mesas ocupadas para variar
        'camarero': index % 3 === 0 ? 'Pako' : ''
    }))
]

export default dataSalones;