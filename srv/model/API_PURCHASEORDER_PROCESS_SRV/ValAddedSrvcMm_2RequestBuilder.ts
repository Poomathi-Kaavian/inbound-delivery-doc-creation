/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { ValAddedSrvcMm_2 } from './ValAddedSrvcMm_2';

/**
 * Request builder class for operations supported on the {@link ValAddedSrvcMm_2} entity.
 */
export class ValAddedSrvcMm_2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ValAddedSrvcMm_2<T>, T> {
  /**
   * Returns a request builder for querying all `ValAddedSrvcMm_2` entities.
   * @returns A request builder for creating requests to retrieve all `ValAddedSrvcMm_2` entities.
   */
  getAll(): GetAllRequestBuilder<ValAddedSrvcMm_2<T>, T> {
    return new GetAllRequestBuilder<ValAddedSrvcMm_2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ValAddedSrvcMm_2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ValAddedSrvcMm_2`.
   */
  create(
    entity: ValAddedSrvcMm_2<T>
  ): CreateRequestBuilder<ValAddedSrvcMm_2<T>, T> {
    return new CreateRequestBuilder<ValAddedSrvcMm_2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ValAddedSrvcMm_2` entity based on its keys.
   * @param purchaseOrder Key property. See {@link ValAddedSrvcMm_2.purchaseOrder}.
   * @param purchaseOrderItem Key property. See {@link ValAddedSrvcMm_2.purchaseOrderItem}.
   * @param valueAddedServiceType Key property. See {@link ValAddedSrvcMm_2.valueAddedServiceType}.
   * @param valueAddedSubServiceType Key property. See {@link ValAddedSrvcMm_2.valueAddedSubServiceType}.
   * @returns A request builder for creating requests to retrieve one `ValAddedSrvcMm_2` entity based on its keys.
   */
  getByKey(
    purchaseOrder: DeserializedType<T, 'Edm.String'>,
    purchaseOrderItem: DeserializedType<T, 'Edm.String'>,
    valueAddedServiceType: DeserializedType<T, 'Edm.String'>,
    valueAddedSubServiceType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ValAddedSrvcMm_2<T>, T> {
    return new GetByKeyRequestBuilder<ValAddedSrvcMm_2<T>, T>(this.entityApi, {
      PurchaseOrder: purchaseOrder,
      PurchaseOrderItem: purchaseOrderItem,
      ValueAddedServiceType: valueAddedServiceType,
      ValueAddedSubServiceType: valueAddedSubServiceType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ValAddedSrvcMm_2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ValAddedSrvcMm_2`.
   */
  update(
    entity: ValAddedSrvcMm_2<T>
  ): UpdateRequestBuilder<ValAddedSrvcMm_2<T>, T> {
    return new UpdateRequestBuilder<ValAddedSrvcMm_2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ValAddedSrvcMm_2`.
   * @param purchaseOrder Key property. See {@link ValAddedSrvcMm_2.purchaseOrder}.
   * @param purchaseOrderItem Key property. See {@link ValAddedSrvcMm_2.purchaseOrderItem}.
   * @param valueAddedServiceType Key property. See {@link ValAddedSrvcMm_2.valueAddedServiceType}.
   * @param valueAddedSubServiceType Key property. See {@link ValAddedSrvcMm_2.valueAddedSubServiceType}.
   * @returns A request builder for creating requests that delete an entity of type `ValAddedSrvcMm_2`.
   */
  delete(
    purchaseOrder: string,
    purchaseOrderItem: string,
    valueAddedServiceType: string,
    valueAddedSubServiceType: string
  ): DeleteRequestBuilder<ValAddedSrvcMm_2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ValAddedSrvcMm_2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ValAddedSrvcMm_2` by taking the entity as a parameter.
   */
  delete(
    entity: ValAddedSrvcMm_2<T>
  ): DeleteRequestBuilder<ValAddedSrvcMm_2<T>, T>;
  delete(
    purchaseOrderOrEntity: any,
    purchaseOrderItem?: string,
    valueAddedServiceType?: string,
    valueAddedSubServiceType?: string
  ): DeleteRequestBuilder<ValAddedSrvcMm_2<T>, T> {
    return new DeleteRequestBuilder<ValAddedSrvcMm_2<T>, T>(
      this.entityApi,
      purchaseOrderOrEntity instanceof ValAddedSrvcMm_2
        ? purchaseOrderOrEntity
        : {
            PurchaseOrder: purchaseOrderOrEntity!,
            PurchaseOrderItem: purchaseOrderItem!,
            ValueAddedServiceType: valueAddedServiceType!,
            ValueAddedSubServiceType: valueAddedSubServiceType!
          }
    );
  }
}
