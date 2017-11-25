<template>
  <div>
    <div class="myContainer my-border">
      <div class="warning-tit clearfix">
        <ul class="clearfix">
          <li>告警统计：</li>
          <li>一级（<span>2</span>）</li>
          <li>二级（<span>2</span>）</li>
          <li>三级（<span>2</span>）</li>
          <li @click="show">点击查看
            <Icon v-if="!showFlag" type="arrow-right-b"></Icon>
            <Icon v-else type="arrow-down-b"></Icon>
          </li>
        </ul>
        <div v-show="showFlag">
          <ul class="clearfix">
            <li>检测因素：</li>
            <li class="active">全部</li>
            <li>xxx监制</li>
            <li>xxx监制</li>
            <li class="grounded-radiants">xxx监制</li>
            <li>xxx监制</li>
            <li>xxx监制</li>
          </ul>
          <ul class="clearfix">
            <li>告警级别：</li>
            <li class="active">一级</li>
            <li>二级</li>
            <li>三级</li>
          </ul>
          <ul class="clearfix">
            <li>告警状态：</li>
            <li class="active">未处理告警</li>
            <li>历史告警</li>
            <li>全部</li>
          </ul>
        </div>
      </div>
      <div class="warning-time">
        <span>告警时间</span>
        <Select placeholder="默认" v-model="model1" style="width:200px">
          <Option  v-for="item in timeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <span>自定义</span>
        <Date-picker type="daterange" confirm placement="bottom-end" placeholder="选择日期"
                     style="width: 200px"></Date-picker>
      </div>
      <table class="warnimg-table mytable" cellspacing="0" cellpadding="0">
        <thead>
        <tr>
          <th>序号 <img class="fr" src="../../assets/imgs/tit-space.png"></th>
          <th>告警源<img class="fr" src="../../assets/imgs/tit-space.png"></th>
          <th>等级<img class="fr" src="../../assets/imgs/tit-space.png"></th>
          <th>生产时间<img class="fr" src="../../assets/imgs/tit-space.png"></th>
          <th>告警事件<img class="fr" src="../../assets/imgs/tit-space.png"></th>
          <th>当前状态<img class="fr" src="../../assets/imgs/tit-space.png"></th>
          <th>处理信息<img class="fr" src="../../assets/imgs/tit-space.png"></th>
          <th>操作<img class="fr" src="../../assets/imgs/tit-space.png"></th>
        </tr>
        </thead>
        <tbody>
        <tr></tr>
        <tr>
          <td>1</td>
          <td>告警源</td>
          <td>等级</td>
          <td>生产时间</td>
          <td>告警事件</td>
          <td>当前状态</td>
          <td>处理信息</td>
          <td>操作</td>
        </tr>
        <tr>
          <td>1</td>
          <td>告警源</td>
          <td>等级</td>
          <td>生产时间</td>
          <td>告警事件</td>
          <td>当前状态</td>
          <td>处理信息</td>
          <td>操作</td>
        </tr>
        <tr>
          <td>1</td>
          <td>告警源</td>
          <td>等级</td>
          <td>生产时间</td>
          <td>告警事件</td>
          <td>当前状态</td>
          <td>处理信息</td>
          <td>操作</td>
        </tr>
        <tr>
          <td>1</td>
          <td>告警源</td>
          <td>等级</td>
          <td>生产时间</td>
          <td>告警事件</td>
          <td>当前状态</td>
          <td>处理信息</td>
          <td>操作</td>
        </tr>
        </tbody>
      </table>

      <div class="angular left-top"></div>
      <div class="angular right-top"></div>
      <div class="angular left-bottom"></div>
      <div class="angular right-bottom"></div>
    </div>
  </div>

</template>
<script>
  export default {
    data () {
      return {
        showFlag: false,
        timeList: [
          {
            value: '0',
            label: '全部'
          },
          {
            value: '1',
            label: '近一个月'
          },
          {
            value: '2',
            label: '近半年'
          },
          {
            value: '3',
            label: '近一年'
          }
        ],
        model1: ''
      }
    },
    methods: {
      show () {
        this.showFlag = !this.showFlag
      }
    }
  }
</script>
<style lang="scss" scoped>
  .myContainer {
    width: 100%;
    min-height: 100%;
    .warning-tit {
      border: 2px solid #354C92;
      border-radius: 5px;
      padding:10px;
      ul:nth-child(1)>li:nth-child(2) span {
        color: red;
      }
      ul:nth-child(1)>li:nth-child(3) span {
        color: #ff8d29;
      }
      ul:nth-child(1)>li:nth-child(4) span {
        color: #fff538;
      }
      ul:nth-child(1)>li:nth-child(5)  {
        cursor:pointer;
        user-select:none;
      }
      ul {
        display: block;
        padding:7px;
        li {
          float: left;
          padding: 0px 12px;
          margin: 0 2px;
          padding-bottom: 1px;
        }
      }
      li.active {
        box-shadow: 0px 4px 4px 0px
        rgba(7, 33, 85, 0.15);
        border-radius: 20px;
        position: relative;
        background-color: #12244d;
      }
      li.active:before {
        position: absolute;
        top: -1px;
        bottom: -1px;
        left: -1px;
        right: -1px;
        background: linear-gradient(90deg,#EF565C 0%, #606db9 100%);
        content: '';
        z-index: -1;
        border-radius: 20px;
      }
    }
    .warning-time {
      padding: 15px 10px;
      &>span {
        margin-right: 15px;
      }
      &>span:nth-of-type(2) {
        margin-left: 30px;
      }
      .ivu-select-dropdown span {
        color: #000;
        font-size: 12px;
      }
    }
  }
</style>
