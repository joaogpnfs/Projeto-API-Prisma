import { CreateAluguelDTO } from "../../dtos/CreateAluguelDTO"
import { prisma } from "../../../../prisma/client"
import { AppError } from "../../../../errors/AppError"

export class CreateAluguelUseCase{
    async execute({ filmeId, userId}: CreateAluguelDTO) :Promise<void> {
        //verificar se filme existe
        const filmeExistente = await prisma.filme.findUnique({
            where: {
                id: filmeId
            }
        })

        if (!filmeExistente) {
            throw new AppError("Filme não existe")
        }

        //verificar se o filme não está alugado
        const aluguelExistente = await prisma.aluguel.findFirst({
            where: {
                filmeId,
            }
        })

        if (aluguelExistente) {
            throw new AppError("Filme já está alugado")
        }
        //verificar se o usuario existe

        const usuarioExistente = await prisma.usuario.findUnique({
            where: {
                id: userId
                }
            })
        
            if (!usuarioExistente) {
                throw new AppError("Usuário não existe")
            }
        //criar a locação

        await prisma.aluguel.create({
            data: {
                filmeId,
                userId,
            }
        })
    }
}