import { Schema, model } from "mongoose";

const storageSchema = new Schema(
  {
    url:{
      type: String
    },
    filename:{
      type: String
    }
  },
  {
    timestamps: true, 
    versionKey: false
  }
)

export default model('Storage', storageSchema);