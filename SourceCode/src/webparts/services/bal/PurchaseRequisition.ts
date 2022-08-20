import { IPurchaseRequisitionsProps } from '../../purchaseRequisitions/components/IPurchaseRequisitionsProps';
import SPCRUDOPS from '../../services/dal/spcrudops';
import { IPurchaseRequisition } from "../interface/IPurchaseRequisition";


export interface IPurchaseRequisitionsOps {
    getPurchaseRequisition(brrId: string | number, props: IPurchaseRequisitionsProps): Promise<IPurchaseRequisition>;
    getPurchaseRequisitions(strFilter: string, sorting: any, props: IPurchaseRequisitionsProps): Promise<IPurchaseRequisition[]>;
}

export default function PurchaseRequisitionOps() {
    const spCrudOps = SPCRUDOPS();

    // const getEmployeeMaster = async (brrId: string | number, props: IPurchaseRequisitionsProps): Promise<IEmployeeMaster> => {
        const getPurchaseRequisition = async (brrId: string | number, props: IPurchaseRequisitionsProps): Promise<IPurchaseRequisition> => {
                return await (await spCrudOps).getData("PurchaseRequisitions"
                    , "Id,Title,EmployeeID,RequestDescription,RequestType,RequestDate,RequestHeader,RequestFor,CompanyName/CompanyName,VendorName/VendorName,VendorAddress"
                    + ",VendorStateOrSite,DeliveryLocation,VendorEstimateNoOrProformaInvoic,InitiatedBy/Title,InitiatedBy/Id,RequestorStatus,ApproverStatus,Modified"
                    , "CompanyName,VendorName,InitiatedBy"
                    , "Id eq " + brrId + ""
                    , { column: 'Id', isAscending: false }, props).then(results => {
                        let brr: Array<IPurchaseRequisition> = new Array<IPurchaseRequisition>();
                        results.map(item => {
                            
                            brr.push({
                                Id: item.ID,
                                Title: item.Title,
                                EmployeeID: item.EmployeeID,
                                RequestHeader: item.RequestHeader,
                                RequestDescription: item.RequestDescription,
                                RequestType: item.RequestType,
                                RequestDate: item.RequestDate,
                                RequestFor: item.RequestFor,
                                CompanyName: item.CompanyName.CompanyName,
                                CompanyNameId: item.CompanyName.Id,
                                VendorName: item.VendorName.VendorName,
                                VendorNameId: item.VendorName.Id,
                                VendorAddress: item.VendorAddress,
                                VendorStateOrSite:item.VendorStateOrSite,
                                DeliveryLocation:item.DeliveryLocation,
                                ModifiedOn:item.Modified,
                                VendorEstimateNoOrProformaInvoiceNo:item.VendorEstimateNoOrProformaInvoic,
                                InitiatedBy:item.InitiatedBy,
                                RequestorStatus:item.RequestorStatus,
                                ApproverStatus:item.ApproverStatus,
                                //VendorState:item.
                            });
                        });
                        return brr[0];
                    });
        };
    
        const getPurchaseRequisitions = async (strFilter: string, sorting: any, props: IPurchaseRequisitionsProps): Promise<IPurchaseRequisition[]> => {
                return await (await spCrudOps).getData("PurchaseRequisitions"
                , "Id,Title,EmployeeID,RequestDescription,RequestType,RequestDate,RequestHeader,RequestFor,CompanyName/CompanyName,VendorName/VendorName,VendorAddress"
                + ",VendorStateOrSite,DeliveryLocation,VendorEstimateNoOrProformaInvoic,InitiatedBy/Title,InitiatedBy/Id,RequestorStatus,ApproverStatus,Modified"
                , "CompanyName,VendorName,InitiatedBy"
                    , strFilter, sorting, props).then(results => {
                        let PRColl: Array<IPurchaseRequisition> = new Array<IPurchaseRequisition>();
                        results.map(item => {
                            
                            PRColl.push({
                                Id: item.ID,
                                Title: item.Title,
                                EmployeeID: item.EmployeeID,
                                RequestHeader: item.RequestHeader,
                                RequestDescription: item.RequestDescription,
                                RequestType: item.RequestType,
                                RequestDate: item.RequestDate,
                                RequestFor: item.RequestFor,
                                CompanyName: item.CompanyName.CompanyName,
                                CompanyNameId: item.CompanyName.Id,
                                VendorName: item.VendorName.VendorName,
                                VendorNameId: item.VendorName.Id,
                                VendorAddress: item.VendorAddress,
                                VendorStateOrSite:item.VendorStateOrSite,
                                DeliveryLocation:item.DeliveryLocation,
                                ModifiedOn:item.Modified,
                                VendorEstimateNoOrProformaInvoiceNo:item.VendorEstimateNoOrProformaInvoic,
                                InitiatedBy:item.InitiatedBy,
                                RequestorStatus:item.RequestorStatus,
                                ApproverStatus:item.ApproverStatus
                            });
                        });
    
                        return PRColl;
                    });
        };


    return {
        getPurchaseRequisition
       , getPurchaseRequisitions
    };
}