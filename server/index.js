const express = require('express');
const cors = require('cors');
const path = require("path");


const app = express();

app.use(cors());

const port = 3000

const categories = [
    { id: 1, title: 'Fish' },
    { id: 2, title: 'Vegetables' },
    { id: 3, title: 'Meat' }
];

const products = [
    {
        id: 1,
        dish: " Sunset",
        image: "/image/1.jpg",
        ingredients: "batat, avocado, batat chips, salmon gril",
        price: 38,
    },

    {
        id: 2,
        dish: " Tokio",
        image: " /image/2.jpg",
        ingredients: "cucumber, avocado, tuna, iritis, salmon",
        price: 39,
    },
    {
        id: 3,
        dish: " Dragon",
        image: " /image/3.jpg",
        ingredients: "cucumber, avocado, shrips, iritis, eel",
        price: 40,
    },
    {
        id: 4,
        dish: " Alaska ",
        image: " /image/4.jpg",
        ingredients: "shrimps, salmon, cucumber, cream cheese, avocado",
        price: 39,
    },
    {
        id: 5,
        dish: " Dynamite",
        image: " /image/5.jpg",
        ingredients: "cucumber, avocado, salmon gril, kolraby",
        price: 38,
    },
    {
        id: 6,
        dish: " Philadelphia",
        image: " /image/6.jpg",
        ingredients: "csalmon, cucumber, cream cheese, avocado, onion",
        price: 39,
    },
    {
        id: 7,
        dish: " California",
        image: " /image/7.jpg",
        ingredients: "cucumber, avocado, shrimps, tobiko, salmon",
        price: 39,
    },
    {
        id: 8,
        dish: " Canada",
        image: "/image/8.jpg",
        ingredients: "cucumber, cream cheese, avocado, tuna,shrimps, salmon",
        price: 40,
    },
    {
        id: 9,
        dish: "Green",
        image: " /image/9.jpg",
        ingredients: "cucumber, avocado, tuna, iritis, salmon",
        price: 39,
    },
    {
        id: 10,
        dish: " Samurai",
        image: " /image/10.jpg",
        ingredients: "cucumber, avocado, salmon, salmon caviar, cream cheese",
        price: 29,
    },
    {
        id: 11,
        dish: " Yasay",
        image: " /image/11.jpg",
        ingredients: "cucumber, pepper, avocado, batata, carrots, ",
        price: 37,
    },
    {
        id: 12,
        dish: "Rio ",
        image: " /image/12.jpg",
        ingredients: "cucumber, pepper, avocado, batata, tomago, irit",
        price: 40,
    },
    {
        id: 13,
        dish: "Vegi-B",
        image: " /image/13.jpg",
        ingredients: "cucumber, carrots, avocado, batata, tomago",
        price: 39,
    },
    {
        id: 14,
        dish: " Vegi-A",
        image: " /image/14.jpg",
        ingredients: "cucumber, carrots, avocado, batata, tomago",
        price: 39,
    },
    {
        id: 15,
        dish: " Sushi-Gunkani",
        image: " /image/15.jpg",
        ingredients: "eel, shrimp, salmon, tuna",
        price: 29,
    },
    {
        id: 16,
        dish: " Sushi-Nigiri",
        image: " /image/16.jpg",
        ingredients: "eel, shrimp, tomago, salmon, tuna",
        price: 29,
    },

];


app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});


app.get('/categories', (req, res) => {
    res.json(categories);
})

app.get('/products', (req, res) => {
    let categoryId = req.query.category;

    let items;

    if (categoryId) {
        items = products.filter(i => +i.categoryId === +categoryId);
    }
    else {
        items = products;
    }
    res.json(items);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})