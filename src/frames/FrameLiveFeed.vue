<script>
import axios from 'axios';

import ws from '../utils/ws';

export default {
  name: `FrameLiveFeed`,
  props: {
    endpoint: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      entities: [],
    };
  },
  created() {
    // Fetch initial data.
    this.fetch();

    // Listen for new data.
    ws.onmessage = ({ data }) => {
      const message = JSON.parse(data);
      this[message.type.toLowerCase()](message.entity);
    };
  },
  methods: {
    add(entity) {
      if (this.entities.find(x => x.data.id === entity.data.id)) return;
      this.entities = [entity, ...this.entities];
    },
    update(entity) {
      this.entities = this.entities.map((x) => {
        if (x.data.id === entity.data.id) return entity;
        return x;
      });
    },
    async fetch() {
      const { data } = await axios.get(this.endpoint);
      this.entities = data;
    },
  },
  render() {
    return this.$scopedSlots.default({
      entities: this.entities,
    });
  },
};
</script>
