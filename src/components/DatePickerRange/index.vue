<template>
  <div class="customer-date-picker">
    <div class="picker-panel">
      <div class="panel-header">
        <div class="prev-month">
          <svg-icon
            v-if="!isDisabled('')"
            icon-class="arrow_up"
            @click="preMonthHandle"
          />
          <!--          <i class="el-icon-back" @click="preMonthHandle"></i>-->
        </div>
        <div class="month-year">
          <span class="month-type">{{ formatMonth(tmpMonth) }}</span>
          <span class="year-type">{{ tmpYear }}</span>
        </div>
        <div class="next-month">
          <svg-icon icon-class="arrow_up" @click="nextMonthHandle" />
          <!--          <i class="el-icon-right" @click="nextMonthHandle"></i>-->
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
                currentDay === item.value &&
                month === tmpMonth &&
                year === tmpYear,
              startActive:
                tmpYear === startYear &&
                tmpMonth === startMonth &&
                item.value === startDay,
              endActive:
                tmpYear === endYear &&
                tmpMonth === endMonth &&
                item.value === endDay,
              selected: selected(
                tmpYear,
                parseInt(tmpMonth) + 1,
                item.value || ''
              ),
              selectedOneday:
                item.value &&
                endYear === startYear &&
                endMonth === startMonth &&
                item.value === startDay &&
                item.value === endDay,
              disabled: isDisabled(item.value || '')
            }"
            @click="selectDate(item)"
            v-text="item.value"
          ></li>
        </ul>
      </div>
      <div class="zone-time-panel">
        <el-form ref="timeRef" :model="timeForm" :rules="timeRules">
          <el-form-item prop="timeZone" label="Time zone">
            <tfr-select v-model="timeForm.timeZone" width="310px">
              <el-option
                v-for="zone in timeZoneData"
                :key="zone.value"
                :value="zone.value"
                :label="zone.label"
              />
            </tfr-select>
          </el-form-item>
          <el-form-item prop="timePoint">
            <tfr-select v-model="timeForm.timePoint" width="310px">
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
    </div>
  </div>
</template>
<script setup lang="ts">
// import { parseTimeToEn } from '@/utils'
import TfrSelect from '@/components/TfrSelect/index.vue'
import momentTimezone from 'moment-timezone'
import moment from 'moment'
import { ref, computed, onMounted, reactive, getCurrentInstance } from 'vue'
import { FormInstance, FormRules } from 'element-plus'

interface PropsType {
  startDate?: string
  endDate?: string
  zt?: string
}

interface DateList {
  previousMonth?: boolean
  currentMonth?: boolean
  value?: number | string
  nextMonth?: boolean
}

const datePickerRangeProps = withDefaults(defineProps<PropsType>(), {
  startDate: '', // ?????????
  endDate: '',
  zt: ''
})
const $tfrMessage: any =
  getCurrentInstance()?.appContext?.config?.globalProperties?.$tfrMessage
const timeRef = ref<FormInstance>()
const weekList = ref([
  { label: 'Sun', value: 0 },
  { label: 'Mon', value: 1 },
  { label: 'Tue', value: 2 },
  { label: 'Wed', value: 3 },
  { label: 'Thu', value: 4 },
  { label: 'Fri', value: 5 },
  { label: 'Sat', value: 6 }
]) // ???
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
]) // ???
const formatMonth = (value: number) => {
  const currentMonthItem = monthList.value.find(item => item.value === value)
  return currentMonthItem && currentMonthItem['label']
}

