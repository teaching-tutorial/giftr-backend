const GiftService = require("../service/gift");

const getAll = async (_req, res, next) => {
  try {
    const gift = await GiftService.getAll();
    res.json({ data: gift });
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res, next) => {
  try {
    const gift = await GiftService.getOne(req.params.gid);
    res.json({ data: gift });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const body = req.sanitizedBody;
    const createdGift = await GiftService.create(body);
    res.status(201).json({ data: createdGift });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const updatedGift = await GiftService.update(
      req.params.gid,
      req.sanitizedBody
    );

    res.json({ data: updatedGift });
  } catch (error) {
    next(error);
  }
};

const deleteOne = async (req, res, next) => {
  try {
    const deletedGift = await GiftService.deleteOne(req.params.gid);
    res.json({ data: deletedGift });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  deleteOne,
};