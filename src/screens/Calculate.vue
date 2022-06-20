
<template>
    <div class="calculate">
        <h2 class="calculate__title">{{ text && text.searching ? text.searching : '' }}</h2>

        <div class="progress">
            <svg class="progress__wrapper" width="215" height="215">
                <circle class="progress__circle" stroke-width="5" cx="107.5" cy="107.5" r="97.5"
                    stroke="url(#gradient-stroke)" fill="url(#gradient-fill)" stroke-dashoffset="0" />
                <defs>
                    <linearGradient id="gradient-stroke" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#ea52f8" />
                        <stop offset="0.25" stop-color="#c659fe" />
                        <stop offset="0.5" stop-color="#9e5fff" />
                        <stop offset="0.75" stop-color="#6d63ff" />
                        <stop offset="1" stop-color="#0066ff" />
                    </linearGradient>
                    <linearGradient id="gradient-fill" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#273e55" />
                        <stop offset="0.25" stop-color="#22364a" />
                        <stop offset="0.5" stop-color="#1c2e40" />
                        <stop offset="0.75" stop-color="#172636" />
                        <stop offset="1" stop-color="#121e2c" />
                    </linearGradient>
                </defs>
            </svg>

            <img class="progress__background" src="../assets/img/manwoman.svg">
        </div>
        
        <p class="calculate__percent">{{progress}}%</p>
    </div>
</template>

<script>
export default {
    name: 'calculate',
    props: ['text'],
    data() {
        return {
            progress: 0,
        }
    },
    methods: {
        onNextPage() {
            setTimeout(() => {
                this.$emit('nextPage', 'results');
            }, 1500)
        },
        startLoading() {
            let circle = document.querySelectorAll('.progress__circle')[0];
            let r = circle.getAttribute('r');
            let cirFerrence = 2 * Math.PI * r;
            circle.setAttribute('stroke-dasharray', cirFerrence, cirFerrence);
            circle.setAttribute('stroke-dashoffset', cirFerrence);
            if (this.progress === 0) {
                this.progress = 1;
                let width = 1,
                    id = setInterval(() => {
                        if (width >= 100) {
                            clearInterval(id);
                            this.progress = 100;
                        } else {
                            this.progress++;
                            width++;
                            circle.setAttribute(
                                'stroke-dashoffset',
                                Math.floor(((100 - this.progress) / 100) * cirFerrence)
                            );
                            if (this.progress === 100) {
                                this.onNextPage();
                            }
                        }
                    }, 100);
            }
        },
    },
    mounted() {
        this.startLoading();
    },
}
</script>

<style lang="scss">







.calculate {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 40px 0;
    max-width: 375px;
    margin: 0 auto;
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
    }
    &__percent {
        font-style: normal;
        font-weight: 400;
        font-size: 46px;
        line-height: 69px;
        text-align: center;
        background: linear-gradient(137.64deg, #EA52F8 14.6%, #0066FF 88.33%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }
}
.progress {
    position: relative;
    &__background {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    &__wrapper {
        display: block;
        margin: 0 auto;
    }
    &__circle {
        display: inline-block;
        margin: 0 auto;
        transform-origin: center;
        transform: rotate(-90deg);
    }
    &__people {
        width: 150px;
        height: 150px;
        fill: blue;
    }
}
</style>