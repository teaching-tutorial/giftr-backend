"use strict";

const { Schema, model } = require("mongoose");

const giftModel = new Schema({
  txt: {
    type: String,
    required: true,
  },
  store: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  gifts: [
    {
      type: Schema.Types.ObjectId,
      ref: "gift",
    },
  ],
},{ timestamps: true } );