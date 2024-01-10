/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import {
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { InbDeliverySerialNmbr } from './InbDeliverySerialNmbr';

/**
 * Request builder class for operations supported on the {@link InbDeliverySerialNmbr} entity.
 */
export class InbDeliverySerialNmbrRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InbDeliverySerialNmbr<T>, T> {
  /**
   * Returns a request builder for querying all `InbDeliverySerialNmbr` entities.
   * @returns A request builder for creating requests to retrieve all `InbDeliverySerialNmbr` entities.
   */
  getAll(): GetAllRequestBuilder<InbDeliverySerialNmbr<T>, T> {
    return new GetAllRequestBuilder<InbDeliverySerialNmbr<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for retrieving one `InbDeliverySerialNmbr` entity based on its keys.
   * @param maintenanceItemObjectList Key property. See {@link InbDeliverySerialNmbr.maintenanceItemObjectList}.
   * @returns A request builder for creating requests to retrieve one `InbDeliverySerialNmbr` entity based on its keys.
   */
  getByKey(
    maintenanceItemObjectList: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<InbDeliverySerialNmbr<T>, T> {
    return new GetByKeyRequestBuilder<InbDeliverySerialNmbr<T>, T>(
      this.entityApi,
      { MaintenanceItemObjectList: maintenanceItemObjectList }
    );
  }
}
