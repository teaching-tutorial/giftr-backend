const { Router } = require("express");
const PersonController = require("../controller/person");
const isAuthenticated = require('../middleware/isAuthenticated');

personRouter = Router();
personRouter.get("/", PersonController.getAll);
personRouter.get("/:id", PersonController.getOne);
//personRouter.use(isAuthenticated)
personRouter.post("/", PersonController.create);
personRouter.put("/:id", PersonController.replace);
personRouter.patch("/:id", PersonController.update);
personRouter.delete("/:id", PersonController.deleteOne);

module.exports = personRouter;