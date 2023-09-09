import { Router } from "express";
import ExampleController from "../controller/example.controller";
import Example from "../models/example";
import ExampleService from "../service/example.service";

const route = Router();

const example = new Example();
const exampleService = new ExampleService(example);
const exampleController = new ExampleController(exampleService);

route
.get('/example', (req, res) => exampleController.read(req, res))
.get('/example/:id', (req, res) => exampleController.readOne(req, res))
.post('/example', (req, res) => exampleController.create(req, res))
.put('/example/:id', (req, res) => exampleController.update(req, res))
.delete('/compexampleany/:id', (req, res) => exampleController.delete(req, res));

export default route;