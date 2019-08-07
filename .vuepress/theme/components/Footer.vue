<template>
  <v-footer
    dark
    padless
    class="footer-page"
  >
    <v-card
      flat
      tile
      class="text-center indigo white--text footer-card"
      color="#2b2b2b"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        纵有疾风起，人生不言弃
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        2019 — {{ new Date().getFullYear() }} — <strong>Libra</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      icons: [
        'fab fa-qq',
        'fab fa-weixin',
        'fab fa-gitlab',
        'fab fa-weibo',
        'fab fa-github',
      ],
    }),
  }
</script>
<style lang="less">
.footer-page{
  width:100%;
  .footer-card{
    width: 100%;
  }
  .text-center{
    text-align: center;
  }
}
</style>
