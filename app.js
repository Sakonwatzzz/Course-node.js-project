import express from 'express';
import chalk from 'chalk';
import createDebug from 'debug'
import morgan from 'morgan';


const debug = createDebug('app')
const app = express();
const port = process.env.PORT || 3000;  // ลองใช้พอร์ต 3001 หาก 3000 ถูกใช้งาน

app.use(morgan('combined'));

    app.get('/', (req, res) => {
    res.send('Welcome ');
});

app.listen(port, () => {
    debug("Listening on port " + chalk.cyan(port));
  });