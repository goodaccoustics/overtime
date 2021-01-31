import AboutCategory from "../Body/About";
import React from "react";

export const CATEGORIES = [
  'Print Service',
  'Scan Service',
  'Baby Sitting',
  'Pet Sitting',
  'Pet Grooming',
  'Repairman',
  'Sewing',
  'Cleaning',
  'Computer',
  'Lunchbox',
  'Dinnerbox',
  'Insurance',
  'Finance',
  'Group Buys',
  'Tuition',
  'Swim Lessons',
  'Car Wash',
  'Activity Partners'
]

/**
 'Fashion',
 'Drinks',
 'Electronics',
 'Furniture',
 'Services'
 */

export let USER_TEMPLATE = {
  displayName: null,
  email: null,
  photoURL: null,
  geoLocation: null,
  userLocation: "Singapore",
  deliveryPolicy: null,
  servicePolicy: null,
  whatsapp: null,
  joinedOn: null,
  lastLogin: null
};

export let SERVICE_TEMPLATE = {
  key: null,
  userEmail: null,
  category: null,
  serviceCatalog: [],
  serviceDescription: null,
  imagesUrl: [],
  disabled: false
};

export function SortServicesByKey(serviceA, serviceB) {
  var keyA = serviceA.key.toUpperCase(); // ignore upper and lowercase
  var keyB = serviceB.key.toUpperCase(); // ignore upper and lowercase
  if (keyA < keyB) {
    return -1;
  }
  if (keyA > keyB) {
    return 1;
  }

  // keys must be equal
  return 0;
}

/**
 export let ITEM_TEMPLATE = {
  userEmail: null,
  key: null,
  category: null,
  title: null,
  subTitle: null,
  categoryTags: [],
  popularTags: [],
  styleTags: [],
  placeTags: [],
  priceSettings: {
    type: null,
    currencySymbol:  null,
    currency: null,
    price: null,
    newPrice: null
  },
  serviceCatalog: [],
  serviceDescription: null,
  productFeatures: [],
  productSelectors: {
    quantity: {
      selectors: [],
      selected: null
    },
    colors:{
      selectors: [],
      selected: null
    },
    sizes:{
      selectors: [],
      selected: null
    },
  },
  imagesUrl: [],
  officialProductUrl: null,
  disabled: true
};
**/


