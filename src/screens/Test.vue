<template>
    <div class="test">
        <h2 class="test__title" :class="{test__smallTitle: questNumber === 2 || questNumber === 5}">{{getTitle}}</h2>

        <ul class="button__list" v-if="questNumber <= 2">
            <li class="button__item" v-for="(ans, i) of getButtonAnswer" :key="i">
                <button class="button__btn" :class="{ button__colored: i === 1, ageTest: questNumber === 1 && i === 0 }"
                    @click="nextQuest()">{{ans}}</button>
            </li>
        </ul>

        <form class="form" v-if="questNumber === 3 || questNumber === 4">
            <label class="form__label" v-for="(check, i) of getCheckboxAnswer" :key="i">
                <input class="form__input" type="checkbox" ref="checkbox" :name="getCheckboxId"> {{check}}
            </label>
        </form>

        <button v-if="questNumber === 3 || questNumber === 4" class="form__btn"
            @click="nextQuest()">{{start.next}}</button>

        <div class="location" v-if="questNumber === 5">
            <a v-for="(btn, i) of text[questNumber-1].answer" :key="i"
                :class="{location__auto: i === 0, location__manual: i === 1}" @click="autoGetCity()"><span
                    :class="{location__btnText: i === 1}">{{btn}}</span></a>

            <input v-if="handleInputCity" type="text" :placeholder="text[questNumber-1].imgQuest"
                class="location__input" v-model.trim="cityValue" @focusout="onNextPage">

            <ul class="location__list" :class="{hidden: active}">
                <li class="location__item" v-for="(city,i) of search" :key="i" @click="selectCity(i)" ref="city">
                    {{city}}</li>
            </ul>

        </div>
    </div>
</template>

<script>
import { getCity } from "@/services/landAPI";
export default {
    name: 'test',
    props: ['text', 'start', 'cities'],
    data() {
        return {
            questNumber: 1,
            cityValue: '',
            handleInputCity: false,
            active: false,
        }
    },
    computed: {
        getTitle() {
            return this.text[this.questNumber-1].quest;
        },
        getButtonAnswer() {
            return this.text[this.questNumber - 1].answer.reverse();
        },
        getCheckboxAnswer() {
            return this.text[this.questNumber - 1].answer;
        },
        getCheckboxId() {
            return this.text[this.questNumber - 1].id;
        },
        search() {
            let huCities = this.cities.city;
            const matchCities = huCities.filter(value => value.toLowerCase().includes(this.cityValue.toLowerCase()));
            if (this.cityValue.length >= 3) {
                return matchCities;
            }
        }
    },
    methods: {
        nextQuest() {
            if (event.target.classList.contains('ageTest')) {
                window.location.href = 'http://google.com/'
                return
            } 
            if (this.questNumber === 3 || this.questNumber === 4) {
                let box = this.$refs.checkbox;
                const checked = (input) => input.checked;
                if (!box.some(checked)) {
                    for (let oneInput of box) {
                        oneInput.style.borderColor = 'red';
                        oneInput.style.marginRight = '20px';
                        oneInput.parentNode.style.color = 'red';
                        setTimeout(() => {
                            oneInput.style.borderColor = 'black';
                            oneInput.style.marginRight = '10px';
                            oneInput.parentNode.style.color = '#203144';
                        }, 1000)
                    }
                    return
                } else {
                    for (let oneInput of box) {
                        oneInput.checked = false;
                    }
                    this.questNumber = this.questNumber + 1
                }
            } else {
                this.questNumber = this.questNumber + 1;
            }
        },
        selectCity(idx) {
            this.cityValue = this.$refs.city[idx].textContent;
            this.active = !this.active;
        },
        onNextPage() {
            this.active = false;
            if (this.cityValue) {
                setTimeout(() => {
                    this.$emit('nextPage', 'calculate');
                    this.active = !this.active;
                }, 1000)
            }
        },
        autoGetCity() {
            if (event.currentTarget.classList.contains('location__auto')) {
                let app = this;
                getCity().then((response) => {
                    app.currentCity = response.data.city;
                });
                setTimeout(() => {
                    this.$emit('nextPage', 'calculate');
                }, 1000)
            } else {
                this.handleInputCity = true;
            }
        },
    },
}
</script>

