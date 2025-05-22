
function callFakeStoreAPI(method, type, title, price, category) {
    const url = `https://fakestoreapi.com/${type}`;
    switch (method){
        case 'GET':
            fetch(url)
                .then(response => response.json())
                .then(data => console.log(data));
            break;
        case 'POST':
            const product = { title: title, price: price, category: category};
            fetch('https://fakestoreapi.com/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(product)
            })
                .then(response => response.json())
                .then(data => console.log(data));
            break;
        case 'DELETE':
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => console.log(data));
            break;
            default:
                console.log('Invalid method');
    }
}

callFakeStoreAPI(process.argv[2], process.argv[3]);