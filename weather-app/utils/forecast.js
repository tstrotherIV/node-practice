const request = require("postman-request");

const forecast = (longitude, latitude, callback) => {
  const url =
    `http://api.weatherstack.com/current?access_key=6444a09199c79020e149b3de6828c186&query=${latitude},${longitude}&units=f`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("unable to connect", undefined);
    } else if (body.error) {
      callback("unable to find location", undefined);
    } else {
      callback(undefined,
        `It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out`
      );
    }
  });
};
module.exports = forecast;
