import { Request, Response } from 'express';
import fs from 'fs';

export const readPartialFile = (req: Request, res: Response) => {
  const path = req.body.path;
  const customer = path.slice(1, 10);
  let fullPath = '';

  //Check customer since the file dir includes their name which is not in db
  if (customer === 'CustomerA') {
    fullPath = `../web_hw_files${path.slice(0, 10)}/Flange${path.slice(10)}`;
  } else {
    fullPath = `../web_hw_files${path.slice(0, 10)}/Stiffener${path.slice(10)}`;
  }

  try {
    res.setHeader('content-type', 'text/html; charset=utf-8');
    //Read partial file only
    fs.createReadStream(fullPath, { start: 0, end: 5000 }).pipe(res);
  } catch (e) {
    res.send('Error' + e);
  }
};
