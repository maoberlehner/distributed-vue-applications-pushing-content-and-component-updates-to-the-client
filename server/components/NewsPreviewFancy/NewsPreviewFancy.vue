<template>
  <div
    :style="{
      display: `flex`,
      alignItems: `center`,
    }"
  >
    <div
      :style="{
        flexGrow: `1`,
        flexBasis: `20em`,
      }"
    >
      <span>
        {{ date }}
        <template v-if="updated">
          (updated: {{ updated }})
        </template>
      </span>
      <h2>{{ headline }}</h2>
      <p>{{ content }}</p>
    </div>
    <div :style="{ marginLeft: `1em` }">
      <img
        :alt="img.alt"
        :src="img.url"
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      required: true,
      type: String,
    },
    date: {
      required: true,
      type: String,
    },
    headline: {
      required: true,
      type: String,
    },
    img: {
      required: true,
      type: Object,
    },
    updated: {
      default: ``,
      type: String,
    },
  },
};
</script>
