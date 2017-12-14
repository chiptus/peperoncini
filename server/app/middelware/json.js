//move to a separate module
const rawBodyParser = (req, res, next) => {
  let data = '';
  req.on('data', chunk => (data += chunk));
  req.on('end', () => {
    req.rawBody = data;
    next();
  });
};

const jsonParser = (req, res, next) => {
  const contype = req.headers['content-type'];
  if (req.rawBody && contype && contype.indexOf('application/json') !== -1) {
    req.body = JSON.parse(req.rawBody);
  }
  next();
};

module.exports = {
  rawBodyParser,
  jsonParser: [rawBodyParser, jsonParser],
};
