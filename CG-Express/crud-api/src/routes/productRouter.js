import{Router} from 'express';
import productController from "../controllers/productController.js";
const productRouter = Router();

productRouter.get('/products', productController.findAll);
productRouter.post('/products', productController.add);
productRouter.get('/add', productController.showAddForm);

export default productRouter;
