<template>
  <div class="dashboard-container">
    <div class="head_cards">
      <el-card class="box-card">
        <div style="font-size: 20px;font-weight: bold;">
          血压（高压/低压）
        </div>
        <div style="margin-top: 26px;font-size: 18px;">
          135mmHg/92mmHg
        </div>
        <div style="margin-top: 26px;font-size: 16px;color: #30a46c;font-weight: bold;">
          血压正常
        </div>
      </el-card>
      <el-card class="box-card">
        <div style="font-size: 20px;font-weight: bold;">
          血脂（单位：mmol/L）
        </div>
        <div style="margin-top: 16px;font-size: 18px;">
          TC: 5.1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; LDL-C: 3.2<br />
          HDL-C: 1.4&nbsp;&nbsp;&nbsp;&nbsp;TG: 1.6
          <!-- 总胆固醇 (TC): 5.1 mmol/L
          低密度脂蛋白胆固醇 (LDL-C): 3.2 mmol/L
          高密度脂蛋白胆固醇 (HDL-C): 1.4 mmol/L
          甘油三酯 (TG): 1.6 mmol/L -->
        </div>
        <div style="margin-top: 11px;font-size: 16px;color: #c00000;font-weight: bold;">
          血脂偏高
        </div>
      </el-card>
      <el-card class="box-card">
        <div style="font-size: 20px;font-weight: bold;">
          血糖
        </div>
        <div style="margin-top: 26px;font-size: 18px;">
          10mmol/l
        </div>
        <div style="margin-top: 26px;font-size: 16px;color: #c00000;font-weight: bold;">
          血糖偏高
        </div>
      </el-card>
      <el-card class="box-card">
        <div style="font-size: 20px;font-weight: bold;">
          血氧饱和度
        </div>
        <div style="margin-top: 26px;font-size: 18px;">
          95%
        </div>
        <div style="margin-top: 26px;font-size: 16px;color: #30a46c;font-weight: bold;">
          血氧正常
        </div>
      </el-card>
    </div>
    <el-card>
      <div class="echarts"
           ref="chartRef"></div>
    </el-card>
    <div class="bottom-cards">
      <el-card class="box-card-bottom">
        <div class="echarts"
             ref="chartRefLD"></div>
      </el-card>
      <el-card class="box-card-bottom">
        <div class="echarts"
             ref="chartRefPie"></div>
      </el-card>
      <el-card class="box-card-bottom">
        <div class="echarts"
             ref="chartRefPie2"></div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"
import * as echarts from 'echarts'

type EChartsOption = echarts.EChartsOption
let chart: echarts.ECharts
let chartRef = ref() //趋势图Dom元素
let chartRefLD = ref() //雷达图Dom元素
let chartRefPie = ref() //拼图Dom元素
let chartRefPie2 = ref() //拼图Dom元素
onMounted(() => {
  initChart()
})

