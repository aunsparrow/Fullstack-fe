<template lang="html">
  <article>
    <h2>ร้านค้า</h2>
    <div class="overflow-auto">
      <b-table :id="shop - table" :items="shops" :fields="fields" small>
        <template #cell(actions)="row">
          <b-button
            size="sm"
            class="mr-1"
            @click="clickInfo(row.item, $event.target)"
          >
            Info
          </b-button>
          <b-button size="sm" class="mr-1"> Edit </b-button>
          <b-button size="sm"> Delete </b-button>
        </template>
      </b-table>
    </div>
    <b-modal
      hide-footer
      hide-header
      :id="infoShop.id"
      :title="infoShop.name"
      ok-only
      @hide="resetInfoModal"
    >
      <p>{{ infoShop.detail }}</p>
    </b-modal>
    <!--<div class="row">

      <b-card
        v-for="shop in shops"
        :key="shop.shopId"
        :title="shop.shopName"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        class="col-sm-3 card-shop"
      >
        <b-card-text>
          {{ shop.shopDetail }}
        </b-card-text>

        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </div>-->
  </article>
</template>

<script>
import shopJs from '/assets/js/shop.js'
export default {
  mixins: [shopJs],
}
</script>
<style scoped>
@import '~/assets/css/shop.css';
</style>
