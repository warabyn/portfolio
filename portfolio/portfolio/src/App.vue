<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <BookHistory msg="Welcome to Your Vue.js App"/>

      About me<br>
      はじめまして。岡山県のエンジニアわらびと申します。<br>
      情報系大学を卒業後、情報サービス業企業に就職、Web系を中心とするSE・プログラマーとして、およそ{{ getWorkYM }}年業務に関わってきました。<br>
      これまで行ったお仕事の業態は、医療用品在庫管理、などです。

  vue.js
  <input id="slider1" type="range" step="5" min="0" max="100" /><br>
  <div id="starWrapper">

    <div id="starsBar" disabled>

    </div>
    <div id="starsBar2">

    </div>
  </div>
</template>

<script>
import BookHistory from './components/BookHistory.vue'
import * as util from "./services/util";

export default {
  name: 'App',
  components: {
    BookHistory
  },
  computed: {
    getWorkYM() {
      return parseInt(util.getNow("YYYY")) - 2006;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<style scoped src="@/assets/css/basic.css"></style>
