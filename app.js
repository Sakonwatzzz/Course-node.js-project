import express from 'express';
import chalk from 'chalk';
import createDebug from 'debug'
import morgan from 'morgan';
import path  from 'path';

const debug = createDebug('app');
const app = express();
const port = process.env.PORT;  // ลองใช้พอร์ต 3001 หาก 3000 ถูกใช้งาน

app.use(morgan('combined'));
app.use(express.static(path.join(process.cwd(), "public")));

    app.get('/', (req, res) => {
    res.send('Welcome asdadwadad');
});

app.listen(port, () => {
    debug("Listening on port " + chalk.cyan(port));
  });