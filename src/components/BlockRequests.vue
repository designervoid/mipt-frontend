<template lang="html">
  <div class="block">
    <div class="wrapped-left-block">
      <div class="wrapped-left-heading title is-5 has-text-link">
        {{ professionType }}
      </div>
      <div class="wrapped-left-description">
        {{ descriptionOfProblem }}
      </div>
    </div>
    <div class="wrapped-right-block">
      <div class="wrapped-right-heading title is-5">
        <span v-if="progressApproval === 'Обработка'" class="has-text-warning">{{ progressApproval }}</span>
        <span v-if="progressApproval === 'Подтверждено'" class="has-text-warning">{{ progressApproval }}</span>
        <span v-if="progressApproval === 'Выполнено'" class="has-text-success">{{ progressApproval }}</span>
      </div>
      <div class="wrapped-right-description">
        <button class="button is-primary is-rounded" v-if="progressApproval === 'Выполнено'">{{ descriptionOfApproval }}</button>
        <span v-if="progressApproval === 'Обработка'">{{ progressApproval }}</span>
        <span v-if="progressApproval === 'Подтверждено'">{{ progressApproval }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    professionType: {
      type: String,
      default () {
        return ''
      }
    },
    descriptionOfProblem: {
      type: String,
      default () {
        return ''
      }
    },
    progressApproval: {
      type: String,
      default () {
        return ''
      }
    },
    descriptionOfApproval: {
      type: String,
      default () {
        return ''
      }
    },
  },
}
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
.wrapped-right-description {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
