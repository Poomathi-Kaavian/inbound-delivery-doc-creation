/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeleteRequestBuilder,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  ODataBatchRequestBuilder,
  UpdateRequestBuilder,
  OperationRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v2';
import { transformVariadicArgumentToArray } from '@sap-cloud-sdk/util';
import {
  MaintenanceItemObjList,
  InbDeliveryDocFlow,
  InbDeliveryHeader,
  InbDeliveryItem,
  InbDeliveryPartner,
  InbDeliverySerialNmbr,
  InbDeliveryAddress,
  InbDeliveryHeaderText,
  InbDeliveryItemText,
  ConfirmPutawayAllItemsParameters,
  ConfirmPutawayOneItemParameters,
  PostGoodsReceiptParameters,
  PutawayAllItemsParameters,
  PutawayOneItemParameters,
  ReverseGoodsReceiptParameters,
  CreateBatchSplitItemParameters,
  AddSerialNumberToDeliveryItemParameters,
  DeleteAllSerialNumbersFromDeliveryItemParameters,
  DeleteSerialNumberFromDeliveryItemParameters,
  SetPutawayQuantityWithBaseQuantityParameters,
  PutawayOneItemWithBaseQuantityParameters,
  PutawayOneItemWithSalesQuantityParameters,
  PutawayReport,
  DeliveryMessage,
  CreatedDeliveryItem
} from './index';

/**
 * Batch builder for operations supported on the Api Inbound Delivery Srv 0002.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadApiInboundDeliverySrv0002RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadApiInboundDeliverySrv0002RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadApiInboundDeliverySrv0002RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadApiInboundDeliverySrv0002RequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    | ReadApiInboundDeliverySrv0002RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultApiInboundDeliverySrv0002Path,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the Api Inbound Delivery Srv 0002.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    WriteApiInboundDeliverySrv0002RequestBuilder<DeSerializersT>
  >
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteApiInboundDeliverySrv0002RequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteApiInboundDeliverySrv0002RequestBuilder<DeSerializersT>
    | Array<WriteApiInboundDeliverySrv0002RequestBuilder<DeSerializersT>>,
  ...rest: Array<WriteApiInboundDeliverySrv0002RequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultApiInboundDeliverySrv0002Path =
  '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002';
export type ReadApiInboundDeliverySrv0002RequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<MaintenanceItemObjList<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<InbDeliveryDocFlow<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<InbDeliveryHeader<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<InbDeliveryItem<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<InbDeliveryPartner<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<InbDeliverySerialNmbr<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<InbDeliveryAddress<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<InbDeliveryHeaderText<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<InbDeliveryItemText<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      MaintenanceItemObjList<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<InbDeliveryDocFlow<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<InbDeliveryHeader<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<InbDeliveryItem<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<InbDeliveryPartner<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      InbDeliverySerialNmbr<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<InbDeliveryAddress<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      InbDeliveryHeaderText<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<InbDeliveryItemText<DeSerializersT>, DeSerializersT>;
export type WriteApiInboundDeliverySrv0002RequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<MaintenanceItemObjList<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<MaintenanceItemObjList<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<MaintenanceItemObjList<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<InbDeliveryDocFlow<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<InbDeliveryDocFlow<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<InbDeliveryDocFlow<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<InbDeliveryHeader<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<InbDeliveryHeader<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<InbDeliveryHeader<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<InbDeliveryItem<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<InbDeliveryItem<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<InbDeliveryItem<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<InbDeliveryPartner<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<InbDeliveryPartner<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<InbDeliveryPartner<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<InbDeliverySerialNmbr<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<InbDeliverySerialNmbr<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<InbDeliverySerialNmbr<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<InbDeliveryAddress<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<InbDeliveryAddress<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<InbDeliveryAddress<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<InbDeliveryHeaderText<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<InbDeliveryHeaderText<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<InbDeliveryHeaderText<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<InbDeliveryItemText<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<InbDeliveryItemText<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<InbDeliveryItemText<DeSerializersT>, DeSerializersT>
  | OperationRequestBuilder<
      DeSerializersT,
      ConfirmPutawayAllItemsParameters<DeSerializersT>,
      PutawayReport[]
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ConfirmPutawayOneItemParameters<DeSerializersT>,
      PutawayReport[]
    >
  | OperationRequestBuilder<
      DeSerializersT,
      PostGoodsReceiptParameters<DeSerializersT>,
      PutawayReport[]
    >
  | OperationRequestBuilder<
      DeSerializersT,
      PutawayAllItemsParameters<DeSerializersT>,
      PutawayReport[]
    >
  | OperationRequestBuilder<
      DeSerializersT,
      PutawayOneItemParameters<DeSerializersT>,
      PutawayReport[]
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ReverseGoodsReceiptParameters<DeSerializersT>,
      DeliveryMessage[]
    >
  | OperationRequestBuilder<
      DeSerializersT,
      CreateBatchSplitItemParameters<DeSerializersT>,
      CreatedDeliveryItem
    >
  | OperationRequestBuilder<
      DeSerializersT,
      AddSerialNumberToDeliveryItemParameters<DeSerializersT>,
      PutawayReport[]
    >
  | OperationRequestBuilder<
      DeSerializersT,
      DeleteAllSerialNumbersFromDeliveryItemParameters<DeSerializersT>,
      PutawayReport[]
    >
  | OperationRequestBuilder<
      DeSerializersT,
      DeleteSerialNumberFromDeliveryItemParameters<DeSerializersT>,
      PutawayReport[]
    >
  | OperationRequestBuilder<
      DeSerializersT,
      SetPutawayQuantityWithBaseQuantityParameters<DeSerializersT>,
      PutawayReport[]
    >
  | OperationRequestBuilder<
      DeSerializersT,
      PutawayOneItemWithBaseQuantityParameters<DeSerializersT>,
      PutawayReport[]
    >
  | OperationRequestBuilder<
      DeSerializersT,
      PutawayOneItemWithSalesQuantityParameters<DeSerializersT>,
      PutawayReport[]
    >;
