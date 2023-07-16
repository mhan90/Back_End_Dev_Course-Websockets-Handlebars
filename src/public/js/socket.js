const socket = io();

socket.on("newProduct", (product) => {
    let productList = document.getElementById("list");
    productList.innerHTML +=
        `<div id="${product.id}">`
        + "<ul>"
        + `<li><b>id: </b>${product.id}</li>`
        + `<li><b>title: </b>${product.title}</li>`
        + `<li><b>description: </b>${product.description}</li>`
        + `<li><b>price: </b>${product.price}</li>`
        + `<li><b>thumbnails: </b>${product.thumbnails}</li>`
        + `<li><b>code: </b>${product.code}</li>`
        + `<li><b>stock: </b>${product.stock}</li>`
        + `<li><b>category: </b>${product.category}</li>`
        + `<li><b>status: </b>${product.status}</li>`
        + `<button onclick="deleteProduct(${product.id})">delete</button>`
        + "</ul>"
        + "<div>";
});

socket.on("deleteProduct", (id) => {
    const product = document.getElementById(id);
    product.remove();
});

const deleteProduct = async (id) => {
    try {
        const response = await fetch(`http://localhost:8080/realTimeProducts/${id}`, { method: "DELETE" })
        console.log(response);
    } catch (e) {
        console.log(e);
    }
}

const addProduct = async () => {
    try {
        event.preventDefault();
        const _title = document.getElementById("title");
        const _description = document.getElementById("description");
        const _price = document.getElementById("price");
        const _code = document.getElementById("code");
        const _stock = document.getElementById("stock");
        const _category = document.getElementById("category");
        const _status = document.getElementById("status");
        const product = {
            title: _title.value,
            description: _description.value,
            price: _price.value,
            code: _code.value,
            stock: _stock.value,
            category: _category.value,
            status: _status.value
        }
        const request = {
            method: "POST",
            body: JSON.stringify(product),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        }
        const response = await fetch("http://localhost:8080/realTimeProducts", request);
        console.log(response);
        _title.value = "";
        _description.value = "";
        _price.value = "";
        _code.value = "";
        _stock.value = "";
        _category.value = "";
        _status.value = "";
    } catch (e) {
        console.log(e);
    }
}