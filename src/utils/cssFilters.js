import {
  getRandomItemFromObject,
  getRandomNumberBetweenMinAndMax
} from "./other";
import { filterEnum } from "./enums";

export const constructFilterString = reps => {
  let filters = "";
  for (let i = 0; i < reps; i++) {
    filters += `${constructFilterProperty()} `;
  }
  return filters.trim();
};

export const constructFilterProperty = () => {
  const { name, min, max, units } = getRandomItemFromObject(filterEnum);
  const amt = getRandomNumberBetweenMinAndMax(min, max);
  return `${name}(${amt}${units})`;
};
