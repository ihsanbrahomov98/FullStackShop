import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      requeired: true,
    },
    name: {
      type: String,
      requeired: true,
    },
    img: {
      type: String,
    },
    description: {
      type: String,
      requeired: true,
    },
    color: {
      type: String,
    },
    size: [
      {
        type: String,
      },
    ],
    price: {
      type: Number,
    },
    quantityLeft: {
      type: Number,
    },
    category: {
      type: String,
      requeired: true,
    },
  },

  { timestamps: true }
);

export default mongoose.model('Product', productSchema);
