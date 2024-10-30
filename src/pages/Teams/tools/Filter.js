const filterMap = new Map();

filterMap.set('continent', (team, filterOption) => {
  return team.continent.toLowerCase() === filterOption.toLowerCase();
});

// for each filter, check if player matches any fop. If it doesn't, throw it out
const fits = (team, fops) => {
  let filters = new Set(fops.map((fop) => fop.split('-')[0]));

  for (const f of filters) {
    let matchingFops = fops
      .filter((fop) => fop.split('-')[0] === f)
      .map((fop) => fop.split('-')[1]);

    if (
      matchingFops.every((fop) => !filterMap.get(f.toLowerCase())(team, fop))
    ) {
      return false;
    }
  }

  return true;
};

export const teamFilter = (teams, filterOptions) => {
  if (filterOptions.length === 0)
    //no filters
    return teams;

  console.log(teams);
  console.log(filterOptions);

  return teams.filter((teams) => fits(teams, filterOptions));
};
