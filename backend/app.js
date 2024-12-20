import express from 'express';
const app = express();
import cors from 'cors';
app.use(cors());

const PORT = process.env.PORT || 5000;
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export default  app;