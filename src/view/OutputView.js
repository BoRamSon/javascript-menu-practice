import { MissionUtils } from '@woowacourse/mission-utils';
import OUTPUT_MESSAGES from '../constants/outputMessages.js';

const OutputView = {
  async printGreeting() {
    MissionUtils.Console.print(OUTPUT_MESSAGES.greeting);
  },

  async printMenuResult() {
    MissionUtils.Console.print(OUTPUT_MESSAGES.menuResult);
  },

  async printError(error) {
    MissionUtils.Console.print(error);
  },

  async printSpace() {
    MissionUtils.Console.print('');
  },
};

export default OutputView;
