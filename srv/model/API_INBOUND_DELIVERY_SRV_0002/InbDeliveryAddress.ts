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
import type { InbDeliveryAddressApi } from './InbDeliveryAddressApi';

/**
 * This class represents the entity "A_InbDeliveryAddress" of service "API_INBOUND_DELIVERY_SRV".
 */
export class InbDeliveryAddress<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements InbDeliveryAddressType<T>
{
  /**
   * Technical entity name for InbDeliveryAddress.
   */
  static _entityName = 'A_InbDeliveryAddress';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath =
    '/sap/opu/odata/sap/API_INBOUND_DELIVERY_SRV;v=0002';
  /**
   * All key fields of the InbDeliveryAddress entity
   */
  static _keys = ['AddressID'];
  /**
   * Address number.
   * Maximum length: 10.
   */
  declare addressId: DeserializedType<T, 'Edm.String'>;
  /**
   * Street 3.
   * Maximum length: 40.
   */
  declare additionalStreetPrefixName: DeserializedType<T, 'Edm.String'>;
  /**
   * Street 5.
   * Maximum length: 40.
   */
  declare additionalStreetSuffixName: DeserializedType<T, 'Edm.String'>;
  /**
   * Time Zone.
   * Maximum length: 6.
   */
  declare addressTimeZone: DeserializedType<T, 'Edm.String'>;
  /**
   * Building Code.
   * Maximum length: 20.
   */
  declare building: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * Maximum length: 40.
   */
  declare businessPartnerName1: DeserializedType<T, 'Edm.String'>;
  /**
   * Name 2.
   * Maximum length: 40.
   */
  declare businessPartnerName2: DeserializedType<T, 'Edm.String'>;
  /**
   * Name 3.
   * Maximum length: 40.
   */
  declare businessPartnerName3: DeserializedType<T, 'Edm.String'>;
  /**
   * Name 4.
   * Maximum length: 40.
   */
  declare businessPartnerName4: DeserializedType<T, 'Edm.String'>;
  /**
   * c/o.
   * Maximum length: 40.
   */
  declare careOfName: DeserializedType<T, 'Edm.String'>;
  /**
   * City Code.
   * Maximum length: 12.
   */
  declare cityCode: DeserializedType<T, 'Edm.String'>;
  /**
   * City.
   * Maximum length: 40.
   */
  declare cityName: DeserializedType<T, 'Edm.String'>;
  /**
   * City.
   * Maximum length: 25.
   */
  declare citySearch: DeserializedType<T, 'Edm.String'>;
  /**
   * Company Post Cd.
   * Maximum length: 10.
   */
  declare companyPostalCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Language.
   * Maximum length: 2.
   */
  declare correspondenceLanguage: DeserializedType<T, 'Edm.String'>;
  /**
   * Country/Region.
   * Maximum length: 3.
   */
  declare country: DeserializedType<T, 'Edm.String'>;
  /**
   * County.
   * Maximum length: 40.
   */
  declare county: DeserializedType<T, 'Edm.String'>;
  /**
   * Delivery Service No.
   * Maximum length: 10.
   */
  declare deliveryServiceNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Delvry Serv Type.
   * Maximum length: 4.
   */
  declare deliveryServiceTypeCode: DeserializedType<T, 'Edm.String'>;
  /**
   * District.
   * Maximum length: 40.
   */
  declare district: DeserializedType<T, 'Edm.String'>;
  /**
   * Fax.
   * Maximum length: 30.
   */
  declare faxNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Floor.
   * Maximum length: 10.
   */
  declare floor: DeserializedType<T, 'Edm.String'>;
  /**
   * Title.
   * Maximum length: 4.
   */
  declare formOfAddress: DeserializedType<T, 'Edm.String'>;
  /**
   * Fullname.
   * Maximum length: 80.
   */
  declare fullName: DeserializedType<T, 'Edm.String'>;
  /**
   * Different City.
   * Maximum length: 40.
   */
  declare homeCityName: DeserializedType<T, 'Edm.String'>;
  /**
   * House Number.
   * Maximum length: 10.
   */
  declare houseNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Supplement.
   * Maximum length: 10.
   */
  declare houseNumberSupplementText: DeserializedType<T, 'Edm.String'>;
  /**
   * Address Version.
   * Maximum length: 1.
   */
  declare nation: DeserializedType<T, 'Edm.String'>;
  /**
   * Person Number.
   * Maximum length: 10.
   */
  declare person: DeserializedType<T, 'Edm.String'>;
  /**
   * Telephone.
   * Maximum length: 30.
   */
  declare phoneNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * PO Box.
   * Maximum length: 10.
   */
  declare poBox: DeserializedType<T, 'Edm.String'>;
  /**
   * PO Box City.
   * Maximum length: 40.
   */
  declare poBoxDeviatingCityName: DeserializedType<T, 'Edm.String'>;
  /**
   * PO Box Country/Region.
   * Maximum length: 3.
   */
  declare poBoxDeviatingCountry: DeserializedType<T, 'Edm.String'>;
  /**
   * PO Region.
   * Maximum length: 3.
   */
  declare poBoxDeviatingRegion: DeserializedType<T, 'Edm.String'>;
  /**
   * PO Box w/o no.
   */
  declare poBoxIsWithoutNumber: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * PO Box Lobby.
   * Maximum length: 40.
   */
  declare poBoxLobbyName: DeserializedType<T, 'Edm.String'>;
  /**
   * PO Box Post Cde.
   * Maximum length: 10.
   */
  declare poBoxPostalCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Postal Code.
   * Maximum length: 10.
   */
  declare postalCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Comm. Method.
   * Maximum length: 3.
   */
  declare prfrdCommMediumType: DeserializedType<T, 'Edm.String'>;
  /**
   * Region.
   * Maximum length: 3.
   */
  declare region: DeserializedType<T, 'Edm.String'>;
  /**
   * Room Number.
   * Maximum length: 10.
   */
  declare roomNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Search Term 1.
   * Maximum length: 20.
   */
  declare searchTerm1: DeserializedType<T, 'Edm.String'>;
  /**
   * Street.
   * Maximum length: 60.
   */
  declare streetName: DeserializedType<T, 'Edm.String'>;
  /**
   * Street 2.
   * Maximum length: 40.
   */
  declare streetPrefixName: DeserializedType<T, 'Edm.String'>;
  /**
   * Street.
   * Maximum length: 25.
   */
  declare streetSearch: DeserializedType<T, 'Edm.String'>;
  /**
   * Street 4.
   * Maximum length: 40.
   */
  declare streetSuffixName: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Jurisdictn.
   * Maximum length: 15.
   */
  declare taxJurisdiction: DeserializedType<T, 'Edm.String'>;
  /**
   * Transport.zone.
   * Maximum length: 10.
   */
  declare transportZone: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: InbDeliveryAddressApi<T>) {
    super(_entityApi);
  }
}

