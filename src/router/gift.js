const { Router } = require("express");
const GiftController = require("../controller/gift");
const isAuthenticated = require("../middleware/isAuthenticated");

giftRouter = Router();
giftRouter.get("/api/people/:id/gifts", GiftController.getAll);
giftRouter.get("/:id", GiftController.getOne);
giftRouter.use(isAuthenticated);
giftRouter.post("/", GiftController.create);
giftRouter.put("/:id", GiftController.replace);
giftRouter.patch("/:id", GiftController.update);
giftRouter.delete("/:id", GiftController.deleteOne);

module.exports = giftRouter;