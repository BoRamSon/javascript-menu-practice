import InputView from '../view/InputView.js';

class InputDontEatMenu {
  async run(coachNamesArray) {
    const totalMenu = this.totalMenuArray;
    await this.dontEatMenu(coachNamesArray, totalMenu);
  }

  async dontEatMenu(coachNamesArray) {
    let dontEatMenuResult = [];
    const coachNamesArrayLength = coachNamesArray.length;
    for (let i = 0; i < coachNamesArrayLength; i++) {
      const coachName = coachNamesArray[i];
      const inputDontEatMenu = await InputView.readDontEatMenu(coachName);
      const getDontEatMenu = { name: coachName, dontEatMenu: inputDontEatMenu };
      dontEatMenuResult = [...dontEatMenuResult, getDontEatMenu];
    }
    return dontEatMenuResult;
  }
}

export default InputDontEatMenu;
