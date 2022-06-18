import './src/i18n';

import {expect, it} from 'vitest';

import SignIn from '../sign-in.svelte';
import {render} from '@testing-library/svelte';

it('should render without error', () => {
  const snap = render(SignIn as never, {});

  expect(snap).toBeTruthy();
});
