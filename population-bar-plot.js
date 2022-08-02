const PopulationBarPlot = {
  props: [
    'api',        // API キー (Read-only State)
    'prefecture', // 県番号 (Read-only State)
  ],

  data() {
    return {
      year:[], // 年度の配列
      populations: [],  // 人口の配列 (State)
      maxPopulation: 1, // 人口の最大値 (State)
    };
  },

  /* html */
  template: `
  <button v-on:click="updateGraph">更新</button>
  <div class="graph">表示
    <div
      v-for="population in populations"
      class="bar"
      v-bind:style="'height: ' + population * 200 / maxPopulation + 'px;'"
    >aaa</div>
  </div>
  `,

  methods: {
    // 人口の配列 (State) を、RESAS API を用いて更新する関数
    async updateGraph() {
      if (this.prefecture !== null) {
        const data = await getPopulations(this.api, this.prefecture);
        
        this.year=data.map((obj)=>obj.year);
        this.populations = data.map((obj) => obj.value);
        this.maxPopulation = Math.max(... data.map((obj) => obj.value));
      } else {
        this.populations = [];
        this.year=[];
      }
    },
  },
};
