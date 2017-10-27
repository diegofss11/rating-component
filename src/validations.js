export const validateNumberOfStars = (props, propName, componentName) => {
  const maxNumberOfStars = 10;

  if (props[propName]) {
    let value = props[propName];
    if (typeof value === 'number') {
      if(value > maxNumberOfStars)
        return new Error(`Failed prop value: Invalid prop ${propName} in ${componentName} is higher than ${maxNumberOfStars}`);
    }
    else {
      return new Error(
        `Failed prop type: Invalid prop ${propName} of type ${typeof value} supplied to ${componentName}, expected number`);
    }
  }

  return null;
}