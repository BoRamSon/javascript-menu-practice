import { MissionUtils } from '@woowacourse/mission-utils';
import OUTPUT_MESSAGES from '../constants/outputMessages.js';

const OutputView = {
  printGreeting() {
    MissionUtils.Console.print(OUTPUT_MESSAGES.greeting);
  },

  printMenuResult() {
    MissionUtils.Console.print(OUTPUT_MESSAGES.menuResult);
  },

  printError(error) {
    MissionUtils.Console.print(error);
  },

  printSpace() {
    MissionUtils.Console.print('');
  },
};

export default OutputView;
