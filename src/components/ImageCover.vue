<template>
  <div class="imageCover">

    <div class="header">
      <div class="title">
        图片封面列表
      </div>
    </div>

    <div class="search">
      <el-button @click="dialogVisible = true">增加</el-button>
    </div>

    <el-table
      :data="imageCoverList"
      style="width: 100%"
      max-height="650">

      <el-table-column
        prop="url"
        label="url"
        width="1000">
      </el-table-column>

      <el-table-column
        prop="url"
        label="url"
        width="200">

        <template slot-scope="scope">
          <img :src="scope.row.url" alt="" style="width: 100px;height: auto">
        </template>

      </el-table-column>

      <el-table-column
        prop="type"
        label="type"
        width="180">
      </el-table-column>


      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click=updateImageCover(scope.row)>编辑
          </el-button>
          <el-button
            size="mini"
            @click=deleteImageCover(scope.row.id)>删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>


    <el-dialog
      title="新增"
      :visible.sync="dialogVisible"
      width="30%">

      <div>
        <label>url：</label>
        <el-input v-model="image_cover_url" class="form-item"></el-input>
      </div>

      <div>
        <label>type：</label>
        <el-input v-model="image_cover_type" class="form-item"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="addImageCover">确 定</el-button>
    </span>
    </el-dialog>

  </div>
</template>

<script>

  export default {
    name: 'imageCover',
    data() {
      return {
        dialogVisible: false,
        imageCoverList: [],
        image_cover_id: '',
        image_cover_url: '',
        image_cover_type: '',
      }
    },
    mounted: function () {
      this.getImageCoverList()
    },
    methods: {
      getImageCoverList() {
        this.$axios.get(this.$api.getImageCoverList).then(response => {
            let data = response.data
            this.imageCoverList = data.data
          }
        )
      },
      addImageCover() {
        let params = {
          type: this.image_cover_type,
          url: this.image_cover_url,
        }
        this.$axios.get(this.$api.saveImageCover, {params}).then(response => {
            this.dialogVisible = false
            this.getImageCoverList()
          }
        )
      },
      updateImageCover(row) {
        this.dialogVisible = true
        this.image_cover_id = row.id
        this.image_cover_type = row.type
        this.image_cover_url = row.url
      },
      deleteImageCover(id) {
        let params = {
          id: id
        }
        this.$axios.get(this.$api.deleteImageCover, {params}).then(response => {
            this.getImageCoverList()
          }
        )
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .imageCover {
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
