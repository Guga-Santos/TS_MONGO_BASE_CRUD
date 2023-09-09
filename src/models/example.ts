import { model as mongooseCreateModel, Schema } from "mongoose";
import { IExample } from "../interfaces/IExample";
import MongoModel from "./MongoModel";

const exampleMongooseSchema = new Schema<IExample>({
  name: String,
  email: String,
}, { versionKey: false })

class Example extends MongoModel<IExample> {
  constructor(model = mongooseCreateModel('Example', exampleMongooseSchema)) {
    super(model);
  }
}

export default Example;