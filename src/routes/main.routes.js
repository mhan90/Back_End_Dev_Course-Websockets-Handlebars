import { Router } from "express";
import ProductManager from "../ProductManager.js";
const mainRouter = Router();
const pManager = new ProductManager("products");

mainRouter.get("/", async (req, res) => {
    try {
        const _products = await pManager.getProducts();
        res.render("home", { title: "Products list", products: _products });
    } catch (e) {
        res.status(502).send({ status: "error", error: e });
    }
});

export default mainRouter;
