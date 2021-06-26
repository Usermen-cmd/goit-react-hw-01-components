const getColor = () => {
  const arrayColors = [...Array(3)].map(
    el => (el = Math.round(Math.random() * 255)),
  );
  return arrayColors;
};

export default getColor;
