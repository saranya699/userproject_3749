import { CustomLogger } from '../config/Logger'
import { Gcamdao } from '../dao/Gcamdao';
// import { DmnWorkerFile } from '../worker/DMNWorker';
let gcamdao = new Gcamdao();
export class GcamService {
    constructor() { }
    public getResourceAuthorizationByRole( role,callback) {
        new CustomLogger().showLogger('info', 'Enter into Gcamservice.ts:  getResourceAuthorizationByRole');
        console.log("role--------------------> service ------->",role)
       gcamdao.getResourceAuthorizationByRole(role,(response) => {
        new CustomLogger().showLogger('info', 'Exit into Gcamservice.ts:  getResourceAuthorizationByRole'); 
            callback(response);
        });
    }
} 