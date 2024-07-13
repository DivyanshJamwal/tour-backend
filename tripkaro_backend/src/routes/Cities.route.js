const express = require("express");
const {CreateNewCity, GetAllCity : GetAllCityController, DeleteCityByIdController} = require("./../controller/Cities.controller")
const {Authorization} = require("./../middlewares/authorization.middleware")

const CitiesRouter = express.Router();

CitiesRouter.get("/all", GetAllCityController)

CitiesRouter.post("/add", Authorization(['admin']), CreateNewCity);

CitiesRouter.delete("/delete", Authorization(['admin']), DeleteCityByIdController);

module.exports = CitiesRouter;