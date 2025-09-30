import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors()); // permite que o frontend (Vue) acesse a API

// Rota para buscar informações de um país
app.get("/country/:name", async (req, res) => {
  const { name } = req.params;

  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${name}?fullText=true`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar dados do país" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});