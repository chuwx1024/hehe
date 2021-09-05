<template>
  <div class="login-page">
    <a-row>
      <a-col :span="10">
        <section class="login-left">
        </section>
      </a-col>
      <a-col :span="14">
        <section class="login-right">
          <a-form-model :model="form" :rules="rules" ref="cccc"  class="login-form" >
            <a-form-model-item  class="welcome">
              <h2>星云隐私计算平台</h2>
              <h2>欢迎登录</h2>
            </a-form-model-item>
            <a-form-model-item  prop="name" >
              <a-input ref="name" v-model="form.name" place-holder="用户名"  >
                <svg slot="prefix" class="icon" aria-hidden=“true” >
                  <use xlink:href="#icon-custom-user"></use>
                </svg>
              </a-input>
            </a-form-model-item>
            <a-form-model-item  prop="password" >
              <a-input-password v-model="form.password" placeholder="密码" >
                <svg slot="prefix" class="icon" aria-hidden=“true” >
                  <use xlink:href="#icon-password"></use>
                </svg>
              </a-input-password>
            </a-form-model-item>
            <a-form-model-item   class="login-option" >
              <a-button type="primary" block @click="onsubmit">
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
import { login } from '@/api/login'
import { setToken } from '@/utils/handleCookie'
export default {
  name: '',
  components: {},
  props: [],
  data () {
    return {
      form: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  methods: {
    onsubmit () {
      this.$refs.cccc.validate(async valid => {
        if (valid) {
          const params = {
            username: this.form.name,
            password: this.form.password
          }
          const { data } = await login(params)

          this.$message.success('登录成功 欢迎')
          const { token } = data
          setToken(token)
          this.$router.push({ name: 'Home' })
        }
      })
    }
  }
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
      .login-option {
        padding-top: 16px;
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
