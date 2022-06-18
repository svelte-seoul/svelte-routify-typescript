import {expect, it} from 'vitest';

import Button from '../button.svelte';
import {render} from '@testing-library/svelte';

it('should render without error', () => {
  const {getByRole} = render(Button as never, {
    props: {
      style: 'margin-top: 4px;',
    },
  });

  const button = getByRole('button');

  expect(button).toBeTruthy();
});
