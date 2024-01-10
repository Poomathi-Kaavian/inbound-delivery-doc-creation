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
import type { ValAddedSrvcMm_2Api } from './ValAddedSrvcMm_2Api';

/**
 * This class represents the entity "A_ValAddedSrvcMM_2" of service "API_PURCHASEORDER_PROCESS_SRV".
 */
export class ValAddedSrvcMm_2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ValAddedSrvcMm_2Type<T>
{
  /**
   * Technical entity name for ValAddedSrvcMm_2.
   */
  static _entityName = 'A_ValAddedSrvcMM_2';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV';
  /**
   * All key fields of the ValAddedSrvcMm_2 entity
   */
  static _keys = [
    'PurchaseOrder',
    'PurchaseOrderItem',
    'ValueAddedServiceType',
    'ValueAddedSubServiceType'
  ];
  /**
   * Reference Document Number.
   * Maximum length: 10.
   */
  declare purchaseOrder: DeserializedType<T, 'Edm.String'>;
  /**
   * Item of reference document.
   * Maximum length: 5.
   */
  declare purchaseOrderItem: DeserializedType<T, 'Edm.String'>;
  /**
   * VAS Service Types.
   * Maximum length: 2.
   */
  declare valueAddedServiceType: DeserializedType<T, 'Edm.String'>;
  /**
   * VAS Sub Services.
   * Maximum length: 5.
   */
  declare valueAddedSubServiceType: DeserializedType<T, 'Edm.String'>;
  /**
   * VAS Material Number.
   * Maximum length: 40.
   * @nullable
   */
  declare valueAddedServiceProduct?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requirement Relevancy Flag for VAS Material.
   * @nullable
   */
  declare valAddedSrvcHasToBeOrdered?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  /**
   * VAS Increment.
   * Maximum length: 4.
   * @nullable
   */
  declare valAddedSrvcIncrement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * VAS Charge Codes.
   * Maximum length: 3.
   * @nullable
   */
  declare valueAddedServiceChargeCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Manual Entry Indicator.
   * Maximum length: 1.
   * @nullable
   */
  declare valAddedSrvcIsCreatedManually?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * VAS Deletion Indicator.
   * Maximum length: 1.
   * @nullable
   */
  declare valueAddedServiceDeletionCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * VAS Item Number.
   * Maximum length: 5.
   * @nullable
   */
  declare valAddedSrvcItemNumberInMm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * VAS Field 1 for Free Use by Customer.
   * Maximum length: 20.
   * @nullable
   */
  declare valueAddedServiceText1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * VAS Field 2 for Free Use by Customer.
   * Maximum length: 20.
   * @nullable
   */
  declare valueAddedServiceText2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * VAS Field 3 for Free Use by Customer.
   * Maximum length: 20.
   * @nullable
   */
  declare valueAddedServiceText3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Value Added Service Long Text.
   * Maximum length: 132.
   * @nullable
   */
  declare valueAddedServiceLongText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Number.
   * Maximum length: 10.
   * @nullable
   */
  declare valAddedSrvcTransactionNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Item Group.
   * Maximum length: 5.
   * @nullable
   */
  declare valAddedSrvcItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * Maximum length: 5.
   * @nullable
   */
  declare valAddedSrvcItemNumber?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ValAddedSrvcMm_2Api<T>) {
    super(_entityApi);
  }
}

export interface ValAddedSrvcMm_2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  purchaseOrder: DeserializedType<T, 'Edm.String'>;
  purchaseOrderItem: DeserializedType<T, 'Edm.String'>;
  valueAddedServiceType: DeserializedType<T, 'Edm.String'>;
  valueAddedSubServiceType: DeserializedType<T, 'Edm.String'>;
  valueAddedServiceProduct?: DeserializedType<T, 'Edm.String'> | null;
  valAddedSrvcHasToBeOrdered?: DeserializedType<T, 'Edm.Boolean'> | null;
  valAddedSrvcIncrement?: DeserializedType<T, 'Edm.String'> | null;
  valueAddedServiceChargeCode?: DeserializedType<T, 'Edm.String'> | null;
  valAddedSrvcIsCreatedManually?: DeserializedType<T, 'Edm.String'> | null;
  valueAddedServiceDeletionCode?: DeserializedType<T, 'Edm.String'> | null;
  valAddedSrvcItemNumberInMm?: DeserializedType<T, 'Edm.String'> | null;
  valueAddedServiceText1?: DeserializedType<T, 'Edm.String'> | null;
  valueAddedServiceText2?: DeserializedType<T, 'Edm.String'> | null;
  valueAddedServiceText3?: DeserializedType<T, 'Edm.String'> | null;
  valueAddedServiceLongText?: DeserializedType<T, 'Edm.String'> | null;
  valAddedSrvcTransactionNumber?: DeserializedType<T, 'Edm.String'> | null;
  valAddedSrvcItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  valAddedSrvcItemNumber?: DeserializedType<T, 'Edm.String'> | null;
}
