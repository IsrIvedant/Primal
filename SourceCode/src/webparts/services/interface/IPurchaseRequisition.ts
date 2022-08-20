import { StringLocale } from "yup/lib/locale";

export interface IPurchaseRequisition {
    Id: number;
    Title: string;
    EmployeeID: number;
    RequestHeader: string;
    RequestDescription: string;
    RequestType: string;
    RequestDate?: Date;
    ModifiedOn: number;
    RequestFor: string;
    CompanyNameId: number;
    CompanyName: string;
    VendorName: string;
    VendorNameId: number;
    VendorAddress: string;
    VendorStateOrSite:string;
    DeliveryLocation:string;
    VendorEstimateNoOrProformaInvoiceNo:string;
    InitiatedBy:number;
    RequestorStatus:string;
    ApproverStatus:string;
    //VendorState:string;
}