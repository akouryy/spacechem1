import { Reactor, ReactorLayer, genCells } from '../../lib/reactor';
import { Stage } from '../../lib/stage';
import { safeCast } from '../../lib/util/util';

export default safeCast<Stage>({
  name: 'Sernimir II - Removing Bonds',

  record: [70, 1, 19],

  reactor: new Reactor(
    new ReactorLayer('1.red', genCells(
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |gv |i  |s< |   |<  |   |   |   ',
      '   |   |   |   |>  |   |d^ |   |   |   ',
      '   |   |l> |l  |-^ |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
    )),
    new ReactorLayer('1.blue', genCells(
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |   |   |   |g> |dv |   |   |   ',
      '   |   |   |   |   |o^ |S< |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
    )),
    [{ i: 3, j: 4 }, { i: 3, j: 5 }],
  ),
});
