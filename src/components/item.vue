<template>
  <div class="item">
    <div class="f1">
      <div class="w25">
        <img class="gimg" :src="src" :alt="alt" />
      </div>
      <div class="title">
        <h3 class="ititle">{{ title }}</h3>
      </div>
    </div>
    <div class="f2">
      <div class="description">
        <p>{{ description }}</p>
        <a class="lin" :href="btn" ref="_blank">More</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    title: {
      type: String,
      default: "NULL",
    },
    src: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "no image avaliable",
    },
    description: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed blandit arcu, nec pretium massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam quis leo in turpis consectetur lobortis. Maecenas sollicitudin nulla dolor, ut pharetra tellus ultrices malesuada. Nam finibus consequat odio ac rhoncus. Donec sit amet mi tincidunt, euismod augue sed, blandit justo. Nam non orci vitae metus accumsan tempus. Quisque consectetur ligula id risus rutrum, nec consequat elit tincidunt. Pellentesque nec pellentesque neque, id dictum mi.",
    },
    btn: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.item {
  width: 45%;
  background-color: var(--bg-alt-alt);
  display: flex;
  flex-direction: column;
  z-index: 10;
  border-radius: 1rem;
  box-shadow: var(--bg-alt) 1px 1px 1rem;
  font-size: 1rem;
  padding-bottom: 1rem;
}

.lin {
  text-decoration: none;
  background: var(--bg);
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  color: var(--fg-alt);
  box-shadow: var(--bg) 1px 1px 0.25rem;
}

.lin:hover {
  color: var(--fg);
}

.w25 {
  width: 25%;
  padding: 1rem;
}

.f1 {
  display: flex;
  flex-direction: row;
}

.f2 {
  display: flex;
  flex-direction: column;
}

.gimg {
  overflow: hidden;
  width: 100%;
  border-radius: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-color: var(--fg-alt);
  box-shadow: var(--bg-alt) 1px 1px 1rem;
  border-style: solid;
  border-width: 0.25rem;
}

.ititle {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--fg-alt);
  text-shadow: var(--bg-alt) 1px 1px 1rem;
}

.title {
  align-items: center;
  justify-content: center;
  align-self: center;
  padding: 0 5%;
}

.description {
  padding: 0 1rem;
  text-indent: 1rem;
  text-shadow: var(--bg-alt) 1px 1px 0.5rem;
}

@media screen and (max-width: 800px) {
  .item {
    width: 100%;
  }
}
</style>
