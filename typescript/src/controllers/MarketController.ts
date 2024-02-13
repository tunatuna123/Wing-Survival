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
            return res.status(200).json({message: "Created", data: product});
        } catch (error) {
            return res.status(400);
        }
    }
}