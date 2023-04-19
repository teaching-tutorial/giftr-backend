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
// personRouter.post("/:id/gifts", GiftController.create);
// personRouter.patch("/:id/gifts/:gid", GiftController.update);
// personRouter.delete("/:id/gifts/:gid", GiftController.deleteOne);
module.exports = personRouter;