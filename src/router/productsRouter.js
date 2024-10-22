import express from "express";

import products from "../data/products.json" assert { type: "json" };
const productsRouter = express.Router();

productsRouter.route("/").get((req, res) => {
    res.render("products", { products });
  });
  productsRouter.route("/:id").get((req, res) => {
    const id = req.params.id;
    res.render("product", {
      product: products[id],
    });
  });

  export default productsRouter;
  