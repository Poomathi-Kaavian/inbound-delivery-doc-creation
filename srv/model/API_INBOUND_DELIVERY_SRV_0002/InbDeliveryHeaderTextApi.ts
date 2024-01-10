/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InbDeliveryHeaderText } from './InbDeliveryHeaderText';
import { InbDeliveryHeaderTextRequestBuilder } from './InbDeliveryHeaderTextRequestBuilder';
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
export class InbDeliveryHeaderTextApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<InbDeliveryHeaderText<DeSerializersT>, DeSerializersT>
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
  ): InbDeliveryHeaderTextApi<DeSerializersT> {
    return new InbDeliveryHeaderTextApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = InbDeliveryHeaderText;

  requestBuilder(): InbDeliveryHeaderTextRequestBuilder<DeSerializersT> {
    return new InbDeliveryHeaderTextRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InbDeliveryHeaderText<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<InbDeliveryHeaderText<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InbDeliveryHeaderText<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof InbDeliveryHeaderText,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InbDeliveryHeaderText,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DELIVERY_DOCUMENT: OrderableEdmTypeField<
      InbDeliveryHeaderText<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TEXT_ELEMENT: OrderableEdmTypeField<
      InbDeliveryHeaderText<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LANGUAGE: OrderableEdmTypeField<
      InbDeliveryHeaderText<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TEXT_ELEMENT_DESCRIPTION: OrderableEdmTypeField<
      InbDeliveryHeaderText<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TEXT_ELEMENT_TEXT: OrderableEdmTypeField<
      InbDeliveryHeaderText<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DELIVERY_LONG_TEXT_IS_FORMATTED: OrderableEdmTypeField<
      InbDeliveryHeaderText<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    ALL_FIELDS: AllFields<InbDeliveryHeaderText<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link deliveryDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'DeliveryDocument',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link textElement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT_ELEMENT: fieldBuilder.buildEdmTypeField(
          'TextElement',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link language} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE: fieldBuilder.buildEdmTypeField(
          'Language',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link textElementDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT_ELEMENT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'TextElementDescription',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link textElementText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT_ELEMENT_TEXT: fieldBuilder.buildEdmTypeField(
          'TextElementText',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link deliveryLongTextIsFormatted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_LONG_TEXT_IS_FORMATTED: fieldBuilder.buildEdmTypeField(
          'DeliveryLongTextIsFormatted',
          'Edm.Boolean',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InbDeliveryHeaderText)
      };
    }

    return this._schema;
  }
}
