const mongoose = require('mongoose')

const checkSchema = require('./check')

const carSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true
    },
    model: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    // owner: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User',
    //   required: true
    // }
    // Add a `reviews` subdocument array of type reviewSchema
    checks: [checkSchema],
    // Add a `restaurants` subdocument array of Restaurant references
    cars: [
      {
      // the type of a reference is an ObjectId
        type: mongoose.Schema.Types.ObjectId,
        // the type of the document. the model to use when populate is called
        ref: 'Customer'
      }
    ],
    owner: {
    // References use the type ObjectId
      type: mongoose.Schema.Types.ObjectId,
      // the name of the model to which they refer
      ref: 'User'
    }

  }, {
    timestamps: true
  }
)

module.exports = mongoose.model('Car', carSchema)
