<template lang="html">
    <header>
      <h1>ระบบจัดการร้านค้าขนมและเครื่องดื่ม</h1>
    </header>
</template>

<script>
export default {
  data() {
    return {
      message: 'test message',
      canSee: true,
      objArr: [
        { id: 1, val: 'test1', fax: true },
        { id: 2, val: 'test2', fax: false },
        { id: 3, val: 'test3', fax: true },
      ],
    }
  },
}
</script>