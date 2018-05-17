module.exports = {
  hrPool: {
    //user: process.env.HR_USER,
    //password: process.env.HR_PASSWORD,
    user:"jeanpaul",
    password:"123",
    connectString: process.env.HR_CONNECTIONSTRING,
    poolMin: 10,
    poolMax: 10,
    poolIncrement: 0
  }
};
