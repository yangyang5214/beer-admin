<template>
  <div class="image">

    <div class="header">
      <div class="title">
        图片列表
      </div>
    </div>

    <div class="search">
      <label>类型：</label>
      <el-input class="serarch-item" v-model="serarchType" placeholder=""></el-input>
      <el-button @click="getImageList" type="primary">确定</el-button>
      <el-button @click="uploadImage">增加</el-button>
    </div>


    <el-table
      :data="imageList"
      style="width: 100%"
      max-height="650">
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="url"
        label="url"
        width="180">
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="createTime"
        width="180">
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click=deleteImage(scope.row)>编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="block">
      <el-pagination
        background
        layout="prev, pager, next"
        :total=total
        :current-page=currentPage
        @current-change="handleCurrentChange">
      </el-pagination>
    </div>

    <div class="uploadImage">
      <el-dialog
        title="上传图片"
        :visible.sync="dialogVisible"
        width="30%">
        <div class="select-type">
          <el-input v-model="imageType" placeholder="图片分类"></el-input>
        </div>
        <el-upload
          class="image-upload"
          drag
          action="http://localhost:8888/basic/image/add"
          :data="{type:imageType}"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>

        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="getImageList">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'image',
    data() {
      return {
        dialogVisible: false,
        imageList: [],
        total: 0,
        currentPage: 1,
        serarchType: '',
        imageType: '',
      }
    },
    mounted: function () {
      this.getImageList()
    },
    methods: {
      uploadImage() {
        this.dialogVisible = true;
      },
      handleCurrentChange(val) {
        this.currentPage = val
        this.getCityList()
      },
      getImageList() {
        let params = {
          type: this.serarchType,
          pageNum: this.currentPage,
          pageSize: 20,
        }
        this.$axios.get(this.$api.getImageList, {params}).then(response => {
            let data = response.data
            this.imageList = response.data.list
            this.currentPage = data.pageNum
            this.total = data.total
            this.dialogVisible = false
          }
        )
      },
      deleteImage() {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .image {
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 20px;
    background: #FFFFFF;
  }

  .select-type {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 150px;
  }

  .header {
    height: 32px;
    padding-bottom: 5px;
    margin-bottom: 10px;
    line-height: 22px;
    background-color: #fff;
    border-bottom: 1px solid #f2f2f2;
  }

  .block {
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
  }

  .serarch-item {
    width: 200px;
    margin-right: 20px;
  }

  .title {
    display: inline-block;
    margin-left: 10px;
    margin-top: 8px;
    font-size: 20px;
    font-weight: bold;
  }
</style>
