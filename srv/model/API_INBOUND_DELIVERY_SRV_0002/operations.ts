/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import {
  entityDeserializer,
  transformReturnValueForComplexTypeList,
  transformReturnValueForComplexType,
  DeSerializers,
  DefaultDeSerializers,
  defaultDeSerializers,
  OperationParameter,
  OperationRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { apiInboundDeliverySrv0002 } from './service';
import { PutawayReport } from './PutawayReport';
import { DeliveryMessage } from './DeliveryMessage';
import { CreatedDeliveryItem } from './CreatedDeliveryItem';

/**
 * Type of the parameters to be passed to {@link confirmPutawayAllItems}.
 */
export interface ConfirmPutawayAllItemsParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Delivery Document.
   */
  deliveryDocument?: string | null;
}

/**
 * Confirm Putaway All Items.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function confirmPutawayAllItems<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ConfirmPutawayAllItemsParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  ConfirmPutawayAllItemsParameters<DeSerializersT>,
  PutawayReport[]
> {
  const params = {
    deliveryDocument: new OperationParameter(
      'DeliveryDocument',
      'Edm.String',
      parameters.deliveryDocument
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002',
    'ConfirmPutawayAllItems',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, PutawayReport)
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link confirmPutawayOneItem}.
 */
export interface ConfirmPutawayOneItemParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Delivery Document.
   */
  deliveryDocument?: string | null;
  /**
   * Delivery Document Item.
   */
  deliveryDocumentItem?: string | null;
}

/**
 * Confirm Putaway One Item.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function confirmPutawayOneItem<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ConfirmPutawayOneItemParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  ConfirmPutawayOneItemParameters<DeSerializersT>,
  PutawayReport[]
> {
  const params = {
    deliveryDocument: new OperationParameter(
      'DeliveryDocument',
      'Edm.String',
      parameters.deliveryDocument
    ),
    deliveryDocumentItem: new OperationParameter(
      'DeliveryDocumentItem',
      'Edm.String',
      parameters.deliveryDocumentItem
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002',
    'ConfirmPutawayOneItem',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, PutawayReport)
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link postGoodsReceipt}.
 */
export interface PostGoodsReceiptParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Delivery Document.
   */
  deliveryDocument?: string | null;
  /**
   * Actual Goods Movement Date.
   */
  actualGoodsMovementDate?: Moment | null;
}

/**
 * Post Goods Receipt.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function postGoodsReceipt<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: PostGoodsReceiptParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  PostGoodsReceiptParameters<DeSerializersT>,
  PutawayReport[]
> {
  const params = {
    deliveryDocument: new OperationParameter(
      'DeliveryDocument',
      'Edm.String',
      parameters.deliveryDocument
    ),
    actualGoodsMovementDate: new OperationParameter(
      'ActualGoodsMovementDate',
      'Edm.DateTime',
      parameters.actualGoodsMovementDate
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002',
    'PostGoodsReceipt',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, PutawayReport)
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link putawayAllItems}.
 */
export interface PutawayAllItemsParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Delivery Document.
   */
  deliveryDocument?: string | null;
}

/**
 * Putaway All Items.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function putawayAllItems<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: PutawayAllItemsParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  PutawayAllItemsParameters<DeSerializersT>,
  PutawayReport[]
> {
  const params = {
    deliveryDocument: new OperationParameter(
      'DeliveryDocument',
      'Edm.String',
      parameters.deliveryDocument
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002',
    'PutawayAllItems',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, PutawayReport)
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link putawayOneItem}.
 */
export interface PutawayOneItemParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Delivery Document.
   */
  deliveryDocument?: string | null;
  /**
   * Delivery Document Item.
   */
  deliveryDocumentItem?: string | null;
}

/**
 * Putaway One Item.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function putawayOneItem<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: PutawayOneItemParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  PutawayOneItemParameters<DeSerializersT>,
  PutawayReport[]
> {
  const params = {
    deliveryDocument: new OperationParameter(
      'DeliveryDocument',
      'Edm.String',
      parameters.deliveryDocument
    ),
    deliveryDocumentItem: new OperationParameter(
      'DeliveryDocumentItem',
      'Edm.String',
      parameters.deliveryDocumentItem
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002',
    'PutawayOneItem',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, PutawayReport)
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link reverseGoodsReceipt}.
 */
export interface ReverseGoodsReceiptParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Delivery Document.
   */
  deliveryDocument?: string | null;
  /**
   * Actual Goods Movement Date.
   */
  actualGoodsMovementDate?: Moment | null;
}

/**
 * Reverse Goods Receipt.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function reverseGoodsReceipt<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ReverseGoodsReceiptParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  ReverseGoodsReceiptParameters<DeSerializersT>,
  DeliveryMessage[]
> {
  const params = {
    deliveryDocument: new OperationParameter(
      'DeliveryDocument',
      'Edm.String',
      parameters.deliveryDocument
    ),
    actualGoodsMovementDate: new OperationParameter(
      'ActualGoodsMovementDate',
      'Edm.DateTime',
      parameters.actualGoodsMovementDate
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002',
    'ReverseGoodsReceipt',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, DeliveryMessage)
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link createBatchSplitItem}.
 */
export interface CreateBatchSplitItemParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Batch By Supplier.
   */
  batchBySupplier?: string | null;
  /**
   * Manufacture Date.
   */
  manufactureDate?: Moment | null;
  /**
   * Shelf Life Expiration Date.
   */
  shelfLifeExpirationDate?: Moment | null;
  /**
   * Actual Delivery Quantity.
   */
  actualDeliveryQuantity?: BigNumber | null;
  /**
   * Batch.
   */
  batch?: string | null;
  /**
   * Delivery Document.
   */
  deliveryDocument?: string | null;
  /**
   * Delivery Document Item.
   */
  deliveryDocumentItem?: string | null;
  /**
   * Delivery Quantity Unit.
   */
  deliveryQuantityUnit?: string | null;
  /**
   * Putaway Quantity In Order Unit.
   */
  putawayQuantityInOrderUnit?: BigNumber | null;
}

/**
 * Create Batch Split Item.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function createBatchSplitItem<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: CreateBatchSplitItemParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  CreateBatchSplitItemParameters<DeSerializersT>,
  CreatedDeliveryItem
> {
  const params = {
    batchBySupplier: new OperationParameter(
      'BatchBySupplier',
      'Edm.String',
      parameters.batchBySupplier
    ),
    manufactureDate: new OperationParameter(
      'ManufactureDate',
      'Edm.DateTime',
      parameters.manufactureDate
    ),
    shelfLifeExpirationDate: new OperationParameter(
      'ShelfLifeExpirationDate',
      'Edm.DateTime',
      parameters.shelfLifeExpirationDate
    ),
    actualDeliveryQuantity: new OperationParameter(
      'ActualDeliveryQuantity',
      'Edm.Decimal',
      parameters.actualDeliveryQuantity
    ),
    batch: new OperationParameter('Batch', 'Edm.String', parameters.batch),
    deliveryDocument: new OperationParameter(
      'DeliveryDocument',
      'Edm.String',
      parameters.deliveryDocument
    ),
    deliveryDocumentItem: new OperationParameter(
      'DeliveryDocumentItem',
      'Edm.String',
      parameters.deliveryDocumentItem
    ),
    deliveryQuantityUnit: new OperationParameter(
      'DeliveryQuantityUnit',
      'Edm.String',
      parameters.deliveryQuantityUnit
    ),
    putawayQuantityInOrderUnit: new OperationParameter(
      'PutawayQuantityInOrderUnit',
      'Edm.Decimal',
      parameters.putawayQuantityInOrderUnit
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002',
    'CreateBatchSplitItem',
    data =>
      transformReturnValueForComplexType(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, CreatedDeliveryItem)
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link addSerialNumberToDeliveryItem}.
 */
export interface AddSerialNumberToDeliveryItemParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Delivery Document.
   */
  deliveryDocument?: string | null;
  /**
   * Delivery Document Item.
   */
  deliveryDocumentItem?: string | null;
  /**
   * Serial Number.
   */
  serialNumber?: string | null;
}

