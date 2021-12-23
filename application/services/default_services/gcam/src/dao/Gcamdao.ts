import mongoose = require('mongoose');
import { Resourceschema } from '../model/resource';
import { CustomLogger } from '../config/Logger';
const resourceschema = mongoose.model('resources', Resourceschema);


export class Gcamdao {
    public getResourceAuthorizationByRole(role: any,callback: { (response: any): void; (arg0: any): void; }) {
        new CustomLogger().showLogger('info', 'Enter into Gcamdao.ts:  getResourceAuthorizationByRole');
        console.log("DAO -------------->",role,"check a answer progress", { roles: { "$in" : [role.toLowerCase()]}})
         resourceschema.find({$or: [{roles: {$in: [role.toLowerCase()]}}]})
        .then( async(response: any) => {
            console.log("response",response);
              let res = await this.jsontransformation(response,role);
             console.log("res-----",res)
             new CustomLogger().showLogger('info', 'Exit from Gcamdao.ts: getResourceAuthorizationsByRole');
            callback(res);
        }).catch((error: any) => {
            callback(error);
        })
    }
    public async jsontransformation(response: any,role:string) {

        var data = JSON.stringify(response);
        let field = JSON.parse(data);

        let screen_json = {};
      
        screen_json[role] = {
            
            "type": "string",
            "screens": [],
             "value": {}
        }

        let test = [
            {
                "access": [
                     
                ]
            }
        ]
        field.forEach(async (element: { resource_type: string; resource_name: string; roles: any; components: any; }) => {
             console.log("screen_json -->",screen_json)
            let value = screen_json[role]["value"]
             console.log("value------->",value)
           let samp = screen_json[role]["screens"];
            if (element.resource_type === "screen") {
                let screen = { "screenname": element.resource_name }
                 console.log("eeee---->", element.resource_name);
                samp.push(screen);
                 console.log("screen----->",screen);
            }
            console.log("sara ---> ",element.components)
            let constructedComponents =  this. converter(element.components,role);
            value[element.resource_name] = [{
                "components": constructedComponents

            }]
        });
        
          test[0].access.push(screen_json);
         console.log("---> test --> ", test);
         return  test;
    }
    public  converter(components,role) {
        console.log("components",components);
        components.forEach(component => {
             for (var key in component) {
                if (component.hasOwnProperty(key)) {
                    console.log("-------------------------------> ",component[key])
                    if(component[key]["roles"].indexOf(role)>-1){
                        delete component[key]["roles"];
                        component[key]["value"] = "true";

                    }else {
                        delete component[key].roles;
                        component[key]["value"] = "false";

                    }
                    var val = component[key];
                    console.log(key, val);
                }
             }
        })
        console.log("--component --> >", components)
        return components;
       
    }
    
}
