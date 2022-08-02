const RootComponent = {
  data() {
    return {
      'api': 'WCAkhPC5NriK4DIOoMA8NspumXEzT18VPejRnsP7',          // API キー (State)
      'prefecture': null, // 県番号 (State)
    };
  },

  methods: {
    // 県番号 (State) の変更を行う関数
    setPrefecture(n) {
      this.prefecture = n;
    },
  },

  components: {
    PrefectureSelector,
    PopulationBarPlot,
  },
};

Vue.createApp(RootComponent).mount('#app');
