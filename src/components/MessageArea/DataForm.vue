<template>
  <form @submit.prevent="handleClick" class="data-form-container">
    <div class="form-item name">
      <input
        class="input"
        type="text"
        maxlength="10"
        placeholder="用户昵称"
        v-model="dataForm.nickname"
      />
      <span class="input-number"
        >{{ dataForm.nickname ? dataForm.nickname.length : 0 }}/10</span
      >
      <div class="error">{{ error.nickname }}</div>
    </div>
    <div class="form-item" ref="formContainer">
      <textarea
        class="textarea"
        maxlength="300"
        placeholder="输入内容"
        v-model="dataForm.content"
      ></textarea>
      <span class="input-number"
        >{{ dataForm.content ? dataForm.content.length : 0 }}/300</span
      >
      <div class="error">{{ error.content }}</div>
    </div>
    <button :disabled="isdisabled">
      {{ isdisabled ? "提交中" : "提交" }}
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      //文本框内容
      dataForm: {
        nickname: "",
        content: "",
      },
      error: {
        nickname: "",
        content: "",
      },
      isdisabled: false, //是否禁用
    };
  },
  methods: {
    //抛出事件
    handleClick() {
      this.error.nickname = this.dataForm.nickname ? "" : "请输入昵称";
      this.error.content = this.dataForm.content ? "" : "请输入内容";
      if (!this.dataForm.nickname || !this.dataForm.content) {
        return;
      }
      this.isdisabled = true;
      this.$emit("submit", this.dataForm, (text) => {
        //当父组件处理完成后执行该函数
        this.isdisabled = false;
        this.dataForm.nickname = "";
        this.dataForm.content = "";
        this.$showMessage({
          content: text,
          type: "success",
          container: this.$refs.formContainer,
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.data-form-container {
  display: flex;
  flex-direction: column;
  .name {
    width: 50%;
  }
  .form-item {
    position: relative;
    margin-bottom: 10px;
    .input,
    .textarea {
      outline: none;
      border: 1px dashed @gray;
      color: @gray;
      border-radius: 5px;
      display: block;
    }

    flex: 1 1 auto;
    .input {
      height: 40px;
      width: 100%;
      padding: 0 15px;
    }
    .textarea {
      width: 100%;
      resize: none;
      height: 120px;
      padding: 8px 15px;
    }
    .error {
      color: @danger;
      height: 20px;
      line-height: 20px;
      margin-top: 6px;
      font-size: 14px;
    }
    span {
      font-size: 10px;
      color: @gray;
      position: absolute;
      bottom: 30px;
      right: 5px;
    }
    .input:focus,
    .textarea:focus {
      border-color: @primary;
    }
    .textarea::placeholder {
      font-size: 14px;
    }
  }
  button {
    height: 34px;
    border-radius: 5px;
    background: @primary;
    color: #fff;
    outline: none;
    border: none;
    align-content: center;
    width: 100px;
    cursor: pointer;
    &:disabled {
      background: lighten(@primary, 20%);
      cursor: not-allowed;
    }
  }
}
</style>
