import { Filme } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetFilmesByReleaseDateUseCase {
  async execute(): Promise<Filme[]> {
    const filmes = await prisma.filme.findMany({
      orderBy: {
        release_date: "desc",
      },
      include: {
        aluguel_filme: {
          select: {
            user: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });

    return filmes;
  }
}