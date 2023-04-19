const { Router } = require("express");
const PersonController = require("../controller/person");
const GiftController = require("../controller/gift");
const isAuthenticated = require('../middleware/isAuthenticated');

personRouter = Router();
personRouter.use(isAuthenticated);
personRouter.get("/", PersonController.getAll);
personRouter.get("/:id", PersonController.getOne);
personRouter.post("/", PersonController.create);
personRouter.put("/:id", PersonController.replace);
personRouter.patch("/:id", PersonController.update);
personRouter.delete("/:id", PersonController.deleteOne);

// personRouter.get("/:id/gifts", GiftController.getAll);
// personRouter.get("/:id/gifts/:gid", GiftController.getById);
module.exports = personRouter;