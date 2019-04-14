<template>
  <FrameLiveFeed
    v-slot="{ entities: news }"
    endpoint="http://localhost:8200/news"
  >
    <ul class="o-vertical-spacing--xl">
      <li
        v-for="newsEntity in news"
        :key="newsEntity.data.id"
      >
        <DynamicComponent
          :component="newsEntity.component"
          :props="newsEntity.data"
        />
      </li>
    </ul>
  </FrameLiveFeed>
</template>

<script>
import DynamicComponent from './DynamicComponent.vue';
import FrameLiveFeed from './frames/FrameLiveFeed.vue';

export default {
  name: `NewsFeed`,
  components: {
    DynamicComponent,
    FrameLiveFeed,
  },
};
</script>
