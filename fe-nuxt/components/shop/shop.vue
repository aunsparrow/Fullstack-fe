<template lang="html">
  <article class="artile-shop">
    <h2>ร้านค้า</h2>
    <div class="overflow-auto">
      <b-table :id="shop - table" :items="shops" :fields="fields" small>
        <template #cell(actions)="row">
          <b-button
            size="sm"
            class="mr-1"
            @click="clickInfo(row.item, $event.target)"
          >
            ดูข้อมูล
          </b-button>

          <b-button
            size="sm"
            class="mr-1"
            @click="clickEdit(row.item, $event.target)"
          >
            แก้ไข
          </b-button>

          <b-button
            size="sm"
            class="mr-1"
            @click="clickDelete(row.item, $event.target)"
          >
            ลบ
          </b-button>
        </template>
      </b-table>
    </div>

    <div>
      <b-button
        size="sm"
        class="mr-1 add-shop"
        @click="clickAdd($event.target)"
      >
        เพิ่มร้านค้า
      </b-button>
    </div>

    <b-modal
      hide-footer
      hide-header
      :id="addShop.id"
      :title="addShop.shopInfo.shop_name"
      ok-only
      @hide="resetInfoModal"
    >
      <div class="edit-input">
        <p>ชื่อร้าน</p>
        <b-form-input
          v-model="addShop.shopInfo.shop_name"
          :placeholder="addShop.shopInfo.shop_name"
        ></b-form-input>
      </div>

      <div class="edit-input">
        <p>ติดต่อ</p>
        <b-form-input
          v-model="addShop.shopInfo.tel"
          :placeholder="addShop.shopInfo.tel"
        ></b-form-input>
      </div>

      <div class="edit-input">
        <p>ที่อยู่</p>
        <b-form-input
          v-model="addShop.shopInfo.address"
          :placeholder="addShop.shopInfo.address"
        ></b-form-input>
      </div>

      <b-button size="sm" class="mr-1" @click="clickAddShop($event.target)">
        เพิ่ม
      </b-button>
    </b-modal>

    <b-modal
      hide-footer
      hide-header
      :id="infoShop.id"
      :title="infoShop.shopInfo.shop_name"
      ok-only
      @hide="resetInfoModal"
    >
      <p>ข้อมูลร้าน: {{ infoShop.shopInfo.shop_name }}</p>
      <p>ติดต่อ: {{ infoShop.shopInfo.tel }}</p>
      <p>ที่อยู่: {{ infoShop.shopInfo.address }}</p>
    </b-modal>

    <b-modal
      hide-footer
      hide-header
      :id="editShop.id"
      :title="editShop.shopInfo.shop_name"
      ok-only
      @hide="resetInfoModal"
    >
      <div class="edit-input">
        <p>ชื่อร้าน</p>
        <b-form-input
          v-model="editShop.shopInfo.shop_name"
          :placeholder="editShop.shopInfo.shop_name"
        ></b-form-input>
      </div>

      <div class="edit-input">
        <p>ติดต่อ</p>
        <b-form-input
          v-model="editShop.shopInfo.tel"
          :placeholder="editShop.shopInfo.tel"
        ></b-form-input>
      </div>

      <div class="edit-input">
        <p>ที่อยู่</p>
        <b-form-input
          v-model="editShop.shopInfo.address"
          :placeholder="editShop.shopInfo.address"
        ></b-form-input>
      </div>

      <b-button size="sm" class="mr-1" @click="clickEditShop($event.target)">
        แก้ไข
      </b-button>
    </b-modal>

    <b-modal
      hide-footer
      hide-header
      :id="deleteShop.id"
      :title="deleteShop.shopInfo.shop_id"
      ok-only
      @hide="resetInfoModal"
    >
      <p>คุณต้องการลบข้อมูลร้านค้า: {{ deleteShop.name }} ?</p>

      <b-button size="sm" class="mr-1" @click="clickDeleteOk($event.target)">
        ตกลง
      </b-button>

      <b-button
        size="sm"
        class="mr-1"
        @click="clickDeleteCancel($event.target)"
      >
        ยกเลิก
      </b-button>
    </b-modal>
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
