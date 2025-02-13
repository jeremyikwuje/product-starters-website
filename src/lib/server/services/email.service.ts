import { RequestMethod } from "$lib/constant";
import { requestApi } from "$lib/utils/utilities";

interface emailList {
  email: string,
  utm_source: string,
  utm_medium: string,
  utm_campaign: string
}

export const addEmailList = async (entry: emailList)=> {
  
  const url = '/auth/add_email_list';
  const body = {
    email: entry.email,
    utm_source: entry.utm_source,
    utm_medium: entry.utm_medium,
    utm_campaign: entry.utm_campaign,
  };

  console.log(body);

  const response = await requestApi(url, RequestMethod.POST, body);

  return response;
}