const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Cart = new Schema(
  {
    customerId: String,
    items: [
      {
        product: {
          _id: { type: String, require: true },
          name: { type: String },
          banner: { type: String },
          type: { type: String },
          description: { type: String },
          price: { type: Number },
          unit: { type: Number },
          supplier: { type: String },
        },
        unit: { type: Number, require: true },
      },
    ],
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

module.exports = mongoose.model("cart", Cart);
