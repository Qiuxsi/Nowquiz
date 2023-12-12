<template>
  <div style="text-align: left; position: absolute; height: 100%; width: 100%">
    <div class="body" style="width: 70%; height: 80%; background: rgba(185, 213, 255, 0.19); border-radius: 10px; padding-left: 40px; padding-top: 40px; padding-right: 40px; margin-left: 13%; margin-top: 5%;">
      <div style="color: black; font-size: 24px; font-family: Audiowide; font-weight: 400; word-wrap: break-word">NowQuiz</div>
      <el-row style="padding-left: 20px; margin-top: 20px; height: 85%">
        
        <!-- 课程知识点选择 -->
        <el-col :span="8" style="padding-top: 50px">
          <span style="font-size: 18px; margin-left: 30px; font-weight: bold;">课程选择</span>
          <span style="font-size: 18px; margin-left: 90px; font-weight: bold;">知识点选择</span>
          <el-tabs tab-position="left" style="padding-top: 20px;">
            <el-tab-pane label="计算机组成原理">
              <div>
              <el-tabs tab-position="left" style="">
                <el-tab-pane label="计算机系统概述"></el-tab-pane>
                <el-tab-pane label="数据的表示和运算"></el-tab-pane>
                <el-tab-pane label="存储器层次结构"></el-tab-pane>
                <el-tab-pane label="指令系统"></el-tab-pane>
                <el-tab-pane label="中央处理器"></el-tab-pane>
              </el-tabs>
              </div>
            </el-tab-pane>
            <el-tab-pane label="计算机网络">

            </el-tab-pane>
            <el-tab-pane label="操作系统">

            </el-tab-pane>
            <el-tab-pane label="数据结构">

            </el-tab-pane>
            <el-tab-pane label="全部">

            </el-tab-pane>
          </el-tabs>
        </el-col>

        <!-- 聊天框 -->
        <el-col :span="15" style="background-color: white; margin-left: 20px;">
        <div style="overflow-y: auto;">
          <div v-for="(item, index) in questionList" :key="index">
            <div id="question">
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
              <div class="info">
                <p class="info-content"><span>{{index + 1}}.</span><span>{{item}}</span></p>
              </div>
            </div>
            <div id="answer">
              <div class="answer-info">
                <p class="answer-info-content">
                  <el-radio-group v-model="optionList[index]">
                    <el-radio :label="1">A</el-radio>
                    <el-radio :label="2">B</el-radio>
                    <el-radio :label="3">C</el-radio>
                    <el-radio :label="4">D</el-radio>
                  </el-radio-group>
                </p>
              </div>
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </div>
            <div id="question">
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
              <div class="info">
                <p class="info-content">{{answerList[index]}}</p>
              </div>
            </div>
          </div>
          <el-button type="success" size="medium" round :loading="loading" style="margin-left: 20px">下一题</el-button>
        </div>
        </el-col>

      </el-row>
    </div>
  </div>
</template>

<script>
export default({
  name: 'question',
  data() {
    return {
      questionList: [
        "下列关于异常和中断的描述中，错误的是：\nA.中断是由CPU之外的部件触发的事件\nB.中断是与CPU当前执行指令无关的异步事件\nC.异常是与当前执行指令相关的同步事件\nD.异常是可以由CPU通过屏蔽字进行屏蔽的事件", 
        "nishishui?"
      ],
      optionList: [1, 3],
      answerList: ["恭喜你回答正确！", "回答错误?"],
      loading: false
    }
  },
  created() {
    // api
  },
  methods: {
    nextQuestion() {
      // api
    }
  }
})
</script>

<style>
.el-col {
  border-radius: 10px;
}
#question {
  margin-top: 20px;
  margin-left: 20px;
  display: flex;
}
.info{
  margin-left: 10px;
}
.info-content {
  padding: 10px;
  font-size: 16px;
  background: #A3C3F6;
  position: relative;
  margin-top: 8px;
  white-space: pre-wrap;
}
.info-content::before {
  position: absolute;
  left: -8px;
  top: 8px;
  content: '';
  border-right: 10px solid #A3C3F6;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
}
#answer {
  margin-top: 20px;
  margin-right: 20px;
  justify-content: flex-end;
  display: flex;
  text-align: right;
}
.answer-info {
  width: 90%;
}
.answer-info-content {
  max-width: 70%;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 14px;
  float: right;
  margin-right: 10px;
  position: relative;
  margin-top: 8px;
  background: #d4e4ff;
  text-align: left;
}
.answer-info-content::after {
  position: absolute;
  right: -8px;
  top: 8px;
  content: '';
  border-left: 10px solid #d4e4ff;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
}
</style>
