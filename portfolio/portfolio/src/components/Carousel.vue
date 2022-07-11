<template>
  <div class="card-carousel">
    <div class="progressbar" v-if="autoSlideInterval && showProgressBar">
      <div :style="{width: progressBar + '%' }"></div>
    </div>
    <div class="card-img">
      <a :href="currentUrl" target="_blank" v-if="currentUrl">
        <img :src="require('@/assets/img/'+currentImage)" class="div-full-img with-link">
      </a>
      <img :src="require('@/assets/img/'+currentImage)" class="div-full-img" v-else>
      <div v-if="viewImages.length > 0" class="actions" :class="{'noPrev': activeImage === 0}">
        <span @click="changeFirstImage('left')" v-if="activeImage !== 0" class="prev ml20">&#8249;</span>
        <span @click="changeFirstImage('right')" v-if="activeImage !== viewImages.length - 1" class="next mr20">&#8250;</span>
      </div>
    </div>
    <div class="thumbnails">
      <div
        v-for="(image, index) in viewImagesThumb"
        :key="'thumb' + index"
        :class="['thumbnail-image', (activeImage == image.index) ? 'active' : '']"
        @click="activateImage(image.index)"
      >
        <img :src="require('@/assets/img/'+viewImages[image.index].img)">
      </div>
      <div v-if="viewImagesThumb.length > 0" class="actions bottom" :class="{'noPrev': viewImagesThumb[0].index === 0}">
        <span @click="changeThumImg('left')" v-if="viewImagesThumb[0].index !== 0" class="prev ml20">&#8249;</span>
        <span @click="changeThumImg('right')" v-if="viewImagesThumb[viewImagesThumb.length - 1].index !== viewImages.length - 1" class="next mr20">&#8250;</span>
      </div>
    </div>
    <div v-if="currentImageComment" v-html="currentImageComment" class="tal"></div>
  </div>
</template>

<script>
export default {
  name: "CarouselView",
  data() {
    return {
      activeImage: 0,
      autoSlideTimeout: null,
      stopSlider: false,
      timeLeft: 0,
      timerInterval: null,
      countdownInterval: 5,
      viewImagesThumb: [],
      mainImg: new Image()
    };
  },
  computed: {
    viewImages: {
      get() {
        return this.imgs;
      }
    },
    currentImage() {
      return this.viewImages[this.activeImage].img;
    },
    currentUrl() {
      return this.viewImages[this.activeImage].url;
    },
    currentImageComment() {
      return this.viewImages[this.activeImage].comment;
    },
    progressBar() {
      return 100 - (this.timeLeft / this.autoSlideInterval) * 100;
    },
    checkImage() {
        //this.mainImg = new Image();
        //this.mainImg.src = this.currentImage;
        //if (this.mainImg.naturalWidth > this.mainImg.naturalHeight) {
          return "landscape";
        //} else if (this.mainImg.naturalWidth < this.mainImg.naturalHeight) {
        //  return "portrait";
        //} else {
        //  return "landscape";
        //}
    }
  },
  methods: {
    nextImage() {
      var active = this.activeImage + 1;
      if (active < this.viewImages.length) {
        this.activateImage(active);
      }
    },
    prevImage() {
      var active = this.activeImage - 1;
      if (active >= 0) {
        this.activateImage(active);
      }
    },
    changeFirstImage(direction) {
      if (direction === "right") {
        this.nextImage();
      } else {
        this.prevImage();
      }
      const findIndexOfThum = this.viewImagesThumb.findIndex(
        data => data.index === this.activeImage
      );
      if (findIndexOfThum < 0) {
        this.changeThumImg(direction, true);
      }
    },
    changeThumImg(direction, prev = false) {
      const maxPos = this.viewImages.length;
      const lastThumIndex = this.viewImagesThumb[this.viewImagesThumb.length - 1].index;
      let count = maxPos - 1 - lastThumIndex;
      if (maxPos > 0 && maxPos > 5) {
        if (direction === "right") {
          if (lastThumIndex !== maxPos - 1) {
            let index = lastThumIndex + 1;
            this.viewImagesThumb = [];
            if (count > 5) {
              count = 5;
            }
            for (let i = 0; i < count; i++) {
              this.viewImagesThumb.push({
                url: this.viewImages[index].img,
                index: index
              });
              index++;
            }
            this.activeImage = this.viewImagesThumb[0].index;
          }
        } else {
          if (this.viewImagesThumb[0].index !== 0) {
            let index = this.viewImagesThumb[0].index - 5;
            this.viewImagesThumb = [];
            for (let j = 0; j < 5; j++) {
              this.viewImagesThumb.push({
                url: this.viewImages[index].img,
                index: index
              });
              index++;
            }
            if (prev) {
              this.activeImage = this.viewImagesThumb[9].index;
            } else {
              this.activeImage = this.viewImagesThumb[0].index;
            }
          }
        }
      }
    },
    setDefaultThum() {
      this.viewImagesThumb = [];
      if (this.viewImages.length > 0) {
//        if (this.viewImages.length < 5) {
//          this.viewImages.forEach((data, i) => {
//            this.viewImagesThumb.push({ url: data.img, index: i });
//          });
//        } else {
//          for (let j = 0; j < 5; j++) {
//            this.viewImagesThumb.push({ url: this.viewImages[j].img, index: j });
//          }
//        }
          for (let j = 0; j < this.viewImages.length; j++) {
            this.viewImagesThumb.push({ url: this.viewImages[j].img, index: j });
          }
      }
      console.log(this.viewImagesThumb);
    },
    activateImage(imageIndex) {
      this.activeImage = imageIndex;
    },
    startTimer(interval) {
      if (interval && interval > 0 && !this.stopSlider) {
        var self = this;
        clearTimeout(this.autoSlideTimeout);
        this.autoSlideTimeout = setTimeout(function() {
          self.nextImage();
          self.startTimer(self.autoSlideInterval);
        }, interval);
      }
    },
    stopTimer() {
      clearTimeout(this.autoSlideTimeout);
      this.stopSlider = true;
      clearInterval(this.timerInterval);
    },
    restartTimer() {
      this.stopSlider = false;
      clearInterval(this.timerInterval);
      this.startCountdown();
      this.startTimer(this.timeLeft);
    },
    startCountdown() {
      if (!this.showProgressBar) return;
      var self = this;
      this.timerInterval = setInterval(function() {
        self.timeLeft -= self.countdownInterval;
        if (self.timeLeft <= 0) {
          self.timeLeft = self.autoSlideInterval;
        }
      }, this.countdownInterval);
    }
  },
  created() {
      this.activeImage = this.startImage;
      this.setDefaultThum();
      if (this.activeImage !== 0) {
        const imgIndex = this.activeImage;
        if (imgIndex / 9 > 1) {
          for (let i = 0; i < Math.floor(imgIndex / 5); i++) {
            this.changeThumImg("right");
          }
        }
        this.activeImage = imgIndex;
      }

    if (
      this.autoSlideInterval &&
      this.autoSlideInterval > this.countdownInterval
    ) {
      this.startTimer(this.autoSlideInterval);
      this.timeLeft = this.autoSlideInterval;
      this.startCountdown();
    }
  },
  props: ["startImage","imgs"],

};
</script>


