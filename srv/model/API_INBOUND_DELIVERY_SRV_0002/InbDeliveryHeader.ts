/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { InbDeliveryHeaderApi } from './InbDeliveryHeaderApi';
import {
  InbDeliveryHeaderText,
  InbDeliveryHeaderTextType
} from './InbDeliveryHeaderText';
import { InbDeliveryItem, InbDeliveryItemType } from './InbDeliveryItem';
import {
  InbDeliveryPartner,
  InbDeliveryPartnerType
} from './InbDeliveryPartner';

/**
 * This class represents the entity "A_InbDeliveryHeader" of service "API_INBOUND_DELIVERY_SRV".
 */
export class InbDeliveryHeader<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements InbDeliveryHeaderType<T>
{
  /**
   * Technical entity name for InbDeliveryHeader.
   */
  static _entityName = 'A_InbDeliveryHeader';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath =
    '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002';
  /**
   * All key fields of the InbDeliveryHeader entity
   */
  static _keys = ['DeliveryDocument'];
  /**
   * Rec. time zone.
   * Maximum length: 6.
   * @nullable
   */
  declare receivingLocationTimeZone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Route.
   * Maximum length: 6.
   * @nullable
   */
  declare actualDeliveryRoute?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Actual GI Date.
   * @nullable
   */
  declare actualGoodsMovementDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * GI Time.
   * @nullable
   */
  declare actualGoodsMovementTime?: DeserializedType<T, 'Edm.Time'> | null;
  /**
   * Billing Date.
   * @nullable
   */
  declare billingDocumentDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Bill of Lading.
   * Maximum length: 35.
   * @nullable
   */
  declare billOfLading?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Complete Dlv.
   * @nullable
   */
  declare completeDeliveryIsDefined?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Confirm. Time.
   * @nullable
   */
  declare confirmationTime?: DeserializedType<T, 'Edm.Time'> | null;
  /**
   * Created By.
   * Maximum length: 12.
   * @nullable
   */
  declare createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created On.
   * @nullable
   */
  declare creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Time.
   * @nullable
   */
  declare creationTime?: DeserializedType<T, 'Edm.Time'> | null;
  /**
   * Customer Group.
   * Maximum length: 2.
   * @nullable
   */
  declare customerGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Block.
   * Maximum length: 2.
   * @nullable
   */
  declare deliveryBlockReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Date.
   * @nullable
   */
  declare deliveryDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Delivery.
   * Maximum length: 10.
   */
  declare deliveryDocument: DeserializedType<T, 'Edm.String'>;
  /**
   * Ext. Delivery.
   * Maximum length: 35.
   * @nullable
   */
  declare deliveryDocumentBySupplier?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Type.
   * Maximum length: 4.
   * @nullable
   */
  declare deliveryDocumentType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * In Plant.
   * @nullable
   */
  declare deliveryIsInPlant?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Delivery Prior.
   * Maximum length: 2.
   * @nullable
   */
  declare deliveryPriority?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * TimeOfDelivery.
   * @nullable
   */
  declare deliveryTime?: DeserializedType<T, 'Edm.Time'> | null;
  /**
   * DLV.Version.
   * Maximum length: 4.
   * @nullable
   */
  declare deliveryVersion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Depreciation.
   * @nullable
   */
  declare depreciationPercentage?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * StatDecntrlWhse.
   * Maximum length: 1.
   * @nullable
   */
  declare distrStatusByDecentralizedWrhs?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Document Date.
   * @nullable
   */
  declare documentDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Type Ext. Ident.
   * Maximum length: 1.
   * @nullable
   */
  declare externalIdentificationType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ID Transp.Syst.
   * Maximum length: 5.
   * @nullable
   */
  declare externalTransportSystem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * FactoryCalendar.
   * Maximum length: 2.
   * @nullable
   */
  declare factoryCalendarByCustomer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * GR/GI Slip No.
   * Maximum length: 10.
   * @nullable
   */
  declare goodsIssueOrReceiptSlipNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * GI Time.
   * @nullable
   */
  declare goodsIssueTime?: DeserializedType<T, 'Edm.Time'> | null;
  /**
   * HU in Stock.
   * Maximum length: 1.
   * @nullable
   */
  declare handlingUnitInStock?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header Data.
   * Maximum length: 1.
   * @nullable
   */
  declare hdrGeneralIncompletionStatus?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Head. Data GM.
   * Maximum length: 1.
   * @nullable
   */
  declare hdrGoodsMvtIncompletionStatus?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Header Bill.Dat.
   * Maximum length: 1.
   * @nullable
   */
  declare headerBillgIncompletionStatus?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Billing Block.
   * Maximum length: 2.
   * @nullable
   */
  declare headerBillingBlockReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header Dlv.Data.
   * Maximum length: 1.
   * @nullable
   */
  declare headerDelivIncompletionStatus?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Total Weight.
   * @nullable
   */
  declare headerGrossWeight?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Net Weight.
   * @nullable
   */
  declare headerNetWeight?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Head.Data Pckg.
   * Maximum length: 1.
   * @nullable
   */
  declare headerPackingIncompletionSts?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Head.Data Pck/Putawy.
   * Maximum length: 1.
   * @nullable
   */
  declare headerPickgIncompletionStatus?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Volume.
   * @nullable
   */
  declare headerVolume?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Volume Unit.
   * Maximum length: 3.
   * @nullable
   */
  declare headerVolumeUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit of Weight.
   * Maximum length: 3.
   * @nullable
   */
  declare headerWeightUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Incoterms.
   * Maximum length: 3.
   * @nullable
   */
  declare incotermsClassification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Incoterms 2.
   * Maximum length: 28.
   * @nullable
   */
  declare incotermsTransferLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Date.
   * @nullable
   */
  declare intercompanyBillingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Financ.Doc.No.
   * Maximum length: 10.
   * @nullable
   */
  declare internalFinancialDocument?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ID: Delivery Split.
   * Maximum length: 1.
   * @nullable
   */
  declare isDeliveryForSingleWarehouse?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Export.
   * Maximum length: 1.
   * @nullable
   */
  declare isExportDelivery?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Changed On.
   * @nullable
   */
  declare lastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Changed By.
   * Maximum length: 12.
   * @nullable
   */
  declare lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Loading Date.
   * @nullable
   */
  declare loadingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Loading Point.
   * Maximum length: 2.
   * @nullable
   */
  declare loadingPoint?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Loading Time.
   * @nullable
   */
  declare loadingTime?: DeserializedType<T, 'Edm.Time'> | null;
  /**
   * Mns of Trans.ID.
   * Maximum length: 20.
   * @nullable
   */
  declare meansOfTransport?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * MeansTransp.
   * Maximum length: 40.
   * @nullable
   */
  declare meansOfTransportRefMaterial?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * MnsOfTrns Type.
   * Maximum length: 4.
   * @nullable
   */
  declare meansOfTransportType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Combinat.
   * @nullable
   */
  declare orderCombinationIsAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Order.
   * Maximum length: 12.
   * @nullable
   */
  declare orderId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirmed.
   * Maximum length: 1.
   * @nullable
   */
  declare overallDelivConfStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Status.
   * Maximum length: 1.
   * @nullable
   */
  declare overallDelivReltdBillgStatus?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * TotalGdsMvtStat.
   * Maximum length: 1.
   * @nullable
   */
  declare overallGoodsMovementStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Totals Status.
   * Maximum length: 1.
   * @nullable
   */
  declare overallIntcoBillingStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Packing Status.
   * Maximum length: 1.
   * @nullable
   */
  declare overallPackingStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirmation.
   * Maximum length: 1.
   * @nullable
   */
  declare overallPickingConfStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ovr.Pick.Status.
   * Maximum length: 1.
   * @nullable
   */
  declare overallPickingStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * POD Status.
   * Maximum length: 1.
   * @nullable
   */
  declare overallProofOfDeliveryStatus?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Overall Status.
   * Maximum length: 1.
   * @nullable
   */
  declare overallSdProcessStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * OverallWMStatus.
   * Maximum length: 1.
   * @nullable
   */
  declare overallWarehouseActivityStatus?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Item Deliv.Data.
   * Maximum length: 1.
   * @nullable
   */
  declare ovrlItmDelivIncompletionSts?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Item data: GM.
   * Maximum length: 1.
   * @nullable
   */
  declare ovrlItmGdsMvtIncompletionSts?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Item Data.
   * Maximum length: 1.
   * @nullable
   */
  declare ovrlItmGeneralIncompletionSts?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * It.Data Packag.
   * Maximum length: 1.
   * @nullable
   */
  declare ovrlItmPackingIncompletionSts?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * It.Data Pck/Putaway.
   * Maximum length: 1.
   * @nullable
   */
  declare ovrlItmPickingIncompletionSts?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Paym.Guar.Proc.
   * Maximum length: 6.
   * @nullable
   */
  declare paymentGuaranteeProcedure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * PickedItmLocat.
   * Maximum length: 20.
   * @nullable
   */
  declare pickedItemsLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pick Date.
   * @nullable
   */
  declare pickingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Picking Time.
   * @nullable
   */
  declare pickingTime?: DeserializedType<T, 'Edm.Time'> | null;
  /**
   * Planned Gds Mvmt.
   * @nullable
   */
  declare plannedGoodsIssueDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * POD Date.
   * @nullable
   */
  declare proofOfDeliveryDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Route.
   * Maximum length: 6.
   * @nullable
   */
  declare proposedDeliveryRoute?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving Plant.
   * Maximum length: 4.
   * @nullable
   */
  declare receivingPlant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Route Schedule.
   * Maximum length: 10.
   * @nullable
   */
  declare routeSchedule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales District.
   * Maximum length: 6.
   * @nullable
   */
  declare salesDistrict?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Office.
   * Maximum length: 4.
   * @nullable
   */
  declare salesOffice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Org.
   * Maximum length: 4.
   * @nullable
   */
  declare salesOrganization?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Cat.
   * Maximum length: 4.
   * @nullable
   */
  declare sdDocumentCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ShpmtBlReason.
   * Maximum length: 2.
   * @nullable
   */
  declare shipmentBlockReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Cond.
   * Maximum length: 2.
   * @nullable
   */
  declare shippingCondition?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Point.
   * Maximum length: 4.
   * @nullable
   */
  declare shippingPoint?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Type.
   * Maximum length: 2.
   * @nullable
   */
  declare shippingType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship-To Party.
   * Maximum length: 10.
   * @nullable
   */
  declare shipToParty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sold-To Party.
   * Maximum length: 10.
   * @nullable
   */
  declare soldToParty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Spec.Processing.
   * Maximum length: 4.
   * @nullable
   */
  declare specialProcessingCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Stats. Currency.
   * Maximum length: 5.
   * @nullable
   */
  declare statisticsCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Supplier.
   * Maximum length: 10.
   * @nullable
   */
  declare supplier?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Overall Blk St.
   * Maximum length: 1.
   * @nullable
   */
  declare totalBlockStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * OverallCredStat.
   * Maximum length: 1.
   * @nullable
   */
  declare totalCreditCheckStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * No. of Packages.
   * Maximum length: 5.
   * @nullable
   */
  declare totalNumberOfPackage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Doc. Currency.
   * Maximum length: 5.
   * @nullable
   */
  declare transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans. Group.
   * Maximum length: 4.
   * @nullable
   */
  declare transportationGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * TranspPlngDate.
   * @nullable
   */
  declare transportationPlanningDate?: DeserializedType<
    T,
    'Edm.DateTime'
  > | null;
  /**
   * Trns.Plan.Stat.
   * Maximum length: 1.
   * @nullable
   */
  declare transportationPlanningStatus?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Tr. Plan. Time.
   * @nullable
   */
  declare transportationPlanningTime?: DeserializedType<T, 'Edm.Time'> | null;
  /**
   * Unloading Point.
   * Maximum length: 25.
   * @nullable
   */
  declare unloadingPointName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse No.
   * Maximum length: 3.
   * @nullable
   */
  declare warehouse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Door for Whse.
   * Maximum length: 3.
   * @nullable
   */
  declare warehouseGate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Staging Area.
   * Maximum length: 10.
   * @nullable
   */
  declare warehouseStagingArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link InbDeliveryHeaderText} entity.
   */
  declare toDeliveryDocumentText: InbDeliveryHeaderText<T>[];
  /**
   * One-to-many navigation property to the {@link InbDeliveryItem} entity.
   */
  declare toDeliveryDocumentItem: InbDeliveryItem<T>[];
  /**
   * One-to-many navigation property to the {@link InbDeliveryPartner} entity.
   */
  declare toDeliveryDocumentPartner: InbDeliveryPartner<T>[];

  constructor(_entityApi: InbDeliveryHeaderApi<T>) {
    super(_entityApi);
  }
}

