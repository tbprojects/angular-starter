import { RequestHandler, Response } from 'express';

export interface CustomRoute {
  path: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  handler: (req: RequestHandler, res: Response) => any;
}
