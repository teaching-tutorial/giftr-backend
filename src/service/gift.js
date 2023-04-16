"use strict";

const Gift = require("../model/gift");
const { BadRequestError, NotFoundError } = require("../utils/errors");

const getAll = async () => {
  return await Gift.find();
};

const getOne = async (id) => {
  const foundGift = await Gift.findById(id);
  if (!foundGift) throw new NotFoundError(`Gift with id ${id} not found`);
  return foundGift;
};

const create = async (gift) => {
  const newGift = new Gift({ ...gift });
  await newGift.save();
  return newGift;
};

const replace = async (id, giftData) => {
  if (!giftData.name || !giftData.dob)
    throw new BadRequestError("Name, dob and Abilities are required");

  const replacedGift = await Gift.findByIdAndUpdate(
    id,
    {
      ...giftData,
    },
    {
      returnOriginal: false,
    }
  );

  if (!replacedGift)
    throw new NotFoundError(`Gift with id ${id} not found`);

  return replacedGift;
};

const update = async (id, updatedFields) => {
  if (!Object.keys(updatedFields).length)
    throw new BadRequestError("Nothing to update");
  const updatedGift = await Gift.findByIdAndUpdate(
    id,
    {
      ...updatedFields,
    },
    {
      returnOriginal: false,
    }
  );

  if (!updatedGift)
    throw new NotFoundError(`Pokemon with id ${id} not found`);

  return updatedGift;
};

const deleteOne = async (id) => {
  const deletedGift = await Gift.findByIdAndDelete(id);

  if (!deletedGift)
    throw new NotFoundError(`Pokemon with id ${id} not found`);

  return deletedGift;
};

module.exports = {
  getAll,
  getOne,
  create,
  replace,
  update,
  deleteOne,
};