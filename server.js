const express = require("express");

const app = express();

app.get('/api/ui8', (req, res) => {
    const products = [
        {id: 1, name: "Movie UI Kit", price: "$28"},
        {id: 2, name: "Finance Illustration Pack", price: "$18"},
        {id: 3, name: "Finance UI Kit", price: "$38"}
    ]

    res.json(products);
});

const port = 5001;

app.listen(port, () => console.log(`Server started on ${port}`));

