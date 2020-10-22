import { ElectronicItems } from './Electronics/config';
import { FurnitureItems } from './Furniture/config';

export function InventoryItems(category) {
  let allItems = ElectronicItems.concat(FurnitureItems).filter(x => !x.disabled );
  if (!category || (category === "All")) return allItems;
  return allItems.filter(x => x.category === category);
}
