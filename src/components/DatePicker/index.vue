<template>
  <div class="date-picker" :style="{ width: datePickerProps.width }">
    <div class="date-panel" :style="{width: datePickerProps.timeWidth}">
      <div class="panel-header">
        <div class="prev-month">
          <svg-icon
            v-if="!isDisabled('')"
            icon-class="arrow_up"
            @click="preMonthHandle"
          />
        </div>
        <div class="month-year">
          <span class="month-type">{{ formatMonth(tmpMonth) }}</span>
          <span class="year-type">{{ tmpYear }}</span>
        </div>
        <div class="next-month">
          <svg-icon icon-class="arrow_up" @click="nextMonthHandle" />
        </div>
      </div>
      <div class="panel-main">
        <div class="weekday">
          <span v-for="item in weekList" :key="item.value">{{
            item.label
          }}</span>
        </div>
        <ul class="date-list">
          <li
            v-for="(item, index) in dateList"
            :key="index"
            :class="{
              preMonth: item.previousMonth,
              nextMonth: item.nextMonth,
              currentDate:
                day === item.value && month === tmpMonth && year === tmpYear,
              selected: selected(item.value || ''),
              disabled: isDisabled(item.value || '')
            }"
            @click="selectDate(item.value || '')"
            v-text="item.value"
          ></li>
        </ul>
      </div>
    </div>
    <div class="zone-time-panel">
      <el-form ref="timeRef" label-width="80px" label-position="top" :model="timeForm" :rules="timeRules">
        <el-form-item prop="timeZone" label="Time zone">
          <tfr-select v-model="timeForm.timeZone" width="100%">
            <el-option
              v-for="zone in timeZoneData"
              :key="zone.value"
              :value="zone.value"
              :label="zone.label"
            />
          </tfr-select>
        </el-form-item>
        <el-form-item prop="timePoint">
          <tfr-select v-model="timeForm.timePoint" width="100%">
            <el-option
              v-for="time in timePointOption"
              :key="time.value"
              :value="time.value"
              :label="time.label"
            />
          </tfr-select>
        </el-form-item>
      </el-form>
    </div>
    <!--    <el-button-->
    <!--      v-if="datePickerProps.hasSubmit"-->
    <!--      class="theme-btn"-->
    <!--      @click="setHandle"-->
    <!--      >SET EXPIRATION</el-button-->
    <!--    >-->
  </div>
</template>

