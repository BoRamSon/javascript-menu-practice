const ERROR_PREFIX = '[ERROR]';

const createMsg = (msg) => `${ERROR_PREFIX} ${msg}\n`;

const ERROR_MESSAGES = {
  emptyValue: createMsg('값이 존재하지 않습니다.'),
  regexpTest: createMsg('형식이 잘 못되었습니다.'),
  startComma: createMsg('입력이 콤마(,)부터 시작할 수 없습니다.'),
  endComma: createMsg('입력 끝에 콤마(,)로 끝날 수 없습니다.'),
  enteredMoreFiveTimes: '5회 이상 잘못 입력하여 종료되없습니다. 다시 실행해주세요.',
  negativeNumber: createMsg('음수가 입력될 수 없습니다.'),
  limitDigits: createMsg('각각 코치 이름은 2글자부터 4글자까지 입력 가능합니다.'),
  minimumTwoDigit: createMsg('최소 인원 2명이 되어야 합니다.'),
  isInMenu: createMsg('메뉴상에 없는 메뉴입니다.'),
  NAME3: createMsg(''),
};

export { ERROR_PREFIX, ERROR_MESSAGES };
