import { GcamController } from '../controllers/Gcamcontroller';
export class Routes {

     public gcam: GcamController = new GcamController();

    public routes(app): void {

        app.route('/accesslevel').post(this.gcam.getResourceAuthorizationsByRole);
        
        
    }
}