export default (list: Array<Record<any, any>>, key: string) =>
  list.reduce((acc, val) => {
    const { [key]: id, ...content } = val;
    acc[id] = content;
    return acc;
  }, {});
