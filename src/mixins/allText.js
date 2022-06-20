import allText from '../text/allTexts.json';
import questions from '../text/test.json';
import cities from '../text/cities.json';

export default {
    data() {
        return {
            geo: 'HU',
            textStart: '',
            textTest: null,
            textResult: null,
            textCalculate: null,
            cityName: null,
        };
    },
    computed: {
        getTextStart() {
            return this.textStart;
        },
        getTextTest() {
            return this.textTest;
        },
        getTextResult() {
            return this.textResult;
        },
        getTextCalculate() {
            return this.textCalculate;
        },
        getCityName() {
            return this.cityName;
        }
    },
    mounted() {
        this.textStart = allText.start[this.geo];
        this.textTest = questions;
        this.textCalculate = allText.calculate[this.geo];
        this.textResult = allText.result[this.geo];
        this.cityName = cities;
    }
}