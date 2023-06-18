import { STATUS } from "../../../../constants/store";
export interface IOrganizationInformation {
  companyName: string;
  id:string;
  owner: string;
  logo: string;
  industry:string;
  weekStartDay: string;
  timeZone:string;
}

export interface ICompanySettingsState {
  data: IOrganizationInformation[];
  message: string;
  error: any;
  status: STATUS;
}


export interface ILocationData {
  key: string;
  locationName: string;
  primaryPhone: string,
  mailingAddress: string;
  billingAddress: string;
}
