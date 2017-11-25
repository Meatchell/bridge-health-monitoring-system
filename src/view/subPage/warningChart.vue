<template>
  <div>
    <div class="myContainer my-border">
      <div class="container">
        <div class="charts">
          <div>
            <div class="category"></div>
            <div class="category1"></div>
          </div>
          <div>
            <div class="pie"></div>
            <div class="radar"></div>
            <div class="pie1"></div>
          </div>
        </div>

        <div class="angular1 left-top1"></div>
        <div class="angular1 right-top1"></div>
        <div class="angular1 left-bottom1"></div>
        <div class="angular1 right-bottom1"></div>
      </div>
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
        category: {
          color: ['rgba(255,108,91, 0.8)', 'rgba(255,213,95, 0.8)', 'rgba(59,220,86 0.8)', 'rgba(59,220,86, 0.8)'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          yAxis: [
            {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          xAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '直接访问',
              type: 'bar',
              barWidth: '60%',
              data: [10, 52, 200, 334, 390, 330, 220]
            }
          ]
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .myContainer {
    width: 100%;
    min-height: 100%;
    .container {
      width: calc(100% - 30px);
      height: calc(100% - 30px);
      position: absolute;
      .charts {
        width: 100%;
        height: 100%;
        & > div:nth-child(1) {
          width: 100%;
          display: flex;
          justify-content: space-between;
          height: 49%;
          & > div {
            background-image: url(../../assets/imgs/item-bg.png);
            width: 49.5%;
            height: 100%;
          }
        }
        & > div:nth-child(2) {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 49%;
          display: flex;
          justify-content: space-between;
          & > div {
            width: 32.66666%;
            height: 100%;
            background-image: url(../../assets/imgs/item-bg.png);
          }
        }
      }
      .angular1 {
        position: absolute;
        width: 40px;
        height: 40px;
        background-size: cover;
      }
      .left-top1 {
        top: 0px;
        left: 0px;
        background-image: url("../../assets/imgs/top-left1.png");
      }
      .right-top1 {
        top: 0px;
        right: 0px;
        background-image: url("../../assets/imgs/top-right1.png");
      }
      .right-bottom1 {
        bottom: 0px;
        right: 0px;
        background-image: url("../../assets/imgs/right-bottom1.png");
      }
      .left-bottom1 {
        bottom: 0px;
        left: 0px;
        background-image: url("../../assets/imgs/left-bottom1.png");
      }
    }
  }

</style>
