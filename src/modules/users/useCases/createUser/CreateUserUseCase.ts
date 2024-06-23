import { CreateUserDTOS } from "../../dtos/CreateUserDTOS"
import { prisma } from "../../../../prisma/client"
import { AppError } from "../../../../errors/AppError"

export class CreateUserUseCase {
    async execute({name, email} : CreateUserDTOS) {
        //Verificar usuario
        const userExistente = await prisma.user.findUnique({
            where: {
                email : email
            },
        });

        if (userExistente) {
            throw new AppError("Usuário já existe")
        }
        //Criar usuario
        const user = await prisma.user.create({
            data: {
                name: name,
                email: email,
            },
        });
        return user;
    }
}