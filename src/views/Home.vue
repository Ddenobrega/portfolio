<template>
  <div id="home">
    <div id="main">
      <div>
        <Header />
      </div>
      <div>
        <vue-particles
          color="#C11E38"
          linesColor="#C11E38"
          hoverMode="repulse"
        ></vue-particles>
        <div class="body">
          <p class="para">
            I'm Full-Stack Developer, Malware Analyst and DevOps Engineer with
            3+ years of hands on experience developing, maintaining and
            deploying solutions using a range of strategies, programming
            languages and tech stacks. I've led teams of 3-5 people across
            Frontend, API, Graphic/Design and Backend units respectively.
            Deployed Solutions for a multitude of establishments both locally
            and internationally.
          </p>
          <hr class="sep" />
          <div class="icons">
            <div class="icontainer">
              <div @click="this.$router.push('/github')" class="icon">
                <i class="fab iinner fa-github"></i>
              </div>
              <div @click="this.$router.push('/linkedin')" class="icon">
                <i class="fab iinner fa-linkedin"></i>
              </div>
              <div @click="this.$router.push('/gmail')" class="icon">
                <i class="fas iinner fa-inbox"></i>
              </div>
            </div>
            <div>
              <div class="pheading">
                <h2>Projects</h2>
                <div class="cmenu" @click="collapse">
                  <h2 class="collapse" id="arr">
                    <i class="fas fa-arrow-circle-up"></i>
                  </h2>
                </div>
              </div>
              <div class="pgrid" id="pg">
                <Projects />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Projects from "../components/Projects.vue";
// @ is an alias to /src
export default {
  components: {
    Header,
    Projects,
  },

  methods: {
    collapse() {
      var pg = document.getElementById("pg");
      var arr = document.getElementById("arr");
      if (pg.style.display === "none") {
        pg.style.display = "flex";
        arr.innerHTML = '<i class="fas fa-arrow-circle-up"></i>';
      } else {
        arr.innerHTML = '<i class="fas fa-arrow-circle-down"></i>';
        pg.style.display = "none";
      }
    },
  },
};
</script>

<style scoped>
.body {
  z-index: -1;
}

.pheading {
  display: flex;
  justify-content: center;
  z-index: -1;
  gap: 0.5rem;
}

.icontainer {
  display: flex;
  justify-content: center;
  z-index: 2;
  gap: 0.5rem;
  z-index: -1;
}

.icon {
  background-color: var(--bg-alt-alt);
  border-color: var(--fg);
  border-width: 3px;
  border-style: solid;
  border-radius: 100%;
  aspect-ratio: 1;
  width: 2.75rem;
  z-index: 2;
}

.icon:hover {
  cursor: pointer;
  border-color: var(--bg-alt);
}

.iinner {
  font-size: 2.25rem;
  padding: 0.2rem 0;

  display: flex;
  color: var(--bg-alt);
  justify-content: center;
  overflow: hidden;
}

.body {
  padding: 0 1rem;
}
.para {
  line-height: 1.5rem;
  font-size: 1.15rem;
  color: var(--fg);
  text-shadow: var(--bg-alt) 1px 1px;
  text-indent: 1.25rem;
}

.pgrid {
  background: none;
  z-index: -1;
}

.cmenu {
  cursor: pointer;
  z-index: 10;
}
</style>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&display=swap");

html,
body {
  font-family: "Nanum Gothic Coding", monospace;
  color: var(--fg);
  overflow-x: hidden;
  background: var(--bg);
  margin: 0;
  padding: 0;
}

#particles-js {
  height: 100vh;
  overflow: hidden;
  width: 100%;
  position: fixed;
  background-size: cover;
  background-repeat: repeat-y;
  display: flex;
  flex-flow: column;
  flex: 1;
}
.sep {
  color: var(--sep);
  border-color: var(--sep);
  background-color: var(--sep);
  text-shadow: var(--fg-alt);
  box-shadow: var(--fg-alt);
  border: none;
  height: 1px;
}

#main {
  display: flex;
  flex: 1;
  flex-direction: column;
}
</style>
