<template>
  <div class="city">
    <div class="header">
      <div class="title">
        城市列表
      </div>
    </div>

    <div class="search">
      <label>城市：</label>
      <el-input class="serarch-item" v-model="cityName" placeholder="name"></el-input>
      <label>状态：</label>
      <el-input class="serarch-item" v-model="serarchStatus" placeholder="status"></el-input>
      <el-button @click="getCityList" type="primary">确定</el-button>
    </div>

    <el-table
      :data="cityList"
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
        prop="status"
        label="状态"
        width="180">
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click=updateCityForm(scope.row)>编辑
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
      title="更新城市状态"
      :visible.sync="dialogVisible"
      width="30%">

      <div>
        <label>城市</label>
        <el-input :disabled="true" v-bind:value="cityName" class="form-item" placeholder="name"></el-input>
      </div>
      <div>
        <label>状态</label>
        <el-select v-model="status" class="form-item">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="updateCity">确 定</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'City',
    data() {
      return {
        serarchStatus: '',
        cityName: '',
        cityId: '',
        status: '',
        total: 0,
        currentPage: 1,
        cityList: [],
        dialogVisible: false,
        options: [{
          value: true,
          label: '已开发'
        }, {
          value: false,
          label: '未开发'
        },
        ]
      }
    },
    mounted: function () {
      this.getCityList()
    },
    methods: {
      handleCurrentChange(val) {
        this.currentPage = val
        this.getCityList()
      },
      updateCityForm(row) {
        this.dialogVisible = true
        this.cityId = row.id
        this.cityName = row.name
      },
      updateCity() {
        let params =
          {
            'cityId': this.cityId, 'status': this.status
          }
        this.$axios.get(this.$api.updateCity, {params}).then(response => {
            this.dialogVisible = false
            this.cityName = ''
            this.status = ''
            this.getCityList()
          }
        )
      },
      getCityList() {
        let params =
          {
            'cityName': this.cityName,
            'pageNum': this.currentPage,
            'pageSize': 20,
            'status': this.serarchStatus,
          }
        this.$axios.get(this.$api.getAllCityList, {params}).then(response => {
            let data = response.data
            this.cityList = data.list
            this.currentPage = data.pageNum
            this.total = data.total
          }
        )
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .city {
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
    width: 200px;
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
