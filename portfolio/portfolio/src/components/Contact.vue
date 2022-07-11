<template>
  <div class="ait">
    <div>
      <a href="mailto:waraby11022@gmail.com" class="contact-btn ico_mail">
        ご連絡がありましたらこちらまで
      </a><br>
      or to:waraby11022@gmail.com
    </div>
    <div>
      <a class="twitter-timeline" data-lang="ja" data-width="400" data-height="900" data-theme="light" href="https://twitter.com/warabyn11022?ref_src=twsrc%5Etfw">Tweets by warabyn11022</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactMe',
  props: {
    msg: String
  },
  mounted() {
    setTimeout(() => {
      let tweetScript = document.createElement('script')
      tweetScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
      tweetScript.setAttribute('async', 'true')
      document.head.appendChild(tweetScript)
    }, 100)
  }
}
</script>

