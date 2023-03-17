
import { Request, Response } from 'express';
import { pool } from '../db/db';

export const getPathPlanningFiles = async(req: Request, res: Response) => {
    const ids = req.params.ids;
    
    try{
        //make db call here
        pool.connect(function (err) {
          if (err) throw err;
          pool.query(
            `SELECT distinct
              sf.ID,
              sf.file_name as slice_file_name,
              bf.file_name as build_file_name,
              sr.scan_file_name,
              sr.rsi_file_name,
              sresult.mesh_file_name,
              sm.zmetric_file_name,
              sm.proximity_file_name


              from web_hw.slice_files sf
              LEFT JOIN web_hw.build_files bf on bf.slice_file_ID = sf.ID
              LEFT JOIN web_hw.run r on bf.ID = r.build_file_ID
              LEFT JOIN web_hw.scan_raw sr on r.ID = sr.run_ID
              LEFT JOIN web_hw.scan_result sresult on sresult.scan_ID = sr.ID
              LEFT JOIN web_hw.scan_metric sm on sm.scan_ID = sr.ID
              where sf.CAD_file_ID IN (${ids})`,
            function (err, result) {
              if (err) throw err;
              console.log(result);
              res.json(result);
            }
          );
        });

    }catch(e){
        res.send('Error' + e)
    }
    
}
