<template>
  <div>
    <div class="myContainer my-border">
      <div class="expert-item flex">
        <div class="item">
          <div class="item-img">
            <img src="../../assets/imgs/expert1.png" alt="">
          </div>
          <div class="item-resumes">
            <p><i class="name">Algermon</i>
              国际著名道桥专家
            </p>
            <p class="space"><i>简介</i>：国际著名道桥专家，40年道桥经验，对
              道桥有着独到的见解，具有扎实的理论基础和丰
              富实践经验...</p>
            <p><i>专长</i>：道桥数据分析、道桥设计、道桥工程
              道桥勘测
            </p>
          </div>
        </div>
        <div class="item">
          <div class="item-img">
            <img src="../../assets/imgs/expert2.png" alt="">
          </div>
          <div class="item-resumes">
            <p><i class="name">Algermon</i>
              国际著名道桥专家
            </p>
            <p class="space"><i>简介</i>：国际著名道桥专家，40年道桥经验，对
              道桥有着独到的见解，具有扎实的理论基础和丰
              富实践经验...</p>
            <p><i>专长</i>：道桥数据分析、道桥设计、道桥工程
              道桥勘测
            </p>
          </div>
        </div>
        <div class="item">
          <div class="item-img">
            <img src="../../assets/imgs/expert3.png" alt="">
          </div>
          <div class="item-resumes">
            <p><i class="name">Algermon</i>
              国际著名道桥专家
            </p>
            <p class="space"><i>简介</i>：国际著名道桥专家，40年道桥经验，对
              道桥有着独到的见解，具有扎实的理论基础和丰
              富实践经验...</p>
            <p><i>专长</i>：道桥数据分析、道桥设计、道桥工程
              道桥勘测
            </p>
          </div>
        </div>
        <div class="item">
          <div class="item-img">
            <img src="../../assets/imgs/expert4.png" alt="">
          </div>
          <div class="item-resumes">
            <p><i class="name">Algermon</i>
              国际著名道桥专家
            </p>
            <p class="space"><i>简介</i>：国际著名道桥专家，40年道桥经验，对
              道桥有着独到的见解，具有扎实的理论基础和丰
              富实践经验...</p>
            <p><i>专长</i>：道桥数据分析、道桥设计、道桥工程
              道桥勘测
            </p>
          </div>
        </div>
      </div>
      <div class="splie-page">
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
<style lang="scss">
  .myContainer {
    width: 100%;
    height: 100%;
    padding: 15px;
    .expert-item {
      height: 90%;
      flex-wrap: wrap;
      .item {
        display: flex;
        padding: 3% 5.5%;
        margin: auto;
        border-radius: 6px;
        width: 49%;
        height: 47.5%;
        background-image: url("../../assets/imgs/item-bg.png");
        .item-img {
          width: 26%;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .item-resumes {
          padding-left: 10%;
          width: 74%;
          p:nth-last-of-type(2) {
            margin: 15px 0;
            line-height: 25px;
          }
          i {
            color: #46e3ff;
            font-size: 16px;
          }
          i.name {
            font-size: 18px;
            display: block;
            line-height: 2em;
          }
        }
      }
    }
    .splie-page {
      height: 10%
    }
  }
  //适配小屏幕
  @media screen and (max-width: 1440px) {
    #app .space {
      margin: 8px 0 !important;
      line-height: 20px !important;

    }
  }
</style>
