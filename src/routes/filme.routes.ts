import { Router } from "express"
import { CreateFilmeController } from "../modules/filmes/useCases/createFilme/CreateFilmeController"
import { CreateAluguelController } from "../modules/filmes/useCases/createAluguelFilme/CreateAluguelController"
import { GetFilmesByReleaseDateController } from "../modules/filmes/useCases/getFilmesByReleaseDate/GetFilmesByReleaseDateController"

const createFilmeController = new CreateFilmeController()
const createAluguelController = new CreateAluguelController()
const getFilmesByReleaseDateController = new GetFilmesByReleaseDateController()

const filmeRoutes = Router()

filmeRoutes.post("/", createFilmeController.handle )
filmeRoutes.get("/release", getFilmesByReleaseDateController.handle )
filmeRoutes.post("/aluguel", createAluguelController.handle)

export { filmeRoutes }