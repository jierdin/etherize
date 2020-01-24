import Constants from "./Constants";
import {APIClient} from "openlaw";
require("isomorphic-unfetch");

export default class API {

    // TODO: email us about this draft being a result of an error
    static SendEtherizeWarningEmailOfErrorOnFrontEnd(errorMessage:string){
        // all we get is a draft rn
        console.log("TODO IMPLEMENT ME ON THE SERVER SIDE")
    }
    // TODO: email invite
    static SendInviteToUserFromAdminAccount(email:string){
        // this must be done server side so the client doesn't have access to an admin JWT
        console.log("TODO IMPLEMENT ME ON THE SERVER SIDE")
        // see: OpenLawExtension.sendUsersInviteIfNonexistent(apiClient.jwt, [memberEmail]);
    }

    static async GetOpenLawAPIClient(templateName:string): APIClient {

        //create config
        const openLawConfig = {
            server: Constants.defaultOpenLawConfig.server,
            templateName: templateName,
        };

        const apiClient = new APIClient({root:openLawConfig.server});

        const [jwt, err] = await API.getJWT();
        if (err !== "" || jwt === ""){
            alert(err);
            return;
        }

        apiClient.jwt = jwt;
        // console.log( "api jwt: " + apiClient.jwt);
        return apiClient;

    }

    static async getJWT()  {
        const response = await fetch(process.env.API_HOST + process.env.OpenLawEndPoint);
            if (response.status >=300){
                return ["", "Request to our law template instance failed with status: " + response.statusText +
                ". Try refreshing!"]
            }
        const json = await response.json();
        return [json["jwt"], json["error"]];
    }

    static async getCryptoTransaction(cryptoType:string, price:number, buyerEmail:string){
        const response = await fetch(process.env.API_HOST + process.env.CreateCryptoTransactionEndPoint +
            "?crypto=" + cryptoType +
            "&price=" + price.toString() +
            "&buyerEmail="+ buyerEmail);
        // console.log(response.statusText);
        if (response.status>=300){
            console.log("error from api! " + response.statusText);
            return {"error": response.statusText}
        }

        const json = await response.json();
        if (json["error"] !== "ok"){
            console.log("error from api! " + json["error"]);
        }
        return json;
    }

    static async getFiatTransaction(email:string, price:number){
        // we multiply the price below b/c stripe accepts USD in cents whereas we typically think in dollars
        const response = await fetch(process.env.API_HOST + process.env.CreateFiatTransactionEndPoint +
        "?email=" + email +
        "&price=" + (price*100).toString());
        const json = await response.json();
        return json;
    }

    // TODO: make endpoint in go to email us, and choose whether we use POST or GET with query
    static async AdoptEntityDesired(series){
        const response = await fetch(process.env.API_HOST + process.env.notifyAdoptionWanted);

    }


}

