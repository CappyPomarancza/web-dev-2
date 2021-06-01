const menu = [
    {
        id: Math.floor(Math.random() * 6000) + 1,
        name: 'Carpaccio wołowe marynowane w pieprzu i truflach serwowane ze świeżą\n' +
            'rukolą i parmezanem',
        price: 28,
        type: 'appetizers'
    },
    {
        id: Math.floor(Math.random() * 6000) + 1,
        name: 'Klasyczny śledź podany z piklami własnego wyrobu w towarzystwie musu z\n' +
            'jabłka i oliwy koperkowej',
        price: 22,
        type: 'appetizers'
    },
    {
        id: Math.floor(Math.random() * 6000) + 1,
        name: 'Krewetki Black Tiger smażone z chilli i cząstkami ananasa podane z bagietką\n' +
            'czosnkową',
        price: 45,
        type: 'appetizers'
    },
    {
        id: Math.floor(Math.random() * 6000) + 1,
        name: 'Pierożki szpinakowe z sandaczem, grzybami leśnymi i\n' +
            'pomidorkami concasse',
        price: 29,
        type: 'appetizers'
    },
    {
        id: Math.floor(Math.random() * 6000) + 1,
        name: 'Ślimaki z masłem czosnkowym serwowane na bagietce',
        price: 29,
        type: 'appetizers'
    },
    {
        id: Math.floor(Math.random() * 6000) + 1,
        name: 'Kacza pierś gotowana metodą sous vide podana z plastrami wędzonego sera i\n' +
            'orzeszkami pinii na bukiecie sałat z dressingiem malinowym',
        price: 25,
        type: 'appetizers'
    },
    {
        id: Math.floor(Math.random() * 6000) + 1,
        name: 'Macki ośmiornicy z rusztu z sosem ostrygowym podane z bukietem sałat i\n' +
            'grzanką',
        price: 49,
        type: 'appetizers'
    },
    {
        id: Math.floor(Math.random() * 6000) + 1,
        name: 'Carpaccio z buraków podane z malinowym balsamico, świeżą rukolą, grana\n' +
            'formaggio i orzechami pinii',
        price: 23,
        type: 'appetizers'
    },
    {
        id: Math.floor(Math.random() * 8000) + 6000,
        name: 'Pierś z kurczaka sous vide podana z chrupiącym batatem, purée z groszku\n' +
            'zielonego pod kremowym sosem z kurek',
        price: 33,
        type: 'main-dishes'
    },
    {
        id: Math.floor(Math.random() * 8000) + 6000,
        name: 'Kaczka wolno pieczona w sosie z czerwonego wina, malin i pomarańczy z\n' +
            'dzikim ryżem oraz z pieczonym jabłkiem z żurawiną',
        price: 57,
        type: 'main-dishes'
    },
    {
        id: Math.floor(Math.random() * 8000) + 6000,
        name: 'Polędwiczka wieprzowa sous vide w towarzystwie włoskich kopytek gnocchi w\n' +
            'sosie z białych trufli oraz z balsamicznymi buraczkami',
        price: 37,
        type: 'main-dishes'
    },
    {
        id: Math.floor(Math.random() * 8000) + 6000,
        name: 'Schabowy rasy puławskiej w mące gryczanej podany na zasmażanej kapuście z\n' +
            'purée ziemniaczanym',
        price: 34,
        type: 'main-dishes'
    },
    {
        id: Math.floor(Math.random() * 8000) + 6000,
        name: 'Golonka a’la Grześkowiak podana w towarzystwie zasmażanej kapusty',
        price: 37,
        type: 'main-dishes'
    },
    {
        id: Math.floor(Math.random() * 8000) + 6000,
        name: 'Stek z polędwicy wołowej po parysku w czarnym pieprzu serwowany na\n' +
            'zapiekance ziemniaczanej w towarzystwie grillowanych warzyw',
        price: 69,
        type: 'main-dishes'
    },
    {
        id: Math.floor(Math.random() * 8000) + 6000,
        name: 'Antrykot z dojrzewającej wołowiny argentyńskiej podany z ziemniakami\n' +
            'paryskimi, ziołowym masłem i warzywami z grilla',
        price: 71,
        type: 'main-dishes'
    },
    {
        id: Math.floor(Math.random() * 8000) + 6000,
        name: 'Polędwiczki jagnięce w sosie Dijon serwowane \n' +
            'z zapiekanką ziemniaczaną, młodym szpinakiem i warzywami z grilla',
        price: 72,
        type: 'main-dishes'
    },
    {
        id: Math.floor(Math.random() * 8000) + 6000,
        name: 'Stek z jelenia podany na lubelskim gryczaku z sosem leśnym i\n' +
            'cząstkami czerwonego buraka',
        price: 69,
        type: 'main-dishes'
    },
    {
        id: Math.floor(Math.random() * 8000) + 6000,
        name: 'Policzki wołowe z warzywami, pęczotto z pieczarkami brunatnymi w sosie z\n' +
            'czerwonego wina i zielonego pieprzu',
        price: 42,
        type: 'main-dishes'
    },
    {
        id: Math.floor(Math.random() * 9000) + 8000,
        name: 'Esencjonalne czekoladowe ciasto podane z lodami kawowymi i kawałkami\n' +
            'chałwy',
        price: 17,
        type: 'desserts'
    },
    {
        id: Math.floor(Math.random() * 9000) + 8000,
        name: 'Aksamitny krem waniliowy pod chrupiącą skorupką karmelową',
        price: 18,
        type: 'desserts'
    },
    {
        id: Math.floor(Math.random() * 9000) + 8000,
        name: 'Aromatyczne ekologiczne jabłka z migdałami zapiekane w ramekinie pod\n' +
            'kruszonką owsianą podane z gałką lodów waniliowych',
        price: 18,
        type: 'desserts'
    },
    {
        id: Math.floor(Math.random() * 9000) + 8000,
        name: 'Lody waniliowe podane z gorącą frużeliną ze świeżych owoców',
        price: 17,
        type: 'desserts'
    },
    {
        id: Math.floor(Math.random() * 9000) + 8000,
        name: 'Sernik z mascarpone i ricotty podany z frużeliną ze świeżych owoców i\n' +
            'sorbetem z mango i marakui',
        price: 18,
        type: 'desserts'
    },
];