function initChart() {
  // 趋势图
  chart = echarts.init(chartRef.value)
  chart.setOption(option)

  // 雷达图
  chart = echarts.init(chartRefLD.value)
  chart.setOption(optionLD)
  // 拼图
  chart = echarts.init(chartRefPie.value)
  chart.setOption(optionPie)
  // 拼图
  chart = echarts.init(chartRefPie2.value)
  chart.setOption(optionPie2)
}
const option: EChartsOption = {
  title: {
    text: '实时心率'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['用户心率', '医学正常心率']
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '1%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
      splitLine: {            // 添加此属性以显示x轴的网格线
        show: true,           // 显示分割线
        lineStyle: {          // 自定义线条样式
          color: '#E0E0E0',   // 网格线颜色
          // type: 'dashed'      // 线条类型为虚线
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      max: 80000,
      min: 0,
      interval: 20000
    }
  ],
  series: [
    {
      name: '用户心率',
      type: 'line',
      // stack: 'Total',
      smooth: true,
      areaStyle: {},
      yAxisIndex: 0,
      itemStyle: {
        color: '#70bbf1'
      },

      data: [111, 2000, 6000, 16000, 33333, 55555, 64000, 33333, 18000, 36000, 70000, 42444, 23222, 13000, 8000, 4000, 1200, 333]
    },
    {
      name: '医学正常心率',
      type: 'line',
      // stack: 'Total',
      areaStyle: {},
      yAxisIndex: 0,
      smooth: true,
      itemStyle: {
        color: '#2CB3AE'
      },

      data: [33, 66, 88, 333, 3333, 6200, 20000, 3000, 1200, 13000, 22000, 11000, 2221, 1201, 390, 198, 60, 30]
    }
  ]
};

const optionLD: EChartsOption = {
  legend: {
    data: ['实际指标', '标准范围']
  },
  radar: {
    // shape: 'circle', // 如果您希望雷达图是圆形的，可以取消注释
    indicator: [
      { name: '血压', max: 160 },
      { name: '心率', max: 120 },
      { name: '血糖', max: 10 },
      { name: '胆固醇', max: 8 },
      { name: '体重指数', max: 35 },
      { name: '肺活量', max: 6000 }
    ]
  },
  series: [
    {
      name: '健康指标对比',
      type: 'radar',
      data: [
        {
          value: [150, 115, 9.5, 7.2, 33, 5900], // 标准范围的值
          name: '标准范围',
         
          itemStyle: {
            color: '#5ab1ef'
          },
          // zlevel:1
        },
        {
          value: [130, 100, 8.5, 6.6, 30, 5400], // 实际指标的值
          name: '实际指标',
          
          itemStyle: {
            color: '#b6a2de'
          },
          // zlevel:100
        }
      ]
    }
  ]
};

const optionPie: EChartsOption = {
  grid: {
    left: '1%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  // backgroundColor: '#2c343c',
  title: {
    text: '健康指标',
    left: 'center',
    top: 10,
  },
  tooltip: {
    trigger: 'item'
  },
  visualMap: {
    show: false,
    min: 80,
    max: 600,
    inRange: {
      colorLightness: [0, 1]
    }
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '65%',
      // radius: ['35%', '60%'], // 缩小饼图的大小
      center: ['50%', '50%'],
      data: [
        { value: 335, name: 'BMI' },
        { value: 310, name: '血压' },
        { value: 274, name: '血糖' },
        { value: 235, name: '胆固醇' },
        { value: 400, name: '心率' }
      ].sort(function (a, b) {
        return a.value - b.value;
      }),
      roseType: 'radius',
      label: {
        // color: 'rgba(255, 255, 255, 0.3)'
      },
      labelLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.3)'
        },
        smooth: 0.2,
        length: 10,
        length2: 20
      },
      itemStyle: {
        color: '#c23531',
        shadowBlur: 200,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      },
      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function (idx) {
        return Math.random() * 200;
      }
    }
  ]
};
const optionPie2: EChartsOption = {
  title: {
    text: '摄入营养',
    left: 'center',
    top: 10,
  },
  grid: {
    left: '10%',
    right: '10%',
    bottom: '10%',
    top: '20%',
    containLabel: true
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '13%',
    left: 'center'
  },
  series: [
    {
      name: 'Health Indicators',
      type: 'pie',
      radius: ['35%', '60%'], // 缩小饼图的大小
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 30, // 缩小强调时的字体大小
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 40, name: '碳水' },       // 碳水化合物
        { value: 30, name: '蛋白质' },     // 蛋白质
        { value: 20, name: '脂肪' },       // 脂肪
        { value: 5, name: '维生素' },      // 维生素
        { value: 5, name: '矿物质' }       // 矿物质
      ]
    }
  ]
};

</script>

<style scoped>
.head_cards {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.bottom-cards {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
}

.box-card {
  width: 23%;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.box-card-bottom {
  width: 31%;
  height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.echarts {
  width: 100%;
  height: 400px;
}
</style>
