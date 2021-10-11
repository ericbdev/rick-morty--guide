// eslint-disable-next-line
// @ts-nocheck
export const nodeLabel = (node) => {
  const key = node?.__typename;
  switch (key) {
    case 'Location':
      return `Location ${node.name}`;
    case 'Character':
      return node.name;
    default:
      return node.id;
  }
};
