<template>
  <div class="h-container">
    <div id="header">
      <div class="intro-container">
        <div id="intro" class="intro">
          <h1 class="main">Daryl DeNobrega</h1>
        </div>
      </div>
      <div class="nav">
        <Nav />
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "./Nav.vue";
export default {
  components: {
    Nav,
  },
};
</script>

<style scoped>
.h-container {
  width: 100%;
}

#header {
  display: flex;
  flex: 1;
  background: var(--bg-alt);
  justify-content: space-between;
}

.logo {
  margin: 0;
  padding: 0.75rem 0.5rem;
  width: 100%;
}

.intro-container {
  display: flex;
  justify-content: center;
  padding: 0 1rem;
}
.intro {
  width: max-content;
}
.main {
  white-space: nowrap;
  overflow: hidden;
  animation: typewriter 3s steps(25), blink 800ms steps(14) infinite normal;
  border-right: 5px solid black;
  font-size: 1.95rem;
}
@keyframes typewriter {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
@keyframes blink {
  from {
    border-color: inherit;
  }
  to {
    border-color: transparent;
  }
}
</style>
