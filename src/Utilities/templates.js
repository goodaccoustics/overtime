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
  whatsapp: null,
  joinedOn: null,
  lastLogin: null
};

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
