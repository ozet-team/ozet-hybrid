export const locationConvert = (fullLocation: string) => {
  const location = fullLocation.split(' ');
  return `${location[0]} ∙ ${location[1]}`;
};
