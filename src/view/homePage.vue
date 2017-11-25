<template>
  <div>
    <div class="main-img fl my-border">
      <div class="angular left-top"></div>
      <div class="angular right-top"></div>
      <div class="angular left-bottom"></div>
      <div class="angular right-bottom"></div>
      <img src="../assets/imgs/allPic.png" alt="">
      <div class="all-pic">全景</div>
      <div class="D3-model" @click="showDevice($event)">3D模型</div>
    </div>

    <div class="side-item fr">
      <div class="sensor my-border">
        <!--//内容部分-->
        <div class="status ">
          <div class="item">
            <div class="score-top">
              <img src="../assets/imgs/score-top.png" alt="">
            </div>
            <div class="status-score">23</div>
            <div class="status-text">正常</div>
            <div class="score-bottom">
              <img src="../assets/imgs/score-bottom.png" alt="">
            </div>
          </div>
          <div class="item">
            <div class="score-top">
              <img src="../assets/imgs/score-top.png" alt="">
            </div>
            <div class="status-score">4</div>
            <div class="status-text">停止</div>
            <div class="score-bottom">
              <img src="../assets/imgs/score-bottom.png" alt="">
            </div>
          </div>
          <div class="item">
            <div class="score-top">
              <img src="../assets/imgs/score-top.png" alt="">
            </div>
            <div class="status-score">1</div>
            <div class="status-text">故障</div>
            <div class="score-bottom">
              <img src="../assets/imgs/score-bottom.png" alt="">
            </div>
          </div>
        </div>


        <div class="angular left-top">
          传感器
        </div>
        <div class="angular right-top"></div>
        <div class="angular left-bottom"></div>
        <div class="angular right-bottom"></div>
      </div>
      <div class="alert my-border">
        <span @click="ToRealTimeWarnimg">更多</span>
        <ul>
          <li class="clearfix">
            <i class="fl">这是一条预警信息</i>
            <a class="fr">处理</a>
          </li>
          <li class="clearfix">
            <i class="fl">这是一条预警信息</i>
            <a class="fr">处理</a>
          </li>
          <li class="clearfix">
            <i class="fl">这是一条预警信息</i>
            <a class="fr">处理</a>
          </li>
        </ul>
        <div class="angular left-top">
          实时预警
        </div>
        <div class="angular right-top"></div>
        <div class="angular left-bottom"></div>
        <div class="angular right-bottom"></div>
      </div>
      <div class="chart my-border">
        <div id="myChart"></div>
        <div @click="ToWarningChart" class="angular left-top">
          告警趋势
        </div>
        <div class="angular right-top"></div>
        <div class="angular left-bottom"></div>
        <div class="angular right-bottom"></div>
      </div>
    </div>

    <div :style="{display:showDeviceClass.display}" :class="{fadeInRightBig:showDeviceClass.activeClass}" class="point">
      <div class="device my-border">
        <ul>
          <li><i>设备ID</i> <u>15554844</u></li>
          <li><i>设备名称</i> <u>南塔传感器</u></li>
          <li><i>设备位置</i> <u>南塔</u></li>
          <li><i>历史告警</i> <u><a>4次</a></u></li>
        </ul>
        <div class="angular left-top">设备信息</div>
        <div class="angular right-top"></div>
        <div class="angular left-bottom"></div>
        <div class="angular right-bottom"></div>
      </div>
      <div class="my-data my-border">
        <div class="angular left-top"></div>
        <div class="angular right-top"></div>
        <div class="angular left-bottom"></div>
        <div class="angular right-bottom"></div>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    data () {
      return {
        showDeviceClass: {
          activeClass: false,
          display: 'none'
        },
        options: {
          color: ['#685DBD', '#F0565E', '#1D6AF4'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
//          legend: {
//            data: ['代码审计系统', '工单审计系统', '业务安全系统'],
//            textStyle: {
//              color: '#fff'
//            },
//            bottom: 0
//          },
          grid: {
            left: '5%',
            right: '4%',
            bottom: '5%',
            top: '15%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            name: '日期',
            nameTextStyle: {
              color: '#fff'
            },
            nameLocation: 'start',
            nameGap: 20,
            boundaryGap: ['20%', '20%'],
            data: ['11/16', '11/17', '11/18', '11/19', '11/20', '11/21', '11/22'],
            axisLabel: {
              color: '@ff'
            },
            axisTick: {
              lineStyle: {
                color: '#1F305B'
              }
            },
            splitLine: {
              lineStyle: {
                color: ['#2B4580']
              }
            },
            axisLine: {
              lineStyle: {
                color: '#1F305B'
              }
            }
          },
          yAxis: {
            type: 'value',
            name: '告警个数',
            boundaryGap: ['0%', '0%'],
            nameTextStyle: {
              color: '#fff'
            },
            axisLabel: {
              color: '#ffF'
            },
            axisTick: {
              lineStyle: {
                color: 'transparent'
              }
            },
            splitLine: {
              lineStyle: {
                color: ['#2B4580']
              }
            },
            axisLine: {
              lineStyle: {
                color: 'transparent'
              }
            }
          },
          series: [
            {
              name: '代码审计系统',
              type: 'line',
              data: [12, 13, 10, 4, 9, 0, 20]
            }
          ]
        }
      }
    },
    mounted () {
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      myChart.setOption(this.options)
    },
    methods: {
      ToRealTimeWarnimg () {
        this.$router.push('./realTimeWarning')
      },
      ToWarningChart () {
        this.$router.push('./warningChart')
      },
      showDevice (e) {
        this.showDeviceClass.activeClass = true
        this.showDeviceClass.display = 'block'
      }
    }
  }
