const Mock = require("mockjs");
module.exports = {
  "GET /api/list": {
    code: 0,
    message: "success",
    data: Mock.mock({
      "list|5-8": ["@cname"]
    })
  }
};
