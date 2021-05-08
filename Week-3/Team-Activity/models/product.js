const fetch = require('node-fetch');
const path = require('path');


module.exports = class Product {
    
    constructor(tags, imageUrl, name, description, price) {
        // Creting a property in the class
        this.tags = tags;
        this.imageUrl = imageUrl;
        this.name = name; 
        this.description = description;
        this.price = price;
    }

    // Retrive data
    static fetchAll() {
        const url = 'https://byui-cse.github.io/cse341-course/lesson03/items.json';
        let settings = { method: "Get" };

        fetch(url, settings)
            .then(res => res.json())
            .then((json) => {
                // console.log(json);
                return json;
            });
    }
}