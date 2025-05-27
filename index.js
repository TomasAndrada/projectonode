async function callFakeStoreAPI(method, service, ...args) {
    const url = `https://fakestoreapi.com/${service}`;
    let response;
    try {
        switch (method) {
            case 'GET':
                response = await fetch(url);
                break;
            case 'POST':
                const product = {title: args[0], price: args[1], category: args[2]};
                response = await fetch('https://fakestoreapi.com/products', {
                    method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(product)
                });
                break;
            case 'DELETE':
                response = await fetch(url, {
                    method: 'DELETE'
                })
                break;
            default:
                console.log('Metodo incorrecto');
                return
        }
        if (!response.ok) {
            console.log('Error en fetch');
            return
        }
        console.log(response.ok);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

const [_node, _file, method, type, ...args] = process.argv;
callFakeStoreAPI(method, type, ...args);