import { IExample } from "../interfaces/IExample";
import { IModel } from "../interfaces/IModel";
import IService from "../interfaces/IService";

class ExampleService implements IService<IExample> {
  private _example:IModel<IExample>;

  constructor(model: IModel<IExample>) {
    this._example = model;
  }
  create(obj: unknown): Promise<IExample> {
    throw new Error("Method not implemented.");
  }
  read(): Promise<IExample[] | null> {
    throw new Error("Method not implemented.");
  }
  readOne(_id: string): Promise<IExample> {
    throw new Error("Method not implemented.");
  }
  update(_id: string, obj: Partial<IExample>): Promise<IExample | null> {
    throw new Error("Method not implemented.");
  }
  delete(_id: string): Promise<IExample | null> {
    throw new Error("Method not implemented.");
  }
}