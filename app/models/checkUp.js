const mongoose = require('mongoose')

const carSchema = require('./car')

const checkUpSchema = new mongoose.Schema(
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
    // Add a `reviews` subdocument array of type reviewSchema
    cars: [carSchema],
    // Add a `restaurants` subdocument array of Restaurant references
    owners: [
      {
        // the type of a reference is an ObjectId
        type: mongoose.Schema.Types.ObjectId,
        // the type of the document. the model to use when populate is called
        ref: 'owners'
      }
    ],
    owner: {
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

module.exports = mongoose.model('CheckUp', checkUpSchema)
