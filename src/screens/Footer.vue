<template>
    <footer class="copyright">
        <p v-if="currentPage === 'start'">
            © {{ new Date().getFullYear() }}. <span class="noaff">aptasheko</span>
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, a!
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis consequuntur voluptate unde cum dignissimos dolores architecto itaque laudantium adipisci aliquam!
            <br />
        </p>
        <p v-else>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, soluta!
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus hic ut dolorum itaque distinctio at nemo. Atque natus architecto aperiam placeat excepturi pariatur optio sapiente. Ducimus quidem vitae vel blanditiis repellendus inventore. Quo aliquid illo eaque in dolorem maxime excepturi a laborum quaerat minima quisquam libero distinctio ab velit alias, laboriosam nemo tempora temporibus quasi recusandae. Officia, error commodi. Explicabo cupiditate amet, vitae sapiente quam eveniet quaerat molestiae aliquid! Beatae, pariatur velit! Illum debitis error ullam neque deleniti natus, exercitationem numquam sit, doloribus nobis, expedita adipisci. Cum voluptas voluptatem officiis, doloremque odio nostrum obcaecati, minus deleniti quas illo unde totam aliquid numquam atque quia adipisci nesciunt saepe. Eligendi in pariatur enim, fugit sed sint, blanditiis sequi maiores soluta deleniti, et perferendis ipsum earum quia dignissimos provident qui excepturi. Mollitia corrupti dolor error illo nostrum tempora voluptates. Pariatur fugit rerum dolorum ad, provident repellendus quis deserunt at porro doloremque itaque possimus, cupiditate officiis ipsum quisquam. Sed dolores magni fugit repellat accusantium voluptatem, excepturi reprehenderit amet tempora voluptate modi autem itaque laudantium nam similique esse aperiam eos! Soluta eaque dolor enim sint debitis delectus molestiae placeat error ab sequi impedit obcaecati deserunt architecto atque adipisci inventore optio voluptatum nihil, quaerat iusto neque?
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