export default ({ hours, minutes, seconds }) => {
  const [h, m, s] = [hours, minutes, seconds].map(
    num => (num < 10 ? "0" + num : num)
  );

  return `${h}:${m}:${s}`;
};
