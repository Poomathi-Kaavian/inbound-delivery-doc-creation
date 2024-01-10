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
import { InbDeliveryItemText } from './InbDeliveryItemText';

/**
 * Request builder class for operations supported on the {@link InbDeliveryItemText} entity.
 */
export class InbDeliveryItemTextRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InbDeliveryItemText<T>, T> {
  /**
   * Returns a request builder for querying all `InbDeliveryItemText` entities.
   * @returns A request builder for creating requests to retrieve all `InbDeliveryItemText` entities.
   */
  getAll(): GetAllRequestBuilder<InbDeliveryItemText<T>, T> {
    return new GetAllRequestBuilder<InbDeliveryItemText<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for retrieving one `InbDeliveryItemText` entity based on its keys.
   * @param deliveryDocument Key property. See {@link InbDeliveryItemText.deliveryDocument}.
   * @param deliveryDocumentItem Key property. See {@link InbDeliveryItemText.deliveryDocumentItem}.
   * @param textElement Key property. See {@link InbDeliveryItemText.textElement}.
   * @param language Key property. See {@link InbDeliveryItemText.language}.
   * @returns A request builder for creating requests to retrieve one `InbDeliveryItemText` entity based on its keys.
   */
  getByKey(
    deliveryDocument: DeserializedType<T, 'Edm.String'>,
    deliveryDocumentItem: DeserializedType<T, 'Edm.String'>,
    textElement: DeserializedType<T, 'Edm.String'>,
    language: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InbDeliveryItemText<T>, T> {
    return new GetByKeyRequestBuilder<InbDeliveryItemText<T>, T>(
      this.entityApi,
      {
        DeliveryDocument: deliveryDocument,
        DeliveryDocumentItem: deliveryDocumentItem,
        TextElement: textElement,
        Language: language
      }
    );
  }
}
