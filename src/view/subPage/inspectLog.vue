<template>
  <div>
    <div class="myContainer my-border">
      <div class="inspect-log-tit clearfix">
        <div class="fl clearfix">
          <div class="inspect-factor fl">
            <span>检测因素</span>
            <Select v-model="model1" style="width:200px">
              <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </div>
          <div class="inspect-person fl">
            <span>巡检人</span>
            <Input placeholder="请输入..." style="width: 300px"></Input>
          </div>
          <div class="inpect-btn fl">
            <Button type="primary" shape="circle">&nbsp; &nbsp; &nbsp;查询&nbsp; &nbsp; &nbsp;</Button>
          </div>
        </div>
        <div class="fr">
          <div class="new-build">
            <img src="../../assets/imgs/newly-build.png" alt="">
            <span>新建</span>
          </div>

        </div>
      </div>
      <div class="inspect-table">
        <table class="mytable" cellspacing="0" cellpadding="0">
          <thead>
          <tr>
            <th>序号 <img class="fr" src="../../assets/imgs/tit-space.png"></th>
            <th>现场照片 <img class="fr" src="../../assets/imgs/tit-space.png"></th>
            <th>桥梁位置 <img class="fr" src="../../assets/imgs/tit-space.png"></th>
            <th>提报时间 <img class="fr" src="../../assets/imgs/tit-space.png"></th>
            <th>问题描述 <img class="fr" src="../../assets/imgs/tit-space.png"></th>
            <th>提报人 <img class="fr" src="../../assets/imgs/tit-space.png"></th>
            <th>确认信息 <img class="fr" src="../../assets/imgs/tit-space.png"></th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr></tr>
          <tr>
            <td>1</td>
            <td>img标签</td>
            <td>南桥支点</td>
            <td>提报时间</td>
            <td>XXXXXXXXXXXXXXXXX</td>
            <td>张三丰</td>
            <td>N/Y</td>
            <td>
              <Button type="primary" shape="circle">圆角按钮</Button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>img标签</td>
            <td>南桥支点</td>
            <td>提报时间</td>
            <td>XXXXXXXXXXXXXXXXX</td>
            <td>张三丰</td>
            <td>N/Y</td>
            <td>
              <Button type="primary" shape="circle">圆角按钮</Button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>img标签</td>
            <td>南桥支点</td>
            <td>提报时间</td>
            <td>XXXXXXXXXXXXXXXXX</td>
            <td>张三丰</td>
            <td>N/Y</td>
            <td>
              <Button type="primary" shape="circle">圆角按钮</Button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>img标签</td>
            <td>南桥支点</td>
            <td>提报时间</td>
            <td>XXXXXXXXXXXXXXXXX</td>
            <td>张三丰</td>
            <td>N/Y</td>
            <td>
              <Button type="primary" shape="circle">圆角按钮</Button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>img标签</td>
            <td>南桥支点</td>
            <td>提报时间</td>
            <td>XXXXXXXXXXXXXXXXX</td>
            <td>张三丰</td>
            <td>N/Y</td>
            <td>
              <Button type="primary" shape="circle">圆角按钮</Button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>img标签</td>
            <td>南桥支点</td>
            <td>提报时间</td>
            <td>XXXXXXXXXXXXXXXXX</td>
            <td>张三丰</td>
            <td>N/Y</td>
            <td>
              <Button type="primary" shape="circle">圆角按钮</Button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>img标签</td>
            <td>南桥支点</td>
            <td>提报时间</td>
            <td>XXXXXXXXXXXXXXXXX</td>
            <td>张三丰</td>
            <td>N/Y</td>
            <td>
              <Button type="primary" shape="circle">圆角按钮</Button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>img标签</td>
            <td>南桥支点</td>
            <td>提报时间</td>
            <td>XXXXXXXXXXXXXXXXX</td>
            <td>张三丰</td>
            <td>N/Y</td>
            <td>
              <Button type="primary" shape="circle">圆角按钮</Button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>img标签</td>
            <td>南桥支点</td>
            <td>提报时间</td>
            <td>XXXXXXXXXXXXXXXXX</td>
            <td>张三丰</td>
            <td>N/Y</td>
            <td>
              <Button type="primary" shape="circle">圆角按钮</Button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>img标签</td>
            <td>南桥支点</td>
            <td>提报时间</td>
            <td>XXXXXXXXXXXXXXXXX</td>
            <td>张三丰</td>
            <td>N/Y</td>
            <td>
              <Button type="primary" shape="circle">圆角按钮</Button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>img标签</td>
            <td>南桥支点</td>
            <td>提报时间</td>
            <td>XXXXXXXXXXXXXXXXX</td>
            <td>张三丰</td>
            <td>N/Y</td>
            <td>
              <Button type="primary" shape="circle">圆角按钮</Button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>img标签</td>
            <td>南桥支点</td>
            <td>提报时间</td>
            <td>XXXXXXXXXXXXXXXXX</td>
            <td>张三丰</td>
            <td>N/Y</td>
            <td>
              <Button type="primary" shape="circle">圆角按钮</Button>
            </td>
          </tr>
          </tbody>
        </table>
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
        cityList: [
          {
            value: 'beijing',
            label: '北京市'
          },
          {
            value: 'shanghai',
            label: '上海市'
          },
          {
            value: 'shenzhen',
            label: '深圳市'
          },
          {
            value: 'hangzhou',
            label: '杭州市'
          },
          {
            value: 'nanjing',
            label: '南京市'
          },
          {
            value: 'chongqing',
            label: '重庆市'
          }
        ],
        model1: ''
      }
    }
  }
</script>
<style lang="scss">
  .myContainer {
    min-height: 100%;
    width: 100%;
    padding: 30px 20px 10px;
    .inspect-log-tit {
      .fl {
        & > div {
          span {
            padding: 0 20px;
          }
        }
        .inpect-btn {
          margin-left: 100px;
        }
      }
      .fr {
        .new-build {
          cursor: pointer;
          img {
            display: inline-block;
            width: 45px;
            margin-right: 10px;
          }
        }
      }
    }
    .inspect-table {
      margin-top: 20px;
    }
  }

</style>
