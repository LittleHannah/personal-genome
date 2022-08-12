<script setup>
import * as echarts from 'echarts'
import { onMounted } from 'vue';

const data = [{
  name: 'Ancestry1',
  data: [1, 2, 3, 4, 5, 6, 7]
}, {
  name: 'Ancestry2',
  data: [7, 6, 5, 4, 3, 2, 1]
}, {
  name: 'Ancestry3',
  data: [2, 4, 6, 8, 6, 4, 2]
}, {
  name: 'Ancestry4',
  data: [8, 6, 4, 2, 4, 6, 8]
}]
const placeholderRadius = 20

function setChartOption(myChart, data) {
  const legends = data.map(item => {
    return item.name
  })
  const barNum = data[0].data.length
  const option = {
    angleAxis: {
      type: 'category',
      axisLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
    },
    radiusAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      splitLine: {
        show: false
      }
    },
    polar: {},
    series: [
      {
        type: 'bar',
        name: 'Placeholder',
        data: new Array(barNum).fill(placeholderRadius),
        coordinateSystem: 'polar',
        barCategoryGap: 0,
        stack: 'a',
        itemStyle: {
          borderColor: 'transparent',
          color: 'transparent'
        },
        emphasis: {
          itemStyle: {
            borderColor: 'transparent',
            color: 'transparent'
          }
        },
      },
      ...data.map((item) => {
        const obj = {
          type: 'bar',
          data: item.data,
          coordinateSystem: 'polar',
          name: item.name,
          stack: 'a',
          emphasis: {
            focus: 'series'
          }
        }
        return obj
      })
    ],
    legend: {
      show: true,
      data: legends
    }
  };
  myChart.setOption(option)
}

onMounted(() => {
  const myChart = echarts.init(document.getElementById('main'));
  setChartOption(myChart, data)
  // 监听图表容器的大小并改变图表大小
  window.onresize = function () {
    myChart.resize()
  }
})

</script>

<template>
  <div id="main" style="width:100%;height:400px" />
</template>

<style lang="scss" scoped>

</style>
