<template>
  <div class="app" :class="{ testBackground: currentPage === 'test' || currentPage === 'calculate'}">

    <div class="wrapper" :style="{ minHeight: bodyHeight +'px'}">

      <div class="header" v-if="currentPage != 'test' || currentPage === 'calculate'">
        <img src="./assets/img/hungary.svg" class="header__logo">
        <p class="header__text">Знайомства</p>
      </div>

      <div class="headerTest" v-else>
        <img src="./assets/img/hungary.svg" class="header__logo">
        <p class="headerTest__text">Знайомства</p>
      </div>

      <Start v-if="currentPage === 'start'" @nextPage="onNextPage" :text="getTextStart" />

      <Test v-if="currentPage === 'test'" @nextPage="onNextPage" :cities="getCityName" :text="getTextTest"
        :start="getTextStart" />

      <Calculate v-if="currentPage === 'calculate'" @nextPage="onNextPage" :text="getTextCalculate" />

      <Results v-if="currentPage === 'results'" :text="getTextResult" />

    </div>

    <Footer v-if="currentPage === 'start' || currentPage === 'results'" :currentPage="currentPage" />

  </div>
</template>

<script>
import "normalize.css";
import "@/assets/styles/font.css";
import allText from '@/mixins/allText';
import Start from "@/screens/Start";
import Test from "./screens/Test";
import Calculate from "./screens/Calculate";
import Results from "./screens/Results";
import Footer from "./screens/Footer";

export default {
  name: "app",
  components: {
    Start,
    Test,
    Calculate,
    Results,
    Footer,
  },
  mixins: [allText],

  data() {
    return {
      currentPage: 'start',
      bodyHeight: 0,
    };
  },
  methods: {
    onNextPage(page) {
      this.currentPage = page;
    },
    keyGenerate(length) {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    },
    getQuery(string) {
      return string
        .slice(1)
        .split("&")
        .map((queryParam) => {
          let kvp = queryParam.split("=");
          return { key: kvp[0], value: kvp[1] };
        })
        .reduce((query, kvp) => {
          query[kvp.key] = kvp.value;
          return query;
        }, {});
    },
    changeSub() {
      //добавилось для трекеров
      let subs = this.getQuery(window.location.search);
      let hiddenBinomID = document.getElementById("binom");
      if (!subs.sub1 && hiddenBinomID && hiddenBinomID.value !== "{clickid}") {
        this.QUERY.sub1 = hiddenBinomID.value;
      }
    },
    changeWindowSize() {
      setTimeout(() => {
        this.bodyHeight = window.innerHeight - 25;
      }, 100)
    }
  },
  mounted() {
    this.changeWindowSize();
    window.onresize = () => this.changeWindowSize();
  },
};
</script>

<style lang="scss">

* {
  box-sizing: border-box;
}
p, ul, h1, h2, h3, h4 {
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
  background-image: linear-gradient(137.64deg, #fff 14.6%, #0066FF 88.33%);
  background-attachment: fixed;
}
body {
  font-family: "Moniqa", sans-serif;
  height: 100%;
}
.wrapper {
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
  flex-grow: 1;
  padding: 0 25px;
  &::-webkit-scrollbar {
    display: none;
  }
}
.app {
  display: flex;
  flex-direction: column;
  max-width: 390px;
  margin: 0 auto;
  height: 100%;
}
.testBackground {
  background: linear-gradient(172.13deg, #FCDBFF -12.58%, #E8F1FF 93.93%);
}
.headerTest {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 205px;
  height: 60px;
  background: linear-gradient(137.64deg, #EA52F8 14.6%, #0066FF 88.33%);
  border-radius: 0px 0px 30px 30px;
  &__text {
    color: #fff;
    font-style: normal;
    font-weight: 900;
    font-size: 28px;
    line-height: 1.03;
    font-family: "Moniqa";
  }
}
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 205px;
  min-height: 60px;
  background: #fff;
  border-radius: 0px 0px 30px 30px;
  &__text {
    color: #203144;
    font-style: normal;
    font-weight: 900;
    font-size: 28px;
    line-height: 1.03;
    font-family: 'Moniqa';
  }
  &__logo {
    margin-right: 10px;
  }
}
</style>
