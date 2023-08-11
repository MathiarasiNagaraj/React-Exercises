export const fetchType = (data) => {
  let category = [];
  data.forEach((element) => {
    category.push(element.type);
  });
  return category;
};

export const convertToUpperCase = (word) => word.toUpperCase();

export const extractFirstWord = (word) => {
  const words = word.trim().split(' ');
  if (words.length === 1) {
    return <span>{words[0]}</span>;
  } else  {
    return <> <span>{words[0]}</span> { words.slice(1).join(' ') }</>;
  }

}