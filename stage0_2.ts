import { Reactor, ReactorLayer, genCells } from '../../lib/reactor';
import { Stage } from '../../lib/stage';
import { safeCast } from '../../lib/util/util';

export default safeCast<Stage>({
  name: 'Sernimir II - Crossover',

  record: [156, 1, 17],

  reactor: new Reactor(
    new ReactorLayer('1.red', genCells(
      '   |   |   |   |   |   |   |   |   |   ',
      '   |gv |i  |s< |   |   |<  |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |   |   |   |   |O  |   |   |   ',
      '   |>  |   |   |   |   |d^ |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
    )),
    new ReactorLayer('1.blue', genCells(
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
      '   |Sv |   |   |   |o  |d  |<  |   |   ',
      '   |I  |   |   |   |   |   |   |   |   ',
      '   |g> |   |   |   |   |   |^  |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
    )),
  ),
});
