<template>
  <div class="bg-red-100 flex flex-col items-center">
    <div v-for="(m, index) in matches" :key="index">
      <div class="flex space-x-8">
        <div>Match ID: {{ m.Id }}</div>
        <div>Winner:{{ m.WinnerId }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "MatchList",
  props: {
    matches: {
      type: Array,
    },
  },
};
</script>
