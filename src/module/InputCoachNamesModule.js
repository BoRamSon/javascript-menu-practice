import InputView from '../view/InputView.js';
import validation from '../validation/validation.js';
import makeArrayFromString from '../utils/makeArrayFromString.js';

class InputCoachNames {
  constructor() {
    this.validate = new validation();
  }

  async run() {
    const validatedCoachNames = await this.coachNames();
    return makeArrayFromString(validatedCoachNames);
  }

  async coachNames() {
    const inputCoachName = await InputView.readCoachNames();
    this.validateCoachNames(inputCoachName);
    return inputCoachName;
  }

  validateCoachNames(input) {
    this.validate.empty(input);
    this.validate.startedComma(input);
    this.validate.endedComma(input);
    this.validate.limitDigits(input);
    this.validate.minimumTwoDigit(input);
  }
}

export default InputCoachNames;
