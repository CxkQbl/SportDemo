<template>
  <el-card shadow="always">
    <el-row>
      <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
        <div style="padding: 10px;padding-bottom: 10px; padding-right: 0px;">
          <el-avatar :size="50" :src="circleUrl"></el-avatar>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <div style="padding: 15px;padding-bottom: 10px; padding-right: 10px;">
          <span style="font-size: 30px;">{{name}}</span>
        </div>
      </el-col>
      <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
        <el-button type="text"><img src="@/assets/arrow-right.png" alt="" height="40px"></el-button>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
  export default{
    name:"mainCard",
    data:function(){
      return{
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        o:["1","2","3","4"]
      }
    },
    props:["name"]
  }
</script>

<style scoped="scoped">
  .el-card >>> .el-card__body{
    padding-right: 5px;
  }
</style>
