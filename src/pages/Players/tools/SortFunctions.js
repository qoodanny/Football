const fncMap = new Map();

const firstNameAZ = (a, b) => {
  if (a.firstName < b.firstName) return -1;
  else if (a.firstName > b.firstName) return 1;

  return 0;
};
fncMap.set('firstNameAZ', firstNameAZ);

const relevance = (a, b) => {
  if (a.relevance > b.relevance) return -1;
  else if (a.relevance < b.relevance) return 1;

  return 0;
};
fncMap.set('relevance', relevance);
fncMap.set('default', relevance); //relevance is default sorting option

//i dont think this is good!
const position = (a, b) => {
  return 1;
};
fncMap.set('position', position);

const lastNameAZ = (a, b) => {
  if (a.lastName < b.lastName) return -1;
  else if (a.lastName > b.lastName) return 1;

  return 0;
};
fncMap.set('lastNameAZ', lastNameAZ);

const firstNameZA = (a, b) => {
  if (a.firstName > b.firstName) return -1;
  else if (a.firstName < b.firstName) return 1;

  return 0;
};
fncMap.set('firstNameZA', firstNameZA);

const lastNameZA = (a, b) => {
  if (a.lastName > b.lastName) return -1;
  else if (a.lastName < b.lastName) return 1;

  return 0;
};
fncMap.set('lastNameZA', lastNameZA);

const teamAZ = (a, b) => {
  if (a.country < b.country) return -1;
  else if (a.country > b.country) return 1;

  return 0;
};
fncMap.set('teamAZ', teamAZ);

const teamZA = (a, b) => {
  if (a.country > b.country) return -1;
  else if (a.country < b.country) return 1;

  return 0;
};
fncMap.set('teamZA', teamZA);

export { fncMap };
