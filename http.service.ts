import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  quotDoc: any;
  userClickDocNumber: any;
  userClickDate: any;
  userClickPurchaseGroup: any;
  userClickTotalValue: any;
  userClickCurrency: any;
  userClickItem: any;
  userClickMatNumber: any;
  userClickMaterial: any;
  userClickPlant: any;
  userClickPOQuantity: any;
  userClickNetPrice: any;
  userClickNetValue: any;
  userClickPurchaseOrg: any;
  PODOCNUM: any;
  PODATE: any;
  POPG: any;
  POPO: any;
  POPAY: any;
  POVALUE: any;
  POCURRENCY: any;
  POVENDORNUM: any;
  POITEMNUM: any;
  POMN: any;
  POPLANT: any;
  POPOQ: any;
  PONP: any;
  PONOV: any;
  GOODS_CN: any;
  GOODS_PO: any;
  GOODS_MD: any;
  GOODS_MDY: any;
  GOODS_MT: any;
  GOODS_MN: any;
  GOODS_PLANT: any;
  GOODS_SL: any;
  GOODS_CK: any;
  GOODS_ALC: any;
  GOODS_QTY: any;
  GOODS_BUM: any;
  VENDOR_PAYMENT_OVERDUE_CN: any;
  VENDOR_PAYMENT_OVERDUE_PD: any;
  VENDOR_PAYMENT_OVERDUE_ALC: any;
  VENDOR_PAYMENT_OVERDUE_PDN: any;
  VENDOR_PAYMENT_OVERDUE_BD: any;
  VENDOR_PAYMENT_OVERDUE_MYDOMAIN: any;
  VENDOR_PAYMENT_OVERDUE_ST: any;
  VENDOR_PAYMENT_OVERDUE_MN: any;
  VENDOR_PAYMENT_OVERDUE_CC: any;
  VENDOR_PAYMENT_OVERDUE_NP: any;
  VENDOR_PAYMENT_OVERDUE_DOWNPAYMENT: any;
  VENDOR_PAYMENT_OVERDUE_DUEDATE: any;
  VENDOR_PAYMENT_OVERDUE_MATYPE: any;
  VENDOR_PAYMENT_OVERDUE_NET: any;
  VENDOR_PAYMENT_OVERDUE_VOL: any;
  VENDOR_CREDIT_CN: any;
  VENDOR_CREDIT_DN: any;
  VENDOR_CREDIT_DD: any;
  VENDOR_CREDIT_TT: any;
  VENDOR_CREDIT_KY: any;
  VENDOR_CREDIT_GROSS: any;
  VENDOR_CREDIT_POST: any;
  VENDOR_CREDIT_DI: any;
  VENDOR_CREDIT_PDN: any;
  VENDOR_CREDIT_IPN: any;
  VENDOR_CREDIT_MN: any;
  VENDOR_CREDIT_PALNT: any;
  VENDOR_CREDIT_QUANTITY: any;
  responseVendorId: any;
  responseVendId: any;
  



  constructor(public http: HttpClient) { }

  responseCustId: any;


  userClickedCustId: any;
  userClickedName: any;
}
