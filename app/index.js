import express from 'express';
import router from './routes/api.js';

const PORT = 8000;

const app = new express();

app.use('/api', router);

app.use(express.json());

app.listen(PORT, () => {
    console.log('Server is running on PORT:', PORT);
});
