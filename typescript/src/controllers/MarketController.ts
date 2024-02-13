import express, { response } from 'express';
import { ProductModel } from '../db/ProductModel';

class MarketController{
    // Read List
    getAllProduct = async (req: express.Request, res: express.Response) => {
        try{
            const products = await ProductModel.find();
            return res.sendStatus(200).json({data: products});
        } catch (error) {
            return res.sendStatus(400);
        }
    }

    // Read
    getProduct = async (req: express.Request, res: express.Response) => {
        try{
            const {id} = req.params;
            const product = await ProductModel.findById(id);
            return res.sendStatus(200).json({data: product});
        } catch (error) {
            return res.sendStatus(400);
        }
    }

    // Create
    createProduct = async (req: express.Request, res: express.Response) => {
        try {
            const {name, quantity, price, image} = req.body;
            const product = new ProductModel({
                name,
                quantity,
                price,
                image
            });
            await product.save();
            return res.status(201).json({message: "Created", data: product});
        } catch (error) {
            return res.status(400);
        }
    }

    // Update
    updateProduct = async (req: express.Request, res: express.Response) => {
        try {
            const {id} = req.params;
            const {name, quantity, price, image} = req.body;

            const product = await ProductModel.findById(id);
            if(!product) {
                return res
                .sendStatus(404)
                .json({ message: `cannot find any product with ID ${id}` });
            }
            product.name = name;
            product.quantity = quantity;
            product.price = price;
            product.image = image;

            await product.save();
            return res.status(200).json({message:"Product Updated", data: product});
        } catch (error) {
            return res.sendStatus(400);
        }
    }

    // Delete
    deleteProduct = async (req: express.Request, res: express.Response) => {
        try {
            const {id} = req.params;
            await ProductModel.findByIdAndDelete({_id: id});
            return response.status(200).json({message: "Product Deleted"});
        } catch (error) {
            return res.sendStatus(400);
        }
    }
}

export default new MarketController;