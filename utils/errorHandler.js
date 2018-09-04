module.exports = {
  defineErrorByCode: function defineErrorByCode(errorCode) {
    var errorMessage;

    switch (errorCode) {
      case 400: // 400 Bad Request
        errorMessage = "Please only enter letters A-Z or spaces.";
        break;
      case 404: // 404 Not Found
        errorMessage = "Route Not Found.";
        break;
      case 409: // 409 Conflict
        errorMessage = "Required field cannot be left blank.";
        break;
      case 500: // 500 Internal Server Error
        errorMessage = "There is an error trying to GET information.";
        break;
      default:
        break;
    }
    return errorMessage;
  }
};
