/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { InbDeliveryPartner } from './InbDeliveryPartner';

/**
 * Request builder class for operations supported on the {@link InbDeliveryPartner} entity.
 */
export class InbDeliveryPartnerRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InbDeliveryPartner<T>, T> {
  /**
   * Returns a request builder for querying all `InbDeliveryPartner` entities.
   * @returns A request builder for creating requests to retrieve all `InbDeliveryPartner` entities.
   */
  getAll(): GetAllRequestBuilder<InbDeliveryPartner<T>, T> {
    return new GetAllRequestBuilder<InbDeliveryPartner<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for retrieving one `InbDeliveryPartner` entity based on its keys.
   * @param partnerFunction Key property. See {@link InbDeliveryPartner.partnerFunction}.
   * @param sdDocument Key property. See {@link InbDeliveryPartner.sdDocument}.
   * @returns A request builder for creating requests to retrieve one `InbDeliveryPartner` entity based on its keys.
   */
  getByKey(
    partnerFunction: DeserializedType<T, 'Edm.String'>,
    sdDocument: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InbDeliveryPartner<T>, T> {
    return new GetByKeyRequestBuilder<InbDeliveryPartner<T>, T>(
      this.entityApi,
      {
        PartnerFunction: partnerFunction,
        SDDocument: sdDocument
      }
    );
  }
}
