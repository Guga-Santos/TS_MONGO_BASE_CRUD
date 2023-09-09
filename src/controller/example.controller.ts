import { Request, Response } from 'express';
import { IExample } from '../interfaces/IExample';
import IService from '../interfaces/IService';

export default class ExampleController {
  constructor(private _service: IService<IExample>) {};

  public async create(req: Request, res: Response) {
    throw new Error("Method not implemented.");
  }
  public async read(req: Request, res: Response) {
    throw new Error("Method not implemented.");
  }
  public async readOne(req: Request, res: Response) {
    throw new Error("Method not implemented.");
  }
  public async update(req: Request, res: Response) {
    throw new Error("Method not implemented.");
  }
  public async delete(req: Request, res: Response) {
    throw new Error("Method not implemented.");
  }
}