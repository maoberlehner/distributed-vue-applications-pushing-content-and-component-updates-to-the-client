<template>
  <div class="NewsPreviewSimple">
    <span>{{ date }}</span>
    <h2>{{ headline }}</h2>
    <p>{{ content }}</p>
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
  },
};
</script>
