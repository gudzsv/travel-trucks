// export const transformObject = obj => {
//   return Object.keys(obj).reduce((acc, key) => {
//     const newKey = key.length > 2 ? key.toLowerCase() : key;

//     if (key === 'Transmission') {
//       acc[newKey] = obj[key] ? 'automatic' : 'manual';
//     } else {
//       acc[newKey] = obj[key];
//     }

//     return acc;
//   }, {});
// };

export const transformObject = obj => {
  return Object.keys(obj).reduce((acc, key) => {
    const newKey = key.length > 2 ? key.toLowerCase() : key;

    // Виключаємо ключі з значенням false
    if (obj[key] === false) {
      return acc; // Пропускаємо це значення
    }

    if (key === 'Transmission') {
      acc[newKey] = obj[key] ? 'automatic' : 'manual';
    } else {
      acc[newKey] = obj[key];
    }

    return acc;
  }, {});
};
