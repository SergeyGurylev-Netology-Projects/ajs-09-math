import Magician from '../magician';

test.each([
  [true, true],
  [false, false],
])(
  ('test set/get stoned "%s" for magician'
  ),
  (stoned, expected) => {
    const magician = new Magician();
    magician.setStoned(stoned);

    const result = magician.getStoned();
    expect(result).toBe(expected);
  },
);

test.each([
  ['1', [false, 0], 0],
  ['2', [false, 1], 100],
  ['3', [false, 2], 90],
  ['4', [false, 3], 80],
  ['5', [false, 4], 70],
  ['6', [false, 10], 10],
  ['7', [false, 11], 0],
  ['8', [false, 12], 0],
  ['9', [true, 0], 0],
  ['10', [true, 1], 100],
  ['11', [true, 2], 85],
  ['12', [true, 3], 72],
  ['13', [true, 4], 60],
  ['14', [true, 10], 0],
  ['15', [true, 11], 0],
  ['16', [true, 12], 0],
])(
  ('test set/get attack #"%s" for magician'
  ),
  (_, params, expected) => {
    const magician = new Magician();
    magician.setStoned(params[0]);
    magician.setAttack(params[1]);

    const result = magician.getAttack();
    expect(result).toBe(expected);
  },
);
