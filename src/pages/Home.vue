<template>
  <div class="container">
  <Header/>
  <div class="content">
  <MainBanner/>
  <BrandDifferent/>
  <ProductSelected/>
  <StartedIdea/>
  </div>
  </div>
  <Footer/>
</template>
<script setup>

import Header from '@/components/Layout/Header.vue'
import Footer from '@/components/Layout/Footer.vue'
import MainBanner from '@/components/MainBanner.vue'
import BrandDifferent from '@/components/BrandDifferent.vue'
import ProductSelected from '@/components/ProductSelected.vue'
import StartedIdea from '@/components/StartedIdea.vue'

</script>

