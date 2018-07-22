<template>
  <div class="blog">
    <div class="header">
      <div class="title">
        blog列表
      </div>
    </div>

    <div class="search">

      <label>类型：</label>
      <el-input class="serarch-item" v-model="type" placeholder="type"></el-input>

      <label>name：</label>
      <el-input class="serarch-item" v-model="name" placeholder="name"></el-input>

      <el-button @click="getBlogList" type="primary">确定</el-button>

      <el-button @click="dialogVisible = true">增加</el-button>
    </div>

    <el-table
      :data="blogList"
      style="width: 100%"
      max-height="650">
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名字"
        width="180">
      </el-table-column>
      <el-table-column
        prop="url"
        label="url"
        width="800">
      </el-table-column>

      <el-table-column
        prop="url"
        label="github"
        width="200">
        <template slot-scope="scope">
          <a :href="scope.row.url" target="_blank">github</a>
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
            @click=updateBlog(scope.row)>编辑
          </el-button>
          <el-button
            size="mini"
            @click=deleteBlog(scope.row.id)>删除
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

    <el-dialog
      title="更新"
      :visible.sync="dialogVisible"
      width="30%">

      <div>
        <label>图片：</label>
        <el-input v-model="blogImage" class="form-item" placeholder="blogImage"></el-input>
      </div>

      <div>
        <label>标题：</label>
        <el-input v-model="blogName" class="form-item" placeholder="blogName"></el-input>
      </div>


      <div>
        <label>类型：</label>
        <el-input v-model="blogType" class="form-item" placeholder="blogType"></el-input>
      </div>


      <div>
        <label>摘要：</label>
        <el-input v-model="blogRemark" class="form-item" placeholder="blogRemark"></el-input>
      </div>

      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="addBlog">确 定</el-button>
    </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'Blog',
    data() {
      return {
        blogList: [],
        currentPage: 1,
        total: 0,
        type: '',
        name: '',
        blogName: '',
        blogImage: '',
        blogRemark: '',
        blogId: null,
        dialogVisible: false,
        blogType: '',
      }
    },
    mounted: function () {
      this.getBlogList()
    },
    methods: {
      addBlog() {
        let params =
          {
            blogId: this.blogId,
            type: this.blogType,
            name: this.blogName,
            image: this.blogImage,
            remark: this.blogRemark,
          }
        this.$axios.get(this.$api.updateBlog, {params}).then(response => {
            this.dialogVisible = false
            this.getBlogList()
          }
        )
      },
      deleteBlog(id) {
        let params = {
          blogId: id
        }
        this.$axios.get(this.$api.deleteBlog, {params}).then(response => {
            this.getBlogList()
          }
        )
      },
      updateBlog(row) {
        this.dialogVisible = true
        this.blogId = row.id
        this.blogName = row.name
      },
      handleCurrentChange(val) {
        this.currentPage = val
        this.getCityList()
      },
      getBlogList() {
        let params =
          {
            type: this.type,
            pageNum: this.currentPage,
            pageSize: 20,
          }
        this.$axios.get(this.$api.getBlogList, {params}).then(response => {
            let data = response.data
            this.blogList = data.list
            this.currentPage = data.pageNum
            this.total = data.total
            this.blogName = ''
          }
        )
      }
    }
  }
</script>

<style scoped>
  .blog {
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 20px;
    background: #FFFFFF;
  }

  .block {
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
  }

  .form-item {
    margin: 10px;
    width: 300px;
  }

  .serarch-item {
    width: 200px;
    margin-right: 20px;
  }

  .header {
    height: 32px;
    padding-bottom: 5px;
    margin-bottom: 10px;
    line-height: 22px;
    background-color: #fff;
    border-bottom: 1px solid #f2f2f2;
  }

  .title {
    display: inline-block;
    margin-left: 10px;
    margin-top: 8px;
    font-size: 20px;
    font-weight: bold;
  }

  *, :after, :before {
    box-sizing: border-box;
  }
</style>
