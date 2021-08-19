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
      // References use the type ObjectId
      type: mongoose.Schema.Types.ObjectId,
      // the name of the model to which they refer
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
)

module.exports = checkSchema
