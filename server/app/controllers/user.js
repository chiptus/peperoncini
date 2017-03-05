const User = require('../models/users');

module.exports = {
  saveUser: (name, socialId, socialNetwork) => {
    User.findOneAndUpdate({ socialId, socialNetwork }, {}, { upsert: true, new: true, setDefaultsOnInsert: true })
      .exec();
  }
}