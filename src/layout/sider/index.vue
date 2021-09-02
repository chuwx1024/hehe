<template>
  <div class="left-sider">
    <a-layout-sider>
      <div class="sider-head">
        计算平台
      </div>
      <a-menu
        style="width: 200px"
        class="menu-list"
        theme="dark"
        mode="inline"
        :default-selected-keys="['/home']"
        @click="onClick"
      >
        <!-- <a-menu-item  v-for="item in list" :key="item.path" >
          <a-icon type="mail" />
          {{ item.meta.title }}
        </a-menu-item> -->
        <a-sub-menu key="/home">
        <span slot="title"><a-icon type="mail" /><span>节点管理</span></span>
        <a-menu-item-group key="g1">
          <a-menu-item key="/node/nodeOne">
            节点一
          </a-menu-item>
          <a-menu-item key="/node/nodeTwo">
            节点二
          </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
        <a-menu-item key="/home">
          <a-icon type="calendar" />
          工作台
        </a-menu-item>
        <a-menu-item key="/data">
          <a-icon type="calendar" />
          数据管理
        </a-menu-item>
        <a-menu-item key="/item">
          <a-icon type="mail" />
          项目管理
        </a-menu-item>
        <a-menu-item key="/point">
          <a-icon type="calendar" />
          站点管理
        </a-menu-item>
        <a-menu-item key="/info">
          <a-icon type="mail" />
          账户信息
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
  </div>
</template>

<script>
import { routes } from '../../router/index'
export default {
  name: 'Sider',
  components: {},
  props: [],
  data () {
    return {
      list: []
    }
  },
  computed: {},
  watch: {},
  created () {
    // console.log(routes[0].children)
    this.list = routes[0].children
  },
  methods: {
    onClick (item) {
      this.$router.push(item.key)
    }
  }
}

</script>

<style scoped lang="less">
.left-sider {
  /deep/ .ant-layout-sider {
    height: 100vh;
    background-color: #0c2154;
  }
  .sider-head {
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    padding-left: 16px;
    color: white;
  }
  .menu-list {
    background-color: #0c2154;
    color: rgba(255, 255, 255, 0.65);
  }
}

</style>
