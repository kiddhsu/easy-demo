<template>
  <div class='mainContain'>
    <el-card class="box-card" v-cloak>
      <div slot="header" class="clearfix">
        <p>請於時限內作答完畢！</p>
        <p>作答時間會影響分數！</p>
        <p>準備好的話就開始吧！</p>
      </div>
      <MainPage :page-name='"home"'></MainPage>
    </el-card>
  </div>
</template>

<script>
import MainPage from "../../components/MainPage";

export default {
  name: "home",
  components: {
    MainPage
  }
};
</script>
<style scoped>
.box-card{
    text-align: center;
}
</style>
