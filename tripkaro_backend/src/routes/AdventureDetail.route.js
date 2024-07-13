const express = require("express");

const { SaveNewAdventureDetail, GetAdventureDetails } = require("../controller/AdventureDetail.controller");

const {Authorization} = require("./../middlewares/authorization.middleware")

const AdventureDetailRouter = express.Router();

AdventureDetailRouter.get("/", GetAdventureDetails)

AdventureDetailRouter.post('/add', Authorization(['admin']), SaveNewAdventureDetail)

// AdventureDetailRouter.delete("/delete", DeleteAdventureByIdController)

module.exports = AdventureDetailRouter;