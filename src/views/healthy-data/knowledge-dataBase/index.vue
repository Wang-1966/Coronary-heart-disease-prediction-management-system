<template>
  <el-card>
    <header>
      <h1>冠心病健康知识库</h1>
    </header>
    <main>
      <section class="intro">
        <h2>什么是冠心病？</h2>
        <p>
          冠状动脉疾病（CAD），俗称冠心病，是一种由于供应心脏血液的血管变窄或堵塞导致的心脏病。
        </p>
      </section>
      <section class="symptoms">
        <h2>症状</h2>
        <ul>
          <li>胸痛或不适</li>
          <li>呼吸急促</li>
          <li>心跳加速或不规则</li>
          <!-- 可以根据实际情况添加更多 -->
        </ul>
      </section>
      <section class="prevention">
        <h2>预防措施</h2>
        <ul>
          <li>保持健康的饮食习惯</li>
          <li>定期运动</li>
          <li>戒烟限酒</li>
          <!-- 可以根据实际情况添加更多 -->
        </ul>
      </section>
    </main>
  </el-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardiovascularHealth",
  setup() {
    // 这里可以定义响应式数据、计算属性、方法等
    return {};
  }
});
</script>

<style scoped>
.cardiovascular-health {
  font-family: Arial, sans-serif;
  margin: auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

header {
  text-align: center;
  margin-bottom: 20px;
}

section {
  margin-bottom: 20px;
}
</style>
