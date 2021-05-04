const products = [];

const fs = require('fs');
const path = require('path');
const p = path.join(path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);

const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return cb([]);
        }
        cb(JSON.parse(fileContent));
    });
};

module.exports = class Product {
    // Creting
    constructor(title, imageUrl, description, price) {
        // Creting a property in the class
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    // Save
    save() {
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
        // products.push(this);
    }

    // Retrive data
    static fetchAll(cb) {
        getProductsFromFile(cb);
        // return products;
    }
}