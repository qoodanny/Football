const filterMap = new Map();

filterMap.set('position', (player, filterOption) => {
  return player.position.toLowerCase() === filterOption.toLowerCase();
});

filterMap.set('team', (player, filterOption) => {
  return player.country.toLowerCase() === filterOption.toLowerCase();
});

// for each filter, check if player matches any fop. If it doesn't, throw it out
const fits = (player, fops) => {
  let filters = new Set(fops.map((fop) => fop.split('-')[0]));

  for (const f of filters) {
    let matchingFops = fops
      .filter((fop) => fop.split('-')[0] === f)
      .map((fop) => fop.split('-')[1]);

    if (
      matchingFops.every((fop) => !filterMap.get(f.toLowerCase())(player, fop))
    ) {
      return false;
    }
  }

  return true;
};

export const playerFilter = (players, filterOptions) => {
  if (filterOptions.length === 0)
    //no filters
    return players;

  return players.filter((player) => fits(player, filterOptions));
};
