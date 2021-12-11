const express = require('express');
const app = express();
const port = 3001;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const retrieveData = async () => {

    let data = [
        {
            id: 1,
            name: 'john',
            age: 22
        },
        {
            id: 2,
            name: 'smith',
            age: 30
        },
        {
            id: 3,
            name: 'arlene',
            age: 44
        }
    ];
    return data;

};
app.get('/users', async (req, res, next) => {
    const data = await retrieveData();
    res.json(data);
});

app.get('/users/:id', async (req, res, next) => {
    const data = await retrieveData();
    const filteredData = data.filter(({ id }) => {
        return +id === +req.params.id
    }
    );
    if (filteredData.length === 0) next(`User with id: ${req.params.id} not found`);
    res.json(filteredData);

});

app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
});