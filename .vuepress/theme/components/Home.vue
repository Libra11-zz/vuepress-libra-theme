<template>
  <div class="home-container">
    <div class="home-top">
      <div class="home-introduce">Libra-Blog</div>
      <div class="home-introduce-detail">站在巨人的肩膀上是为了超越巨人</div>
      <v-divider color="#aaa"></v-divider>
      <div class="home-content">
        <div>
          <p class="title">借势</p>
          <p class="content">时势造英雄，读懂趋势，把握趋势，才能赢在未来，人生最大的智慧是选择。</p>
        </div>
        <div>
          <p class="title">借智</p>
          <p class="content">聪明人不断摸索，总结经验，智慧的人善于向外学习，快速行动，节约人生成本 缩短成功时间。</p>
        </div>
        <div>
          <p class="title">借力</p>
          <p class="content">世上没有完美的个人，只有完美的团队，小成功靠个人，大成功靠团队。</p>
        </div>
      </div>
      <div class="home-contact">
        <v-btn class="ma-2" color="#fc0">
        <v-icon left>fab fa-weixin</v-icon> 联系我
      </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="less">
body{
  background-color: #333;
}
.home-container{
  max-width: 1280px;
  margin: 0 auto;
  .home-top{
    color: #ddd;
    padding: 20px;
    .home-introduce{
      color: #fc0;
      text-align: center;
      font-size: 4em;
      padding: 0 0 20px 0;
      @media screen and (max-width: 768px) {
        font-size: 2em;
      }
    }
    .home-introduce-detail{
      text-align: center;
      font-size: 1.5em;
      padding: 0 0 20px 0;
      margin-bottom: 20px;
      @media screen and (max-width: 768px) {
        font-size: 1em;
      }
    }
    .home-content{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 20px;
      div{
        width:25%;
        display: flex;
        flex-direction: column;
        transition: all 0.5s;
        @media screen and (max-width: 768px) {
          width: 100%;
        }
        &:hover{
          color: #fc0;
          transition: all 0.5s;
          transform: scale(1.05)
        }
        .title{
          font-size: 1.6em;
        }
        .content{
          padding: 10px 0;
        }
      }
    }
    .home-contact{
      text-align: center;
      margin-top: 10px;
    }
  }
}
</style>