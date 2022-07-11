<template>
  <header>

      <img alt="logo" src="@/assets/logo2.png" @click="send(1)" class="logo_small">
      <h1 @click="send(1)"><a href="javascript:void(0);" class="link_none" @click="send(1)">わらびのSTUDIO</a></h1>


          <ul class="menu">
              <li><a href="javascript:void(0);" @click="send(2)">Skill</a></li>
              <li><a href="javascript:void(0);" @click="send(3)">Work</a></li>
              <li><a href="javascript:void(0);" @click="send(4)">Contact</a></li>
          </ul>

  </header>
</template>

<script>
export default {
  name: 'commmonHeader',
  props: {
    page: Number
  },
  methods: {
    send(page) {
      this.$emit("selected", page);
    }
  }
}
</script>

