const { Schema, model } = require('mongoose')

const ProductSchema = new Schema({
    name: String,
    url_image: String,
    price: Number,
    discount: Number,
    category: String
})

module.exports = model("Product", ProductSchema);