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
import type { InbDeliveryItemApi } from './InbDeliveryItemApi';
import {
  InbDeliverySerialNmbr,
  InbDeliverySerialNmbrType
} from './InbDeliverySerialNmbr';
import {
  InbDeliveryDocFlow,
  InbDeliveryDocFlowType
} from './InbDeliveryDocFlow';
import {
  InbDeliveryItemText,
  InbDeliveryItemTextType
} from './InbDeliveryItemText';

/**
 * This class represents the entity "A_InbDeliveryItem" of service "API_INBOUND_DELIVERY_SRV".
 */
export class InbDeliveryItem<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements InbDeliveryItemType<T>
{
  /**
   * Technical entity name for InbDeliveryItem.
   */
  static _entityName = 'A_InbDeliveryItem';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath =
    '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002';
  /**
   * All key fields of the InbDeliveryItem entity
   */
  static _keys = ['DeliveryDocument', 'DeliveryDocumentItem'];
  /**
   * Qty (stckp.unt).
   * @nullable
   */
  declare actualDeliveredQtyInBaseUnit?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Delivery Qty.
   * @nullable
   */
  declare actualDeliveryQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Customer Grp 1.
   * Maximum length: 3.
   * @nullable
   */
  declare additionalCustomerGroup1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Grp 2.
   * Maximum length: 3.
   * @nullable
   */
  declare additionalCustomerGroup2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Grp 3.
   * Maximum length: 3.
   * @nullable
   */
  declare additionalCustomerGroup3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Grp 4.
   * Maximum length: 3.
   * @nullable
   */
  declare additionalCustomerGroup4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Grp 5.
   * Maximum length: 3.
   * @nullable
   */
  declare additionalCustomerGroup5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * MaterialGroup 1.
   * Maximum length: 3.
   * @nullable
   */
  declare additionalMaterialGroup1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * MaterialGroup 2.
   * Maximum length: 3.
   * @nullable
   */
  declare additionalMaterialGroup2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * MaterialGroup 3.
   * Maximum length: 3.
   * @nullable
   */
  declare additionalMaterialGroup3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * MaterialGroup 4.
   * Maximum length: 3.
   * @nullable
   */
  declare additionalMaterialGroup4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * MaterialGroup 5.
   * Maximum length: 3.
   * @nullable
   */
  declare additionalMaterialGroup5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt.ProdNr.
   * Maximum length: 40.
   * @nullable
   */
  declare alternateProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Base Unit.
   * Maximum length: 3.
   * @nullable
   */
  declare baseUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Batch.
   * Maximum length: 10.
   * @nullable
   */
  declare batch?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Supplier Batch.
   * Maximum length: 15.
   * @nullable
   */
  declare batchBySupplier?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Int.object no.
   * Maximum length: 18.
   * @nullable
   */
  declare batchClassification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * BOM Explos. No.
   * Maximum length: 8.
   * @nullable
   */
  declare bomExplosion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Area.
   * Maximum length: 4.
   * @nullable
   */
  declare businessArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consumption.
   * Maximum length: 1.
   * @nullable
   */
  declare consumptionPosting?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * CO Area.
   * Maximum length: 4.
   * @nullable
   */
  declare controllingArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Center.
   * Maximum length: 10.
   * @nullable
   */
  declare costCenter?: DeserializedType<T, 'Edm.String'> | null;
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
   * Engin. Change.
   * Maximum length: 17.
   * @nullable
   */
  declare custEngineeringChgStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery.
   * Maximum length: 10.
   */
  declare deliveryDocument: DeserializedType<T, 'Edm.String'>;
  /**
   * Item.
   * Maximum length: 6.
   */
  declare deliveryDocumentItem: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Category.
   * Maximum length: 4.
   * @nullable
   */
  declare deliveryDocumentItemCategory?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Item Descr.
   * Maximum length: 40.
   * @nullable
   */
  declare deliveryDocumentItemText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Group.
   * Maximum length: 3.
   * @nullable
   */
  declare deliveryGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Unit.
   * Maximum length: 3.
   * @nullable
   */
  declare deliveryQuantityUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Status.
   * Maximum length: 1.
   * @nullable
   */
  declare deliveryRelatedBillingStatus?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Denominat.
   * @nullable
   */
  declare deliveryToBaseQuantityDnmntr?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Numerator.
   * @nullable
   */
  declare deliveryToBaseQuantityNmrtr?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Department.
   * Maximum length: 4.
   * @nullable
   */
  declare departmentClassificationByCust?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Distr. Channel.
   * Maximum length: 2.
   * @nullable
   */
  declare distributionChannel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Division.
   * Maximum length: 2.
   * @nullable
   */
  declare division?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed proc.time.
   * @nullable
   */
  declare fixedShipgProcgDurationInDays?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * G/L Account.
   * Maximum length: 10.
   * @nullable
   */
  declare glAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason for mvt.
   * Maximum length: 4.
   * @nullable
   */
  declare goodsMovementReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * GoodsMovementSt.
   * Maximum length: 1.
   * @nullable
   */
  declare goodsMovementStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Movement Type.
   * Maximum length: 3.
   * @nullable
   */
  declare goodsMovementType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Higher-Lev.Item.
   * Maximum length: 6.
   * @nullable
   */
  declare higherLevelItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inspection Lot.
   * Maximum length: 12.
   * @nullable
   */
  declare inspectionLot?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Partial lot.
   * Maximum length: 6.
   * @nullable
   */
  declare inspectionPartialLot?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Interco. BillSt.
   * Maximum length: 1.
   * @nullable
   */
  declare intercompanyBillingStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * EAN/UPC.
   * Maximum length: 18.
   * @nullable
   */
  declare internationalArticleNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Special Stock.
   * Maximum length: 1.
   * @nullable
   */
  declare inventorySpecialStockType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valuation Type.
   * Maximum length: 10.
   * @nullable
   */
  declare inventoryValuationType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deliv. Compl.
   * @nullable
   */
  declare isCompletelyDelivered?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * No gds movement.
   * Maximum length: 1.
   * @nullable
   */
  declare isNotGoodsMovementsRelevant?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Separate val.
   * @nullable
   */
  declare isSeparateValuation?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Receiving Batch.
   * Maximum length: 10.
   * @nullable
   */
  declare issgOrRcvgBatch?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving Mat.
   * Maximum length: 40.
   * @nullable
   */
  declare issgOrRcvgMaterial?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sp.ind.st.tfr.
   * Maximum length: 1.
   * @nullable
   */
  declare issgOrRcvgSpclStockInd?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Stock Category.
   * Maximum length: 1.
   * @nullable
   */
  declare issgOrRcvgStockCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Val. Type Tfr.
   * Maximum length: 10.
   * @nullable
   */
  declare issgOrRcvgValuationType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving plant.
   * Maximum length: 4.
   * @nullable
   */
  declare issuingOrReceivingPlant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving SLoc.
   * Maximum length: 4.
   * @nullable
   */
  declare issuingOrReceivingStorageLoc?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Billing Block.
   * Maximum length: 2.
   * @nullable
   */
  declare itemBillingBlockReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Bill.Data.
   * Maximum length: 1.
   * @nullable
   */
  declare itemBillingIncompletionStatus?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Item Deliv.Data.
   * Maximum length: 1.
   * @nullable
   */
  declare itemDeliveryIncompletionStatus?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Item data: GM.
   * Maximum length: 1.
   * @nullable
   */
  declare itemGdsMvtIncompletionSts?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item.
   * Maximum length: 1.
   * @nullable
   */
  declare itemGeneralIncompletionStatus?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Gross Weight.
   * @nullable
   */
  declare itemGrossWeight?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Relev.for Bill.
   * Maximum length: 1.
   * @nullable
   */
  declare itemIsBillingRelevant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Net Weight.
   * @nullable
   */
  declare itemNetWeight?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * It.data pckgng.
   * Maximum length: 1.
   * @nullable
   */
  declare itemPackingIncompletionStatus?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Item data pck/putawy.
   * Maximum length: 1.
   * @nullable
   */
  declare itemPickingIncompletionStatus?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Volume.
   * @nullable
   */
  declare itemVolume?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Volume Unit.
   * Maximum length: 3.
   * @nullable
   */
  declare itemVolumeUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit of Weight.
   * Maximum length: 3.
   * @nullable
   */
  declare itemWeightUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Changed On.
   * @nullable
   */
  declare lastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Loading Group.
   * Maximum length: 4.
   * @nullable
   */
  declare loadingGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date of Manuf.
   * @nullable
   */
  declare manufactureDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Material.
   * Maximum length: 40.
   * @nullable
   */
  declare material?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cust. Material.
   * Maximum length: 35.
   * @nullable
   */
  declare materialByCustomer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mat.freight grp.
   * Maximum length: 8.
   * @nullable
   */
  declare materialFreightGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material Group.
   * Maximum length: 9.
   * @nullable
   */
  declare materialGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Batch Mgmt Rqt.
   * @nullable
   */
  declare materialIsBatchManaged?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Batches.
   * @nullable
   */
  declare materialIsIntBatchManaged?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * No.serial no.
   * @nullable
   */
  declare numberOfSerialNumbers?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Order.
   * Maximum length: 12.
   * @nullable
   */
  declare orderId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order item no.
   * Maximum length: 4.
   * @nullable
   */
  declare orderItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Qty.
   * @nullable
   */
  declare originalDeliveryQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * MaterialEntered.
   * Maximum length: 40.
   * @nullable
   */
  declare originallyRequestedMaterial?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Overdeliv. Tol.
   * @nullable
   */
  declare overdelivTolrtdLmtRatioInPct?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Packing Status.
   * Maximum length: 1.
   * @nullable
   */
  declare packingStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Part.Dlv./Item.
   * Maximum length: 1.
   * @nullable
   */
  declare partialDeliveryIsAllowed?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * PaytGuarantForm.
   * Maximum length: 2.
   * @nullable
   */
  declare paymentGuaranteeForm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirmation.
   * Maximum length: 1.
   * @nullable
   */
  declare pickingConfirmationStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Picking ID.
   * Maximum length: 1.
   * @nullable
   */
  declare pickingControl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Picking Status.
   * Maximum length: 1.
   * @nullable
   */
  declare pickingStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Plant.
   * Maximum length: 4.
   * @nullable
   */
  declare plant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Main posting id.
   * Maximum length: 1.
   * @nullable
   */
  declare primaryPostingSwitch?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mat.Avail.Date.
   * @nullable
   */
  declare productAvailabilityDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Matl Staging Tme.
   * @nullable
   */
  declare productAvailabilityTime?: DeserializedType<T, 'Edm.Time'> | null;
  /**
   * Configuration.
   * Maximum length: 18.
   * @nullable
   */
  declare productConfiguration?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prod. Hierarchy.
   * Maximum length: 18.
   * @nullable
   */
  declare productHierarchyNode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Profit. Segment.
   * Maximum length: 10.
   * @nullable
   */
  declare profitabilitySegment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Profit Center.
   * Maximum length: 10.
   * @nullable
   */
  declare profitCenter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * POD rel. RC/SC.
   * Maximum length: 1.
   * @nullable
   */
  declare proofOfDeliveryRelevanceCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * POD status.
   * Maximum length: 1.
   * @nullable
   */
  declare proofOfDeliveryStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qty. is fixed.
   * @nullable
   */
  declare quantityIsFixed?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Recv. Point.
   * Maximum length: 25.
   * @nullable
   */
  declare receivingPoint?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * PrDocLogSys.
   * Maximum length: 10.
   * @nullable
   */
  declare referenceDocumentLogicalSystem?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Ref. Document.
   * Maximum length: 10.
   * @nullable
   */
  declare referenceSdDocument?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prec.Doc.Categ.
   * Maximum length: 4.
   * @nullable
   */
  declare referenceSdDocumentCategory?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Reference Item.
   * Maximum length: 6.
   * @nullable
   */
  declare referenceSdDocumentItem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Item Number.
   * Maximum length: 6.
   * @nullable
   */
  declare deliveryDocumentItemBySupplier?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Promotion.
   * Maximum length: 10.
   * @nullable
   */
  declare retailPromotion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Type.
   * Maximum length: 1.
   * @nullable
   */
  declare salesDocumentItemType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Group.
   * Maximum length: 3.
   * @nullable
   */
  declare salesGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Office.
   * Maximum length: 4.
   * @nullable
   */
  declare salesOffice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Cat.
   * Maximum length: 4.
   * @nullable
   */
  declare sdDocumentCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Overall Status.
   * Maximum length: 1.
   * @nullable
   */
  declare sdProcessStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * SLED/BBD.
   * @nullable
   */
  declare shelfLifeExpirationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Statistics Date.
   * @nullable
   */
  declare statisticsDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Stock Type.
   * Maximum length: 1.
   * @nullable
   */
  declare stockType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Storage Bin.
   * Maximum length: 10.
   * @nullable
   */
  declare storageBin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Stor. Location.
   * Maximum length: 4.
   * @nullable
   */
  declare storageLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Storage Type.
   * Maximum length: 3.
   * @nullable
   */
  declare storageType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub.movmnt type.
   * Maximum length: 3.
   * @nullable
   */
  declare subsequentMovementType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans. Group.
   * Maximum length: 4.
   * @nullable
   */
  declare transportationGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Underdel. Tol.
   * @nullable
   */
  declare underdelivTolrtdLmtRatioInPct?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Unlimited.
   * @nullable
   */
  declare unlimitedOverdeliveryIsAllowed?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  /**
   * Var. proc. time.
   * @nullable
   */
  declare varblShipgProcgDurationInDays?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Warehouse No.
   * Maximum length: 3.
   * @nullable
   */
  declare warehouse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * WM Activ.Status.
   * Maximum length: 1.
   * @nullable
   */
  declare warehouseActivityStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Staging Area.
   * Maximum length: 10.
   * @nullable
   */
  declare warehouseStagingArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Version.
   * Maximum length: 4.
   * @nullable
   */
  declare deliveryVersion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Stock Category.
   * Maximum length: 1.
   * @nullable
   */
  declare warehouseStockCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Storage Bin.
   * Maximum length: 10.
   * @nullable
   */
  declare warehouseStorageBin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link InbDeliverySerialNmbr} entity.
   */
  declare toSerialDeliveryItem?: InbDeliverySerialNmbr<T> | null;
  /**
   * One-to-many navigation property to the {@link InbDeliveryDocFlow} entity.
   */
  declare toDocumentFlow: InbDeliveryDocFlow<T>[];
  /**
   * One-to-many navigation property to the {@link InbDeliveryItemText} entity.
   */
  declare toDeliveryDocumentItemText: InbDeliveryItemText<T>[];

  constructor(_entityApi: InbDeliveryItemApi<T>) {
    super(_entityApi);
  }
}

