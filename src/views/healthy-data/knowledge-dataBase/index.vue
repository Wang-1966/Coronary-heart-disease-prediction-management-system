<template>
  <el-card>
    <header>
      <h1>冠心病健康知识库</h1>
    </header>
    <div class="line"></div>
    <div class="content">
      <div style="margin: 10px 0;">{{ text1 }}</div>
      <img src="@/assets/heart.png"
           alt="">
      <div style="margin: 0;">{{ text2 }}</div>
      <div class="tit">{{ text3 }}</div>
      <div>{{ text4 }}</div>
      <img src="@/assets/hemal.png"
           alt="">
      <div>{{ text5 }}</div>
      <div class="tit">{{ text7 }}</div>
      <div style="width: 100%;">{{ text8 }}</div>
      <div style="width: 100%;">{{ text9 }}</div>
      <div class="tit">{{ text10 }}</div>
      <div style="width: 100%;">{{ text11 }}</div>
      <div style="width: 100%;">{{ text12 }}</div>
      <div style="width: 100%;">{{ text13 }}</div>
      <!-- <div style="width: 100%;">{{ text9 }}</div> -->
      <!-- <div style="width: 100%;">{{ text9 }}</div> -->
    </div>
  </el-card>
</template>

<script setup lang="ts">
const text1:string = "心脏是一个往全身供血的泵，同时，它正常工作也需要血液的供应，给心脏自身供血的血管叫冠状动脉。冠状动脉分为左右两边，右边的叫右冠状动脉，左边的冠状动脉通过一个很短的主干（这个较短的主干就是我们经常提到的“左主干”），分出了两根很重要的血管，分别是前降支和回旋支。"
const text2:string = "冠状动脉发生粥样硬化引起管腔狭窄或闭塞，导致心肌缺血缺氧或坏死而引起的心脏病，叫冠状动脉粥样硬化性心脏病，简称冠心病。检查报告中经常提到的三支病变，就是指左边的两支血管和右边的冠状动脉发生粥样硬化，引起了管腔狭窄或闭塞。同理，“左主干”病变就是指那个较短的主干，发生了粥样硬化引起管腔狭窄或闭塞。"
const text3:string = "一、冠心病是怎么形成和发展的?"
const text4:string = "冠状动脉粥样硬化引起管腔狭窄或闭塞，是冠心病的根本原因。血管当中的脂质以及一些其他的杂质，逐渐沉积在血管壁上，形成斑块，斑块逐渐变大会导致管腔逐渐狭窄，引起血流减少，这就是冠心病。"
const text5: string = "打个比方，就像水中的杂质比较多，随着水流逐渐沉积在水管壁上，导致管腔逐渐狭窄，水流就会逐渐减少，管壁狭窄到一定程度，甚至会导致断水。那么，心脏血管也一样，当心脏血管狭窄到一定程度的时候，就会引起血流减少，就会导致心肌缺血缺氧，那么就会感到胸闷、胸疼，有一种压榨感、紧缩感，甚至是濒死感。很多患者表现为左侧季肋部疼痛，左侧胳膊或者左侧肩膀疼痛，以及嗓子疼、嗓子有紧缩感等。"
const text6: string = "如果狭窄部位的斑块发生破裂或糜烂，导致冠状动脉内急性血栓形成，就会堵塞血管，导致心肌梗死；另外一些情况下，心脏狭窄的血管受某些因素的影响出现痉挛，引起血流中断，也会引起相应部位的心肌缺血和坏死，如果范围比较大，还有可能导致猝死。"
const text7: string = "二、怀疑得了冠心病应该做什么检查?"
const text8: string = "如果怀疑自己得了冠心病，绝不能自己随便吃药，应该去正规医院就诊，大夫会根据您的情况，开具相应的检查，其中包括心电图、心脏彩超、冠脉CT，以及冠脉造影检查等。"
const text9:string = "需要跟大家说的是，单一一次心电图的一些非特异性表现，不能诊断为冠心病，要根据其他相应的检查，比如冠脉CT，可以作为初步的筛查。冠状动脉造影是诊断冠心病的金标准，冠状动脉造影检查是有创的，费用也比较高，需要住院才能检查。"
const text10:string = "三、冠心病有哪些治疗方法?"
const text11:string = "冠状动脉造影检查确诊冠心病后，需要根据疾病的具体情况采取对应的治疗方法。冠状动脉确实有病变，但程度和范围没有到需要进行干预的状态，可能简单配合饮食，比如低脂饮食；适当运动；口服药物，比如降脂、降压、降糖、抗血小板的药物，就可以达到治疗的目的。需要注意的是，单纯吃药不能治愈冠心病，只能减轻症状，延缓病情进展。"
const text12:string = "冠状动脉病变达到了一定的严重程度，单纯吃药解决不了时，需要进行干预，比如心脏植入支架，将狭窄的血管用支架支撑起来，解决心肌缺血的症状，同时配合药物治疗。如果冠状动脉的病变程度和范围，单纯放支架也不能完全解决时，这时需要进行内外科会诊，看看能不能采用搭桥的方法来解决心肌缺血的问题。"
const text13:string = "对于少部分病人，根据冠状动脉病变的范围和程度，可以采用内外科联合治疗的方式，就是平常所说的杂交的方法，用搭桥的方法解决心脏最重要且手术效果最佳的一根狭窄血管，其他两根狭窄血管用支架的方法来解决。如果内科支架、外科搭桥手术都不能解决问题，病变已经达到相当严重的程度，只能用药物控制症状，减轻病变的进展速度，最终可能需要心脏辅助或心脏移植等。"
// const text3:string = "一、冠心病是怎么形成和发展的?"
// const text3:string = "一、冠心病是怎么形成和发展的?"
// const text3:string = "一、冠心病是怎么形成和发展的?"
// const text3:string = "一、冠心病是怎么形成和发展的?"
// const text3:string = "一、冠心病是怎么形成和发展的?"
// const text3:string = "一、冠心病是怎么形成和发展的?"
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

.line {
  width: 96%;
  margin: 0 2%;
  height: 1px;
  background-color: #ccc;
}

.content {
  width: 96%;
  margin: 0 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #818181;
  text-indent: 2em;
  line-height: 2;
}
.tit{
  font-size: 1.2em;
  font-weight: bold;
  width: 100%;
  margin: 10px 0;
}
</style>
