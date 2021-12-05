<script lang="ts">
  import './i18n';
  import {Router} from '@roxi/routify';
  import {routes} from '../.routify/routes';
  import type {ThemeStore} from 'svelte-theme';
  import {getContext} from 'svelte';

  const {changeThemeType} = getContext<ThemeStore>('svelte-theme');

  const toggleTheme = () => {
    document.addEventListener('keydown', (event) => {
      if (event.ctrlKey && event.key === '.') {
        changeThemeType();
      }
    });
  };

  toggleTheme();
</script>

<Router routes={routes} />