export interface InbDeliveryItemType<
  T extends DeSerializers = DefaultDeSerializers
> {
  actualDeliveredQtyInBaseUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
  actualDeliveryQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  additionalCustomerGroup1?: DeserializedType<T, 'Edm.String'> | null;
  additionalCustomerGroup2?: DeserializedType<T, 'Edm.String'> | null;
  additionalCustomerGroup3?: DeserializedType<T, 'Edm.String'> | null;
  additionalCustomerGroup4?: DeserializedType<T, 'Edm.String'> | null;
  additionalCustomerGroup5?: DeserializedType<T, 'Edm.String'> | null;
  additionalMaterialGroup1?: DeserializedType<T, 'Edm.String'> | null;
  additionalMaterialGroup2?: DeserializedType<T, 'Edm.String'> | null;
  additionalMaterialGroup3?: DeserializedType<T, 'Edm.String'> | null;
  additionalMaterialGroup4?: DeserializedType<T, 'Edm.String'> | null;
  additionalMaterialGroup5?: DeserializedType<T, 'Edm.String'> | null;
  alternateProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  baseUnit?: DeserializedType<T, 'Edm.String'> | null;
  batch?: DeserializedType<T, 'Edm.String'> | null;
  batchBySupplier?: DeserializedType<T, 'Edm.String'> | null;
  batchClassification?: DeserializedType<T, 'Edm.String'> | null;
  bomExplosion?: DeserializedType<T, 'Edm.String'> | null;
  businessArea?: DeserializedType<T, 'Edm.String'> | null;
  consumptionPosting?: DeserializedType<T, 'Edm.String'> | null;
  controllingArea?: DeserializedType<T, 'Edm.String'> | null;
  costCenter?: DeserializedType<T, 'Edm.String'> | null;
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  creationTime?: DeserializedType<T, 'Edm.Time'> | null;
  custEngineeringChgStatus?: DeserializedType<T, 'Edm.String'> | null;
  deliveryDocument: DeserializedType<T, 'Edm.String'>;
  deliveryDocumentItem: DeserializedType<T, 'Edm.String'>;
  deliveryDocumentItemCategory?: DeserializedType<T, 'Edm.String'> | null;
  deliveryDocumentItemText?: DeserializedType<T, 'Edm.String'> | null;
  deliveryGroup?: DeserializedType<T, 'Edm.String'> | null;
  deliveryQuantityUnit?: DeserializedType<T, 'Edm.String'> | null;
  deliveryRelatedBillingStatus?: DeserializedType<T, 'Edm.String'> | null;
  deliveryToBaseQuantityDnmntr?: DeserializedType<T, 'Edm.Decimal'> | null;
  deliveryToBaseQuantityNmrtr?: DeserializedType<T, 'Edm.Decimal'> | null;
  departmentClassificationByCust?: DeserializedType<T, 'Edm.String'> | null;
  distributionChannel?: DeserializedType<T, 'Edm.String'> | null;
  division?: DeserializedType<T, 'Edm.String'> | null;
  fixedShipgProcgDurationInDays?: DeserializedType<T, 'Edm.Decimal'> | null;
  glAccount?: DeserializedType<T, 'Edm.String'> | null;
  goodsMovementReasonCode?: DeserializedType<T, 'Edm.String'> | null;
  goodsMovementStatus?: DeserializedType<T, 'Edm.String'> | null;
  goodsMovementType?: DeserializedType<T, 'Edm.String'> | null;
  higherLevelItem?: DeserializedType<T, 'Edm.String'> | null;
  inspectionLot?: DeserializedType<T, 'Edm.String'> | null;
  inspectionPartialLot?: DeserializedType<T, 'Edm.String'> | null;
  intercompanyBillingStatus?: DeserializedType<T, 'Edm.String'> | null;
  internationalArticleNumber?: DeserializedType<T, 'Edm.String'> | null;
  inventorySpecialStockType?: DeserializedType<T, 'Edm.String'> | null;
  inventoryValuationType?: DeserializedType<T, 'Edm.String'> | null;
  isCompletelyDelivered?: DeserializedType<T, 'Edm.Boolean'> | null;
  isNotGoodsMovementsRelevant?: DeserializedType<T, 'Edm.String'> | null;
  isSeparateValuation?: DeserializedType<T, 'Edm.Boolean'> | null;
  issgOrRcvgBatch?: DeserializedType<T, 'Edm.String'> | null;
  issgOrRcvgMaterial?: DeserializedType<T, 'Edm.String'> | null;
  issgOrRcvgSpclStockInd?: DeserializedType<T, 'Edm.String'> | null;
  issgOrRcvgStockCategory?: DeserializedType<T, 'Edm.String'> | null;
  issgOrRcvgValuationType?: DeserializedType<T, 'Edm.String'> | null;
  issuingOrReceivingPlant?: DeserializedType<T, 'Edm.String'> | null;
  issuingOrReceivingStorageLoc?: DeserializedType<T, 'Edm.String'> | null;
  itemBillingBlockReason?: DeserializedType<T, 'Edm.String'> | null;
  itemBillingIncompletionStatus?: DeserializedType<T, 'Edm.String'> | null;
  itemDeliveryIncompletionStatus?: DeserializedType<T, 'Edm.String'> | null;
  itemGdsMvtIncompletionSts?: DeserializedType<T, 'Edm.String'> | null;
  itemGeneralIncompletionStatus?: DeserializedType<T, 'Edm.String'> | null;
  itemGrossWeight?: DeserializedType<T, 'Edm.Decimal'> | null;
  itemIsBillingRelevant?: DeserializedType<T, 'Edm.String'> | null;
  itemNetWeight?: DeserializedType<T, 'Edm.Decimal'> | null;
  itemPackingIncompletionStatus?: DeserializedType<T, 'Edm.String'> | null;
  itemPickingIncompletionStatus?: DeserializedType<T, 'Edm.String'> | null;
  itemVolume?: DeserializedType<T, 'Edm.Decimal'> | null;
  itemVolumeUnit?: DeserializedType<T, 'Edm.String'> | null;
  itemWeightUnit?: DeserializedType<T, 'Edm.String'> | null;
  lastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  loadingGroup?: DeserializedType<T, 'Edm.String'> | null;
  manufactureDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  material?: DeserializedType<T, 'Edm.String'> | null;
  materialByCustomer?: DeserializedType<T, 'Edm.String'> | null;
  materialFreightGroup?: DeserializedType<T, 'Edm.String'> | null;
  materialGroup?: DeserializedType<T, 'Edm.String'> | null;
  materialIsBatchManaged?: DeserializedType<T, 'Edm.Boolean'> | null;
  materialIsIntBatchManaged?: DeserializedType<T, 'Edm.Boolean'> | null;
  numberOfSerialNumbers?: DeserializedType<T, 'Edm.Int32'> | null;
  orderId?: DeserializedType<T, 'Edm.String'> | null;
  orderItem?: DeserializedType<T, 'Edm.String'> | null;
  originalDeliveryQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  originallyRequestedMaterial?: DeserializedType<T, 'Edm.String'> | null;
  overdelivTolrtdLmtRatioInPct?: DeserializedType<T, 'Edm.Decimal'> | null;
  packingStatus?: DeserializedType<T, 'Edm.String'> | null;
  partialDeliveryIsAllowed?: DeserializedType<T, 'Edm.String'> | null;
  paymentGuaranteeForm?: DeserializedType<T, 'Edm.String'> | null;
  pickingConfirmationStatus?: DeserializedType<T, 'Edm.String'> | null;
  pickingControl?: DeserializedType<T, 'Edm.String'> | null;
  pickingStatus?: DeserializedType<T, 'Edm.String'> | null;
  plant?: DeserializedType<T, 'Edm.String'> | null;
  primaryPostingSwitch?: DeserializedType<T, 'Edm.String'> | null;
  productAvailabilityDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  productAvailabilityTime?: DeserializedType<T, 'Edm.Time'> | null;
  productConfiguration?: DeserializedType<T, 'Edm.String'> | null;
  productHierarchyNode?: DeserializedType<T, 'Edm.String'> | null;
  profitabilitySegment?: DeserializedType<T, 'Edm.String'> | null;
  profitCenter?: DeserializedType<T, 'Edm.String'> | null;
  proofOfDeliveryRelevanceCode?: DeserializedType<T, 'Edm.String'> | null;
  proofOfDeliveryStatus?: DeserializedType<T, 'Edm.String'> | null;
  quantityIsFixed?: DeserializedType<T, 'Edm.Boolean'> | null;
  receivingPoint?: DeserializedType<T, 'Edm.String'> | null;
  referenceDocumentLogicalSystem?: DeserializedType<T, 'Edm.String'> | null;
  referenceSdDocument?: DeserializedType<T, 'Edm.String'> | null;
  referenceSdDocumentCategory?: DeserializedType<T, 'Edm.String'> | null;
  referenceSdDocumentItem?: DeserializedType<T, 'Edm.String'> | null;
  deliveryDocumentItemBySupplier?: DeserializedType<T, 'Edm.String'> | null;
  retailPromotion?: DeserializedType<T, 'Edm.String'> | null;
  salesDocumentItemType?: DeserializedType<T, 'Edm.String'> | null;
  salesGroup?: DeserializedType<T, 'Edm.String'> | null;
  salesOffice?: DeserializedType<T, 'Edm.String'> | null;
  sdDocumentCategory?: DeserializedType<T, 'Edm.String'> | null;
  sdProcessStatus?: DeserializedType<T, 'Edm.String'> | null;
  shelfLifeExpirationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  statisticsDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  stockType?: DeserializedType<T, 'Edm.String'> | null;
  storageBin?: DeserializedType<T, 'Edm.String'> | null;
  storageLocation?: DeserializedType<T, 'Edm.String'> | null;
  storageType?: DeserializedType<T, 'Edm.String'> | null;
  subsequentMovementType?: DeserializedType<T, 'Edm.String'> | null;
  transportationGroup?: DeserializedType<T, 'Edm.String'> | null;
  underdelivTolrtdLmtRatioInPct?: DeserializedType<T, 'Edm.Decimal'> | null;
  unlimitedOverdeliveryIsAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  varblShipgProcgDurationInDays?: DeserializedType<T, 'Edm.Decimal'> | null;
  warehouse?: DeserializedType<T, 'Edm.String'> | null;
  warehouseActivityStatus?: DeserializedType<T, 'Edm.String'> | null;
  warehouseStagingArea?: DeserializedType<T, 'Edm.String'> | null;
  deliveryVersion?: DeserializedType<T, 'Edm.String'> | null;
  warehouseStockCategory?: DeserializedType<T, 'Edm.String'> | null;
  warehouseStorageBin?: DeserializedType<T, 'Edm.String'> | null;
  toSerialDeliveryItem?: InbDeliverySerialNmbrType<T> | null;
  toDocumentFlow: InbDeliveryDocFlowType<T>[];
  toDeliveryDocumentItemText: InbDeliveryItemTextType<T>[];
}
