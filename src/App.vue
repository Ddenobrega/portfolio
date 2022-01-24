<template>
  <router-view />
</template>

<style>
html {
  font-size: 1.25rem;
}

:root {
  --bg: #3d0e35;
  --bg-alt: #220b34;
  --bg-alt-alt: #721536;
  --sep: #571135;
  --fg: #dd4545;
  --fg-alt: #006466;
}

@media screen and (max-width: 800px) {
  html {
    font-size: 1rem;
  }
}
</style>
