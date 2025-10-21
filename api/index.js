import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let images = []; // stores image URLs globally in memory

app.get("/images", (req, res) => {
  res.json(images);
});

app.post("/upload", (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: "Missing URL" });
  images.push(url);
  res.json({ success: true });
});

app.listen(3000, () => console.log("API running on port 3000"));
