import { uniqBy } from 'lodash';

export const formatData = (locations) => {
  // this could be generalized but let's leave that for another time
  const nodes = [];
  const links = [];

  if (!locations || !Array.isArray(locations)) {
    return { nodes, links };
  }

  locations.forEach((location) => {
    nodes.push({
      id: location.id,
      name: location.name,
      __typename: location.__typename,
      episode: location.episode,
    });

    // links.push({
    //   source: location.user.username,
    //   target: location.id,
    // });
    location.residents.forEach((character) => {
      nodes.push({
        id: character.id,
        title: character.name,
        name: character.name,
        image: character.image,
        __typename: character.__typename,
      });
      links.push({
        source: location.id,
        target: character.id,
      });
    });
  });

  return {
    // nodes may be duplicated so use lodash's uniqBy to filter out duplicates
    nodes: uniqBy(nodes, 'id'),
    links,
  };
};