const currentDay = ref(new Date().getDate()) // ?????????
const startDay = ref() // ????????????
const endDay = ref() // ?????????
const startMonth = ref() // ?????????
const endMonth = ref() // ?????????
const startYear = ref() // ?????????
const endYear = ref() // ?????????
const year = ref(new Date().getFullYear()) // ?????????
const month = ref(new Date().getMonth()) // ?????????
const day = ref(new Date().getDate()) // ???????????????
const tmpYear = ref(new Date().getFullYear()) //
const tmpMonth = ref(new Date().getMonth()) //
const maxItem = ref(35)
const startDate = ref()
const endDate = ref()
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
  timeZone: datePickerRangeProps.zt,
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
  // ?????????????????????
  const currentMonthLength = new Date(
    tmpYear.value,
    tmpMonth.value + 1,
    0
  ).getDate()
  // ???????????????????????????dateList
  let dateList: Array<DateList> = Array.from(
    { length: currentMonthLength },
    (val, index) => {
      return {
        currentMonth: true,
        value: index + 1
      }
    }
  )
  // ????????????1??????????????????????????????1????????????????????????
  const startDay = new Date(tmpYear.value, tmpMonth.value, 1).getDay()
  // ??????????????????????????????
  // const previousMonthLength = new Date(
  //   this.tmpYear,
  //   this.tmpMonth,
  //   0
  // ).getDate()
  // ???1???????????????????????????
  const preDateList: Array<DateList> = []
  for (let i = 0, len = startDay; i < len; i++) {
    preDateList.push({ previousMonth: true, value: '' })
  }
  dateList = preDateList.concat(dateList)
  // ??????????????????,??????42???
  const currentDateListLength: number = dateList.length
  for (
    let i = currentDateListLength, item = 1;
    i < maxItem.value;
    i++, item++
  ) {
    dateList[dateList.length] = { nextMonth: true, value: '' } // item
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
  if (datePickerRangeProps.startDate && datePickerRangeProps.endDate) {
    const formatStartTime = momentTimezone
      .tz(new Date(datePickerRangeProps.startDate), datePickerRangeProps.zt)
      .format('YYYY-MM-DD HH:ss')
    const formatEndTime = momentTimezone
      .tz(new Date(datePickerRangeProps.endDate), datePickerRangeProps.zt)
      .format('YYYY-MM-DD HH:ss')
    console.log(formatStartTime, 'startTime')
    const formatStartTimeArray = formatStartTime.split(' ')
    const sDate = new Date(formatStartTime.replace(/-/g, '/'))
    const eDate = new Date(formatEndTime.replace(/-/g, '/'))
    startDate.value = moment(formatStartTime).format('YYYY-MM-DD')
    endDate.value = moment(formatEndTime).format('YYYY-MM-DD')
    timeForm.timePoint = formatStartTimeArray[1]
    startYear.value = sDate.getFullYear()
    startMonth.value = sDate.getMonth()
    startDay.value = sDate.getDate()
    endYear.value = eDate.getFullYear()
    endMonth.value = eDate.getMonth()
    endDay.value = eDate.getDate()
    tmpYear.value = startYear.value
    tmpMonth.value = startMonth.value
  }
})

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

