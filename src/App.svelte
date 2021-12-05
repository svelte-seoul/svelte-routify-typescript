<style lang="postcss">
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
  @custom-media --mobile (max-width: 640px);
  main {
    padding: 1em;
    width: calc(100vw - 2em);
    height: calc(100vh - 2em);
    background-color: var(--background);
    text-align: center;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

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

<main>
  <Router routes={routes} />
</main>
