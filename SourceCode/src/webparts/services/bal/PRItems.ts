import { IPurchaseRequisitionsProps } from '../../purchaseRequisitions/components/IPurchaseRequisitionsProps';
import SPCRUDOPS from '../dal/spcrudops';
import { PRItems } from "../interface/IPRItems";


export interface PRItemsOps {
    getPRItem(brrId: string | number, props: IPurchaseRequisitionsProps): Promise<PRItems>;
    getPRItems(brrId: string | number, props: IPurchaseRequisitionsProps): Promise<PRItems[]>;
}

export default function PRItemOps() {
    const spCrudOps = SPCRUDOPS();

    // const getEmployeeMaster = async (brrId: string | number, props: IPurchaseRequisitionsProps): Promise<IEmployeeMaster> => {
        const getPRItem = async (brrId: string | number, props: IPurchaseRequisitionsProps): Promise<PRItems> => {
                return await (await spCrudOps).getData("PRItems"
                    , "Id,Title,RequestID/Id,ItemName,GLCode/Id,GLCode/Account_No,CostCenter/CostCenter,CostCenter/Id,ProfitCenter/ProfitCenterName,ProfitCenter/Id,Plant/BusinessAreaName,Plant/Id"
                    + ",Quantity,Amount,GST/GST,GST/Id,GSTAmount,TotalAmount"
                    , "RequestID,GLCode,CostCenter,ProfitCenter,GST,Plant"
                    , "RequestID/Id eq " + brrId + ""
                    , { column: 'Id', isAscending: false }, props).then(results => {
                        let brr: Array<PRItems> = new Array<PRItems>();
                        results.map(item => {
                            
                            brr.push({
                                Id: item.Id,
                                Title: item.ItemName,
                                ItemName: item.ItemName,
                                GLCodeId: item.GLCodeId,
                                GLCode: item.GLCode.Account_No,
                                CostCenterId:item.CostCenterId,
                                CostCenter:item.CostCenter.CostCenter,
                                ProfitCenterId:item.ProfitCenterId,
                                ProfitCenter:item.ProfitCenter,
                                PlantId:item.PlantId,
                                Plant:item.Plant,
                                Quantity:item.Quantity,
                                Amount:item.Amount,
                                GST:item.GST,
                                GSTId:item.GSTId,
                                GSTAmount:item.GSTAmount,
                                TotalAmount:item.TotalAmount
                            });
                        });
                        return brr[0];
                    });
        };
    
        const getPRItems = async (brrId: string | number, props: IPurchaseRequisitionsProps): Promise<PRItems[]> => {
                return await (await spCrudOps).getData("PRItems"
                , "Id,Title,RequestID/Id,ItemName,GLCode/Id,GLCode/Account_No,CostCenter/CostCenter,CostCenter/Id,ProfitCenter/ProfitCenterName,ProfitCenter/Id,Plant/BusinessAreaName,Plant/Id"
                    + ",Quantity,Amount,GST/GST,GST/Id,GSTAmount,TotalAmount"
                    , "RequestID,GLCode,CostCenter,ProfitCenter,GST,Plant"
                    , "RequestID/Id eq " + brrId + ""
                    , { column: 'Id', isAscending: false }, props).then(results => {
                        let PRColls: Array<PRItems> = new Array<PRItems>();
                        results.map(item => {
                            
                            PRColls.push({
                                Id: item.Id,
                                Title: item.ItemName,
                                ItemName: item.ItemName,
                                GLCodeId: item.GLCodeId,
                                GLCode: item.GLCode.Account_No,
                                CostCenterId:item.CostCenterId,
                                CostCenter:item.CostCenter.CostCenter,
                                ProfitCenterId:item.ProfitCenterId,
                                ProfitCenter:item.ProfitCenter,
                                PlantId:item.PlantId,
                                Plant:item.Plant,
                                Quantity:item.Quantity,
                                Amount:item.Amount,
                                GST:item.GST,
                                GSTId:item.GSTId,
                                GSTAmount:item.GSTAmount,
                                TotalAmount:item.TotalAmount
                            });
                        });
    
                        return PRColls;
                    });
        };


    return {
        getPRItem
       , getPRItems
    };
}