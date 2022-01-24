<template>
  <div class="dd">
    <div class="navbtn"><i class="fas fa-bars"></i></div>
    <div class="ncontent">
      <a href="./work/CV.pdf" target="_blank" class="nlink">CV</a>
      <hr class="sep" />
      <a href="mailto:daryl111000@gmail.com" class="nlink">Email</a>
      <hr class="sep" />
      <a href="https://linkedin.com/in/dcdenobrega" class="nlink">Linkedin</a>
      <hr class="sep" />
      <a href="https://github.com/ddenobrega" class="nlink">Github</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
};
</script>

<style scoped>
.navbtn {
  padding: 1.5rem 1rem;
  font-size: 1.5rem;
}

.nlink {
  text-decoration: none;
  color: var(--fg);
}

.nlink:hover {
  color: var(--fg-alt);
}

.ncontent {
  position: absolute;
  background-color: var(--bg-alt);
  border-radius: 1rem;
  right: 0.2rem;
  top: 2rem;
  z-index: 10;
  padding: 0.5rem 1rem;
  display: none;
  text-align: center;
  box-shadow: var(--bg) 1px 1px 0.5rem;
}

.navbtn:hover {
  cursor: pointer;
}

.dd:hover .ncontent {
  display: block;
}
</style>
