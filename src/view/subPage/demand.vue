<template>
  <div>
    <div class="demand-myContainer my-border">
      <ul class="demand-tab clearfix">
        <li :class="{active: this.$route.path == '/demand'  || this.$route.path == '/all'}"
            @click="">全部
        </li>
        <li>在线咨询</li>
        <li>数据诊断</li>
        <li>线下诊断</li>
        <li>我的需求</li>
        <Button shape="circle" type="primary">发布需求</Button>
      </ul>
      <div class="demand-tab-content">
        <div class="demand-title clearfix">
          <div class="fl">
            <div class="fl">标题</div>
          </div>
          <div class="fr flex">
            <div>发布人</div>
            <div><a>回复</a>&nbsp;&nbsp;<a>查看</a></div>
            <div>任务认领</div>
          </div>
        </div>
        <div class="demand-content clearfix">
          <div class="item clearfix">
            <div class="fl">
              <Icon style="font-size: 22px; color: #fff; vertical-align: middle" type="ios-paper"></Icon>
              <u>【在线咨询】</u>
              <span>需求内容需求内容需求内容需求内容需求内容需求内容需求内容需求内容需求内容...</span>
            </div>
            <div class="fr flex">
              <div>
                <p>某某某</p>
                <p>2017-7-21 16:00</p>
              </div>
              <div>
                <p>30</p>
                <p>5</p>
              </div>
              <div>
                <p>某某某</p>
                <p>2017-7-21 16:00</p>
              </div>
            </div>
          </div>
          <div class="item clearfix">
            <div class="fl">
              <Icon style="font-size: 22px; color: #fff; vertical-align: middle" type="ios-paper"></Icon>
              <u>【在线咨询】</u>
              <span>需求内容需求内容需求内容需求内容需求内容需求内容需求内容需求内容需求内容...</span>
              <ul class="replay" >
                <li>
                  <p>
                    <span>回复1</span>
                    <span>张三丰</span>
                    <span>2017-7-21 16:00</span>
                    <span>
                      <Button type="info" shape="circle">联系回复人</Button>
                    </span>
                  </p>
                  <p>需求内容需求内容需求内容需求内容需求内容需求内容需求内容需求内容需求内容...</p>
                </li>
                <li>
                  <p>
                    <span>回复2</span>
                    <span>张三丰</span>
                    <span>2017-7-21 16:00</span>
                    <span>
                      <Button type="info" shape="circle">联系回复人</Button>
                    </span>
                  </p>
                  <p>需求内容需求内容需求内容需求内容需求内容需求内容需求内容需求内容需求内容...</p>
                </li>
                <li>
                  <p>
                    <span>回复3</span>
                    <span>张三丰</span>
                    <span>2017-7-21 16:00</span>
                    <span>
                      <Button type="info" shape="circle">联系回复人</Button>
                    </span>
                  </p>
                  <p>需求内容需求内容需求内容需求内容需求内容需求内容需求内容需求内容需求内容...</p>
                </li>
              </ul>
            </div>
            <div class="fr flex">
              <div>
                <p>某某某</p>
                <p>2017-7-21 16:00</p>
              </div>
              <div>
                <p>30</p>
                <p>5</p>
              </div>
              <div>
                <p>某某某</p>
                <p>2017-7-21 16:00</p>
              </div>
            </div>
          </div>
          <div class="item clearfix">
            <div class="fl">
              <Icon style="font-size: 22px; color: #fff; vertical-align: middle" type="ios-paper"></Icon>
              <u>【在线咨询】</u>
              <span>需求内容需求内容需求内容需求内容需求内容需求内容需求内容需求内容需求内容...</span>
            </div>
            <div class="fr flex">
              <div>
                <p>某某某</p>
                <p>2017-7-21 16:00</p>
              </div>
              <div>
                <p>30</p>
                <p>5</p>
              </div>
              <div>
                <p>某某某</p>
                <p>2017-7-21 16:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="angular left-top"></div>
      <div class="angular right-top"></div>
      <div class="angular left-bottom"></div>
      <div class="angular right-bottom"></div>
    </div>
  </div>
</template>
<script>

</script>
<style lang="scss" scoped>
  .demand-myContainer {
    width: 100%;
    min-height: 100%;
    .demand-tab {
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
      button {
        float: right;
        padding: 3px 20px;
        margin-right: 30px;
      }
    }
    .demand-tab-content {
      min-height: 500px;
      padding: 25px;
      background-color: #191e48;
      border-style: solid;
      border-width: 2px;
      border-image-source: linear-gradient(0deg,
        #3277ae 0%,
        #5264b7 100%);
      border-image-slice: 1;
      /*height: calc(100% - 31px);*/
      .demand-title {
        font-size: 16px;
        margin-bottom:20px;
        padding-left: 1.5%;
        li {
          float: right;
        }
        .fr.flex {
          width: 35%;
          justify-content: space-around;
          &>div {
            width: 130px;
            text-align: center;
          }
        }
      }
      .demand-content {
        .item {
          margin: 15px 0;
          padding: 20px 0 20px 1.5%;
          border: solid 1px rgba(62, 87, 168, 0.48);
          background-color: rgba(48, 59, 92, 0.3);
          background-image: url('../../assets/imgs/item-bg.png');
          .fl {
            width: 55%;
            i {
              color: #ccc;
            }
            u {
              color: #00fdff;
            }
          }
          .fr.flex {
            width: 35%;
            justify-content: space-around;
            &>div {
              width: 130px;
              text-align: center;
            }
          }
          .replay {
            color: #d0cece;
             li {
               padding: 15px 10px 15px 26px;
               p:first-child {
                 display: flex;
                 justify-content: space-between;
                 button {
                   padding: 2px 15px;
                 }
               }
             }
          }
        }
      }
    }
  }

</style>
