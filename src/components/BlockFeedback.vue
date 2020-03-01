<template lang="html">
  <div class="block">
    <div class="wrapped-left-block">
      <div class="wrapped-left-heading has-text-grey-light">
        {{ date }}
      </div>
      <div class="wrapped-left-description title is-5 has-text-link">
        {{ question }}
      </div>
      <div class="wrapped-left-answer" v-if="answer.boolean === true">
        <b-collapse :open="false" position="is-top" aria-id="contentIdForA11y1">
          <a
            slot="trigger"
            slot-scope="props"
            aria-controls="contentIdForA11y1"
            style="align-self: center;
            align-items: center;
            display: flex;"
          >
            <b-icon :icon="!props.open ? 'caret-down' : 'caret-up'"></b-icon>
            {{ !props.open ? "Развернуть" : "Свернуть" }}
          </a>
          <p>
            {{ answer.text }}
          </p>
        </b-collapse>
      </div>
    </div>
    <div class="wrapped-right-block">
      <div class="wrapped-right-heading title is-5"></div>
      <div class="wrapped-right-description has-text-warning">
        {{ answer.boolean === false ? "Ожидается ответ" : "" }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      default() {
        return "";
      }
    },
    question: {
      type: String,
      default() {
        return "";
      }
    },
    answer: {
      type: Object,
      default() {
        return {};
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
  padding-left: 3rem;
}
</style>
