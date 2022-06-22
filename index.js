const RootComponent = {
  data() {
    return {
      estates: [
        '北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県',
      ],
    };
  },
};

Vue.createApp(RootComponent).mount('#app');
