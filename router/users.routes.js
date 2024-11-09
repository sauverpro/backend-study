import express from "express"
import { createUser, deleteUser, getAllUsers, getUserById, updateUserById } from "../controller/user.controller"

const usersRoutes = express.Router()

usersRoutes.get("/users", getAllUsers)
usersRoutes.get("/users/:id", getUserById)
usersRoutes.post("/users/add", createUser)
usersRoutes.patch("/users/update/:id", updateUserById)
usersRoutes.delete("/users/delete/:id", deleteUser)
export default usersRoutes;