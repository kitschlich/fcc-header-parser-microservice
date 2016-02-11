'use strict';

module.exports = function (headers) {
    var language = headers["accept-language"];
    var software = headers["user-agent"];
    
  return {
      "ipaddress": headers["x-forwarded-for"],
      "language": language.substring(0,language.indexOf('\,')),
      "software": software.substring(software.indexOf('\(') + 1, software.indexOf('\)'))
  };
};