<style scoped>
.card-carousel {
  user-select: none;
  position: relative;
}

.progressbar {
  display: block;
  width: 100%;
  height: 5px;
  position: absolute;
  background-color: rgba(221, 221, 221, 0.25);
  z-index: 1;
}

.progressbar > div {
  background-color: rgba(255, 255, 255, 0.52);
  height: 100%;
}

.thumbnails {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 95%;
  margin: auto;
  position: relative;
}

.thumbnail-image {
  display: inline-flex;
  width: 10%;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  padding: 2px;
  z-index: 99;
}

.thumbnail-image > img {
  width: 100%;
  height: auto;
  transition: all 250ms;
  cursor: pointer;
}

.thumbnail-image:hover > img,
.thumbnail-image.active > img {
  opacity: 0.6;
  box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.5);
}

.card-img {
  position: relative;
  margin-bottom: 15px;
  width:95%;
  height:calc(100vh - 195px);
  margin-right: auto;
  margin-left: auto;
  /* border: 1px solid #ccc; */
}

.card-img > img {
  /* display: block; */
  /* margin: 0 auto; */
  width: 100%;
  object-fit:contain;
  -o-object-fit: contain;
  object-position:center;
  -o-object-position: center;
  /* max-height: calc(100vh - 180px); */
  position: absolute;
  margin: 0px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  max-height: 100%;
  /* border: 1px solid #ccc; */
}

.landscape {
  width: 100% !important;
  height: auto !important;
}

.portrait {
  height: 100% !important;
  width: auto !important;
}

.actions {
  font-size: 1.5em;
  height: 40px;
  position: absolute;
  top: 50%;
  margin-top: -20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #585858;
}

.actions > span {
  cursor: pointer;
  transition: all 250ms;
  font-size: 45px;
}

.actions > span:hover {
  color: #eee;
}

.ml20 {
  margin-left:-20px;
}

.mr20 {
  margin-right:-20px;
}

.bottom {
  width: 100%;
  left: 0px;
}

.noPrev {
  justify-content: flex-end;
}

.div-full-img {
    height: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    border-radius:10px;
}
.with-link {
    border: 3px solid skyblue;
}

.prev {
  font-size: 22px;
}

.next {
  font-size: 22px;
}

</style>