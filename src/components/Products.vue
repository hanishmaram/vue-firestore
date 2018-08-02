<template>
  <div>
    <h1>Products</h1>
  </div>
</template>

<script>
import db from '@/db';

export default {
  name: 'Products',
  data () {
    return {
      products:[]
    }
  },
  created:function(){
    db.collection('Products').get().then(querySnapShot=>{
      querySnapShot.forEach(doc=>{
        console.log(doc.data());
      });
    });
  }
}
</script>
<style scoped>

</style>


