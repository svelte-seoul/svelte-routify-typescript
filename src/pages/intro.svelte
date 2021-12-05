<style lang="postcss">
  .container {
    p {
      /* color: var(--text); */
    }
  }
</style>

<script lang="ts">
  import {_} from 'svelte-i18n';
  import Button from '../layouts/Button.svelte';
  // import {userStore} from '../stores/userStore';
  import {getContext} from 'svelte';
  // import {ThemeStore} from 'svelte-theme';

  // const {changeThemeType} = getContext<ThemeStore>('svelte-theme');

  // const {fullname, setName} = userStore;

  // function handleClick() {
  //   changeThemeType();
  // }

  function getUser() {
    setName('Hyo', 'Jang');
  }
</script>

<div class="container">
  <p>{$_('intro.title')}</p>
  <!-- <Button on:click={handleClick}>Change Theme</Button> -->
  <Button on:click={getUser}>Get User</Button>
  <!-- <p>{$fullname}</p> -->
</div>
