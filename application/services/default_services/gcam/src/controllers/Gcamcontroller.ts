import { GcamService } from '../services/Gcamservice';
import { Request, response, Response } from 'express';
import { CustomLogger } from '../config/Logger'

let gcam = new GcamService;

export class GcamController {
    public getResourceAuthorizationsByRole(req: Request, res: Response){
        new CustomLogger().showLogger('info', 'Enter into Gcamcontroller.ts: getResourceAuthorizationsByRole');
        console.log("getresources");
        const role = req.body.role ;
        console.log("in controller -------------------------->")
        gcam.getResourceAuthorizationByRole(role,(response)=> {
            console.log("response----->",response);
            res.status(200);
            res.json(response);
            new CustomLogger().showLogger('info', 'Exit from Gcamcontroller.ts: getResourceAuthorizationsByRole');
        });
    }


}

    