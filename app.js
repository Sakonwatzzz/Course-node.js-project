import express from "express";
import chalk from "chalk";
import createDebug from "debug";
import morgan from "morgan";
import path from "path";
import productsRouter from "./src/router/productsRouter.js";
const debug = createDebug("app");
const app = express();
const port = process.env.PORT; 
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/products", productsRouter);

app.use(morgan("combined"));
app.use(express.static(path.join(process.cwd(), "public")));

app.get("/", (req, res) => {
  res.render("index", {
    username: "Haaaaaaa",
    customers: ["sakon", "Peerapath", "Apidech"],
  });
});

app.listen(port, () => {
  debug("Listening on port " + chalk.cyan(port));
});
