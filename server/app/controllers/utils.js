module.exports = {
  normalizeModel,
};

function normalizeModel(model) {
  const _id = model._id;
  delete model._id;
  delete model.__v;
  return Object.assign({}, model, { id: _id });
}