<style lang="scss">

.hidden {
    display: none;
}

.test {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    flex-grow: 1;
    background: url('../assets/img/testbackground.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    &__title {
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 1.5;
        text-align: center;
        color: #203144;
    }
    &__smallTitle {
        font-size: 16px;
    }
}
.button {
    &__list {
        display: flex;
        justify-content: space-between;
        list-style: none;
    }
    &__btn {
        background: linear-gradient(139.97deg, #273E55 22.83%, #121E2C 104.05%);
        border-radius: 10px;
        min-width: 130px;
        max-width: 153px;
        height: 86px;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 1.5;
        color: #fff;
        border: none;
        cursor: pointer;
    }
    &__colored {
        background: linear-gradient(137.64deg, #EA52F8 14.6%, #0066FF 88.33%);
    }
}
.form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    @media (min-width: 667px) {
        flex-direction: row;
        flex-wrap: wrap;
        width: 260px;
    }
    &__label {
        display: flex;
        align-items: center;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.5;
        color: #203144;
        transition: all 1s ease;
        &:not(:last-child) {
            margin-bottom: 20px;
            @media (max-height: 320px) {
                margin-bottom: 10px;
            }
        }
        @media (max-height: 320px) {
            font-size: 14px;
        }
        @media (min-width: 667px) {
            width: 50%;
        }
    }
    &__input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        position: relative;
        width: 26px;
        height: 26px;
        border: 2px solid #000;
        margin-right: 10px;
        border-radius: 4px;
        transition: all 1s ease;
        cursor: pointer;
        &:checked::before {
                content: '';
                position: absolute;
                width: 24px;
                height: 24px;
                top: 50%;
                left: 50%;
                border-radius: 4px;
                background: linear-gradient(137.64deg, #EA52F8 14.6%, #0066FF 88.33%);
                transform: translate(-50%, -50%);
            }
    }
    &__btn {
        padding: 10px 0;
        width: 250px;
        margin: 0 auto;
        background: linear-gradient(137.64deg, #EA52F8 14.6%, #0066FF 88.33%);
        border-radius: 10px;
        border: none;
        color: #fff;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.5;
        cursor: pointer;
    }
}
.location {
    position: relative;
    display: flex;
    flex-direction: column;
    &__hidden {
        display: none !important;
    }
    &__auto {
        text-align: center;
        margin: 0 auto 15px;
        background: linear-gradient(139.97deg, #273E55 22.83%, #121E2C 104.05%);
        border-radius: 10px;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.5;
        color: #fff;
        width: 250px;
        padding: 10px 0;
        border: none;
        cursor: pointer;
    }
    &__manual {
        // position: relative;
        text-align: center;
        margin: 0 auto 30px;
        border-radius: 10px;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.5;
        border: 1px solid #000;
        width: 250px;
        border: double 1px transparent;
        background-image: linear-gradient(172.13deg, #FCDBFF -202.58%, #E8F1FF 93.93%), linear-gradient(137.64deg, #EA52F8 14.6%, #0066FF 88.33%);
        background-origin: border-box;
        background-clip: content-box, border-box;
        cursor: pointer;
    }
    &__btnText {
        color: #000;
        display: block;
        padding: 10px 0;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(137.64deg, #EA52F8 14.6%, #0066FF 88.33%);
    }
    &__input {
        padding: 12px 20px;
        border: none;
        border-radius: 10px;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 1.5;
        &::placeholder {
            color: #7EA4D9;
        }
    }
    &__list {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        max-height: 120px;
        overflow-y: scroll;
        list-style: none;
    }
    &__item {
        display: flex;
        align-items: center;
        padding: 0px 20px;
        height: 40px;
        background: #fff;
        border-bottom: 1px dotted;
    }
}
</style>
