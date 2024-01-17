<template>
  <n-form ref="formRef" :model="model" :rules="rules">
    <n-form-item path="username" label="用户名">
      <n-input v-model:value="model.username" @keydown.enter.prevent />
    </n-form-item>
    <n-form-item path="password" label="密码">
      <n-input
        v-model:value="model.password"
        type="password"
        @input="handlePasswordInput"
        @keydown.enter.prevent
      />
    </n-form-item>
    <n-form-item ref="rPasswordFormItemRef" first path="reenteredPassword" label="重复密码">
      <n-input
        v-model:value="model.reenteredPassword"
        :disabled="!model.password"
        type="password"
        @keydown.enter.prevent
      />
    </n-form-item>
    <n-row :gutter="[0, 24]">
      <n-col :span="24">
        <div style="display: flex; justify-content: flex-end">
          <n-button
            :disabled="model.username === null"
            round
            type="primary"
            @click="handleValidateButtonClick"
          >
            验证
          </n-button>
        </div>
      </n-col>
    </n-row>
  </n-form>

  <pre
    >{{ JSON.stringify(model, null, 2) }}
</pre
  >
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import {
  FormInst,
  FormItemInst,
  FormItemRule,
  useMessage,
  FormRules,
  NForm,
  NFormItem,
  NInput,
  NButton,
  NRow,
  NCol
} from 'naive-ui'

import { signUp } from '~/services'

interface ModelType {
  username: string | null
  password: string | null
  reenteredPassword: string | null
}

export default defineComponent({
  components: {
    NForm,
    NFormItem,
    NInput,
    NButton,
    NRow,
    NCol
  },
  setup() {
    const formRef = ref<FormInst | null>(null)
    const rPasswordFormItemRef = ref<FormItemInst | null>(null)
    const message = useMessage()
    const modelRef = ref<ModelType>({
      username: null,
      password: null,
      reenteredPassword: null
    })
    function validatePasswordStartWith(rule: FormItemRule, value: string): boolean {
      return (
        !!modelRef.value.password &&
        modelRef.value.password.startsWith(value) &&
        modelRef.value.password.length >= value.length
      )
    }
    function validatePasswordSame(rule: FormItemRule, value: string): boolean {
      return value === modelRef.value.password
    }
    const rules: FormRules = {
      username: [
        {
          required: true,
          validator(rule: FormItemRule, value: string) {
            if (!value) {
              return new Error('需要用户名')
            }
            // else if (!/^\d*$/.test(value)) {
            //   return new Error('用户名应该为整数')
            // } else if (Number(value) < 18) {
            //   return new Error('用户名应该超过十八岁')
            // }
            return true
          },
          trigger: ['input', 'blur']
        }
      ],
      password: [
        {
          required: true,
          message: '请输入密码'
        }
      ],
      reenteredPassword: [
        {
          required: true,
          message: '请再次输入密码',
          trigger: ['input', 'blur']
        },
        {
          validator: validatePasswordStartWith,
          message: '两次密码输入不一致',
          trigger: 'input'
        },
        {
          validator: validatePasswordSame,
          message: '两次密码输入不一致',
          trigger: ['blur', 'password-input']
        }
      ]
    }
    return {
      formRef,
      rPasswordFormItemRef,
      model: modelRef,
      rules,
      handlePasswordInput() {
        if (modelRef.value.reenteredPassword) {
          rPasswordFormItemRef.value?.validate({ trigger: 'password-input' })
        }
      },
      handleValidateButtonClick(e: MouseEvent) {
        e.preventDefault()
        formRef.value?.validate((errors) => {
          if (!errors) {
            signUp({
              username: modelRef.value.username!,
              password: modelRef.value.password!
            }).then(async (res) => {
              const data = await res.json()
              if (data.data === 'ok') {
                message.success('注册成功')
              } else {
                message.error('注册失败' + data.message)
              }
            })
          } else {
            console.log(errors)
            message.error('验证失败')
          }
        })
      }
    }
  }
})
</script>
