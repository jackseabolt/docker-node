import express from 'express'; 
import cors from 'cors'; 

const app = express(); 

app.use(cors({
    origin: '*', // Allow all origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // Allow specific methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
    credentials: true, // Allow credentials
})); 

app.get('/test', (req, res) => {
    return res.json({ 
        status: 'success'
    })
}); 

app.listen(5001, () => {
    console.log('App listening on 5001')
}); 