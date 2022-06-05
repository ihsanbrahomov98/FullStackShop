export const notFound = (req, res, next) => {
  const error = new Error('page not found');
  res.status(404);
  next(error);
};
