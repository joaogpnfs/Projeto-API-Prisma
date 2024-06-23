import { CreateFilmeDTO } from "../../dtos/CreateFilmeDTO"
import { prisma } from "../../../../prisma/client"
import { AppError } from "../../../../errors/AppError"
import { Filme } from "@prisma/client"

export class CreateFilmeUseCase {
    async execute({title, duration, release_date} : CreateFilmeDTO): Promise<Filme> {
        //Verificar se filme existe
        const filmeExistente = await prisma.filme.findUnique({
            where: {
                title,
            },
        });

        if (filmeExistente) {
            throw new AppError("Filme já existe")
        }
        //Cria filme
        const filme = await prisma.user.create({
            data: {
                title: title,
                duration: duration,
                release_date: release_date
            },
        });
        return filme;
    }
}