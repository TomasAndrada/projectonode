function callFakeStoreAPI(method, type, ...args) {
    const url = `https://fakestoreapi.com/${type}`;
    switch (method) {
        case 'GET':
            fetch(url)
                .then(response => response.json())
                .then(data => console.log(data));
            break;
        case 'POST':
            const product = {title: args[0], price: args[1], category: args[2]};
            fetch('https://fakestoreapi.com/products', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
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

const [_node, _file, method, type, ...args] = process.argv;
callFakeStoreAPI(method, type, ...args);