const express = require("express");
const { getUser, createUser } = require("../controllers/userController");
const Router = express.Router();

Router.get("/", getUser);

Router.post("/", createUser);


module.exports = Router;