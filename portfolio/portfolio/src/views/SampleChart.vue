<template>
  <br>
  vue-chart-jsを使ったアニメーションサンプル<br>
  <button @click="reload()">リロード</button>
  <hr>
  <div style="width:100%;display:flex">
  <Bubble
    :chart-options="chartOptions1"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
  <Bubble
    :chart-options="chartOptions2"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
  <Bubble
    :chart-options="chartOptions3"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
  <Bubble
    :chart-options="chartOptions4"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
  </div>
</template>

<script>
import { Bubble } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement)

export default {
  name: 'BubbleChart',
  components: { Bubble },
  props: {
    chartId: {
      type: String,
      default: 'bubble-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      chartData: {
        datasets: [
        {
          label: '1番目のデータ',
          backgroundColor: '#f87979',
          data: [
            {
              x: Math.floor( Math.random() * 30 ) + 10,
              y: Math.floor( Math.random() * 30 ) + 5,
              r: Math.floor( Math.random() * 30 ) + 5
            },
          ]
        },
        {
          label: '2番目のデータ',
          backgroundColor: '#7C8CF8',
          data: [
            {
              x: Math.floor( Math.random() * 30 ) + 10,
              y: Math.floor( Math.random() * 30 ) + 5,
              r: Math.floor( Math.random() * 30 ) + 5
            },
          ]
        },
        {
          label: '3番目のデータ',
          backgroundColor: '#123456',
          data: [
            {
              x: Math.floor( Math.random() * 30 ) + 10,
              y: Math.floor( Math.random() * 30 ) + 5,
              r: Math.floor( Math.random() * 30 ) + 5
            },
          ]
        },
        {
          label: '4番目のデータ',
          backgroundColor: '#ee15ee',
          data: [
            {
              x: Math.floor( Math.random() * 30 ) + 10,
              y: Math.floor( Math.random() * 30 ) + 5,
              r: Math.floor( Math.random() * 30 ) + 5
            },
          ]
        },
        {
          label: '5番目のデータ',
          backgroundColor: '#eeee43',
          data: [
            {
              x: Math.floor( Math.random() * 30 ) + 10,
              y: Math.floor( Math.random() * 30 ) + 5,
              r: Math.floor( Math.random() * 30 ) + 5
            },
          ]
        }
        ]
      },
      chartOptions1: {
        responsive: true,
        scales: {
            x: {min: 0,max: 50},
            y: {min: 0,max: 50}
        }
      },
      chartOptions2: {
        responsive: true,
        animation: {
        // アニメーションにかかる秒数(ミリ秒)
        duration: 2000,
        // アニメーションの種類
        easing: "easeOutBounce",
        },
        scales: {
            x: {min: 0,max: 50},
            y: {min: 0,max: 50}
        }
      },
      chartOptions3: {
        responsive: true,
        animation: {
          x: {
            duration: 5000,
            from: 0
          },
          y: {
            duration: 3000,
            from: 500
          }
        },
        scales: {
            x: {min: 0,max: 50},
            y: {min: 0,max: 50}
        }
      },
      chartOptions4: {
        responsive: true,
        animations: {
            borderColor: {
                type: 'color',
                duration: 1500,
                //easing: 'linear',
                from: 'gray',
                to: 'white',
                loop: true
            },
            borderWidth: {
                duration: 1500,
                //easing: 'linear',
                from: 5,
                to: 1,
                loop: true
            }
        },
        scales: {
            x: {min: 0,max: 50},
            y: {min: 0,max: 50}
        }
      }
    }
  },
  methods: {
    reload: function() {
      this.$router.go({path: this.$router.currentRoute.path, force: true})
    }
  }
}
</script>