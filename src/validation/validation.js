import createThrowError from '../utils/createError.js';
import { ERROR_MESSAGES } from '../constants/errorMessages.js';
import makeArrayFromString from '../utils/makeArrayFromString.js';

class validation {
  empty(value) {
    if (value === '') createThrowError(ERROR_MESSAGES.emptyValue);
    return true;
  }

  regularExpression(value, regExp) {
    const regExpTest = regExp.test(value);
    if (!regExpTest) createThrowError(ERROR_MESSAGES.regexpTest);
    return true;
  }

  startedComma(value) {
    const regExp = /^,/;
    const regExpTest = regExp.test(value);
    if (regExpTest) createThrowError(ERROR_MESSAGES.startComma);
    return true;
  }

  endedComma(value) {
    const regExp = /,$/;
    const regExpTest = regExp.test(value);
    if (regExpTest) createThrowError(ERROR_MESSAGES.endComma);
    return true;
  }

  nagativeNumber(value) {
    const changeTypeNumber = Number(value);
    if (0 > changeTypeNumber) createThrowError(ERROR_MESSAGES.negativeNumber);
    return true;
  }

  limitDigits(value) {
    const makeArray = makeArrayFromString(value);
    makeArray.forEach((name) => {
      if (!(2 <= name.length && name.length <= 4)) createThrowError(ERROR_MESSAGES.limitDigits);
      return;
    });
    return true;
  }

  minimumTwoDigit(value) {
    const makeArray = value.split(',');
    if (makeArray.length < 2) createThrowError(ERROR_MESSAGES.minimumTwoDigit);
    return true;
  }
}

export default validation;
