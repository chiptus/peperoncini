const User = require('../models/users');

module.exports = {
  saveUser: (name, socialId, socialNetwork) => {
    return User.findOneAndUpdate(
      { socialId, socialNetwork },
      {},
      { upsert: true, new: true, setDefaultsOnInsert: true }
    ).exec();
  },
};
