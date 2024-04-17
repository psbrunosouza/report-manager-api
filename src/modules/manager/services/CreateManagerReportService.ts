import handlebars from "handlebars";
import puppeteer from "puppeteer";
import { IManagerDTO, IManagerReportBufferDTO } from "../dto/IManagerDTO";

export class CreateManagerReportService {
  async execute(manager: IManagerDTO): Promise<IManagerReportBufferDTO> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const compile = handlebars.compile(manager.html);

    const html = compile(manager.data);

    page.setContent(html);

    const pdfBuffer = await page.pdf({ format: "Letter" });
    const base64PDF = Buffer.from(pdfBuffer).toString("base64");

    await browser.close();

    return {
      base64PDF: base64PDF,
      fileName: "invoice.pdf",
    };
  }
}
