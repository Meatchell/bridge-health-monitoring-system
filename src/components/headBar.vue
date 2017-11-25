<template>
  <div class="head-bar clearfix">
    <div class="fl">
      <img class="fl head-icon" src="../assets/imgs/headBar-icon.png" alt="">
      <img class="fl logo" src="../assets/imgs/logo.png" alt="">
      <img class="fl text-logo" src="../assets/imgs/text-logo.png" alt="">
      <ul class="tab fl">
        <li :class="{current: this.$route.path == '/'  || this.$route.path == '/monitoring' || this.$route.path == '/realTimeWarning' || this.$route.path == '/warningChart'}" @click="ToMonitoring">实时监控</li>
        <li :class="{current: this.$route.path == '/dataAnalysis'}" @click="ToDataAnalysis">数据分析</li>
        <li :class="{current: this.$route.path == '/inspectLog'}" @click="ToInspectLog">巡查记录</li>
        <li :class="{current: this.$route.path == '/expert'}" @click="ToExpert">专家库</li>
        <li :class="{current: this.$route.path == '/demand'}" @click="ToDemand">需求广场</li>
      </ul>
      <Select class="select" v-model="model1" style="width:200px">
        <Option v-for="item in cityList" :value="item.value" :key="item.label">{{ item.label }}</Option>
      </Select>
    </div>
    <div class="fr">
      <img class="fr head-icon" src="../assets/imgs/headBar-icon.png" alt="">
      <div class="fr flex hidden-sm  headbar_right ">
        <div class="headuser">
          <Icon size="20" type="person"></Icon>
          <span>Meatchell</span>
        </div>
        <div @click="ToMessage" class="headmsg">
          <Icon size="20px" type="android-notifications"></Icon>
          <span>消息</span>
          <u v-show="sendmsglength > 0">{{this.sendmsglength}}</u>
        </div>
        <div class=" headchange" @click="">
          <Icon type="gear-b"></Icon>
          <span>设置</span>
        </div>
        <div class="close">
          <img src="../assets/imgs/colse.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        cityList: [
          {
            value: 'bridge1',
            label: '长青沙大桥'
          },
          {
            value: 'bridge2',
            label: '长青沙大桥'
          },
          {
            value: 'bridge9',
            label: '长青沙大桥'
          },
          {
            value: 'bridge3',
            label: '长青沙大桥'
          },
          {
            value: 'bridge4',
            label: '长青沙大桥'
          },
          {
            value: 'bridge5',
            label: '长青沙大桥'
          },
          {
            value: 'bridge6',
            label: '长青沙大桥'
          }
        ],
        model1: ''
      }
    },
    computed: {
      ...mapGetters(['sendmsglength'])
    },
    methods: {
      ToMonitoring () {
        this.$router.push('/monitoring')
      },
      ToDataAnalysis () {
        this.$router.push('/dataAnalysis')
      },
      ToInspectLog () {
        this.$router.push('/inspectLog')
      },
      ToExpert () {
        this.$router.push('/expert')
      },
      ToMessage () {
        this.$router.push('/message')
      },
      ToDemand () {
        this.$router.push('/demand')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .head-bar {
    height: 70px;
    border-bottom: 2px solid #535399;
    padding: 0 10px;
    background-image: linear-gradient(90deg, #313E73 1%, #3C3465 100%);
    .tab{
      line-height: 67px;
      margin-left: 30px;
      li {
      border-top: 2px solid transparent;
      float: left;
      padding: 0 15px;
      cursor: pointer;
      font-size: 16px;
      }
      .current {
        border-top:2px solid #089EFD;
        background-color: rgba(65, 76, 155, 0.6);;
      }
    }
    .headmsg {
      position:relative;
      u {
        position: absolute;
        min-width: 20px;
        min-height: 20px;
        text-align: center;
        border-radius: 20px;
        line-height: 20px;
        padding: 0px 3px;
        top: 12px;
        left: 64px;
        background-image: linear-gradient(-90deg, #f0565d 0%, #e34958 100%), linear-gradient( #f0565d, #f0565d);
      }
    }
    .head-icon {
      width: 5px;
      margin-top: 7px;
    }
    .logo {
      width: 54px;
      margin-top: 7px;
      margin-left: 30px;
      margin-right: 10px;
    }
    .text-logo {
      margin-top: 18px;
      width: 222px;
    }
    ul {

    }
    .select {
      width: 200px;
      margin-left: 60px;
      margin-top: 18px;
    }
    .headbar_right {
      & > div {
        line-height: 70px;
        padding: 0 25px;
      }
      .close > img {
        margin-top: 16px;
        width: 33px;
      }
    }

    .ivu-select-selection {
      &:before {
        position: absolute;
        content: '';
        width: 32px;
        height: 32px;
        background: #604bcb;
        left: -15px;
        z-index: -1;
        top: 0px;
        border-radius: 50%;
      }
      &:after {
        position: absolute;
        content: '';
        width: 32px;
        height: 32px;
        background: #604bcb;
        right: -10px;
        z-index: -1;
        top: 0px;
        border-radius: 50%;
      }
    }
    .ivu-select-single {
      .ivu-select-selection {
        height: 32px;
        position: relative;
        background-color: #604bcb;
        color: #fff;
        border: none;
        position: relative;
        z-index: 2;
      }
    }
    .ivu-select-dropdown {
      background-color: rgba(16,29,63, 0.85);
      border-radius: 6px;
    }
    .ivu-select-item {
      color: #fff;
      border-radius: 4px;
    }
    .ivu-select-item:hover {
      background-color: rgba(0, 156, 255, 0.4);
    }
    .fr {
      &>div {
        cursor:pointer;
      }
      img {
        cursor: pointer;
      }
    }
  }

@media screen and (max-width: 1493px){
  #app .select {
    margin-left: 20px;
  }
}
  @media screen and (max-width: 1463px){
    #app .tab li {
      padding: 0 10px;
    }
  }
  @media screen and (max-width: 1403px){
    #app .headbar_right >div {
        padding: 0 20px;
      }
  }
</style>
