<template>

  <Header :page="page" @selected="headerSelect" />

  <div class="main">

    <AboutMe v-if="page==1" />
    <Skill v-if="page==2" />
    <Work v-if="page==3" />
    <Contact v-if="page==4" />

  </div>

  <router-view></router-view>

</template>

<script>
import Header from '@/components/Header.vue'
import AboutMe from '@/components/AboutMe.vue'
import Skill from '@/components/Skill.vue'
import Work from '@/components/Work.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'BasicHome',
  components: {
    Header,
    AboutMe,
    Skill,
    Work,
    Contact
  },
  data() {
    return {
      page: 1
    };
  },
  methods: {
    headerSelect(selected){
      this.page = selected;
    }
  },
  mounted() {
    document.title = "わらびののはる";
    document.querySelector("meta[name='description']").setAttribute('content', "岡山県で活動するWebエンジニアわらびののポートフォリオ")
  }
}
</script>

<style src="@/assets/css/basic.css"></style>
<style>
@import url('https://fonts.googleapis.com/css2?family=Sawarabi+Gothic&display=swap');
</style>