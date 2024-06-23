import { Request, Response } from "express";
import { CreateFilmeUseCase } from "./CreateFilmeUseCase"

export class CreateFilmeController {
    async handle(request: Request, response: Response) {
        const { title, duration, release_date } = request.body;

        const createFilmeUseCase = new CreateFilmeUseCase();

        const result = await createFilmeUseCase.execute({title, duration, release_date})

        return response.status(201).json(result)
    }

}