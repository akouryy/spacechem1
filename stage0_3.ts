import { Reactor, ReactorLayer, genCells } from '../../lib/reactor';
import { Stage } from '../../lib/stage';
import { safeCast } from '../../lib/util/util';

export default safeCast<Stage>({
  name: 'Sernimir II - An Introduction to Bonding',

  record: [119, 1, 18],

  reactor: new Reactor(
    new ReactorLayer('1.red', genCells(
      '   |   |   |   |   |   |   |   |   |   ',
      '   |gv |i  |s< |   |   |o< |   |   |   ',
      '   |>  |y  |   |+  |   |d^ |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
    )),
    new ReactorLayer('1.blue', genCells(
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
      '   |>  |   |y  |dv |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
      '   |g^ |I  |s< |<  |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
    )),
    [{ i: 2, j: 4 }, { i: 3, j: 4 }],
  ),
});
