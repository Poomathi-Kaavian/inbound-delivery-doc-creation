/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v2';

/**
 * CreatedDeliveryItem
 */
export interface CreatedDeliveryItem<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Delivery Document.
   */
  deliveryDocument: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Delivery Document Item.
   */
  deliveryDocumentItem: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * CreatedDeliveryItemField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class CreatedDeliveryItemField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  CreatedDeliveryItem,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link CreatedDeliveryItem.deliveryDocument} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deliveryDocument: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    false,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DeliveryDocument',
    'Edm.String',
    false
  );
  /**
   * Representation of the {@link CreatedDeliveryItem.deliveryDocumentItem} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deliveryDocumentItem: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    false,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DeliveryDocumentItem',
    'Edm.String',
    false
  );

  /**
   * Creates an instance of CreatedDeliveryItemField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, CreatedDeliveryItem, fieldOptions);
  }
}

export namespace CreatedDeliveryItem {
  /**
   * Metadata information on all properties of the `CreatedDeliveryItem` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CreatedDeliveryItem>[] = [
    {
      originalName: 'DeliveryDocument',
      name: 'deliveryDocument',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'DeliveryDocumentItem',
      name: 'deliveryDocumentItem',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
