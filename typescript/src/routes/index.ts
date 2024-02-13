import express from "express"
import MarketController from "../controllers/MarketController";

const router = express.Router();

router.get("/product", MarketController.getAllProduct);
router.get("/product/:id", MarketController.getProduct);
router.post("/product", MarketController.createProduct);
router.put("/product/:id", MarketController.updateProduct);
router.delete("/product/:id", MarketController.deleteProduct);

export default router;