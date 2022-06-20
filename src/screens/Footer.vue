<template>
    <footer class="copyright">
        <p v-if="currentPage === 'start'">
            © {{ new Date().getFullYear() }}. <span class="noaff">GMTech Media OÜ</span>
            <br />
            Harju maakond, Tallinn, Lasnamäe linnaosa, Pae tn 21-25, 11415, Estonia.
            <br />
            Bővebb tájékoztatásért lásd a <a href="./terms.php" target="_blank">Felhasználási feltételeket</a> és az
            <a href="./privacy.php" target="_blank">Adatvédelmi irányelveinket</a>
            <br />
            <a href="https://www.vodafone.hu/">https://www.vodafone.hu</a>
            <br />
            <span class="noaff">Affiliate: mobstra.com</span>
        </p>
        <p v-else>
            További információ: ez egy szórakoztató szolgáltatás, melynek ára: 2500 ft/hívás.
            <br />
            A szolgáltatás minden hálózatról elérhető. A szolgáltatási oldalon található gombra kattintva egy emelt
            díjas telefonszámra kerül átirányításra. A szolgáltatás használatával megerősíti, hogy elfogadja az
            általános szerződési feltételeinket, hogy elmúlt 18 éves, és hogy a kártyatulajdonos beleegyezésével történt
            a szolgáltatás igénybevétele. A szolgáltatás kizárólag a szórakozás célját szolgálja. A szolgáltatást
            biztosítja:GMTech Media OÜ, helyi cím: Harju maakond, Tallinn, Lasnamäe linnaosa, Pae tn 21-25, 11415,
            Estonia.A szolgáltatás minden hálózatról elérhető. A szolgáltatási oldalon található gombra kattintva egy
            emelt díjas telefonszámra kerül átirányításra. A szolgáltatás használatával megerősíti, hogy elfogadja az
            általános szerződési feltételeinket, hogy elmúlt 18 éves, és hogy a kártyatulajdonos beleegyezésével történt
            a szolgáltatás igénybevétele. A szolgáltatás kizárólag a szórakozás célját szolgálja. A szolgáltatást
            biztosítja:GMTech Media OÜ, helyi cím: Harju maakond, Tallinn, Lasnamäe linnaosa, Pae tn 21-25, 11415,
            Estonia.
            <br />
            Ha felhívod a telefonszámunkat, azzal beleegyezel abba, hogy reklámüzeneteket küldjünk a telefonszámodra.
            <br />
            A magyarországi ügyfélszolgálatunk a +36 14554695 telefonszámon érhető el. e-mail üzeneteket az <a
                href="mailto:support@gmtechmedia.com">support@gmtechmedia.com</a> címen várunk.
            Ügyfélszolgálat nyitvatartása: hétfő - péntek, 09:00 - 17:00.
            <br />
            Bővebb tájékoztatásért lásd a <a href="./terms.php" target="_blank">Felhasználási feltételeket</a> és az
            <a href="./privacy.php" target="_blank">Adatvédelmi irányelveinket</a>
            <br />
            <a href="https://www.vodafone.hu/">https://www.vodafone.hu</a>
            <br />
            <span class="noaff">Affiliate: mobstra.com</span>
        </p>
    </footer>
</template>

<style lang="scss" scoped>


p {
    margin: 0 auto;
    max-width: 400px;
}

.copyright {
    font-size: 10px;
    text-align: center;
    padding: 0 10px;
    width: 100%;


    p {
        color: #fff;
        max-width: 400px;
        margin: 0 auto;
    }

    a {
        text-decoration: none;
        color: #fff;
    }
}
</style>

<script>
export default {
    name: 'Footer',
    props: ['currentPage'],
}
</script>