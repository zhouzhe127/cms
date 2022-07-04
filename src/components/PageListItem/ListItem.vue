<template>
  <div class="page-item">
    <div class="con">
      <svg-icon :icon-class="iconName" class="svg"></svg-icon>
      <span>
        {{ title }}
      </span>
    </div>
    <div v-if="date" class="date">
      <div class="year">{{ moment(date).format('DD MMM YYYY') }}</div>
      <div class="time">{{ moment(date).format('HH:mm') }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import moment from 'moment'
import { UpdateSideListItem } from './index.type'
interface IProps extends UpdateSideListItem {
  title: string
  date?: string
  iconName?: string
}

withDefaults(defineProps<IProps>(), {
  title:
    'TFR’s Women: Denni Elias, Lea Naumman On The Power Of Standing Out And S',
  date: new Date().toISOString(),
  iconName: 'article'
})
</script>

<style lang="scss" scoped>
.page-item {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  .con {
    display: flex;
    align-items: center;
    justify-content: space-between;
    // margin: 0px 20px;
    margin-right: 20px;
    flex: 1;
    .svg {
      width: 20px;
      height: 20px;
      margin-right: 10px;
      flex-basis: 20px;
    }
    span {
      display: inline-block;
      width: 100%;
      font-size: 14px;
      flex-wrap: wrap;
      line-height: 1.5rem;
    }
  }

  .date {
    text-align: right;
    flex-basis: 80px;
    font-size: 14px;
    line-height: 1.5em;
  }
}
</style>
