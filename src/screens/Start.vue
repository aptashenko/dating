<template>
    <div class="start">
        <h1 class="start__title">{{text && text.description ? text.description : ''}}</h1>
        <div class="start__background">
            <ul class="start__list">
                <li class="start__item">{{ text && text.takeASurvey ? text.takeASurvey : ''}}</li>
                <li class="start__item">{{ text && text.choose ? text.choose : ''}}</li>
                <li class="start__item">{{ text && text.date ? text.date : ''}}</li>
            </ul>
        </div>
        <button class="start__btn" @click="onNextPage">{{text.start}}</button>
        <div class="slider">
            <div class="slider__slides" :style="{marginLeft: margin}">
                <div class="slider__slide" v-for="(name, i) of text.names" :key="name">
                    <img :src="require(`../assets/img/adult/${i+1}.jpg`)" class="slider__image">
                    <p class="slider__location">{{girlDistance()}} km</p>
                    <p ref="girlsName" class="slider__name">{{name}}, {{age()}}</p>
                </div>
            </div>
        </div>
        <div class="slider__nav">
            <input v-for="(name, i) of text.names" :key="i" type="radio" name="r" :id="`r${i+1}`" class="slider__input"
                :class="{slider__firstDot: i === 0}">
        </div>
        <div class="start__location">
            <img src="../assets/img/geoicon.png">
            <p class="start__locationText">{{text.location}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Start',
    props: ['text'],
    data() {
        return {
            margin: 0,
        }
    },
    methods: {
        girlDistance() {
            return (Math.random() * (2 - 1) + 1).toFixed(1); 
        },
        onNextPage() {
            this.$emit('nextPage', 'test')
        },
        carousel() {
            if (this.margin === 0) {
                const car = document.querySelector('.slider__slides');
                setInterval(() => {
                    if (this.margin <= -1500) {
                        this.margin = 0;
                    } else {
                        this.margin = this.margin - 300;
                        car.style.marginLeft = `${this.margin}px`;
                    }
                }, 2000)
            }
        },
        dot() {
            let nextDot = 0;
            let id = setInterval(() => {
                const dots = document.querySelectorAll('.slider__input');
                const lastDot = dots.length - 1;
                nextDot += 1;
                let prevDot = nextDot - 1;
                if (nextDot > lastDot) {
                    nextDot = 0;
                }
                if (lastDot === -1) {
                    clearInterval(id);
                } else {
                    dots[prevDot].classList.remove('slider__firstDot');
                    dots[nextDot].classList.add('slider__firstDot');
                }
            }, 2000)
        },
        age() {
            return Math.floor(Math.random() * (32 - 23) + 23);
        }
    },
    mounted() {
        this.carousel();
        this.dot();
    }
}
</script>

<style lang="scss">

.start {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    margin: 0 auto;
    flex-grow: 1;
    min-height: 580px;
    &__title {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 1.5;
        color: #fff;
        text-align: center;
        @media (max-width: 320px) {
            font-size: 18px;
        }
    }
    &__background {
        margin: 0 auto;
        background: #F4E0F5;
        border-radius: 10px;
        padding: 10px;
        list-style: url('../assets/img/ellipse.svg')
    }
    &__list {
        padding-left: 25px;
    }
    &__item {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 1.5;
        @media (max-width: 320px) {
            font-size: 12px;
        }
    }
    &__btn {
        width: 100%;
        padding: 15px;
        background: linear-gradient(139.97deg, #273E55 22.83%, #121E2C 104.05%);
        border-radius: 10px;
        color: #fff;
        border: none;
        cursor: pointer;
    }
    &__location {
        display: flex;
        justify-content: center;
    }
    &__locationText {
        margin-left: 15px;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.5;
        color: #203144;
        @media (max-width: 329px) {
            font-size: 14px;
        }
    }
}
.slider {
    max-width: 300px;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 10px;
    &__slides {
        width: 400%;
        display: inline-flex;
        transition: all .6s ease;
    }
    &__slide {
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
        background:#fff;
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
    }
    &__nav {
        display: flex;
        justify-content: center;
    }
    &__input {
        appearance: none;
        width: 5px;
        height: 5px;
        background: #fff;
        margin-right: 5px;
        border-radius: 50%;
    }
    &__firstDot {
        width: 25px;
        height: 5px;
        border-radius: 4px;
        background: linear-gradient(139.97deg, #273E55 22.83%, #121E2C 104.05%);
    }
}
</style>