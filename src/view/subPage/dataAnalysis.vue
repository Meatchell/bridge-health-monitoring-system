<template>
  <div>
    <div class="myContainer-data my-border">
      <ul class="data-analysis-tab clearfix">
        <li :class="{active: this.$route.path == '/history'  || this.$route.path == '/dataAnalysis'}"
            @click="ToHistory">历史数据</li>
        <li :class="{active: this.$route.path == '/dataComparison'}"
            @click="ToComparison">数据对比
        </li>
        <li :class="{active: this.$route.path == '/dataAssociation'}" @click="ToAssociation">数据关联</li>
        <li :class="{active: this.$route.path == '/dataReport'}" @click="ToReport">数据表报</li>
      </ul>
      <router-view class="tab-content"></router-view>

      <div class="angular left-top"></div>
      <div class="angular right-top"></div>
      <div class="angular left-bottom"></div>
      <div class="angular right-bottom"></div>
    </div>
  </div>
</template>
<script>
  export default {

    methods: {
      ToHistory () {
        this.$router.push('/history')
      },
      ToComparison () {
        this.$router.push('/dataComparison')
      },
      ToAssociation () {
        this.$router.push('/dataAssociation')
      },
      ToReport () {
        this.$router.push('/dataReport')
      }
    }
  }
</script>
<style lang="scss">
  .myContainer-data {
    width: 100%;
    height: 100%;
    padding-top: 10px;
    .data-analysis-tab {
      li.active {
        background-color: #2a8cf9;
        box-shadow: 0px 4px 4px 0px rgba(7, 33, 85, 0.3);
      }
      li {
        float: left;
        background-color: #2d4085;
        box-shadow: 0px 4px 4px 0px rgba(53, 45, 93, 0.1);
        border-radius: 6px 6px 0 0;
        padding: 5px 10px;
        cursor: pointer;
      }
      li + li {
        margin-left: 10px;
      }
      li:first-child {
        margin-left: 20px;
      }
    }
    .tab-content {
      padding: 10px;
      background-color: #191e48;
      border-style: solid;
      border-width: 2px;
      border-image-source: linear-gradient(0deg,
        #3277ae 0%,
        #5264b7 100%);
      border-image-slice: 1;
      height: calc(100% - 31px);
      .myform {
        .ivu-select-dropdown span {
          color: #000;
          font-size: 12px;
        }
        tr {
          height: 50px;
          td:nth-child(odd) {
            padding-right: 40px;
            padding-left: 10px;
            text-align: right;
          }
        }
        .btn {
          padding-top: 10px;
          margin-left: 10%;
        }
      }
      .chart-tit {
        height: 50px;
        background-color: #27326b;
        margin-right: 115px;
        .bg {
          height: 50px;
          width: 96px;
          margin-right: -96px;
          background-size: cover;
          background-image: url("../../assets/imgs/chart-tit-right.png");
        }
        .chart-content {
          line-height: 50px;
          width: 98%;
          ul.fl {
            padding-left: 10px;
            li {
              float: left;
              padding: 0 15px;
              cursor: pointer;
            }
            li.active {
              color: #00fdff;
              text-decoration: underline;
            }
          }
          ul.fr {
            li {
              float: left;
              padding-left: 50px;
              position: relative;
              &:before {
                content: '';
                position: absolute;
                background-color: #695cbc;
                box-shadow: 2px 4px 6px 0px rgba(11, 31, 66, 0.9);
                border-radius: 10px;
                width: 17px;
                height: 17px;
                top: 16px;
                left: 26px;
              }
            }
            li:nth-child(2) {
              &:before {
                background-color: #00c7ff;
              }
            }
            li:nth-child(3) {
              &:before {
                background-color: #1b6cf6;
              }
            }
            li:nth-child(4) {
              &:before {
                background-color: #f0565d;
              }
            }
          }
        }
      }
    }
  }

</style>
