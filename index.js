const PrefectureCheckbox = {
  data() {
    return {
      prefectures: [
        '北海道',
        '青森県',
        '岩手県',
        '宮城県',
        '秋田県',
        '山形県',
        '福島県',
        '茨城県',
        '栃木県',
        '群馬県',
        '埼玉県',
        '千葉県',
        '東京都',
        '神奈川県',
        '新潟県',
        '富山県',
        '石川県',
        '福井県',
        '山梨県',
        '長野県',
        '岐阜県',
        '静岡県',
        '愛知県',
        '三重県',
        '滋賀県',
        '京都府',
        '大阪府',
        '兵庫県',
        '奈良県',
        '和歌山県',
        '鳥取県',
        '島根県',
        '岡山県',
        '広島県',
        '山口県',
        '徳島県',
        '香川県',
        '愛媛県',
        '高知県',
        '福岡県',
        '佐賀県',
        '長崎県',
        '熊本県',
        '大分県',
        '宮崎県',
        '鹿児島県',
        '沖縄県',
      ],
    };
  },
  /* html */
  template: `
  <span v-for="(prefecture, index) in prefectures">
    <input type="checkbox" v-bind:id="'e' + index">
    <label v-bind:for="'e' + index">{{ prefecture }}</label>
  </span>
  `,
};

const PopulationBarPlot = {
  props: [ 'api' ],
  data() {
    return {
      populations: [ 100, 90, 80, 70, 60, 50, 40, 30, 20, 10 ],
      result: '',
    };
  },
  /* html */
  template: `
  <div>{{ result }}</div>
  <button v-on:click="updateGraph">更新</button>
  <div class="container">
    <div
      v-for="population in populations"
      class="item"
      v-bind:style="'height: ' + population + 'px;'"
    ></div>
  </div>
  `,
  methods: {
    async updateGraph() {
      let xs = await getPopulations(this.api, 27);

      // JSON から、'result' -> 'data' -> 0 番目 -> 'data'，と辿った箇所を xs に代入
      xs = xs['result']['data'][0]['data'];

      // xs を for 文で回し、中身の value をそれぞれ表示する
      for (const x of xs) {
        console.log(x.value);
      }

      // TODO: ↑の for 文で、数値の配列をうまく作り、this.result に代入する
      this.result = xs;
    },
  },
};

const RootComponent = {
  data() {
    return {
      'api': '',
    };
  },
  components: {
    PrefectureCheckbox,
    PopulationBarPlot,
  },
};

Vue.createApp(RootComponent).mount('#app');
