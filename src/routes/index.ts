import { Router } from "express"
import { userRoutes } from "./user.routes"
import { filmeRoutes } from "./filme.routes"

const routes = Router()

routes.use("/users", userRoutes)
routes.use("/filmes", filmeRoutes)

export { routes }