let http = require("https");

var options = {
  method: "POST",
  hostname: "api.msg91.com",
  port: null,
  path: "/api/v2/sendsms?country=91",
  headers: {
    authkey: "283313AMizXlXLsTJ5d19a5fb",
    "content-type": "application/json"
  }
};

module.exports = (message, mobile) => {
  var req = http.request(options, (res) => {
    var chunks = [];

    res.on("data", function(chunk) {
      chunks.push(chunk);
    });

    res.on("end", function() {
      var body = Buffer.concat(chunks);
      //console.log("SMS response: " + body.toString());
    });
  });

  req.write(
    JSON.stringify({
      sender: "SHOEFP",
      route: "4",
      country: "91",
      sms: [{ message: message, to: [mobile] }]
    })
  );
  req.end();
};