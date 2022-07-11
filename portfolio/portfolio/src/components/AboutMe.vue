<template>
  <div class="aic">
      <div class="logoback">
      <h1>About Me</h1>
      ご訪問ありがとうございます。<br>
      <br>
      岡山県で活動するWebエンジニアわらびのと申します。<br>
      情報系大学を卒業後、情報サービス企業に就職<br>Web系を中心とするSEプログラマーとして、<br>およそ{{ getWorkYM }}年業務に関わってきました。<br>
      <br>
      このサイトはその一部を紹介するとともに、<br>
      今後に役立つパーツ集として<br>記録に残していきたいと思います。<br>
      </div>
  </div>
</template>

<script>
import * as util from "@/services/util";

export default {
  name: 'AboutMe',
  computed: {
    getWorkYM() {
      return parseInt(util.getNow("YYYY")) - 2006;
    }
  }
}
</script>

