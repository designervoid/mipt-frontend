<template lang="html">
  <transition name="fade">
    <div class="block" v-if="selectedMarks.includes(mark_text) || selectedMarks.length === 0">
      <div class="wrapped-left-block">
        <div class="wrapped-left-heading title is-5 has-text-link">
          {{ header }}
        </div>
        <div class="wrapped-left-description">
          <div class="shortDescription">{{ short_description }}</div>
          <div class="text">{{ text }}</div>
          <small class="date">{{ date_published }}</small>
        </div>
      </div>
      <div class="wrapped-right-block" v-bind:style="{ 'background-color': mark_color }" @click="selectMark(mark_text)">
        {{ mark_text }}
      </div>
    </div>
  </transition>
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
    short_description: {
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
    mark_text: {
      type: String,
      default() {
        return ''
      }
    },
    date_published: {
      type: String,
      default() {
        return ''
      }
    },
    mark_color: {
      type: String,
      default() {
        return ''
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
  white-space: nowrap;
  overflow: auto;
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
.wrapped-right-block:hover {
  background-color: #EFEFEF !important;
  color: black;
}
.wrapped-left-description {
  white-space: pre-wrap;
  word-wrap: break-word;
}

.shortDescription {
  margin-bottom: 1rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

</style>
