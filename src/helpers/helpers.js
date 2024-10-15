export const transformObject = obj => {
  return Object.keys(obj).reduce((acc, key) => {
    const newKey = key.length > 2 ? key.toLowerCase() : key;

    if (key === 'Transmission') {
      acc[newKey] = obj[key] ? 'automatic' : '';
      return acc;
    }

    if (obj[key] === false) {
      return acc;
    }

    acc[newKey] = obj[key];

    return acc;
  }, {});
};
