<template>
  <div class="wrapper">

    <transition name="fadeSlow">
      <div v-if="checkChangeDetail">
        最後までご覧いただきありがとうございます。<br/>
        <br/>
        長々とスキル遍歴を書いていましたが、うまく伝えられそうにないのでいったん捨てました。<br/>
      </div>
    </transition>

    <div class="l_inner" :class="checkChangeDetail?'animate__animated animate__hinge dt_hidden':''">

      <h2 class="section_title"><img alt="logo" src="@/assets/logo2.png" width=80>らびのができること</h2>

      <div class="topservice_list_wrap">
        <ul class="topservice_list list_none">
          <li class="topservice_item animation">
          <span class="topservice_item_title">要件定義・選定</span>
          <div class="bold">お客様と話をし、システムを作るまでの<br>あれこれを考えます</div>
          <div class="topservice_item_image"><img src="@/assets/img/make_phase1.jpg" class="topservice_item_image2" alt="要件定義・選定"></div>
          </li>

          <li class="topservice_item animation">
          <span class="topservice_item_title">フロントエンド</span>
          <div class="bold">フロントサイド・デザイン・API連携など<br>設計～テストします</div>
          <div class="topservice_item_image"><img src="@/assets/img/make_phase2.jpg" class="topservice_item_image2" alt="フロントエンド"></div>
          </li>

          <li class="topservice_item animation">
          <span class="topservice_item_title">バックエンド</span>
          <div class="bold">サーバサイド・バッチ処理・DB構築など<br>設計～テストします</div>
          <div class="topservice_item_image"><img src="@/assets/img/make_phase3.jpg" class="topservice_item_image2" alt="バックエンド"></div>
          </li>

          <li class="topservice_item animation">
            <span class="topservice_item_title">リリース</span>
            <div class="bold">予実を管理し、Webサーバ設定を整え<br>デプロイします</div>
            <div class="topservice_item_image"><img src="@/assets/img/make_phase4.jpg" class="topservice_item_image2" alt="リリース" ></div>
          </li>

          <li class="topservice_item animation">
            <span class="topservice_item_title">保守</span>
            <div class="bold">課題管理・バージョン管理は<br>ルールを作ってこまめに行います</div>
            <div class="topservice_item_image"><img src="@/assets/img/make_phase5.jpg" class="topservice_item_image2" alt="保守"></div>
          </li>

          <li class="topservice_item animation">
            <span class="topservice_item_title">成長（ゆるやか）</span>
            <div class="bold">昨日できなかったことを、<br>今日できるようにします</div>
            <div class="topservice_item_image"><img src="@/assets/img/make_phase6.jpg" class="topservice_item_image2" alt="成長"></div>
          </li>
        </ul>
      </div>
    </div>

    <dl v-for="(dataItem,dataIndex) in skillData"
      :key="dataIndex"
      :class="checkChangeDetail?'animate__animated animate__hinge dt_hidden':''"
    >
      <dt class="pala pala--lr action w300" :class="isDetail[dataIndex]?'open':''" @click="changeDetail(dataIndex)">
        <span>{{skillBlock[dataIndex]}}</span>
      </dt>
      <dd>

        <span v-for="(item,index) in skillData[dataIndex]" :key="dataIndex+'_'+index">
            {{item.name}} ({{difYear(item.startYear,item.endYear)}}年)
            <span v-if="index != skillData[dataIndex].length-1">、</span>
        </span>

        <transition name="fade">
          <div v-if="isDetail[dataIndex] == 1">
            <div class="flexbox" v-for="(item,index) in skillData[dataIndex]" :key="index">
              <div class="leftHeader aic">
                <div class="area">{{item.name}}</div>
              </div>
              <div class="star aic">
                <div class="starWrapper" :style="'width:'+starWrapper+'px'">
                  <div class="dib aic starsValue">{{item.star}}</div>
                  <div class="starsBar"></div>
                  <div class="starsBar2" :style="starWidth(item.star)"></div>
                </div>
              </div>
              <div class="comment aim">

                <div class="slidebar-multithumb" :class="checkChangeDetail?'animate__animated animate__hinge':''">
                  <label for="range-label">経験年数 <span class="bold f22">{{difYear(item.startYear,item.endYear)}}</span> 年（<span>{{item.startYear}}年</span> ～ <span>{{item.endYear}}年</span>）</label>
                  <input class="thumb-1" type="range" name="range-1" id="range-1" min="2000" max="2022" step="1" v-model="item.startYear">
                  <input class="thumb-2" type="range" name="range-2" id="range-2" min="2000" max="2022" step="1" v-model="item.endYear">
                  <div>

                    <div></div>
                  </div>
                </div>
                <div v-html="item.comment"></div>
              </div>
            </div>
            <span v-if="index != skillData[dataIndex].length-1">※自己評価 HTMLを100とした時の相対評価</span>
          </div>
        </transition>


      </dd>
    </dl>

    <transition name="fadeSlow">
      <div v-if="checkChangeDetail">
        「javaの開発経験が何年で、これとこれのフレームワークを使ったことがあって…」<br/>
        ということは言えるのですが、それで仕事ができることを証明できるわけでもありません。<br/>
        一生勉強が必要な職業ですので、過去の経験を声高に主張するかどうかも考えものです。<br/>
        昔に比べて、公開ライブラリや解説サイトも膨大に増え、これまでの知識・経験は正直陳腐化しているでしょう。<br/>
        <br/>
        逆に言語を触ったことがないというのも、それほど大きな意味がないような気がします。<br/>
        実際、それなりに長く開発に携わっている人間であれば、<br/>
        言語に依存しないアルゴリズムやデータ構造など、他の言語に乗り換えても最低限で済むことが多いです。<br/>
        （2022年7月現在）流行りのSwiftやGoを、私はまだ触ったことがありませんが、<br/>
        作業を始めるまでにそれほど大きな時間は掛からないだろう、と思っています。（思っているだけかもしれません）<br/>
        <br/>
        意外と、言語やフレームワークの習熟より、例えば<br/>
        <ul>
          <li>IDEとgitを繋げてコミット→プッシュするまでの何をすればいいか知っているか</li>
          <li>Excelのテキスト10万行から、日付を取り出してYYYYMMDDに統一したり、正規表現で抜き出したりして、JSON文字列に整形、という作業をどれだけ効率よくできるか</li>
          <li>〒→住所変換する際に、郵便番号検索APIを、外部APIが停止した時まで考慮して（例えば差分収集するバッチを作るといった）利用ができるか</li>
          <li>ChromeのデベロッパーツールやPOSTMANなどでリクエストとレスポンスの状態をどれだけ把握できるか</li>
          <li>帳票印刷の方法を何種類知っているか</li>
        </ul>
        など、スキル経験では書ききれないことが業務では大事だったりします。<br/>
        <br/>
        そしてそれは、様々な業務に触れる中で<br/>
        <div class="bold">「面倒だと思うことを、工夫によっていかに楽に変えるか」</div>
        を突き詰めていった結果得たもので、それがプログラマーに求められる本質であるように思えます。<br/>
        <br/>
        <div class="bold">「楽するためのノウハウをずっと考えてきて、これからも楽するために考える。そして自分も発する」</div>
        結局今まで得た中で、これが一番大事なスキルです。<br/>
        <br/>
      </div>
    </transition>

  </div>