const order = {
    firstName: '',
    lastName: '',
    email: '',
    address: {
        street: '',
        number:'',
        postCode: ''
    },
    itemList: [],
    summary: 0,
};

const handleMenuItemCLick = (event) => {
    const clickedItem = menu.find(item => item.id == event.target.id);
    order.itemList.push(clickedItem);
    console.log('order.itemList', order.itemList);
};

function renderMenu() {
    menu.map(item => {
        const menuItem = document.createElement('a');
        menuItem.className = 'list-group-item list-group-item-action menu-list-item';
        // menuItem.setAttribute('class', 'list-group-item list-group-item-action'); // dodaje atrybut class o przekazanej wartości
        // const menuItemText = document.createTextNode(item.name);
        // menuItem.appendChild(menuItemText);
        menuItem.innerText = item.name;

        const actionItemContainer = document.createElement('div');
        actionItemContainer.className = 'item-action-container';

        const priceButton = document.createElement('button');
        priceButton.className = 'btn btn-disabled';
        priceButton.innerText = item.price + ' zł';
        const orderButton = document.createElement('button');
        orderButton.className = 'btn btn-primary';
        orderButton.innerText = 'Add';
        orderButton.id = item.id;
        orderButton.addEventListener('click', handleMenuItemCLick);
        actionItemContainer.appendChild(priceButton);
        actionItemContainer.appendChild(orderButton);
        menuItem.appendChild(actionItemContainer);
        document.getElementById(item.type + '-list').appendChild(menuItem);
    });
}

renderMenu();
