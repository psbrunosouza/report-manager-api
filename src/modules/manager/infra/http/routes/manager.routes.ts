import { Router } from "express";
import ManagerCreateController from "../controllers/ManagerCreateController";

const managerRoutes = Router();

managerRoutes.post("/", ManagerCreateController.execute);

export default managerRoutes;