</template>

<script>
export default {
  name: 'SkillProduce',
  data() {
    return {
      starWrapper: 125, // 評価点幅0
      isDetail: [0, 0, 0, 0, 0, 0, 0],  // 簡易/詳細切り替え [Front,Back,SQL,APP,Phase, 最後に]
      isDetailed: [1, 1, 1, 1, 1, 1, 0],  // 簡易/詳細切り替えの記録 画面切り替えのトリガー
      skillBlock: ["FrontEnd", "BackEnd", "SQL", "App etc.", "Phase", "資格", "最後に"],
      skillData : [
      [  // フロントエンド {名称, ☆, 開始年, 終了年, コメント}
        {name:"HTML・CSS・javascript", star:100, startYear:2002, endYear:2022, comment:"学生時代から継続して勉強中。HTML5便利" },
        {name:"jQuery", star:90, startYear:2015, endYear:2022, comment:"一般教養の範囲" },
        {name:"vue.js・Nuxt.js", star:80, startYear:2019, endYear:2022, comment:"vue2と3、vue+TypeScript、案件使用あり" },
        {name:"angular", star:10, startYear:2021, endYear:2022, comment:"他との比較で触った程度" },
      ],
      [  // バックエンド {名称, ☆, 開始年, 終了年, コメント}
        {name:"c", star:30, startYear:2004, endYear:2018, comment:"学生時代と、データベース保守業務で１度使用" },
        {name:"c#・VB.NET", star:50, startYear:2004, endYear:2008, comment:"学生時代と、病院の在庫管理業務などで使用" },
        {name:"java", star:80, startYear:2004, endYear:2022, comment:"間は開くものの、基本的にWEB系業務はjavaかphp。<br>Spring、Struts" },
        {name:"php", star:80, startYear:2004, endYear:2022, comment:"間は開くものの、基本的にWEB系業務はjavaかphp。<br>Cake、Laravel" },
        {name:"ColdFusion", star:50, startYear:2008, endYear:2011, comment:"マイナー言語。構文の簡単さが気に入って結構長い間使ってました。" },
        {name:"Python", star:40, startYear:2020, endYear:2022, comment:"趣味で触る程度。スクレイピングに便利" },
      ],
      [  // SQL {名称, ☆, 開始年, 終了年, コメント}
        {name:"MySQL", star:70, startYear:2006, endYear:2016, comment:"小規模か、10万人アクセス規模の大規模かの両極端の業務経験" },
        {name:"SqlServer", star:80, startYear:2007, endYear:2022, comment:"業務で使われやすいからか触る機会は多かったです" },
        {name:"Oracle", star:50, startYear:2007, endYear:2009, comment:"あまり業務で出てくる機会がなかったです" },
        {name:"Postgre", star:30, startYear:2008, endYear:2009, comment:"趣味で触っていた程度です" },
        {name:"MongoDB", star:50, startYear:2021, endYear:2022, comment:"NoSQLで触ったことがあるのはこれだけ" },
      ],
      [  // App etc{名称, ☆, 開始年, 終了年, コメント}
        {name:"Apache・Tomcat", star:70, startYear:2008, endYear:2018, comment:"業務で使われやすいからか触る機会は多かったです。標準設定は組める程度" },
        {name:"GlassFish", star:30, startYear:2007, endYear:2022, comment:"一度だけ業務で振れました。デプロイ管理が手厚くて感動" },
        {name:"Nginx", star:80, startYear:2018, endYear:2022, comment:"最近よく使っています。導入が簡単なのがうれしい限り" },
        {name:"WindowsServer", star:70, startYear:2008, endYear:2022, comment:"サーバー系OS Windows2000～2018 業務使用はこちらの方が多いです" },
        {name:"Linux", star:70, startYear:20, endYear:2022, comment:"業務使用でCentoOSがほとんど" },
      ],
      [  // Phase {名称, ☆, 開始年, 終了年, コメント}
        {name:"要件定義", star:50, startYear:2008, endYear:2016, comment:"定義～保守まで全行程経験が3～4件。客先常駐経験あり" },
        {name:"設計", star:70, startYear:2007, endYear:2022, comment:"設計は社会人３年目から。設計～テストまでセットで20件程度" },
        {name:"PG", star:90, startYear:2004, endYear:2022, comment:"SEやってる中でも兼ねていることがほとんど" },
        {name:"テスト", star:70, startYear:2004, endYear:2022, comment:"テスト手法はJunit等しか経験ありません" },
        {name:"リリース", star:70, startYear:2010, endYear:2022, comment:"リリースまで関わったプロジェクトは7件程度。当日の朝はお祈り" },
        {name:"保守", star:80, startYear:2010, endYear:2020, comment:"もういない他人のプログラムを直すことも多々ありました。Redmine、Backlog、Wrikeを最大限利用" },
        {name:"リーダー経験", star:30, startYear:2018, endYear:2021, comment:"プロマネ的作業：10人規模が1件、2～3人が4件程度" },
      ],
      [  // Phase {名称, ☆, 開始年, 終了年, コメント}
        {name:"資格", star:50, startYear:2016, endYear:2022, comment:"ITパスポート、基本情報処理、工事担任者DD3種" },
      ],
      [],
      ]
    }
  },
  computed: {
    starWidth() {
      return (percent)=>{
        return "width:"+(this.starWrapper * percent / 10000) * 80 + "%";
      }
    },
    difYear(){
      return (startYear, endYear) => {
        return endYear - startYear;
      }
    },
    checkChangeDetail() {
      return this.isDetailed.every(function(val){
        if (val == 1){
          window.scroll(0, 0);
          return true;
        } else {
          return false;
        }
      });
    }

  },
  methods: {
    changeDetail(dataIndex) {
      this.isDetail[dataIndex]=!this.isDetail[dataIndex];

      if (this.isDetail[dataIndex] == 1) {
        this.isDetailed[dataIndex] = 1;
      }
    }
  }
}
</script>

