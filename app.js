import express from 'express';
import chalk from 'chalk';
import createDebug from 'debug'
import morgan from 'morgan';
import path  from 'path';

const productRouter = express.Router();

const debug = createDebug('app');
const app = express();
const port = process.env.PORT;  // ลองใช้พอร์ต 3001 หาก 3000 ถูกใช้งาน

app.set("views","./src/views");
app.set('view engine','ejs');

productRouter.route("/").get((req, res) => {
    res.render('products',{
        products:[
        {productTitle:"Course node.js" ,productDescription:"Course description", productPrice:999},
        {productTitle:"Course node.js 2" ,productDescription:"Course description", productPrice:4245},
        {productTitle:"Course node.js 3" ,productDescription:"Course description", productPrice:6353},
        {productTitle:"Course node.js 4" ,productDescription:"Course description", productPrice:3773},
        {productTitle:"Course node.js 5" ,productDescription:"Course description", productPrice:2225},
        ],
    });
});
productRouter.route('/1').get((req, res) => {
    res.send('Hello i am product one')
});

app.use("/products",productRouter)

app.use(morgan('combined'));
app.use(express.static(path.join(process.cwd(), "public")));

    app.get('/', (req, res) => {
    res.render('index',{username: "Haaaaaaa" ,customers:['sakon','Peerapath','Apidech']});
});

app.listen(port, () => {
    debug("Listening on port " + chalk.cyan(port));
  });