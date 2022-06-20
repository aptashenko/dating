<template>
  <div class="results">
    <h2 class="results__title">{{text && text.title ? text.title : ''}}</h2>

    <div class="results__match">
      <img src="../assets/img/adult/7.jpg" class="results__image">

      <p class="results__location">0.9 km</p>
      
      <p class="results__name">Daniela, 25</p>
    </div>

    <ul class="results__list">

      <li class="results__item">
        <p class="results__text">{{ text && text.underlineText ? text.underlineText : ''}}</p>
      </li>

      <li class="results__item">
        <p class="results__text">{{text && text.resultMessage ? text.resultMessage : ''}}</p>
      </li>

    </ul>

    <a href="tel:123456789" @click="sendClick()" v-metrics class="results__btn callBtn animated infinite pulse">
      {{text && text.callButton ? text.callButton : ''}}
    </a>
  </div>
</template>

<script>
import "@/assets/styles/animation.css";
import { sendCLick } from '@/services/landAPI';

export default {
  name: 'results',
  props: ['text', 'clickID', 'skey'],
    data() {
      return {
        }
  },
  methods: {
    sendClick() {
      sendCLick(this.clickID, this.skey)
    },
  },
}
</script>

<style lang="scss">

.results {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  flex-grow: 1;
  padding: 20px 0;
  min-height: 580px;

  &__title {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.5;
    color: #FFFFFF;
    text-align: center;
  }

  &__match {
    position: relative;
    border-radius: 10px;
  }
  &__location {
    position: absolute;
    top: 20px;
    left: 20px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 1;
    padding: 3px 6px;
    background: #fff;
    border-radius: 10px;
  }

  &__name {
    position: absolute;
    bottom: 10px;
    left: 20px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
    color: #fff;
  }

  &__image {
    display: block;
    border-radius: 10px;
    width: 100%;
  }

  &__list {
    display: flex;
    flex-direction: column;
    padding: 13px 17px;
    border-radius: 10px;
    background: #F4E0F5;
    list-style: none;
  }

  &__item {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
  &__text {
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 1.5;
    text-align: center;
    color: #203144;
  }
  &__btn {
    position: relative;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #FFFFFF;
    text-decoration: none;
    width: 100%;
    background: linear-gradient(139.97deg, #273E55 22.83%, #121E2C 104.05%);
    border-radius: 10px;
    padding: 13px 0;
    text-align: center;
    cursor: pointer;
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 34%;
      width: 24px;
      height: 24px;
      background: url('../assets/img/call.svg');
      transform: translate(-50%, -50%);
      @media (max-width: 320px) {
        left: 30%;
      }
    }
  }
}
</style>