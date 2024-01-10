/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ValAddedSrvcMm_2 } from './ValAddedSrvcMm_2';
import { ValAddedSrvcMm_2RequestBuilder } from './ValAddedSrvcMm_2RequestBuilder';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export class ValAddedSrvcMm_2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ValAddedSrvcMm_2<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): ValAddedSrvcMm_2Api<DeSerializersT> {
    return new ValAddedSrvcMm_2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ValAddedSrvcMm_2;

  requestBuilder(): ValAddedSrvcMm_2RequestBuilder<DeSerializersT> {
    return new ValAddedSrvcMm_2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ValAddedSrvcMm_2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ValAddedSrvcMm_2<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ValAddedSrvcMm_2<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ValAddedSrvcMm_2, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ValAddedSrvcMm_2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PURCHASE_ORDER: OrderableEdmTypeField<
      ValAddedSrvcMm_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_ORDER_ITEM: OrderableEdmTypeField<
      ValAddedSrvcMm_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUE_ADDED_SERVICE_TYPE: OrderableEdmTypeField<
      ValAddedSrvcMm_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUE_ADDED_SUB_SERVICE_TYPE: OrderableEdmTypeField<
      ValAddedSrvcMm_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUE_ADDED_SERVICE_PRODUCT: OrderableEdmTypeField<
      ValAddedSrvcMm_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAL_ADDED_SRVC_HAS_TO_BE_ORDERED: OrderableEdmTypeField<
      ValAddedSrvcMm_2<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    VAL_ADDED_SRVC_INCREMENT: OrderableEdmTypeField<
      ValAddedSrvcMm_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALUE_ADDED_SERVICE_CHARGE_CODE: OrderableEdmTypeField<
      ValAddedSrvcMm_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAL_ADDED_SRVC_IS_CREATED_MANUALLY: OrderableEdmTypeField<
      ValAddedSrvcMm_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALUE_ADDED_SERVICE_DELETION_CODE: OrderableEdmTypeField<
      ValAddedSrvcMm_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAL_ADDED_SRVC_ITEM_NUMBER_IN_MM: OrderableEdmTypeField<
      ValAddedSrvcMm_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALUE_ADDED_SERVICE_TEXT_1: OrderableEdmTypeField<
      ValAddedSrvcMm_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALUE_ADDED_SERVICE_TEXT_2: OrderableEdmTypeField<
      ValAddedSrvcMm_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALUE_ADDED_SERVICE_TEXT_3: OrderableEdmTypeField<
      ValAddedSrvcMm_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALUE_ADDED_SERVICE_LONG_TEXT: OrderableEdmTypeField<
      ValAddedSrvcMm_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAL_ADDED_SRVC_TRANSACTION_NUMBER: OrderableEdmTypeField<
      ValAddedSrvcMm_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAL_ADDED_SRVC_ITEM_GROUP: OrderableEdmTypeField<
      ValAddedSrvcMm_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAL_ADDED_SRVC_ITEM_NUMBER: OrderableEdmTypeField<
      ValAddedSrvcMm_2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ValAddedSrvcMm_2<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link purchaseOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER: fieldBuilder.buildEdmTypeField(
          'PurchaseOrder',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link purchaseOrderItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_ITEM: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderItem',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link valueAddedServiceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_ADDED_SERVICE_TYPE: fieldBuilder.buildEdmTypeField(
          'ValueAddedServiceType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link valueAddedSubServiceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_ADDED_SUB_SERVICE_TYPE: fieldBuilder.buildEdmTypeField(
          'ValueAddedSubServiceType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link valueAddedServiceProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_ADDED_SERVICE_PRODUCT: fieldBuilder.buildEdmTypeField(
          'ValueAddedServiceProduct',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link valAddedSrvcHasToBeOrdered} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAL_ADDED_SRVC_HAS_TO_BE_ORDERED: fieldBuilder.buildEdmTypeField(
          'ValAddedSrvcHasToBeOrdered',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link valAddedSrvcIncrement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAL_ADDED_SRVC_INCREMENT: fieldBuilder.buildEdmTypeField(
          'ValAddedSrvcIncrement',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link valueAddedServiceChargeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_ADDED_SERVICE_CHARGE_CODE: fieldBuilder.buildEdmTypeField(
          'ValueAddedServiceChargeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link valAddedSrvcIsCreatedManually} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAL_ADDED_SRVC_IS_CREATED_MANUALLY: fieldBuilder.buildEdmTypeField(
          'ValAddedSrvcIsCreatedManually',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link valueAddedServiceDeletionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_ADDED_SERVICE_DELETION_CODE: fieldBuilder.buildEdmTypeField(
          'ValueAddedServiceDeletionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link valAddedSrvcItemNumberInMm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAL_ADDED_SRVC_ITEM_NUMBER_IN_MM: fieldBuilder.buildEdmTypeField(
          'ValAddedSrvcItemNumberInMM',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link valueAddedServiceText1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_ADDED_SERVICE_TEXT_1: fieldBuilder.buildEdmTypeField(
          'ValueAddedServiceText1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link valueAddedServiceText2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_ADDED_SERVICE_TEXT_2: fieldBuilder.buildEdmTypeField(
          'ValueAddedServiceText2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link valueAddedServiceText3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_ADDED_SERVICE_TEXT_3: fieldBuilder.buildEdmTypeField(
          'ValueAddedServiceText3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link valueAddedServiceLongText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_ADDED_SERVICE_LONG_TEXT: fieldBuilder.buildEdmTypeField(
          'ValueAddedServiceLongText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link valAddedSrvcTransactionNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAL_ADDED_SRVC_TRANSACTION_NUMBER: fieldBuilder.buildEdmTypeField(
          'ValAddedSrvcTransactionNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link valAddedSrvcItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAL_ADDED_SRVC_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'ValAddedSrvcItemGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link valAddedSrvcItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAL_ADDED_SRVC_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ValAddedSrvcItemNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ValAddedSrvcMm_2)
      };
    }

    return this._schema;
  }
}
