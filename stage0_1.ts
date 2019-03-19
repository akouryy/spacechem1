import { Reactor, ReactorLayer, genCells } from '../../lib/reactor';
import { Stage } from '../../lib/stage';
import { safeCast } from '../../lib/util/util';

export default safeCast<Stage>({
  name: 'Sernimir II - Slightly Different',

  record: [45, 1, 14],

  reactor: new Reactor(
    new ReactorLayer('1.red', genCells(
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |sv |   |   |   |   |   |   |   ',
      '   |   |Iv |   |   |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |g> |   |l  |O  |d< |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
    )),
    new ReactorLayer('1.blue', genCells(
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |sv |   |   |   |   |   |   |   ',
      '   |   |g> |O  |I  |l  |d< |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
      '   |   |   |   |   |   |   |   |   |   ',
    )),
  ),
});
