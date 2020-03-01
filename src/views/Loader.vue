<template>
  <v-wait for="load data">
    <template slot="waiting">
      <preloader-test></preloader-test>
    </template>
    <ul>
      <li v-for="(item, index) in myList" :key="index">{{ item }}</li>
    </ul>
    <button @click="load">Load list again.</button>
  </v-wait>
</template>

<script>
const mockData = ["a", "b", "c", "d"];

export default {
  data() {
    return {
      myList: []
    };
  },
  methods: {
    async load() {
      // start waiting
      this.$wait.start("load data");

      this.myList = await new Promise(resolve => {
        setTimeout(() => resolve(mockData), 2000);
      });

      // stop waiting
      this.$wait.end("load data");
    }
  },
  created() {
    this.load();
  }
};
</script>
