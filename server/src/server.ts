import  express from 'express';

const app = express()

app.get('/ads', (request, response) => {
    return response.json([
        {id: 1, name: 'Aaa'}
    ])
})

app.listen(3333)