import express from 'express';
import routes from './routes/index';

const app = express();
const port = 3000;

app.use('/api', routes);
app.use(express.static(__dirname + '/views'));

app.get('/', function (req, res) {
  res.sendFile('views/welcome.html', { root: __dirname });
});
app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});
