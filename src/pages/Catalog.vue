<template>
    <div class="row">
        <div class="container">
            <Header/>
        </div>
        <div class="content">
            <Banner
            imgSrc='/img/banner-catalog.png'
            namePage='Catalog'
            />
            <div class="container">
                <HotelFilter/>
            </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
import HotelFilter from '@/components/HotelFilter.vue'
import Header from '@/components/Layout/Header.vue'
import Footer from '@/components/Layout/Footer.vue'
import Banner from '@/components/Banner.vue'
export default {
    data() {
        return {

        }
    },
    components: {
        HotelFilter,
        Header,
        Footer,
        Banner
    }
}
</script>