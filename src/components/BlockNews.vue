<template lang="html">
  <div class="block" v-if="selectedMarks.includes(mark.text) || selectedMarks.length === 0">
    <div class="wrapped-left-block">
      <div class="wrapped-left-heading title is-5 has-text-link">
        {{ header }}
      </div>
      <div class="wrapped-left-description">
        <span>{{ shortDescription }}</span><br />
        <span>{{ text }}</span>
      </div>
    </div>
    <div class="wrapped-right-block" v-bind:style="{ 'background-color': mark.color }" @click="selectMark(mark.text)">
      {{ mark.text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      default() {
        return ''
      }
    },
    shortDescription: {
      type: String,
      default() {
        return ''
      }
    },
    text: {
      type: String,
      default() {
        return ''
      }
    },
    mark: {
      type: Object,
      default() {
        return {}
      }
    },
    selectedMarks: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      showMoreText: false,
    }
  },
  methods: {
    selectMark(markText) {
      if (!this.selectedMarks.includes(markText)) {
          this.selectedMarks.push(markText);
      }
    }
  }
};
</script>

<style lang="css" scoped>
.block {
  display: flex;
  justify-content: space-between;
  padding: 1rem;

}
.wrapped-left-block {
  text-align: left;
  padding-right: 3rem;
}
.wrapped-right-block {
  text-align: right;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  align-self: flex-start;
  color: #ffffff;
  border-radius: 50px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.125);
}

</style>