/**
 * Add Serial Number To Delivery Item.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function addSerialNumberToDeliveryItem<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: AddSerialNumberToDeliveryItemParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  AddSerialNumberToDeliveryItemParameters<DeSerializersT>,
  PutawayReport[]
> {
  const params = {
    deliveryDocument: new OperationParameter(
      'DeliveryDocument',
      'Edm.String',
      parameters.deliveryDocument
    ),
    deliveryDocumentItem: new OperationParameter(
      'DeliveryDocumentItem',
      'Edm.String',
      parameters.deliveryDocumentItem
    ),
    serialNumber: new OperationParameter(
      'SerialNumber',
      'Edm.String',
      parameters.serialNumber
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002',
    'AddSerialNumberToDeliveryItem',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, PutawayReport)
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link deleteAllSerialNumbersFromDeliveryItem}.
 */
export interface DeleteAllSerialNumbersFromDeliveryItemParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Delivery Document.
   */
  deliveryDocument?: string | null;
  /**
   * Delivery Document Item.
   */
  deliveryDocumentItem?: string | null;
}

/**
 * Delete All Serial Numbers From Delivery Item.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function deleteAllSerialNumbersFromDeliveryItem<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DeleteAllSerialNumbersFromDeliveryItemParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  DeleteAllSerialNumbersFromDeliveryItemParameters<DeSerializersT>,
  PutawayReport[]
> {
  const params = {
    deliveryDocument: new OperationParameter(
      'DeliveryDocument',
      'Edm.String',
      parameters.deliveryDocument
    ),
    deliveryDocumentItem: new OperationParameter(
      'DeliveryDocumentItem',
      'Edm.String',
      parameters.deliveryDocumentItem
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002',
    'DeleteAllSerialNumbersFromDeliveryItem',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, PutawayReport)
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link deleteSerialNumberFromDeliveryItem}.
 */
export interface DeleteSerialNumberFromDeliveryItemParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Delivery Document.
   */
  deliveryDocument?: string | null;
  /**
   * Delivery Document Item.
   */
  deliveryDocumentItem?: string | null;
  /**
   * Serial Number.
   */
  serialNumber?: string | null;
}

/**
 * Delete Serial Number From Delivery Item.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function deleteSerialNumberFromDeliveryItem<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DeleteSerialNumberFromDeliveryItemParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  DeleteSerialNumberFromDeliveryItemParameters<DeSerializersT>,
  PutawayReport[]
> {
  const params = {
    deliveryDocument: new OperationParameter(
      'DeliveryDocument',
      'Edm.String',
      parameters.deliveryDocument
    ),
    deliveryDocumentItem: new OperationParameter(
      'DeliveryDocumentItem',
      'Edm.String',
      parameters.deliveryDocumentItem
    ),
    serialNumber: new OperationParameter(
      'SerialNumber',
      'Edm.String',
      parameters.serialNumber
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002',
    'DeleteSerialNumberFromDeliveryItem',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, PutawayReport)
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link setPutawayQuantityWithBaseQuantity}.
 */
export interface SetPutawayQuantityWithBaseQuantityParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Actual Delivered Qty In Base Unit.
   */
  actualDeliveredQtyInBaseUnit?: BigNumber | null;
  /**
   * Base Unit.
   */
  baseUnit?: string | null;
  /**
   * Delivery Document.
   */
  deliveryDocument?: string | null;
  /**
   * Delivery Document Item.
   */
  deliveryDocumentItem?: string | null;
}

/**
 * Set Putaway Quantity With Base Quantity.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function setPutawayQuantityWithBaseQuantity<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: SetPutawayQuantityWithBaseQuantityParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  SetPutawayQuantityWithBaseQuantityParameters<DeSerializersT>,
  PutawayReport[]
> {
  const params = {
    actualDeliveredQtyInBaseUnit: new OperationParameter(
      'ActualDeliveredQtyInBaseUnit',
      'Edm.Decimal',
      parameters.actualDeliveredQtyInBaseUnit
    ),
    baseUnit: new OperationParameter(
      'BaseUnit',
      'Edm.String',
      parameters.baseUnit
    ),
    deliveryDocument: new OperationParameter(
      'DeliveryDocument',
      'Edm.String',
      parameters.deliveryDocument
    ),
    deliveryDocumentItem: new OperationParameter(
      'DeliveryDocumentItem',
      'Edm.String',
      parameters.deliveryDocumentItem
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002',
    'SetPutawayQuantityWithBaseQuantity',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, PutawayReport)
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link putawayOneItemWithBaseQuantity}.
 */
export interface PutawayOneItemWithBaseQuantityParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Actual Delivered Qty In Base Unit.
   */
  actualDeliveredQtyInBaseUnit?: BigNumber | null;
  /**
   * Base Unit.
   */
  baseUnit?: string | null;
  /**
   * Delivery Document.
   */
  deliveryDocument?: string | null;
  /**
   * Delivery Document Item.
   */
  deliveryDocumentItem?: string | null;
}

/**
 * Putaway One Item With Base Quantity.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function putawayOneItemWithBaseQuantity<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: PutawayOneItemWithBaseQuantityParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  PutawayOneItemWithBaseQuantityParameters<DeSerializersT>,
  PutawayReport[]
> {
  const params = {
    actualDeliveredQtyInBaseUnit: new OperationParameter(
      'ActualDeliveredQtyInBaseUnit',
      'Edm.Decimal',
      parameters.actualDeliveredQtyInBaseUnit
    ),
    baseUnit: new OperationParameter(
      'BaseUnit',
      'Edm.String',
      parameters.baseUnit
    ),
    deliveryDocument: new OperationParameter(
      'DeliveryDocument',
      'Edm.String',
      parameters.deliveryDocument
    ),
    deliveryDocumentItem: new OperationParameter(
      'DeliveryDocumentItem',
      'Edm.String',
      parameters.deliveryDocumentItem
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002',
    'PutawayOneItemWithBaseQuantity',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, PutawayReport)
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link putawayOneItemWithSalesQuantity}.
 */
export interface PutawayOneItemWithSalesQuantityParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Actual Delivery Quantity.
   */
  actualDeliveryQuantity?: BigNumber | null;
  /**
   * Delivery Document.
   */
  deliveryDocument?: string | null;
  /**
   * Delivery Document Item.
   */
  deliveryDocumentItem?: string | null;
  /**
   * Delivery Quantity Unit.
   */
  deliveryQuantityUnit?: string | null;
}

/**
 * Putaway One Item With Sales Quantity.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function putawayOneItemWithSalesQuantity<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: PutawayOneItemWithSalesQuantityParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  PutawayOneItemWithSalesQuantityParameters<DeSerializersT>,
  PutawayReport[]
> {
  const params = {
    actualDeliveryQuantity: new OperationParameter(
      'ActualDeliveryQuantity',
      'Edm.Decimal',
      parameters.actualDeliveryQuantity
    ),
    deliveryDocument: new OperationParameter(
      'DeliveryDocument',
      'Edm.String',
      parameters.deliveryDocument
    ),
    deliveryDocumentItem: new OperationParameter(
      'DeliveryDocumentItem',
      'Edm.String',
      parameters.deliveryDocumentItem
    ),
    deliveryQuantityUnit: new OperationParameter(
      'DeliveryQuantityUnit',
      'Edm.String',
      parameters.deliveryQuantityUnit
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002',
    'PutawayOneItemWithSalesQuantity',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, PutawayReport)
      ),
    params,
    deSerializers
  );
}

export const operations = {
  confirmPutawayAllItems,
  confirmPutawayOneItem,
  postGoodsReceipt,
  putawayAllItems,
  putawayOneItem,
  reverseGoodsReceipt,
  createBatchSplitItem,
  addSerialNumberToDeliveryItem,
  deleteAllSerialNumbersFromDeliveryItem,
  deleteSerialNumberFromDeliveryItem,
  setPutawayQuantityWithBaseQuantity,
  putawayOneItemWithBaseQuantity,
  putawayOneItemWithSalesQuantity
};
