import express from 'express';
const app = express();
app.get('/ads', (request, response) => {
    return response.json('Acessou Ads!');
});
app.listen(3333);
