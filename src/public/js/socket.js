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
