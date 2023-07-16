const socket = io();

socket.on("newProduct", (product) => {
    let productList = document.getElementById("list");
    productList.innerHTML +=
        "<div>"
        + "<ul>"
        + "<li><b>id: </b>" + product.id + "</li>"
        + "<li><b>title: </b>" + product.title + "</li>"
        + "<li><b>description: </b>" + product.description + "</li>"
        + "<li><b>price: </b>" + product.price + "</li>"
        + "<li><b>thumbnails: </b>" + product.thumbnails + "</li>"
        + "<li><b>code: </b>" + product.code + "</li>"
        + "<li><b>stock: </b>" + product.stock + "</li>"
        + "<li><b>category: </b>" + product.category + "</li>"
        + "<li><b>status: </b>" + product.status + "</li>"
        + "</ul>"
        + "<div>";
});

socket.on("deleteProduct", (id) => {
    const product = document.getElementById(id);
    product.remove();
});

const deleteProduct = async (id) => {
    // socket.emit("deleteProduct", id);
    try {
        const response = await fetch(`http://localhost:8080/realTimeProducts/${id}`, { method: "DELETE" })
        console.log(response);
    } catch (e) {
        console.log(e);
    }

}