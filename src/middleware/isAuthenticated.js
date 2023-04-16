"use strict";

const jwt = require("jsonwebtoken");
const User = require("../model/user");
const { UnauthorizedError, NotFoundError } = require("../utils/errors");

const isAuthenticated = async (req, res, next) => {
  //get the token from the headers
  console.log(req.headers);
  const rawToken = req.headers.authorization;
  const token = rawToken.replace("Bearer ", "");

  try {
    //verify the token
    const { id } = jwt.verify(token, process.env.JWT_SECRET);

    //look up the user
    const user = await User.findById(id);
    if (!user) {
      throw new NotFoundError(`User with ${id} not found`);
    }
    //attach the user to the request
    req.user = user;
    next();
  } catch (error) {
    next(new UnauthorizedError(error.message));
  }
  //attach the user to the request
};

module.exports = isAuthenticated;
