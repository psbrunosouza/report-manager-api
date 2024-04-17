import { Router } from "express";
import managerRoutes from "../../../../modules/manager/infra/http/routes/manager.routes";

const routes = Router();

routes.use("/manager", managerRoutes);

export default routes;
