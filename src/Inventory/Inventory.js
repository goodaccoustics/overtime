import { Items } from './config';

export function InventoryItems(category, hashTag) {
  //console.log('inventoryItems', category, hashTag);
  let allItems = Items.filter(x => !x.disabled );
  if (!category || (category === "All")) return allItems;
  if(!hashTag) return allItems.filter(x => x.category === category);
  return allItems.filter(x => x.category === category
    && (x.popularTags.includes(hashTag) || x.styleTags.includes(hashTag) || x.placeTags.includes(hashTag) ));
}
