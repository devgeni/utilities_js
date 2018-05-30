export default () => {
  const d = new Date();
  let month = d.getMonth() + 1;
  month = month < 10 ? "0" + month : month;
  return `${d.getDate()}.${month}.${d.getFullYear()}`;
};
