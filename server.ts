import express from 'express';

const app = express();

app.get('/*', (_, res) => {
  res.json({ "msg": 'Running from Backend!!!', time: Date.now() })
});

app.listen(8000, () => {
  console.log("App is running on 4000")
})