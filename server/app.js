const express = require("express");
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config()
const PORT = process.env.PORT;
//const REACT = process.env.REACT_URL;
const NODE = process.env.HOST_URL;
const REACT = process.env.REACT_URL;

const app = express();


//gestione siti che possono fare richieste
app.use(cors({
    origin: [NODE, REACT],
    credentials: true, 
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

app.post("/api/generateQRCode", async (req, res) => {
    const { url, color, bgColor } = req.body;

    // Fai la richiesta alla FastAPI per generare il QR code
    fetch("http://127.0.0.1:8000/api/generateQRCode", {
        method: "POST",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url, color, bgColor })
    })
    .then(async (response) => {
        if (response.ok) {
            // Ottieni il buffer di immagine dalla risposta
            const buffer = await response.arrayBuffer();

            // Imposta correttamente gli header per l'immagine PNG
            res.setHeader("Content-Type", "image/png");

            // Rispondi con il buffer dell'immagine
            res.send(Buffer.from(buffer)); // Invia il buffer come immagine
        } else {
            // Se la FastAPI restituisce un errore
            res.status(response.status).send('Errore dalla FastAPI');
        }
    })
    .catch((error) => {
        console.error("Errore nella chiamata a FastAPI:", error);
        res.status(500).send("Errore interno");
    });
});

app.get('*', (req, res) => { //* for catch all request
    const protocol = req.protocol;
    const host = req.hostname;
    const url = req.originalUrl;
    const port = PORT;

    const fullUrl = `${protocol}://${host}:${port}${url}`;
    
    const responseString = `invalid URL: ${fullUrl}`;
    res.send(`404: not found, ${responseString}`);
});

app.listen(PORT, (error) => {
    if(!error){
        console.log(`Server listening on ${PORT}`);
    }
    else{
        console.log("Server can't start, error: " + error);
    }
});