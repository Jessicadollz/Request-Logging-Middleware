import express from "express";
import morgan from "morgan";
import { requestLogger } from "./requestLogger.js"; 

const app = express();
const port = process.env.PORT || 3000;

// Use the requestLogger middleware globally
app.use(requestLogger);

app.get("/", (req, res) => {
    res.status(200).send("Hello, World!");
});

app.post('/abc', (req, res) => {
    res.sendStatus(404);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
