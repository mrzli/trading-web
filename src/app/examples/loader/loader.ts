export const loader = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved data');
    }, 500);
  });
};
