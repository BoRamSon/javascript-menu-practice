import OutputView from '../view/OutputView.js';

class PrintGreeting {
  constructor() {
    this.greet();
  }

  greet() {
    OutputView.printGreeting();
  }
}

export default PrintGreeting;
