<template>
  <div>
    <el-radio-group v-model="labelPosition" size="small">
      <el-radio-button label="left">左对齐</el-radio-button>
      <el-radio-button label="right">右对齐</el-radio-button>
      <el-radio-button label="top">顶部对齐</el-radio-button>
    </el-radio-group>
    <div style="margin: 20px;"></div>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="体重">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="胸围">
        <el-input v-model="formLabelAlign.region"></el-input>
      </el-form-item>
      <el-form-item label="腰围">
        <el-input v-model="formLabelAlign.type"></el-input>
      </el-form-item>
      <el-form-item label="臀围">
        <el-input v-model="formLabelAlign.type"></el-input>
      </el-form-item>
      <el-form-item label="身高">
        <el-input v-model="formLabelAlign.type"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary"><i>提交</i></el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      };
    }
  }
</script>

<style>
</style>
