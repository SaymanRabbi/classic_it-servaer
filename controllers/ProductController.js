const ProductModel = require("../models/ProductModel");

exports.CreteProductController = async (req, res) => {
    try {
        const product = await ProductModel.create(req.body);
        res.status(201).json({
            success: true,
            product
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        }) 
    }
}
exports.GetProductController = async (req, res) => {
    try {
        const product = await ProductModel.find();
        if(!product){
            return res.status(404).json({
                success: false,
                message: "Product not found"
            }) 
        }
        res.status(201).json({
            success: true,
            product
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        }) 
    }
}