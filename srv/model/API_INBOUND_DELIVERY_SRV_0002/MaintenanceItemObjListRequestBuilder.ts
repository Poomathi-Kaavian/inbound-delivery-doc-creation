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
import { MaintenanceItemObjList } from './MaintenanceItemObjList';

/**
 * Request builder class for operations supported on the {@link MaintenanceItemObjList} entity.
 */
export class MaintenanceItemObjListRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintenanceItemObjList<T>, T> {
  /**
   * Returns a request builder for querying all `MaintenanceItemObjList` entities.
   * @returns A request builder for creating requests to retrieve all `MaintenanceItemObjList` entities.
   */
  getAll(): GetAllRequestBuilder<MaintenanceItemObjList<T>, T> {
    return new GetAllRequestBuilder<MaintenanceItemObjList<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for retrieving one `MaintenanceItemObjList` entity based on its keys.
   * @param maintenanceItemObject Key property. See {@link MaintenanceItemObjList.maintenanceItemObject}.
   * @param maintenanceItemObjectList Key property. See {@link MaintenanceItemObjList.maintenanceItemObjectList}.
   * @returns A request builder for creating requests to retrieve one `MaintenanceItemObjList` entity based on its keys.
   */
  getByKey(
    maintenanceItemObject: DeserializedType<T, 'Edm.Int32'>,
    maintenanceItemObjectList: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<MaintenanceItemObjList<T>, T> {
    return new GetByKeyRequestBuilder<MaintenanceItemObjList<T>, T>(
      this.entityApi,
      {
        MaintenanceItemObject: maintenanceItemObject,
        MaintenanceItemObjectList: maintenanceItemObjectList
      }
    );
  }
}
