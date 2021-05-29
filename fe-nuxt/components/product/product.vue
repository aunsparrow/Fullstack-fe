<template lang="html">
  <article class="artile-product">
    <h2>สินค้า</h2>
    <div>
        <b-dropdown :id="ddShops.id" dropright :text="ddShops.name" class="m-2">
          <b-dropdown-item
            v-for="shopDd in ddShop"
            :key="shopDd.shop_id"
            :value="shopDd.shop_name"
            @click="clickFilter(shopDd, $event.target)"
            >{{ shopDd.shop_name }}</b-dropdown-item
          >
        </b-dropdown>
      </div>
    <div class="overflow-auto">
      <b-table :id="shop - table" :items="products" :fields="fields" small>
        <template #cell(actions)="row">
          <b-button 
          size="sm" 
          class="mr-1"
          @click="clickInfo(row.item, $event.target)"> ดูข้อมูล </b-button>

          <b-button 
          size="sm" 
          class="mr-1"
          @click="clickEdit(row.item, $event.target)"> แก้ไข </b-button>

          <b-button 
          size="sm" 
          class="mr-1"
           @click="clickDelete(row.item, $event.target)"
          > ลบ </b-button>
        </template>
      </b-table>
    </div>

    <div>
      <b-button size="sm" class="mr-1 add-shop" @click="clickAdd($event.target)">
        เพิ่มสินค้า
      </b-button>
    </div>

    <b-modal
      hide-footer
      hide-header
      :id="addProd.id"
      :title="addProd.prodInfo.name"
      ok-only
    >
      <div class="edit-input">
        <p>ชื่อสินค้า</p>
        <b-form-input v-model="addProd.prodInfo.product_name"></b-form-input>
      </div>

      <div class="edit-input">
        <p>รายละเอียด</p>
        <b-form-input v-model="addProd.prodInfo.product_detail"></b-form-input>
      </div>

      <div class="edit-input">
        <p>ราคา</p>
        <b-form-input
          type="number"
          min="1"
          max="5000"
          v-model="addProd.prodInfo.product_price"
        ></b-form-input>
      </div>

      <div class="edit-input">
        <p>หน่วย</p>
        <b-form-input v-model="addProd.prodInfo.product_unit"></b-form-input>
      </div>

      <div>
        <b-dropdown :id="ddShops.id" dropright :text="ddShops.name" class="m-2">
          <b-dropdown-item
            v-for="shopDd in ddShop"
            :key="shopDd.shop_id"
            :value="shopDd.shop_name"
            @click="clickDdShop(shopDd, $event.target)"
            >{{ shopDd.shop_name }}</b-dropdown-item
          >
        </b-dropdown>
      </div>

      <div>
        <b-dropdown
          :id="ddCategories.id"
          dropright
          :text="ddCategories.name"
          class="m-2"
        >
          <b-dropdown-item
            v-for="cat in ddCategory"
            :key="cat.category_id"
            :value="cat.category_name"
            @click="clickDdCategory(cat, $event.target)"
            >{{ cat.category_name }}</b-dropdown-item
          >
        </b-dropdown>
      </div>

      <b-button size="sm" class="mr-1" @click="clickAddProd($event.target)">
        เพิ่ม
      </b-button>
    </b-modal>

    <b-modal
      hide-footer
      hide-header
      :id="prodInfos.id"
      :title="prodInfos.name"
      ok-only
    >
      <p>ชื่อสินค้า: {{ prodInfos.prod.product_name }}</p>
      <p>หมวดหมู: {{ prodInfos.prod.category.category_name }}</p>
      <p>รายละเอียด: {{ prodInfos.prod.product_detail }}</p>
      <p>ราคา: {{  prodInfos.prod.product_price }}</p>
      <p>หน่วย: {{ prodInfos.prod.product_unit }}</p>
    </b-modal>

    <b-modal
      hide-footer
      hide-header
      :id="prodUpdate.id"
      :title="prodUpdate.name"
      ok-only
    >
      <div class="edit-input">
        <p>สินค้า</p>
        <b-form-input
          v-model="prodUpdate.prod.product_name"
          :placeholder="prodUpdate.prod.product_name"
        ></b-form-input>
      </div>

      <div class="edit-input">
        <p>รายละเอียด</p>
        <b-form-input
          v-model="prodUpdate.prod.product_detail"
          :placeholder="prodUpdate.prod.product_detail"
        ></b-form-input>
      </div>

      <div class="edit-input">
        <p>ราคา</p>
        <b-form-input
          type="number"
          min="1"
          max="5000"
          v-model="prodUpdate.prod.product_price"
        ></b-form-input>
      </div>

      <div class="edit-input">
        <p>หน่วย</p>
        <b-form-input
           v-model="prodUpdate.prod.product_unit"
          :placeholder="prodUpdate.prod.product_unit"
        ></b-form-input>
      </div>

      <div>
        <b-dropdown
          :id="ddCategories.id"
          dropright
          :text="ddCategories.name"
          class="m-2"
        >
          <b-dropdown-item
            v-for="cat in ddCategory"
            :key="cat.category_id"
            :value="cat.category_name"
            @click="clickDdCategory(cat, $event.target)"
            >{{ cat.category_name }}</b-dropdown-item
          >
        </b-dropdown>
      </div>

      <b-button size="sm" class="mr-1" @click="clickEditProd($event.target)">
        แก้ไข
      </b-button>
    </b-modal>

    <b-modal
      hide-footer
      hide-header
      :id="deleteProd.id"
      :title="deleteProd.name"
      ok-only
      @hide="resetInfoModal"
    >
      <p>คุณต้องการลบข้อมูลสิ้นค้า: {{ deleteProd.name }} ?</p>

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
    <!--
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
    -->
  </article>
</template>

<script>
import shopJs from '/assets/js/product.js'
export default {
  mixins: [shopJs],
}
</script>
<style scoped>
@import '~/assets/css/product.css';
</style>
