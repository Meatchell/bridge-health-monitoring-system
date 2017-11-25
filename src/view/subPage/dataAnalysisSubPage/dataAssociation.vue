<template>
  <div>
    <div>
      <div class="myform clearfix dataAssociation">
        <table class="fl">
          <tr>
            <td>监测因素</td>
            <td>
              <Select v-model="model1" style="width:200px">
                <Option v-for="item in List1" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </td>
            <td style="padding-left: 70px">单点数据</td>
            <td>
              <Select v-model="model2" style="width:200px">
                <Option v-for="item in List2" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </td>
          </tr>
          <tr>
            <td>监测因素</td>
            <td>
              <Select v-model="model3" style="width:200px">
                <Option v-for="item in List3" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </td>
            <td style="padding-left: 70px">单点数据</td>
            <td>
              <Select v-model="model4" style="width:200px">
                <Option v-for="item in List2" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </td>
            <td  @click="addData($event)" style="padding-left: 30px;font-size: 22px;cursor: pointer">
              <Tooltip content="添加关联数据" placement="top">
                <Icon type="plus-round"></Icon>
              </Tooltip>
            </td>
          </tr>
          <tr>
            <td>自定义</td>
            <td class="tiemDown" colspan="3">
              <Date-picker type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px"></Date-picker>
            </td>
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
      <div class="chart">
      </div>
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
            label: '上海市2'
          },
          {
            value: 'chongqing',
            label: '重庆市'
          }
        ],
        List3: [
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
        List4: [
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
        model3: '',
        model4: ''
      }
    },
    methods: {
      addData () {
        console.log(1)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .top,.bottom{
    text-align: center;
  }
  .center{
    width: 300px;
    margin: 10px auto;
    overflow: hidden;
  }
  .center-left{
    float: left;
  }
  .center-right{
    float: right;
  }

</style>