export interface InbDeliveryAddressType<
  T extends DeSerializers = DefaultDeSerializers
> {
  addressId: DeserializedType<T, 'Edm.String'>;
  additionalStreetPrefixName: DeserializedType<T, 'Edm.String'>;
  additionalStreetSuffixName: DeserializedType<T, 'Edm.String'>;
  addressTimeZone: DeserializedType<T, 'Edm.String'>;
  building: DeserializedType<T, 'Edm.String'>;
  businessPartnerName1: DeserializedType<T, 'Edm.String'>;
  businessPartnerName2: DeserializedType<T, 'Edm.String'>;
  businessPartnerName3: DeserializedType<T, 'Edm.String'>;
  businessPartnerName4: DeserializedType<T, 'Edm.String'>;
  careOfName: DeserializedType<T, 'Edm.String'>;
  cityCode: DeserializedType<T, 'Edm.String'>;
  cityName: DeserializedType<T, 'Edm.String'>;
  citySearch: DeserializedType<T, 'Edm.String'>;
  companyPostalCode: DeserializedType<T, 'Edm.String'>;
  correspondenceLanguage: DeserializedType<T, 'Edm.String'>;
  country: DeserializedType<T, 'Edm.String'>;
  county: DeserializedType<T, 'Edm.String'>;
  deliveryServiceNumber: DeserializedType<T, 'Edm.String'>;
  deliveryServiceTypeCode: DeserializedType<T, 'Edm.String'>;
  district: DeserializedType<T, 'Edm.String'>;
  faxNumber: DeserializedType<T, 'Edm.String'>;
  floor: DeserializedType<T, 'Edm.String'>;
  formOfAddress: DeserializedType<T, 'Edm.String'>;
  fullName: DeserializedType<T, 'Edm.String'>;
  homeCityName: DeserializedType<T, 'Edm.String'>;
  houseNumber: DeserializedType<T, 'Edm.String'>;
  houseNumberSupplementText: DeserializedType<T, 'Edm.String'>;
  nation: DeserializedType<T, 'Edm.String'>;
  person: DeserializedType<T, 'Edm.String'>;
  phoneNumber: DeserializedType<T, 'Edm.String'>;
  poBox: DeserializedType<T, 'Edm.String'>;
  poBoxDeviatingCityName: DeserializedType<T, 'Edm.String'>;
  poBoxDeviatingCountry: DeserializedType<T, 'Edm.String'>;
  poBoxDeviatingRegion: DeserializedType<T, 'Edm.String'>;
  poBoxIsWithoutNumber: DeserializedType<T, 'Edm.Boolean'>;
  poBoxLobbyName: DeserializedType<T, 'Edm.String'>;
  poBoxPostalCode: DeserializedType<T, 'Edm.String'>;
  postalCode: DeserializedType<T, 'Edm.String'>;
  prfrdCommMediumType: DeserializedType<T, 'Edm.String'>;
  region: DeserializedType<T, 'Edm.String'>;
  roomNumber: DeserializedType<T, 'Edm.String'>;
  searchTerm1: DeserializedType<T, 'Edm.String'>;
  streetName: DeserializedType<T, 'Edm.String'>;
  streetPrefixName: DeserializedType<T, 'Edm.String'>;
  streetSearch: DeserializedType<T, 'Edm.String'>;
  streetSuffixName: DeserializedType<T, 'Edm.String'>;
  taxJurisdiction: DeserializedType<T, 'Edm.String'>;
  transportZone: DeserializedType<T, 'Edm.String'>;
}
