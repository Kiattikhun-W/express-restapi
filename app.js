import express from 'express';
import routes from "./routes/index.js";

const app = express();

app.use('/', routes);

app.use((error, req, res, next) => {
    const status = error.statusCode ?? 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});