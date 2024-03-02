<template>
  <div class="hp-anchor-link">
    <a :href="href">
      <div class="hp-achor-link-title" :style="style">{{ title }}</div>
    </a>
  </div>
</template>

<script lang="tsx" setup>
import './style/link.less'

defineOptions({ name: 'anchorLink' })

withDefaults(
  defineProps<{
    /**
     * @description 选项名称
     */
    title?: string
    /**
     * @description 选项链接
     */
    href?: string
    /**
     * @description 滚动区域容器
     */
    target?: Window | HTMLElement
    /**
     * @description 选项样式
     */
    style?: { [x: string]: string | number }
  }>(),
  {
    target: () => {
      return window
    }
  }
)
</script>
