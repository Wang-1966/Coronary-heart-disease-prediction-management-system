<template>
  <el-card>
    <h3>患者个人健康数据看板</h3>
    <div class="line"></div>
    <el-row :gutter="10">
      <el-col :span="12">

      </el-col>
      <el-col :span="12"></el-col>
    </el-row>
    
      <!-- 心率图表容器 -->
      <!-- 血压图表容器 -->
      <!-- 血氧饱和度图表容器 -->
      <!-- 体温图表容器 -->
  </el-card>
</template>

<script>
import * as echarts from "echarts"; // 导入ECharts库
import { onMounted, ref } from "vue"; // 导入Vue的生命周期钩子和ref函数

export default {
  name: "HealthDashboard", // 组件名称
  setup() {
    const heartRateChart = ref(null); // 定义心率图表的引用
    const bloodPressureChart = ref(null); // 定义血压图表的引用
    const oxygenSaturationChart = ref(null); // 定义血氧饱和度图表的引用
    const bodyTemperatureChart = ref(null); // 定义体温图表的引用

    onMounted(() => {
      // 在组件挂载后执行初始化图表的操作
      initHeartRateChart(); // 初始化心率图表
      initBloodPressureChart(); // 初始化血压图表
      initOxygenSaturationChart(); // 初始化血氧饱和度图表
      initBodyTemperatureChart(); // 初始化体温图表
    });

    // 初始化心率图表的方法
    const initHeartRateChart = () => {
      if (heartRateChart.value) {
        // 检查心率图表的DOM元素是否存在
        const myChart = echarts.init(heartRateChart.value); // 初始化ECharts实例
        const option = {
          // 定义图表配置项
          title: {
            text: "心率监测" // 图表标题
          },
          tooltip: {}, // 提示框组件
          xAxis: {
            type: "category", // X轴类型为类目轴
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"] // 类目数据
          },
          yAxis: {
            type: "value", // Y轴类型为数值轴
            name: "心率 (次/分钟)" // Y轴名称
          },
          series: [
            {
              // 系列列表
              name: "心率", // 系列名称
              type: "line", // 系列类型为折线图
              data: [75, 80, 79, 82, 85, 83, 81] // 数据数组
            }
          ]
        };
        myChart.setOption(option); // 设置图表配置项
      }
    };

    // 初始化血压图表的方法
    const initBloodPressureChart = () => {
      if (bloodPressureChart.value) {
        // 检查血压图表的DOM元素是否存在
        const myChart = echarts.init(bloodPressureChart.value); // 初始化ECharts实例
        const option = {
          // 定义图表配置项
          title: {
            text: "血压监测" // 图表标题
          },
          tooltip: {
            trigger: "axis" // 提示框触发方式为坐标轴触发
          },
          legend: {
            data: ["收缩压", "舒张压"] // 图例数据
          },
          xAxis: {
            type: "category", // X轴类型为类目轴
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"] // 类目数据
          },
          yAxis: {
            type: "value", // Y轴类型为数值轴
            name: "血压 (mmHg)" // Y轴名称
          },
          series: [
            // 系列列表
            {
              name: "收缩压", // 系列名称
              type: "bar", // 系列类型为柱状图
              data: [120, 125, 123, 124, 126, 122, 121] // 数据数组
            },
            {
              name: "舒张压", // 系列名称
              type: "bar", // 系列类型为柱状图
              data: [80, 82, 81, 83, 84, 82, 80] // 数据数组
            }
          ]
        };
        myChart.setOption(option); // 设置图表配置项
      }
    };

    // 初始化血氧饱和度图表的方法
    const initOxygenSaturationChart = () => {
      if (oxygenSaturationChart.value) {
        // 检查血氧饱和度图表的DOM元素是否存在
        const myChart = echarts.init(oxygenSaturationChart.value); // 初始化ECharts实例
        const option = {
          // 定义图表配置项
          title: {
            text: "血氧饱和度监测" // 图表标题
          },
          tooltip: {}, // 提示框组件
          xAxis: {
            type: "category", // X轴类型为类目轴
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"] // 类目数据
          },
          yAxis: {
            type: "value", // Y轴类型为数值轴
            name: "血氧饱和度 (%)" // Y轴名称
          },
          series: [
            {
              // 系列列表
              name: "血氧饱和度", // 系列名称
              type: "line", // 系列类型为折线图
              data: [98, 97, 99, 98, 97, 98, 99] // 数据数组
            }
          ]
        };
        myChart.setOption(option); // 设置图表配置项
      }
    };

    // 初始化体温图表的方法
    const initBodyTemperatureChart = () => {
      if (bodyTemperatureChart.value) {
        // 检查体温图表的DOM元素是否存在
        const myChart = echarts.init(bodyTemperatureChart.value); // 初始化ECharts实例
        const option = {
          // 定义图表配置项
          title: {
            text: "体温监测" // 图表标题
          },
          tooltip: {}, // 提示框组件
          xAxis: {
            type: "category", // X轴类型为类目轴
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"] // 类目数据
          },
          yAxis: {
            type: "value", // Y轴类型为数值轴
            name: "体温 (°C)" // Y轴名称
          },
          series: [
            {
              // 系列列表
              name: "体温", // 系列名称
              type: "line", // 系列类型为折线图
              data: [36.5, 36.7, 36.6, 36.8, 36.9, 36.7, 36.6] // 数据数组
            }
          ]
        };
        myChart.setOption(option); // 设置图表配置项
      }
    };

    return {
      heartRateChart, // 返回心率图表的引用
      bloodPressureChart, // 返回血压图表的引用
      oxygenSaturationChart, // 返回血氧饱和度图表的引用
      bodyTemperatureChart // 返回体温图表的引用
    };
  }
};
</script>

<style scoped>
.health-dashboard {
  padding: 10px; /* 内边距 */
  background-color: #f9f9f9; /* 背景颜色 */
}

h1 {
  text-align: center;
  color: #333; /* 字体颜色 */
}

.chart {
  width: 45%; /* 宽度 */
  height: 400px; /* 高度 */
  margin: 10px 0; /* 上下外边距 */
  border: 1px solid #ddd; /* 边框 */
  border-radius: 8px; /* 圆角 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 阴影 */
}
.line{
  width: 100%;
  height: 1px;
  background-color: #acaaaa;
}
</style>
