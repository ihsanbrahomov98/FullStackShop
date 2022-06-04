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
    },
  },

  { timestamps: true }
);

export default mongoose.model('Product', productSchema);
