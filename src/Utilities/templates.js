import AboutCategory from "../Body/About";
import React from "react";

export const CATEGORIES = [
  'Fashion',
  'Drinks',
  'Electronics',
  'Furniture',
  'Events',
  'Services'
]

export let USER_TEMPLATE = {
  displayName: null,
  email: null,
  photoURL: null,
  userLocation: "Singapore",
  deliveryPolicy: null,
  whatsapp: null,
  joinedOn: null,
  lastLogin: null
};

export let ITEM_TEMPLATE = {
  userEmail: null,
  category: null,
  key: null,
  title: null,
  subtitle: null,
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
