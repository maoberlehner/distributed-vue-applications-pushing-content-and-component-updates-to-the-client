<template>
  <Component
    :is="computedComponent"
    v-bind="props"
  />
</template>

<script>
import externalComponent from './utils/external-component';

export default {
  name: `DynamicComponent`,
  props: {
    component: {
      required: true,
      type: Object,
    },
    props: {
      default: () => ({}),
      type: Object,
    },
  },
  data() {
    return {
      computedComponent: null,
    };
  },
  watch: {
    component: {
      immediate: true,
      handler(newComponent, prevComponent = ``) {
        if (newComponent.url === prevComponent.url) return;

        // this.computedComponent = () => externalComponent(this.component.url);
        // Mock implementation for easier deployment.
        const mockUrl = this.component.url.replace(`http://localhost:8200`, `/components`);
        this.computedComponent = () => externalComponent(mockUrl);
      },
    },
  },
};
</script>
