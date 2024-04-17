import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateManagerReportService } from "../../../services/CreateManagerReportService";

class ManagerCreateController {
  async execute(request: Request, response: Response): Promise<Response> {
    const createManagerReportService = container.resolve(
      CreateManagerReportService
    );

    const manager = await createManagerReportService.execute(request.body);

    return response.status(201).json(manager);
  }
}

export default new ManagerCreateController();
