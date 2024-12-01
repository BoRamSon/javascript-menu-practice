import { MissionUtils } from '@woowacourse/mission-utils';
import INPUT_MESSAGES from '../constants/inputMessages.js';
import removeSpace from '../utils/removeSpace.js';

const InputView = {
  async readCoachNames() {
    const inputCoachNames = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGES.inputCoachNames
    );
    return removeSpace(inputCoachNames);
  },

  async readDontEatMenu(coachName) {
    const inputDontEatMenu = await MissionUtils.Console.readLineAsync(
      `${coachName}${INPUT_MESSAGES.inputDontEatMenu}`
    );
    return removeSpace(inputDontEatMenu);
  },

  async read() {
    const input = await MissionUtils.Console.readLineAsync(INPUT_MESSAGES);
    return removeSpace();
  },

  async read() {
    const input = await MissionUtils.Console.readLineAsync(INPUT_MESSAGES);
    return removeSpace();
  },

  async read() {
    const input = await MissionUtils.Console.readLineAsync(INPUT_MESSAGES);
    return removeSpace();
  },
};

export default InputView;
