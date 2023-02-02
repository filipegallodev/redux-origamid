const logger = (store) => (next) => (action) => {
  const result = next(action);
  console.log(result);
  return result;
};

export default logger;
