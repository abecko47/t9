import express from 'express';

const app = express();
const port = 3001;

app.get('/aaa', (req, res) => {
  res.json({ foo: 'zzasdasdzz' })
});

app.listen(port, () => {

});
