<template>
  <div>
    <ul class="report-period clearfix">
      <li class="active">日报表</li>
      <li>周报表</li>
      <li>月报表</li>
      <li>年报表</li>
      <li>自定义报表</li>
    </ul>
    <div class="report-tit chart-tit clearfix">
      <div class="report-tit fl clearfix">
        <span class="fl">报表名称</span>
        <input class="inpt fl" type="text">
        <div class="fl report-btn">
          <Button type="primary" shape="circle">&nbsp; &nbsp; &nbsp;查询&nbsp; &nbsp; &nbsp;</Button>
        </div>
      </div>
      <div class="bg fr"></div>
    </div>
    <div class="peport-table">
      <table class="mytable" cellspacing="0" cellpadding="0">
        <thead>
        <tr>
          <th>报表名称 <img class="fr" src="../../../assets/imgs/tit-space.png" alt=""></th>
          <th>生成空间 <img class="fr" src="../../../assets/imgs/tit-space.png" alt=""></th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr class="space">
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>XXXX大桥XXX检测XXXXXX报表XXXXX年XX月XX日</td>
          <td>2017/07/10</td>
          <td>
            <Button type="warning" shape="circle">查看</Button>
            <Button type="info" shape="circle">下载</Button>
          </td>
        </tr>
        <tr>
          <td>XXXX大桥XXX检测XXXXXX报表XXXXX年XX月XX日</td>
          <td>2017/07/10</td>
          <td>
            <Button type="warning" shape="circle">查看</Button>
            <Button type="info" shape="circle">下载</Button>
          </td>
        </tr>
        <tr>
          <td>XXXX大桥XXX检测XXXXXX报表XXXXX年XX月XX日</td>
          <td>2017/07/10</td>
          <td>
            <Button type="warning" shape="circle">查看</Button>
            <Button type="info" shape="circle">下载</Button>
          </td>
        </tr>
        <tr>
          <td>XXXX大桥XXX检测XXXXXX报表XXXXX年XX月XX日</td>
          <td>2017/07/10</td>
          <td>
            <Button type="warning" shape="circle">查看</Button>
            <Button type="info" shape="circle">下载</Button>
          </td>
        </tr>
        <tr>
          <td>XXXX大桥XXX检测XXXXXX报表XXXXX年XX月XX日</td>
          <td>2017/07/10</td>
          <td>
            <Button type="warning" shape="circle">查看</Button>
            <Button type="info" shape="circle">下载</Button>
          </td>
        </tr>
        <tr>
          <td>XXXX大桥XXX检测XXXXXX报表XXXXX年XX月XX日</td>
          <td>2017/07/10</td>
          <td>
            <Button type="warning" shape="circle">查看</Button>
            <Button type="info" shape="circle">下载</Button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    }
  }
</script>
<style lang="scss" scoped>
  .report-period {
    padding: 10px 0 20px 0;
    li {
      float: left;
      padding: 0 25px;
    }
    li.active {
      color: #00fdff;
      text-decoration: underline;
    }
  }

  .report-tit {
    span {
      margin-left: 30px;
      line-height: 50px;
    }
    .inpt {
      margin: 10px 0 0 20px;
      width: 250px;
      border-radius: 6px;
      border: 0;
      padding: 3px;
    }
    .report-btn {
      margin: 10px 0 0 50px;
    }
  }
  .peport-table {
    margin-top: 30px;
  }
</style>
