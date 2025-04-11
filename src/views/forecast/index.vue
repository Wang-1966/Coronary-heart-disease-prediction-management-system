<script setup lang="ts">
import { ref } from 'vue'

const age = ref('')
const gender = ref('')
const xtType = ref('')
const jxxy = ref('')
const xqdgc = ref('')
const kfxt = ref('')
const jxxdt = ref('')
const xl = ref('')

const options = [
  {
    value: 'Option1',
    label: '男',
  },
  {
    value: 'Option2',
    label: '女',
  }
]
const optionsXt = [
  {
    value: 'Option1',
    label: '典型的心绞痛',
  },
  {
    value: 'Option2',
    label: '非典型心绞痛',
  },
  {
    value: 'Option3',
    label: '非心绞痛',
  },
  {
    value: 'Option4',
    label: '无症状',
  }
]
const optionsXdt = [
  {
    value: 'Option1',
    label: '无异常',
  },
  {
    value: 'Option2',
    label: 'ST-T波异常',
  },
  {
    value: 'Option3',
    label: 'Estes异常',
  }
]
</script>

<template>
  <el-card>
    <el-row :gutter="10">
      <el-col :span="6">
        <span class="mr-2">年龄:</span>
        <el-input v-model="age"
                  style="width: 240px"
                  placeholder="请输入你的年龄" />
      </el-col>
      <el-col :span="6">
        <span class="mr-2">性别:</span>
        <el-select placeholder="请选择"
                   size="default"
                   v-model="gender"
                   style="width: 240px">
          <el-option v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value" />
        </el-select>
      </el-col>
      <el-col :span="6">
        <span class="mr-2">胸痛类型:</span>
        <el-select placeholder="请选择"
                   size="default"
                   v-model="xtType"
                   style="width: 240px">
          <el-option v-for="item in optionsXt"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value" />
        </el-select>
      </el-col>
      <el-col :span="6">
        <span class="mr-2">静息血压:</span>
        <el-input v-model="jxxy"
                  style="width: 240px"
                  placeholder="请输入静息血压（单位：mm Hg）" />
      </el-col>
    </el-row>
    <el-row :gutter="10"
            class="mt-8">
      <el-col :span="6">
        <span class="mr-2">血清胆固醇:</span>
        <el-input v-model="xqdgc"
                  style="width: 240px"
                  placeholder="血清胆固醇水平（单位：mg / dl）" />
      </el-col>
      <el-col :span="6">
        <span class="mr-2">空腹血糖:</span>
        <el-input v-model="kfxt"
                  style="width: 240px"
                  placeholder="空腹血糖" />
      </el-col>
      <el-col :span="6">
        <span class="mr-2">静息心电图:</span>
        <el-select placeholder="请选择"
                   size="default"
                   v-model="jxxdt"
                   style="width: 240px">
          <el-option v-for="item in optionsXdt"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value" />
        </el-select>
      </el-col>
      <el-col :span="6">
        <span class="mr-2">心率:</span>
        <el-input v-model="xl"
                  style="width: 240px"
                  placeholder="请输入心率" />
      </el-col>
    </el-row>
  </el-card>
</template>

<style lang="scss" scoped></style>
