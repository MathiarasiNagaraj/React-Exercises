export const fetchType = (data) => {
  let category = [];
  data.forEach((element) => {
    category.push(element.type);
  });
  return category;
};
