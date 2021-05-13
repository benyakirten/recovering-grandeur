import {
  getRandomValueFromObject,
  getRandomNumberBetweenMinAndMax
} from "./other";
import { filterEnum } from "./enums";

export const constructFilterString = reps => {
  if (typeof reps !== "number") {
    throw new TypeError("Repetitions must be a number");
  }
  let filters = "";
  for (let i = 0; i < reps; i++) {
    filters += `${constructFilterProperty()} `;
  }
  return filters.trim();
};

export const constructFilterProperty = () => {
  const { name, min, max, units } = getRandomValueFromObject(filterEnum);
  const amt = getRandomNumberBetweenMinAndMax(min, max);
  return `${name}(${amt}${units})`;
};
