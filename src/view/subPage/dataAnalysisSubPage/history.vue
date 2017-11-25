<template>
  <div>
    <div class="myform clearfix">
      <table class="fl">
        <tr>
          <td>监测因素</td>
          <td>
            <Select v-model="model1" style="width:200px">
              <Option v-for="item in List1" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </td>
          <!--<td style="padding-left: 70px">选择时段</td>-->
          <!--<td>-->
            <!--<Date-picker type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px"></Date-picker>-->
          <!--</td>-->
        </tr>
        <tr>
          <td>单点数据</td>
          <td>
            <Select v-model="model2" style="width:200px">
              <Option v-for="item in List2" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </td>
          <!--<td>选择时段</td>-->
          <!--<td>-->
            <!--<Date-picker type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px"></Date-picker>-->
          <!--</td>-->
        </tr>
      </table>
      <div class="fl btn">
        <Button type="primary" shape="circle">&nbsp; &nbsp; &nbsp;查询&nbsp; &nbsp; &nbsp;</Button>
      </div>
    </div>
    <div class="chart-tit clearfix">
      <div class="fl chart-content clearfix">
        <ul class="fl">
          <li>实时</li>
          <li class="active">近一天</li>
          <li>近30天</li>
          <li>近90天</li>
        </ul>
        <ul class="fr clearfix">
          <li>均值</li>
          <li>最大值</li>
          <li>最小值</li>
          <li>当前值</li>
        </ul>
      </div>
      <div class="bg fr"></div>
    </div>
    <div id="dataChart">
    </div>
  </div>

</template>
<script>
  export default {
    data () {
      return {
        List1: [
          {
            value: 'beijing',
            label: '北京市'
          },
          {
            value: 'shanghai',
            label: '上海市'
          },
          {
            value: 'chongqing',
            label: '重庆市'
          }
        ],
        List2: [
          {
            value: 'beijing',
            label: '北京市'
          },
          {
            value: 'shanghai',
            label: '上海市'
          },
          {
            value: 'chongqing',
            label: '重庆市'
          }
        ],
        model1: '',
        model2: '',
        options: {
          color: ['#695cbc', '#00c7ff', '#1b6cf6', '#f0565d'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },

          xAxis: {
            type: 'category',
            boundaryGap: true,
            data: ['19:00', '20:00', '21:00', '22:00', '23:00', '24:00', '00:00', '01:00', '02:00', '03:00', '04:00', '05:00'],
            axisTick: {
              lineStyle: {
                color: '#00fdff'
              }
            },
            splitLine: {
              lineStyle: {
                color: ['#00fdff']
              }
            },
            axisLine: {
              lineStyle: {
                color: '#00fdff'
              }
            }
          },
          yAxis: {
            type: 'value',
            axisTick: {
              lineStyle: {
                color: '#00fdff'
              }
            },
            splitLine: {
              lineStyle: {
                color: ['#C8CBD0']
              }
            },
            splitArea: {
              interval: 3,
              show: true,
              areaStyle: {
                color: ['rgba(50,57,132, 0.3)', 'transparent']
              }
            },
            axisLine: {
              lineStyle: {
                color: '#00fdff'
              }
            }
          },
          series: [
            {
              name: '均值',
              type: 'line',
              data: [0, 15, 36, 47, 78, 19, 20, 21, 22, 23, 124, 0],
              smooth: true,
              itemStyle: {
                normal: {
                  lineStyle: {
                    width: 3
                  }
                }
              }
            },
            {
              name: '最大值',
              type: 'line',
              data: [15, 16, 17, 18, 19, 120, 21, 22, 23, 24, 125, 0],
              markLine: {
                data: [
                  {type: 'average', name: '最大值的平均值'}
                ]
              },
              smooth: true,
              itemStyle: {
                normal: {
                  lineStyle: {
                    width: 3
                  }
                }
              }
            },
            {
              name: '最小值',
              type: 'line',
              data: [13, 14, 5, 16, 17, 18, 19, 20, 21, 22, 123, 0],
              smooth: true,
              itemStyle: {
                normal: {
                  lineStyle: {
                    width: 3
                  }
                }
              }
            },
            {
              name: '当前值',
              type: 'line',
              data: [14, 15, 16, 17, 118, 129, 20, 21, 22, 23, 124, 0],
              smooth: true,
              itemStyle: {
                normal: {
                  lineStyle: {
                    width: 3
                  }
                }
              }
            }
          ]
        }
      }
    },
    mounted () {
      let myChart = this.$echarts.init(document.getElementById('dataChart'))
      myChart.setOption(this.options)
    }
  }
</script>
<style lang="scss" scoped>
  #dataChart {
    height: calc(100% - 158px);
  }

</style>