<script setup lang="ts">
import TfrSelect from '@/components/TfrSelect/index.vue'
import momentTimezone from 'moment-timezone'
import { ref, computed, onMounted, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
const timeRef = ref<FormInstance>()

interface PropsType {
  time?: string | number
  width?: string
  timeWidth?: string
  zt?: string
  hasSubmit?: boolean
}

interface DateList {
  previousMonth?: boolean
  currentMonth?: boolean
  value?: number | string
  nextMonth?: boolean
}

const datePickerProps = withDefaults(defineProps<PropsType>(), {
  time: '', // 默认值
  width: '330px',
  timeWidth: '330px',
  zt: '',
  hasBorder: false
})
const day = ref(new Date().getDate()) // 系统时间日
const month = ref(new Date().getMonth()) // 系统时间月
const year = ref(new Date().getFullYear()) // 系统时间年
const tmpMonth = ref(new Date().getMonth()) // 变化的时间年
const tmpYear = ref(new Date().getFullYear()) // 变化的时间月
const selectedYear = ref() // 选中的时间年
const selectedMonth = ref() // 选中的时间月
const selectedDay = ref() // 选中的时间天
const weekList = ref([
  { label: 'Sun', value: 0 },
  { label: 'Mon', value: 1 },
  { label: 'Tue', value: 2 },
  { label: 'Wed', value: 3 },
  { label: 'Thu', value: 4 },
  { label: 'Fri', value: 5 },
  { label: 'Sat', value: 6 }
])
const monthList = ref([
  { label: 'Jan', value: 0 },
  { label: 'Feb', value: 1 },
  { label: 'Mar', value: 2 },
  { label: 'Apr', value: 3 },
  { label: 'May', value: 4 },
  { label: 'Jun', value: 5 },
  { label: 'Jul', value: 6 },
  { label: 'Aug', value: 7 },
  { label: 'Sept', value: 8 },
  { label: 'Oct', value: 9 },
  { label: 'Nov', value: 10 },
  { label: 'Dec', value: 11 }
])
const timeZoneData = ref([
  {
    label: 'Pacific time UTC -08:00/-07:00',
    value: 'America/Los_Angeles',
    params: 'PT',
    code: 'GMT-0800'
  },
  {
    label: 'Mountain time UTC -07:00/-06:00',
    value: 'America/Denver',
    params: 'MT',
    code: 'GMT-0700'
  },
  {
    label: 'Central time UTC -06:00/-05:00 ',
    value: 'America/Chicago',
    params: 'CT',
    code: 'GMT-0600'
  },
  {
    label: 'Eastern time UTC -5:00/-04:00',
    value: 'America/New_York',
    params: 'ET',
    code: 'GMT-0500'
  },
  {
    label: 'Japan time UTC +09:00/+08:00',
    value: 'Asia/Tokyo',
    params: 'JT',
    code: 'GMT+0900'
  },
  {
    label: 'Hong Kong time UTC +08:00/+07:00 ',
    value: 'Asia/Hong_Kong',
    params: 'HT',
    code: 'GMT+0800'
  }
])
const timeForm = reactive({
  timeZone: datePickerProps.zt,
  timePoint: ''
})
const timeRules = reactive<FormRules>({
  timeZone: [
    {
      required: true,
      message: 'Zone is required',
      trigger: 'change'
    }
  ],
  timePoint: [
    {
      required: true,
      message: 'Time is required',
      trigger: 'change'
    }
  ]
})
const dateList = computed(() => {
  // 获取当月的天数
  const currentMonthLength = new Date(
    tmpYear.value,
    tmpMonth.value + 1,
    0
  ).getDate()
  // 先将当月的日期塞入dateList

  const dateList: DateList[] = Array.from(
    { length: currentMonthLength },
    (val, index) => {
      return {
        previousMonth: false,
        currentMonth: true,
        value: index + 1,
        nextMonth: false
      }
    }
  )
  // 获取当月1号的星期是为了确定在1号前需要插多少天
  const startDay = new Date(tmpYear.value, tmpMonth.value, 1).getDay()
  // 确认上个月一共多少天
  // const previousMonthLength = new Date(
  //   this.tmpYear,
  //   this.tmpMonth,
  //   0
  // ).getDate()
  // 在1号前插入上个月日期
  const preDateList: DateList[] = []
  for (let i = 0, len = startDay; i < len; i++) {
    preDateList.push({
      previousMonth: true,
      currentMonth: false,
      value: '',
      nextMonth: false
    }) // previousMonthLength - i
  }
  dateList.concat(preDateList)
  // 补全剩余位置,总的35条
  const currentDateListLength: number = dateList.length
  const maxItem = 35
  for (let i = currentDateListLength, item = 1; i < maxItem; i++, item++) {
    dateList[dateList.length] = {
      previousMonth: false,
      currentMonth: false,
      value: '',
      nextMonth: true
    } // item
  }
  return dateList
})
const timePointOption = computed(() => {
  const timePointList = []
  for (let i = 0; i < 24; i++) {
    const label = `${i < 10 ? '0' + i : i}:00`
    timePointList.push({
      label,
      value: label
    })
  }
  return timePointList
})
onMounted(() => {
  if (datePickerProps.time) {
    timeForm.timeZone = datePickerProps.zt
    const formatTime = momentTimezone
      .tz(new Date(datePickerProps.time), datePickerProps.zt)
      .format('YYYY-MM-DD HH:ss')
    console.log(formatTime)
    const formatTimeArray = formatTime.split(' ')
    timeForm.timePoint = formatTimeArray[1]
    const date = new Date(formatTimeArray[0].replace(/-/g, '/'))
    const tYear = date.getFullYear()
    const tMonth = date.getMonth()
    const day = date.getDate()
    tmpYear.value = tYear
    selectedYear.value = tYear
    tmpMonth.value = tMonth
    selectedMonth.value = tMonth
    selectedDay.value = day
  }
})
const formatMonth = (value: number) => {
  const currentMonthItem = monthList.value.find(item => item.value === value)
  return currentMonthItem && currentMonthItem['label']
}
const nextMonthHandle = () => {
  if (tmpMonth.value === 11) {
    tmpMonth.value = 0
    tmpYear.value += 1
  } else {
    tmpMonth.value += 1
  }
}
const preMonthHandle = () => {
  if (tmpMonth.value === 0) {
    tmpMonth.value = 11
    tmpYear.value -= 1
  } else {
    tmpMonth.value -= 1
  }
}
const isDisabled = (currentDay: string | number) => {
  if (!currentDay) {
    return tmpYear.value <= year.value && tmpMonth.value <= month.value
  }
  return (
    tmpYear.value < year.value ||
    (tmpYear.value <= year.value && tmpMonth.value < month.value) ||
    (tmpYear.value <= year.value &&
      tmpMonth.value <= month.value &&
      currentDay < day.value)
  )
}

const selectDate = (currentDay: string | number) => {
  if (isDisabled(currentDay)) return
  selectedYear.value = tmpYear.value
  selectedMonth.value = tmpMonth.value
  selectedDay.value = currentDay
}
const selected = (currentDay: string | number) => {
  return (
    tmpYear.value === selectedYear.value &&
    tmpMonth.value === selectedMonth.value &&
    currentDay === selectedDay.value
  )
}
const commitDateParams = () => {
  
}
// 根据时区计算出时间偏移量
// const getTimeZoneCode = tz => {
//   // 当前时区的偏移量
//   const offset = momentTimezone.tz.zone(tz).utcOffset(Date.now()) / 60
//   let mark = ''
//   if (offset > 0) {
//     mark = '-'
//   } else if (offset < 0) {
//     mark = '+'
//   }
//
//   let val = ''
//   const offsetVal = Math.abs(offset)
//   if (offsetVal < 10 && offsetVal > 0) {
//     val = `0${offsetVal}`
//   } else if (offsetVal > 9) {
//     val = `${offsetVal}`
//   }
//   return `GMT${mark}${val}`
// }
// const setHandle = () => {
//   try {
//     if (!selectedYear.value || !selectedMonth.value || !selectedDay.value) {
//       this.$message({
//         type: 'warning',
//         message: 'Please choose a date!'
//       })
//       return
//     }
//     // if (!timeZone) {
//     //   this.$message({
//     //     type: 'warning',
//     //     message: 'Please choose a time zone!',
//     //   })
//     //   return
//     // }
//     // if (!timePoint) {
//     //   this.$message({
//     //     type: 'warning',
//     //     message: 'Please choose a time!',
//     //   })
//     //   return
//     // }
//
//     this.$refs.timeForm.validate(valid => {
//       if (valid) {
//         const dateFormat = this.$moment(
//           `${selectedYear.value}-${selectedMonth.value + 1}-${
//             selectedDay.value
//           }`
//         ).format('YYYY-MM-DD')
//         const { timeZone, timePoint } = this.timeForm
//         const time_zone = timeZoneData.value.find(
//           item => item.value === timeZone
//         )
//         const set_time = new Date(
//           `${dateFormat.replace(/-/g, '/')} ${timePoint} ${getTimeZoneCode(
//             time_zone.value
//           )}`
//         ).valueOf()
//         if (!this.hasSubmit) {
//           return [set_time, time_zone.params]
//         }
//         this.$emit('setTime', set_time, time_zone.params)
//       } else {
//         if (!this.hasSubmit) {
//           return []
//         }
//       }
//     })
//   } catch (e) {
//     console.log(e)
//   }
// }
defineExpose({
  timeRef,
  commitDateParams
})
</script>

<style lang="scss" scoped>
.date-picker {
  width: 500px;
  .date-panel {
    background-color: #fff;
    //box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 10px 0px;
    border-radius: 8px;
    z-index: 2000;
    margin: 0 auto;
    padding: 0 0 50px 0;
    .panel-header {
      display: flex;
      padding: 32px 29px 20px;
      justify-content: space-between;
      svg {
        font-size: 17px;
        cursor: pointer;
      }
      .prev-month {
        svg {
          transform: rotate(-90deg);
        }
      }
      .next-month {
        svg {
          transform: rotate(90deg);
        }
      }
      i {
        font-size: 17px;
        cursor: pointer;
      }
      .month-year {
        span {
          font-size: 16px;
          padding: 9px;
          color: rgb(27, 43, 39);
        }
      }
    }
    .panel-main {
      .weekday {
        padding: 0 29px;
        display: grid;
        grid-template-columns: repeat(7, 14.2%);
        span {
          color: rgba(27, 43, 39, 0.15);
          font-size: 14px;
          text-align: center;
        }
      }
      .date-list {
        padding: 0 29px;
        list-style: none;
        display: grid;
        grid-template-columns: repeat(7, 14.2%);
        li {
          text-align: center;
          height: 37px;
          line-height: 37px;
          cursor: pointer;
          align-self: center;
          &:hover:not(.disabled) {
            background-color: rgba(0, 158, 45, 0.15);
            border-radius: 2em;
          }
          &.disabled {
            color: rgba(27, 43, 39, 0.15);
            cursor: default;
          }
          &.currentDate {
            position: relative;
            &:after {
              content: '';
              position: absolute;
              bottom: 0.2em;
              display: block;
              width: 0.6em;
              height: 1px;
              background: #000;
              left: 50%;
              opacity: 0.5;
              transform: translateX(-50%);
              transition: 0.2s;
            }
          }
          &.preMonth,
          &.nextMonth {
            color: rgb(222, 222, 222);
            &:hover {
              background-color: transparent;
              cursor: auto;
            }
          }
          &.startActive {
            background-color: #000;
            color: #fff;
            border-radius: 2em 0 0 2em;
          }
          &.endActive {
            background-color: #000;
            color: #fff;
            border-radius: 0 2em 2em 0;
          }
          &.selected {
            background-color: rgb(0, 158, 45);
            border-radius: 2em;
            &:hover {
              background-color: rgb(0, 158, 45);
            }
          }
          &.selectedOneday {
            background-color: #000;
            color: #fff;
            border-radius: 2em;
          }
        }
      }
      .el-button {
        float: right;
      }
    }
    .panel-footer {
      padding-top: 20px;
      border-top: 2px solid rgb(222, 222, 222);
      text-align: right;
      .white-btn {
        width: 133px;
        height: 32px;
        font-size: 12px;
        border: none;
        padding: 10px 0;
        color: var(--theme);
        box-shadow: var(--theme-opacity_1) 0 2px 6px,
          var(--theme-opacity_1) 0 4px 16px;
      }
      .white-btn:focus,
      .white-btn:hover {
        color: var(--theme);
        background-color: #fff;
        border-color: transparent;
      }
    }
  }
}
.zone-time-panel {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  ::v-deep(.el-form) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .is-error {
      .el-input__inner {
        border-color: #f56c6c;
      }
    }
    .el-form-item {
      display: block;
      .el-form-item__label {
        width: 80px;
        text-align: left;
        color: $theme;
        font-weight: 400;
        font-size: 14px;
      }
      .el-form-item__label {
        position: relative;
      }
      &.is-required .el-form-item__label:before {
        position: absolute;
        right: -5px;
        color: $theme;
      }
      .el-form-item__error {
        position: static;
        width: 100%;
        text-align: left;
      }
    }
    .el-form-item + .el-form-item {
      margin-top: 10px;
    }
  }
}
.theme-btn {
  width: 100%;
  height: 50px;
  padding: 0 20px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.5;
  color: #fff;
  background-color: rgb(0, 158, 45);
}
</style>
