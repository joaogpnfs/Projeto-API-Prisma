import { Request, Response } from "express";
import { GetAllUsersUseCase } from "./GetAllUsersUseCase"

export class GetAllUsersController {
    async handle(request: Request, response: Response) {

        const getAllUsersUseCase = new GetAllUsersUseCase();

        const result = await getAllUsersUseCase.execute();

        return response.status(201).json(result)
    }

}