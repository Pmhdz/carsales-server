const mongoose = require('mongoose')

const checkSchema = new mongoose.Schema(
  {
    miles: {
      type: Number,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    notes: {
      type: String,
      required: true
    },
    checker: {
      // References ObjectId
      type: mongoose.Schema.Types.ObjectId,
      // who is refer to
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
)

module.exports = checkSchema
