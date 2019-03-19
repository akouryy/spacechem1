import { Reactor, ReactorLayer, genCells } from '../../lib/reactor';
import { Stage } from '../../lib/stage';
import { safeCast } from '../../lib/util/util';

export default safeCast<Stage>({
  name: 'Sernimir II - A Brief History of SpaceChem',

  record: [119, 1, 18],

  reactor: new Reactor(
    new ReactorLayer('1.red', genCells(
      '   |   |   |   |   |   |   |   |   |   ',
      '   |gv |i  |s< |<  |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
      '   |>  |   |y  |d^ |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
    )),
    new ReactorLayer('1.blue', genCells(
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
      '   |>  |   |y  |+  |   |v  |   |   |   ',
      '   |g^ |I  |s< |   |O  |d< |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
    )),
    [{ i: 3, j: 4 }, { i: 4, j: 4 }],
  ),
});
