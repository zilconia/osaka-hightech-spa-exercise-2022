const PrefectureCheckbox = {
  props: [
    'setPrefecture', // 3) 外部から県番号変更用の関数を受け取れるようにする
  ],
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
    <!-- 3) チェックボックスの変化を監視して、県番号変更用の関数を呼び出す -->
    <input type="checkbox" v-bind:id="'e' + index" v-on:change="setPrefecture(index + 1)">
    <label v-bind:for="'e' + index">{{ prefecture }}</label>
  </span>
  `,
};

const PopulationBarPlot = {
  props: [
    'api',
    'prefecture', // 2) 外部から県番号を受け取れるようにする
  ],
  data() {
    return {
      populations: [],
    };
  },
  /* html */
  template: `
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
      // 2) 外部から受け取った県番号も考慮して、RESAS API を用いる
      const xs = await getPopulations(this.api, this.prefecture);

      // 加工用の関数
      function f(obj) {
        return obj.value / 50000;
      }

      this.populations = xs.map(f);
    },
  },
};

const RootComponent = {
  data() {
    return {
      'api': '',
      'prefecture': 27, // 1) 県番号用の State を用意
    };
  },
  methods: {
    // 1) 県番号を変更するためのメソッドを用意
    setPrefecture(n) {
      this.prefecture = n;
    },
  },
  components: {
    PrefectureCheckbox,
    PopulationBarPlot,
  },
};

Vue.createApp(RootComponent).mount('#app');
