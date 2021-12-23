import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdaptar }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class gcamController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post('/accesslevel', this.gcam);
    }

public gcam(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into gcamController.ts: gcam');
        new ApiAdaptar().post(Constant.GCAMURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from gcamController.ts: gcam');
        }).catch(err => {
            res.send(err);
        });
    }








}