export interface InbDeliveryHeaderType<
  T extends DeSerializers = DefaultDeSerializers
> {
  receivingLocationTimeZone?: DeserializedType<T, 'Edm.String'> | null;
  actualDeliveryRoute?: DeserializedType<T, 'Edm.String'> | null;
  actualGoodsMovementDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  actualGoodsMovementTime?: DeserializedType<T, 'Edm.Time'> | null;
  billingDocumentDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  billOfLading?: DeserializedType<T, 'Edm.String'> | null;
  completeDeliveryIsDefined?: DeserializedType<T, 'Edm.Boolean'> | null;
  confirmationTime?: DeserializedType<T, 'Edm.Time'> | null;
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  creationTime?: DeserializedType<T, 'Edm.Time'> | null;
  customerGroup?: DeserializedType<T, 'Edm.String'> | null;
  deliveryBlockReason?: DeserializedType<T, 'Edm.String'> | null;
  deliveryDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  deliveryDocument: DeserializedType<T, 'Edm.String'>;
  deliveryDocumentBySupplier?: DeserializedType<T, 'Edm.String'> | null;
  deliveryDocumentType?: DeserializedType<T, 'Edm.String'> | null;
  deliveryIsInPlant?: DeserializedType<T, 'Edm.Boolean'> | null;
  deliveryPriority?: DeserializedType<T, 'Edm.String'> | null;
  deliveryTime?: DeserializedType<T, 'Edm.Time'> | null;
  deliveryVersion?: DeserializedType<T, 'Edm.String'> | null;
  depreciationPercentage?: DeserializedType<T, 'Edm.Decimal'> | null;
  distrStatusByDecentralizedWrhs?: DeserializedType<T, 'Edm.String'> | null;
  documentDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  externalIdentificationType?: DeserializedType<T, 'Edm.String'> | null;
  externalTransportSystem?: DeserializedType<T, 'Edm.String'> | null;
  factoryCalendarByCustomer?: DeserializedType<T, 'Edm.String'> | null;
  goodsIssueOrReceiptSlipNumber?: DeserializedType<T, 'Edm.String'> | null;
  goodsIssueTime?: DeserializedType<T, 'Edm.Time'> | null;
  handlingUnitInStock?: DeserializedType<T, 'Edm.String'> | null;
  hdrGeneralIncompletionStatus?: DeserializedType<T, 'Edm.String'> | null;
  hdrGoodsMvtIncompletionStatus?: DeserializedType<T, 'Edm.String'> | null;
  headerBillgIncompletionStatus?: DeserializedType<T, 'Edm.String'> | null;
  headerBillingBlockReason?: DeserializedType<T, 'Edm.String'> | null;
  headerDelivIncompletionStatus?: DeserializedType<T, 'Edm.String'> | null;
  headerGrossWeight?: DeserializedType<T, 'Edm.Decimal'> | null;
  headerNetWeight?: DeserializedType<T, 'Edm.Decimal'> | null;
  headerPackingIncompletionSts?: DeserializedType<T, 'Edm.String'> | null;
  headerPickgIncompletionStatus?: DeserializedType<T, 'Edm.String'> | null;
  headerVolume?: DeserializedType<T, 'Edm.Decimal'> | null;
  headerVolumeUnit?: DeserializedType<T, 'Edm.String'> | null;
  headerWeightUnit?: DeserializedType<T, 'Edm.String'> | null;
  incotermsClassification?: DeserializedType<T, 'Edm.String'> | null;
  incotermsTransferLocation?: DeserializedType<T, 'Edm.String'> | null;
  intercompanyBillingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  internalFinancialDocument?: DeserializedType<T, 'Edm.String'> | null;
  isDeliveryForSingleWarehouse?: DeserializedType<T, 'Edm.String'> | null;
  isExportDelivery?: DeserializedType<T, 'Edm.String'> | null;
  lastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  loadingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  loadingPoint?: DeserializedType<T, 'Edm.String'> | null;
  loadingTime?: DeserializedType<T, 'Edm.Time'> | null;
  meansOfTransport?: DeserializedType<T, 'Edm.String'> | null;
  meansOfTransportRefMaterial?: DeserializedType<T, 'Edm.String'> | null;
  meansOfTransportType?: DeserializedType<T, 'Edm.String'> | null;
  orderCombinationIsAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  orderId?: DeserializedType<T, 'Edm.String'> | null;
  overallDelivConfStatus?: DeserializedType<T, 'Edm.String'> | null;
  overallDelivReltdBillgStatus?: DeserializedType<T, 'Edm.String'> | null;
  overallGoodsMovementStatus?: DeserializedType<T, 'Edm.String'> | null;
  overallIntcoBillingStatus?: DeserializedType<T, 'Edm.String'> | null;
  overallPackingStatus?: DeserializedType<T, 'Edm.String'> | null;
  overallPickingConfStatus?: DeserializedType<T, 'Edm.String'> | null;
  overallPickingStatus?: DeserializedType<T, 'Edm.String'> | null;
  overallProofOfDeliveryStatus?: DeserializedType<T, 'Edm.String'> | null;
  overallSdProcessStatus?: DeserializedType<T, 'Edm.String'> | null;
  overallWarehouseActivityStatus?: DeserializedType<T, 'Edm.String'> | null;
  ovrlItmDelivIncompletionSts?: DeserializedType<T, 'Edm.String'> | null;
  ovrlItmGdsMvtIncompletionSts?: DeserializedType<T, 'Edm.String'> | null;
  ovrlItmGeneralIncompletionSts?: DeserializedType<T, 'Edm.String'> | null;
  ovrlItmPackingIncompletionSts?: DeserializedType<T, 'Edm.String'> | null;
  ovrlItmPickingIncompletionSts?: DeserializedType<T, 'Edm.String'> | null;
  paymentGuaranteeProcedure?: DeserializedType<T, 'Edm.String'> | null;
  pickedItemsLocation?: DeserializedType<T, 'Edm.String'> | null;
  pickingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  pickingTime?: DeserializedType<T, 'Edm.Time'> | null;
  plannedGoodsIssueDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  proofOfDeliveryDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  proposedDeliveryRoute?: DeserializedType<T, 'Edm.String'> | null;
  receivingPlant?: DeserializedType<T, 'Edm.String'> | null;
  routeSchedule?: DeserializedType<T, 'Edm.String'> | null;
  salesDistrict?: DeserializedType<T, 'Edm.String'> | null;
  salesOffice?: DeserializedType<T, 'Edm.String'> | null;
  salesOrganization?: DeserializedType<T, 'Edm.String'> | null;
  sdDocumentCategory?: DeserializedType<T, 'Edm.String'> | null;
  shipmentBlockReason?: DeserializedType<T, 'Edm.String'> | null;
  shippingCondition?: DeserializedType<T, 'Edm.String'> | null;
  shippingPoint?: DeserializedType<T, 'Edm.String'> | null;
  shippingType?: DeserializedType<T, 'Edm.String'> | null;
  shipToParty?: DeserializedType<T, 'Edm.String'> | null;
  soldToParty?: DeserializedType<T, 'Edm.String'> | null;
  specialProcessingCode?: DeserializedType<T, 'Edm.String'> | null;
  statisticsCurrency?: DeserializedType<T, 'Edm.String'> | null;
  supplier?: DeserializedType<T, 'Edm.String'> | null;
  totalBlockStatus?: DeserializedType<T, 'Edm.String'> | null;
  totalCreditCheckStatus?: DeserializedType<T, 'Edm.String'> | null;
  totalNumberOfPackage?: DeserializedType<T, 'Edm.String'> | null;
  transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  transportationGroup?: DeserializedType<T, 'Edm.String'> | null;
  transportationPlanningDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  transportationPlanningStatus?: DeserializedType<T, 'Edm.String'> | null;
  transportationPlanningTime?: DeserializedType<T, 'Edm.Time'> | null;
  unloadingPointName?: DeserializedType<T, 'Edm.String'> | null;
  warehouse?: DeserializedType<T, 'Edm.String'> | null;
  warehouseGate?: DeserializedType<T, 'Edm.String'> | null;
  warehouseStagingArea?: DeserializedType<T, 'Edm.String'> | null;
  toDeliveryDocumentText: InbDeliveryHeaderTextType<T>[];
  toDeliveryDocumentItem: InbDeliveryItemType<T>[];
  toDeliveryDocumentPartner: InbDeliveryPartnerType<T>[];
}
