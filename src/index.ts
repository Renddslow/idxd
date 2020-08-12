export default (key: string, list: Array<Record<any, any>>) =>
  list.reduce((acc, val) => {
    const { [key]: id, ...content } = val;
    acc[id] = content;
    return acc;
  }, {});
