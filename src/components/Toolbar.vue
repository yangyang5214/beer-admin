<template>
  <div class="toolbar">
    <div class=header-navigation>
      <ul>
        <li>
          <router-link id='blog' to="/blog">blog</router-link>
        </li>
        <li>
          <router-link id='city' to="/city">city</router-link>
        </li>
        <li>
          <router-link id='me' to="/me">me</router-link>
        </li>
        <li>
          <router-link id='image' to="/">image</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'toolbar',
    data() {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .toolbar {
    width: 100%;
    height: auto;
  }

  .header-navigation {
    top: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background: rgba(255, 255, 255, .9);

    text-align: center;
    border-bottom: 1px solid #ddd;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .04);

    z-index: 9999;
  }

  .header-navigation ul li {
    float: left; /* 向左漂移，将竖排变为横排 */
    list-style: none; /* 去掉ul前面的符号 */
    margin: 0px; /* 与外界元素的距离为0 */
    padding: 0 0 0 40px; /* 与内部元素的距离为0 */
    width: auto; /* 宽度根据元素内容调整 */
    font-size: 20px
  }

</style>
