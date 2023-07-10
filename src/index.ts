export default <K extends string, D extends Record<K, string>>(list: D[], key: K) =>
  list.reduce(
    (acc, { [key]: id, ...contents }) => ({
      ...acc,
      [id]: contents,
    }),
    {},
  );
