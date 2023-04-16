const { Schema, model } = require("mongoose");

const personSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    // required: true,
  },
  gifts:[
    {
      type: Schema.Types.ObjectId,
      ref: "gift",
    },
  ],
},
{ timestamps: true });

module.exports = model("person", personSchema);
