module.exports = {
  db: 'mongodb://user:123123123@ds143071.mlab.com:43071/nightlife26',
  sessionSecret: 'prodsecretkey',
  google: {
    clientID: '581951908751-d052rb3d1bgcmbbqbbfobessdbi5oqni.apps.googleusercontent.com',
    clientSecret: '25e6REdfolzzPxsRGPuZs5E5',
    callbackURL: 'https://nightlife26.herokuapp.com/api/auth/google/callback'
  },
  yelp: {
    clientID: 'VOfQHpYX0eJmHRobvOACNA',
    clientSecret: 'MZJmEs0spLutcpouWnU3LiQqW7y11Bj2yjpziOk55PnS8jTqCFsAOmyNyq2qEAFh'
  }
};
