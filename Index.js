import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;
  res.json({ reply: "Halo dari proxy!" });
});

app.listen(3000, () => {
  console.log('Server berjalan di port 3000');
});
