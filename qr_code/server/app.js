const express = require("express");
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config()
const PORT = process.env.PORT;
//const REACT = process.env.REACT_URL;
const NODE = process.env.HOST_URL;

const app = express();


//gestione siti che possono fare richieste
app.use(cors({
    origin: [NODE],
    credentials: true, 
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.get("qrcode_generator", (req, res) => {
    
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