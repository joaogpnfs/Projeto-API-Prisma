import { Request, Response } from "express";
import { GetFilmesByReleaseDateUseCase } from "./GetFilmesByReleaseDateUseCase";

export class GetFilmesByReleaseDateController {
  async handle(request: Request, response: Response) {
    const getFilmesByReleaseDateUseCase = new GetFilmesByReleaseDateUseCase();

    const result = await getFilmesByReleaseDateUseCase.execute();

    return response.status(200).json(result);
  }
}