</script>
<style lang="scss" scoped>
  .main-img {
    position: relative;
    width: 75%;
    height: 100%;
    .all-pic {
      position: absolute;
      left: 5%;
      bottom: 5%;
      border-radius: 50%;
      line-height: 50px;
      text-align: center;
      width: 50px;
      height: 50px;
      background: linear-gradient(0deg,
        rgba(68, 113, 225, 1) 0%,
        rgba(96, 109, 234, 1) 50%,
        rgba(124, 104, 242, 1) 100%);
    }
    .D3-model {
      position: absolute;
      left: 10%;
      bottom: 5%;
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      border-radius: 50%;
      background-color: #fff;
      color: #4877ff;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }

  .side-item {
    width: 23%;
    height: 100%;
    & > .my-border {
      & > .left-top {
        background-image: url("../assets/imgs/item-title.png");
        width: 194px;
        height: 40px;
        background-size: cover;
        font: 500 16px/40px "microsoft yahei";
        text-indent: 1em;
      }
    }
    & > div:first-child {
      height: 25%;
      .status {
        display: flex;
        margin-top: 30px;
        height: calc(100% - 30px);
        .item {
          font-family: MicrosoftYaHei-Bold;
          width: 27%;
          height: 58%;
          text-align: center;
          position: relative;
          margin: auto;
          /*background:*/
          /*url("../assets/imgs/score-bottom.png") 0 0 no-repeat,*/
          /*url("../assets/imgs/score-top.png")  0 100% no-repeat;*/
          background-color: rgba(105, 92, 188, 0.14);
          img {
            width: 100%;
          }
          .score-top {
            position: absolute;
            top: -24%;
            left: -4%;
            width: 107%;
          }
          .score-bottom {
            position: absolute;
            bottom: -24%;
            left: -4%;
            width: 107%;
          }
          .status-score {
            font-size: 30px;
          }

        }
        .item:nth-child(2) {
          color: #ff565f;
        }
        .item:nth-child(3) {
          color: #6094ff;
        }
      }

    }
    & > div:nth-child(2) {
      position: relative;
      height: 25%;
      margin: 9.33333% 0;
      span {
        position: absolute;
        top: 10px;
        right: 15px;
        color: #4dc0df;
        font-size: 16px;
        cursor: pointer;
      }
      ul {
        line-height: 26px;
        margin-top: 40px;
        padding: 0 15px;
        a {
          text-decoration: underline;
          color: #00fdff;;
        }
      }
    }
    & > div:nth-child(3) {
      height: 40%;

      .left-top {
        /*background-image: url("../assets/imgs/item-title-big.png");*/
        width: 210px;
        cursor: pointer;
      }
    }
    #myChart {
      width: 100%;
      height: calc(100% - 40px);
      margin-top: 40px;
    }
  }

  .point {
    position: absolute;
    width: 24%;
    height: 100%;
    top: 70px;
    right: 0;
    padding: 20px;
    background-color: #101D3F;
    & > .my-border:first-child {
      width: 100%;
      height: 30%;
      margin-top: 27%;
      margin-bottom: 10%;
      padding: 0;
      ul {
        margin-top: 50px;
        height: 72%;
        li {
          height: 25%;
          padding: 3%;
          &:nth-child(odd) {
            background-color: rgba(50, 57, 132, 0.3);
          }
        }

        i {
          width: 60%;
          text-indent: 1em;
          display: inline-block;
        }

      }
      & > .left-top {
        background-image: url("../assets/imgs/item-title.png");
        width: 194px;
        height: 40px;
        background-size: cover;
        font: 500 16px/40px "microsoft yahei";
        text-indent: 1em;
      }
    }
    & > .my-border:last-child {
      width: 100%;
      height: 30%;
    }
  }

  @media screen and (max-width: 1537px) {
    #app {
      .status-score {
        font-size: 20px;
      }
      .scort-top {
        top: 15%;
        bottom:-15%;
      }
    }
  }
</style>
