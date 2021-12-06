<style lang="postcss">
  .container {
    color: var(--text);
  }
</style>

<script lang="ts">
  import {_} from 'svelte-i18n';
  import Button from '../layouts/button.svelte';
  import {userStore} from '../stores/userStore';
  import {getContext} from 'svelte';
  import type {ThemeStore} from 'svelte-theme';

  const {changeThemeType} = getContext<ThemeStore>('svelte-theme');

  const {fullname, setName} = userStore;

  function handleClick() {
    changeThemeType();
  }

  function getUser() {
    setName('Hyo', 'Jang');
  }
</script>

<div class="container">
  <p>{$_('index.title')}</p>
  <Button on:click={handleClick}>Change Theme</Button>
  <Button on:click={getUser}>Get User</Button>
  <p>{$fullname}</p>

  <ul>
    <li>
      Go to <a href="/temp">/temp</a>
    </li>
  </ul>
</div>
