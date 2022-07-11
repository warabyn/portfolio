<template>
  <div class="mg50">
    <carousel :imgs="imgs" :startImage="startImage"></carousel>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";

export default {
  name: 'WorkProduce',
  components: {
    Carousel,
  },
  data() {
    return {
      imgs: [
        { img: "portfolio1.png", url: "https://warabyn.github.io/portfolio/",
            comment: "このサイトです。vue3で作成しました。<br>動作確認にnode.js、IDEにintelliJ IDEAを使用。<br>　コンセプトは「無意味に重複させない」で、最軽量のコーディングになるよう意識しました。<br> gitで公開しているのでドキドキです。それほど設計に日数をかけていないのでアラは大きい。今後もメンテナンスしていきたいです。" },
        { img: "portfolio2.png", url: "https://manabi.benesse.ne.jp/",
            comment: "派遣業務でPG、テスト、リリース、保守に参画しました。<br>10万人規模のアクセスを想定したネットワーク構成、SQL設定など学ぶべきものが多くありました。<br> 「たまにタイムアウトになる」という現象に悩まされたことが印象に残っています。<br> 原因はロードバランサーのタイムアウト設定で、最小値がデフォルトだったため、<br> 別webサーバに頻繁に振り分けられたことでタイムアウトを引き起こしていて、わかればなーんだ、という話でしたが<br> PG担当とインフラ担当の連携、というような分担と調整の重要さを意識した案件でした。<br>" },
        { img: "portfolio3.png", url: "",
            comment: "業務案件、守秘義務のため詳しくは書けませんが、自動車の販売およびレンタカーのサイトをほぼ単独で開発しました。<br> フロントエンドはbootstrap+smarty、バックエンドはjavaのspringboot+mybatis<br> 業務知識が重要な業務だったため、可能な限りモジュールの細分化を試み、メンテナンス性を良くするのに苦心しました。<br> 自分自身も他人のプログラムを保守する経験が多かったため、どこまで部品化するべきか単一でまとめるべきかの配分にいつも悩みます。" },
        { img: "portfolio4.png", url: "https://tenkiyohou.net/",
            comment: "趣味で所属していた地元劇団さんのホームページと管理者機能を開発しました。<br> cakePHPで作成。SEO対策やブログのfeed、SNSのAPI連携等、「他の情報を取り入れる」を意識して作ったつもりでしたが、今思うともっとやりようがあったかと反省します。<br> 学生時代～社会人なりたてに作った、とても勉強になった思い入れのあるサイトでもあります。" },
        { img: "portfolio5.png", url: "",
            comment: "半分趣味で、作業自動化の手法を勉強しています。python+SelenuimやUWSCなどでゲームや情報収集、分析の可能性を探っています。<br>将来的にはAIでコード自動生成などに繋げられたらと思っていますが、書籍をあたっても2022年現在ではまだ概要がほとんどだけで実践に至れていません。<br>一般の人が最も望むのは、「同じ作業を何度も繰り返すのが面倒」ということに集約すると思うので、このあたりの解決方法を何通りも押さえて置きたいと主にpythonを勉強中です。" },
      ],
      startImage: 0
    };
  },
  computed: {
  }
}
</script>

