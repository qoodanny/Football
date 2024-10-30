const fncMap = new Map();

const nameAZ = (a, b) => {
  if (a.name < b.name) return -1;
  else if (a.name > b.name) return 1;

  return 0;
};
fncMap.set('nameAZ', nameAZ);
fncMap.set('default', nameAZ); //relevance is default sorting option

const nameZA = (a, b) => {
  if (a.name > b.name) return -1;
  else if (a.name < b.name) return 1;

  return 0;
};
fncMap.set('nameZA', nameZA);

export { fncMap };
