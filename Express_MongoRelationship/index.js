const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const Product = require('./models/product');
const Farm = require('./models/farm');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/farmStandTake2');
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main()
    .then(() => {
        console.log('Mongo Connected');
    })
    .catch(err => {
        console.log('Error');
        console.log(err);
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Create Farm Routes
app.get('/farms', async (req, res) => {
    const farms = await Farm.find({});
    res.render('farms/index', { farms });
})

app.get('/farms/new', async (req, res) => {
    res.render('farms/new')
})

app.get('/farms/:id', async (req, res) => {
    const farm = await Farm.findById(req.params.id).populate('products');
    res.render('farms/show', { farm });
})

app.delete('/farms/:id', async (req, res) => {
    const result = await Farm.findByIdAndDelete(req.params.id);

    res.redirect('/farms');
})

app.post('/farms', async (req, res) => {
    const farm = new Farm(req.body);
    await farm.save();
    res.redirect('/farms');
})

// add product to farm
app.get('/farms/:id/products/new', async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    res.render('products/new', { categories, farm });
})

app.post('/farms/:id/products', async (req, res) => {
    // const { name, price, category } = req.body;
    // new Product({ name, price, category });
    const { id } = req.params;
    const farm = await Farm.findById(id);
    const product = new Product(req.body);
    // save on both sides
    farm.products.push(product);
    product.farm = farm;
    await farm.save();
    await product.save();
    res.redirect(`/farms/${farm._id}`);
})

// Product Route
const categories = ['fruit', 'vegetables', 'dairy'];

app.get('/products', async (req, res) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category });
        res.render('products/index', { products, category });
    } else {
        const products = await Product.find({});
        res.render('products/index', { products, category: 'All' });
    }
})

app.get('/products/new', (req, res) => {
    res.render('products/new', { categories });
})

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const foundProduct = await Product.findById(id).populate('farm', 'name');
    res.render('products/show', { foundProduct });
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product, categories });
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    res.redirect(`/products/${product._id}`)
})


app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
})

app.listen(3000, () => {
    console.log('Listening on Port 3000');
})