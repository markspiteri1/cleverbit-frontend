  <template>
  <div>
    <h1>Home</h1>
    <div v-if="!isLoading" class="py-8">
      <MatchList :matches="matches" />
    </div>
    <h1 v-else>Loading matches...</h1>
    <button
      @click="handleClick"
      class="
        bg-blue-500
        hover:bg-blue-700
        text-white
        font-bold
        py-2
        px-4
        rounded
      "
    >
      PLAY NOW
    </button>
  </div>
</template>

  <script>
import API from "./../apis";
import MatchList from "../components/MatchList.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: { MatchList },
  data() {
    return { matches: undefined, isLoading: true, hasAlreadyPlayed: false };
  },
  created() {
    this.retrieveMatches();
  },
  methods: {
    async handleClick() {
      if (this.hasAlreadyPlayed)
      {
        return alert('You have already submitted your number. You can play again in the next game')
      }
      const rdmNo = this.getRandomNumber();
      try {
        await API.matches.postNumber(rdmNo);
      } catch (e) {
        console.error(e);
      }
    },
    async retrieveMatches() {
      this.isLoading = true;
      try {
        const res = await API.matches.getAllMatches();
        this.matches = res.data;
      } catch (e) {
        console.error(e);
      } finally {
        this.isLoading = false;
      }
    },

    getRandomNumber(min = 1, max = 100) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
  },
};
</script>

  <style>
</style>
