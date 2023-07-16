const socket = io();

socket.on("newProduct", (product) => {
    const productList = document.getElementById("list");
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

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    const form = event.currentTarget;
    const url = new URL(form.action);
    const formData = new FormData(form);
    const fetchOptions = {
        method: form.method,
        body: formData
    };
    console.log(form.title.value);
    fetch(url, fetchOptions);
    form.reset();
    event.preventDefault();
}