const selectDate = (item: DateList) => {
  if (!item.value) return
  if (isDisabled(item.value)) return
  const isStartDate = validateStartDate() // ????????????
  const isEndDate = validateEndDate() // ????????????
  // ????????????????????????????????????????????????????????????-> ??????????????????
  if ((isStartDate && isEndDate) || (!isStartDate && !isEndDate)) {
    startYear.value = tmpYear.value
    startMonth.value = tmpMonth.value
    startDay.value = item.value
    endYear.value = ''
    endMonth.value = ''
    endDay.value = ''
    const month = tmpMonth.value + 1
    const day = item.value
    startDate.value =
      tmpYear.value +
      '-' +
      (month < 10 ? '0' + month : month) +
      '-' +
      (day < 10 ? '0' + day : day)
    endDate.value = ''
  }
  // ????????????????????? -> ??????????????????
  if (!isStartDate && isEndDate) {
    const selectedStartYear = startYear.value
    let selectedStartMonth: string | number = startMonth.value + 1
    let selectedStartDay: string | number = startDay.value
    const selectedCurrentYear = tmpYear.value
    let selectedCurrentMonth: string | number = tmpMonth.value + 1
    let selectedCurrentDay: string | number = item.value
    selectedStartMonth =
      selectedStartMonth < 10 ? '0' + selectedStartMonth : selectedStartMonth
    selectedStartDay =
      selectedStartDay < 10 ? '0' + selectedStartDay : selectedStartDay
    selectedCurrentMonth =
      selectedCurrentMonth < 10
        ? '0' + selectedCurrentMonth
        : selectedCurrentMonth
    selectedCurrentDay =
      selectedCurrentDay < 10 ? '0' + selectedCurrentDay : selectedCurrentDay
    const startTime = new Date(
      selectedStartYear + '-' + selectedStartMonth + '-' + selectedStartDay
    ).getTime()
    const currentTime = new Date(
      selectedCurrentYear +
        '-' +
        selectedCurrentMonth +
        '-' +
        selectedCurrentDay
    ).getTime()
    if (currentTime >= startTime) {
      endYear.value = tmpYear.value
      endMonth.value = tmpMonth.value
      endDay.value = item.value
      const month = tmpMonth.value + 1
      const day = item.value
      endDate.value =
        tmpYear.value +
        '-' +
        (month < 10 ? '0' + month : month) +
        '-' +
        (day < 10 ? '0' + day : day)
    } else {
      startYear.value = tmpYear.value
      startMonth.value = tmpMonth.value
      startDay.value = item.value
      endYear.value = ''
      endMonth.value = ''
      endDay.value = ''
      const month = tmpMonth.value + 1
      startDate.value =
        tmpYear.value +
        '-' +
        (month < 10 ? '0' + month : month) +
        '-' +
        (item.value < 10 ? '0' + item.value : item.value)
      endDate.value = ''
    }
  }
}
const selected = (
  currentYear: number,
  currentMonth: number | string,
  currentDay: number | string
) => {
  const selectedStartYear = startYear.value
  const selectedEndYear = endYear.value
  let selectedStartMonth: string | number = startMonth.value + 1
  let selectedEndMonth: string | number = endMonth.value + 1
  let selectedStartDay: string | number = startDay.value
  let selectedEndDay: string | number = endDay.value
  if (
    !selectedStartYear ||
    !selectedEndYear ||
    !selectedStartMonth ||
    !selectedEndMonth ||
    !selectedStartDay ||
    !selectedEndDay ||
    !currentYear ||
    !currentMonth ||
    !currentDay
  ) {
    return false
  }
  currentMonth = currentMonth < 10 ? '0' + currentMonth : currentMonth
  currentDay = currentDay < 10 ? '0' + currentDay : currentDay
  selectedStartMonth =
    selectedStartMonth < 10 ? '0' + selectedStartMonth : selectedStartMonth
  selectedEndMonth =
    selectedEndMonth < 10 ? '0' + selectedEndMonth : selectedEndMonth
  selectedStartDay =
    selectedStartDay < 10 ? '0' + selectedStartDay : selectedStartDay
  selectedEndDay = selectedEndDay < 10 ? '0' + selectedEndDay : selectedEndDay
  const currentTime = new Date(
    currentYear + '-' + currentMonth + '-' + currentDay
  ).getTime()
  const startTime = new Date(
    selectedStartYear + '-' + selectedStartMonth + '-' + selectedStartDay
  ).getTime()
  const endTime = new Date(
    selectedEndYear + '-' + selectedEndMonth + '-' + selectedEndDay
  ).getTime()
  if (currentTime < endTime && currentTime > startTime) {
    return true
  }
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
// ????????????????????????????????????
// const getTimeZoneCode = (tz: string) => {
//   // ????????????????????????
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
const validateStartDate = () => {
  if (!startYear.value && !startMonth.value && !startDay.value) return true
}
const validateEndDate = () => {
  if (!endYear.value && !endMonth.value && !endDay.value) return true
}
const commitDateParams = async () => {
  console.log(startDate.value)
  if (!startDate.value) {
    $tfrMessage({
      type: 'error',
      message: 'Please select the start time'
    })
    return false
  } else if (!endDate.value) {
    $tfrMessage({
      type: 'error',
      message: 'Please select the end time'
    })
    return false
  }
  const valid = await timeRef.value?.validate()
  if (valid) {
    const startDateFormat = moment(startDate.value).format('YYYY-MM-DD')
    const endDateFormat = moment(endDate.value).format('YYYY-MM-DD')
    const { timeZone, timePoint } = timeForm
    // const startTime = new Date(
    //   `${startDateFormat.replace(/-/g, '/')} ${timePoint} ${getTimeZoneCode(
    //     timeZone
    //   )}`
    // ).valueOf()
    // const endTime = new Date(
    //   `${endDateFormat.replace(/-/g, '/')} ${timePoint} ${getTimeZoneCode(
    //     timeZone
    //   )}`
    // ).valueOf()
    const startTime = momentTimezone.tz(
      `${startDateFormat} ${timePoint}`,
      timeZone
    )
    const endTime = momentTimezone.tz(`${endDateFormat} ${timePoint}`, timeZone)
    // const newYork = momentTimezone.tz('2014-06-01 12:00', 'America/New_York')
    // console.log(
    //   newYork.format(),
    //   startTime,
    //   endTime,
    //   startDateFormat,
    //   endDateFormat
    // )
    return {
      startTime: startTime.format(),
      endTime: endTime.format(),
      timeZone
    }
  }
  return false
}
// const applyHandle = () => {
//   if (!this.startDate) {
//     this.$message({
//       type: 'warning',
//       message: 'Please choose a start time!'
//     })
//     return
//   } else if (!this.endDate) {
//     this.$message({
//       type: 'warning',
//       message: 'Please choose a end time???'
//     })
//     return
//   }
//   this.$emit('applyHandle', this.startDate, this.endDate)
// }
// const clearHandle = () => {
//   this.startYear = ''
//   this.startMonth = ''
//   this.startDay = ''
//   this.endYear = ''
//   this.endMonth = ''
//   this.endDay = ''
//   this.startDate = ''
//   this.endDate = ''
//   this.$emit('clearHandle')
// }
defineExpose({
  commitDateParams
})
</script>

<style lang="scss" scoped>
.customer-date-picker {
  //position: absolute;
  width: 330px;
  background-color: #fff;
  //box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 10px 0px;
  border-radius: 4px;
  //z-index: 2000;
  top: 35px;
  padding: 25px;
  .picker-panel {
    .panel-header {
      display: flex;
      padding: 20px 29px;
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
        }
      }
    }
    .panel-main {
      .weekday {
        //padding: 0 29px;
        display: grid;
        grid-template-columns: repeat(7, 14.2%);
        span {
          color: #d4d4d4;
          font-size: 12px;
          text-align: center;
        }
      }
      .date-list {
        //padding: 0 29px;
        list-style: none;
        display: grid;
        grid-template-columns: repeat(7, 14.2%);
        li {
          text-align: center;
          height: 37px;
          line-height: 37px;
          cursor: pointer;
          align-self: center;
          &:hover {
            background-color: #d4d4d4;
            border-radius: 2em;
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
          //&.currentDate{
          //  color:#00A0FF
          //}
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
            background-color: $bg;
            border-radius: 0;
            &:hover {
              background-color: $bg;
              border-radius: 0;
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
}
</style>
