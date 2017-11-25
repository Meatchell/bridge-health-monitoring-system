<template>
  <div>
    <div class="myContainer-message my-border">
      <div class="message-tit clearfix">
        <div class="fl">
          系统通知 <span class="highlight">（共{{message.length}}条，未读通知{{message | unread }}条）</span>
        </div>
        <div class="fr">
          <Button type="primary" shape="circle" @click="allSelect($event)">全选</Button>
          <Button type="error" shape="circle" @click="modal2 = true">删除</Button>
        </div>
      </div>
      <div class="message-content">
        <ul v-for="(item, index) in message">
          <li v-model="open" v-if="!item.open" :class="{unread: item.unread}">
            <Row type="flex" justify="space-between" class="row-bg">
              <Col span="4">
              <Checkbox v-model="item.select"></Checkbox>
              {{item.title.slice(0, 10)}}
              <span v-show="item.title.length > 10">...</span>
              </Col>
              <Col span="10">
              {{item.content.slice(0, 37)}}
              <span v-show="item.content.length > 37">...</span>
              </Col>
              <Col span="6">
              {{item.time}}
              </Col>
              <Col span="2">
              <Button type="primary" shape="circle" @click="open(index)">查看</Button>
              </Col>
            </Row>
          </li>
          <li v-else class="unread open">
            <div class="clearfix">
              <p class="fl">{{item.title}}</p>
              <p class="fr">
                <Button v-show=" message.length - 1 !== index" type="primary" @click="next(index)">下一条</Button>
                &nbsp;&nbsp;<Button type="error" @click="currentDeleted(index)">删除</Button>&nbsp;&nbsp;
                <Button type="info" @click="back(index)">返回</Button>
              </p>
            </div>
            <div>{{item.content}}</div>
            <div style="text-align: right">
              桥梁健康监测系统&nbsp;&nbsp; {{item.time}}
            </div>
          </li>

        </ul>
      </div>
      <div class="angular left-top"></div>
      <div class="angular right-top"></div>
      <div class="angular left-bottom"></div>
      <div class="angular right-bottom"></div>
    </div>
    <Modal @on-ok="ok"
           v-model="modal3">
      <h2>是否确认删除！！</h2>
    </Modal>
    <Modal @on-ok="ok2"
           v-model="modal2">
      <h2 v-if="this.message.find((n) => n.select == true)">是否删除所有选择项！！</h2>
      <h2 v-else>没有选择项</h2>
    </Modal>
  </div>

</template>
<script>
  export default {
    data () {
      return {
        modal2: false,
        modal3: false,
        removeIndex: 0,
        message: [
          {
            title: '我是标题1我是标题1',
            content: '我是内容11111111111111111111111111',
            time: '2017-11-11: 0:30:12',
            unread: true,
            open: false,
            select: false
          },
          {
            title: '我是标题2',
            content: '因为 v-if 是一个指令，所以必须将它添加到一个元素上。但是如果想切换多个元素呢？此时可以把一个 template 元素当做不可见的包裹元素，并在上面使用 v-if。最终的渲染结果将不包含 template元素。',
            time: '2017-11-11: 0:30:12',
            unread: true,
            open: false,
            select: false
          },
          {
            title: '我是标题3',
            content: '我是内容11111111111111111111111111',
            time: '2017-11-11: 0:30:12',
            unread: true,
            open: false,
            select: false
          },
          {
            title: '我是标题4',
            content: '我是内容11111111111111111111111111',
            time: '2017-11-11: 0:30:12',
            unread: false,
            open: false,
            select: false
          },
          {
            title: '我是标题5',
            content: '我是内容11111111111111111111111111',
            time: '2017-11-11: 0:30:12',
            unread: false,
            open: false,
            select: false
          },
          {
            title: '我是标题6',
            content: '我是内容11111111111111111111111111',
            time: '2017-11-11: 0:30:12',
            unread: false,
            open: false,
            select: false
          },
          {
            title: '我是标题6',
            content: '我是内容11111111111111111111111111',
            time: '2017-11-11: 0:30:12',
            unread: false,
            open: false,
            select: false
          },
          {
            title: '我是标题7',
            content: '我是内容11111111111111111111111111',
            time: '2017-11-11: 0:30:12',
            unread: false,
            open: false,
            select: false
          }
        ]
      }
    },
    created () {
      this.$store.dispatch('sendmsglength', this.message.length)
    },
    methods: {
      open (i) {     // 查看详情
        this.message[i].open = true
      },
      back (i) {    // 返回
        this.message[i].open = false
      },
      next (i) {    // 查看下一条详情
        this.message[i].open = false
        this.message[i + 1].open = true
      },
      ok () {       // 模态框确认
        this.message.splice(this.removeIndex, 1)
        this.$store.dispatch('sendmsglength', this.message.length)
//        this.$Message.info('已删除')
      },
      currentDeleted (i) {
        this.modal3 = true
        this.removeIndex = i
      },
      allSelect (e) {  // 全选
        let text = e.target.innerText
        if (text === '全选') {
          this.message.forEach((v) => {
            v.select = true
          })
          e.target.innerText = '全不选'
        } else {
          this.message.forEach((v) => {
            v.select = false
          })
          e.target.innerText = '全选'
        }
      },
      ok2 () {
        let mesLength = this.message.length
        for (var i = 0; i < mesLength; i++) {
          if (this.message[i].select) {
            this.message.splice(i, 1)
            i--
            mesLength--
          }
        }
        this.$store.dispatch('sendmsglength', this.message.length)
      }
    },
    filters: {      // 筛选未读通知
      unread: function (value) {
        let k = 0
        value.forEach((v, i) => {
          if (v.unread) {
            k++
          }
        })
        return k
      }
    }
  }
</script>
<style lang="scss" scoped>
  .myContainer-message {
    width: 100%;
    min-height: 100%;
    padding: 30px;
    .message-tit {
      padding-bottom: 10px;
      .fr {
        button {
          padding: 4px 20px;
        }
        button:nth-of-type(2) {
          margin-left: 30px;
          margin-right: 15px;
        }
      }
    }
    .message-content {
      li {
        margin: 15px 0;
        padding: 20px 0 20px 1.5%;
        border: solid 1px rgba(62, 87, 168, 0.48);
        background-color: rgba(48, 59, 92, 0.3);
        button {
          padding: 2px 15px;
        }
      }
      li.open {
        padding-left: 46px;
        padding-right: 25px;
        .clearfix {
          color: #00fdff;
        }
        div:nth-child(2) {
          padding: 20px 0;
          width: calc(100% - 270px);
          line-height: 25px;
        }
      }
      li.unread {
        background-image: url(../../assets/imgs/item-bg.png);
        & > div > div:first-child {
          color: #00fdff;
        }
      }

    }
  }

</style>
