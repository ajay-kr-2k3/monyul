import type { Request, Response } from 'express';
import { createApp } from '../src/main.js';

let handler: any;

async function getHandler() {
  if (!handler) {
    const app = await createApp();
    handler = app.getHttpAdapter().getInstance();
  }

  return handler;
}

export default async function apiHandler(
  req: Request,
  res: Response,
) {
  const appHandler = await getHandler();
  return appHandler(req, res);
}