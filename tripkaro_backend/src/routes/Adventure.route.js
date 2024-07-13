const express = require("express")

const {AddNewAdventureController, GetAllAdventureController, DeleteAdventureByIdController} = require("./../controller/Adventure.controller")

const {Authorization} = require("./../middlewares/authorization.middleware")

const AdventureRouter = express.Router();

AdventureRouter.get("/", GetAllAdventureController)

AdventureRouter.post("/add", Authorization(['admin']), AddNewAdventureController)

AdventureRouter.delete("/delete",Authorization(['admin']), DeleteAdventureByIdController)

module.exports = AdventureRouter;