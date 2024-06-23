import { Request, Response } from "express";
import { CreateAluguelUseCase } from "./CreateAluguelUseCase"

export class CreateAluguelController {
    async handle(request: Request, response: Response) {
        const { filmeId, userId } = request.body;

        const createAluguelUseCase = new CreateAluguelUseCase();

        const result = await createAluguelUseCase.execute({filmeId, userId})

        return response.status(201).json(result)
    }

}