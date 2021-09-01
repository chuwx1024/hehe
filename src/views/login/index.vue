<template>
  <div class="login-page">
    <a-row>
      <a-col :span="10">
        <section class="login-left">
        </section>
      </a-col>
      <a-col :span="14">
        <section class="login-right">
          <a-form-model :model="form" :label-col="labelCol" class="login-form" >
            <a-form-model-item  class="welcome">
              <h2>星云隐私计算平台</h2>
              <h2>欢迎登录</h2>
            </a-form-model-item>
            <a-form-model-item >
              <a-input v-model="form.name" >
                <svg slot="prefix" class="icon" aria-hidden=“true” >
                  <use xlink:href="#icon-custom-user"></use>
                </svg>
              </a-input>
            </a-form-model-item>
            <a-form-model-item has-feedback  prop="pass">
              <a-input-password placeholder="input password" >
                <svg slot="prefix" class="icon" aria-hidden=“true” >
                  <use xlink:href="#icon-password"></use>
                </svg>
              </a-input-password>
            </a-form-model-item>
            <a-form-model-item has-feedback  prop="pass" class="login-option">
              <a-button type="primary" block>
                登录
              </a-button>
            </a-form-model-item>
          </a-form-model>
          <p class="page-footer">
            服务协议  |  帮助中心  |  用户手册    版权所有 © 2021 深圳致星科技有限公司
          </p>
        </section>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: [],
  data () {
    return {
      form: {
        name: 'ceshi',
        password: 123
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  methods: {}
}

</script>

<style scoped lang="less">
.login-page {
  height: 100vh;
  .login-left {
    height: 100vh;
    background: url('../../assets/img/login_bg.png');
    background-size: cover;
    padding: 49px 65px;
  }
  .login-right {
    height: 100vh;
    width: 100%;
    position: relative;
    .login-form {
      width: 50%;
      height: 50%;
      margin: auto ;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      .ant-form-item {
        margin-bottom: 16px;
      }
      .login-option {
        margin-top: 30px;
      }
      .welcome {
        font-size: 20px;
        h2 {
          line-height: 34px;
        }
      }
    }
    p {
      position: absolute;
      bottom: 10px;
      width: 100%;
      text-align: center;
    }

  }
}
</style>
