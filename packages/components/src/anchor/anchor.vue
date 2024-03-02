<template>
  <div class="hp-anchor-wrapper">
    <template v-if="isAffix">
      <Affix
        :target="target"
        :offsetTop="offsetTop"
        :offsetBottom="offsetBottom"
      >
        <component :is="renderComp" />
      </Affix>
    </template>
    <template v-else>
      <component :is="renderComp" />
    </template>
  </div>
</template>

<script lang="tsx" setup>
import './style/index.less'
import Affix from '../affix'
import { AnchorLinkItemProps } from './interface'
import AnchorLink from './anchorLink.vue'
import { useSlots } from 'vue'

defineOptions({ name: 'HpAnchor' })

const slots = useSlots()

const props = withDefaults(
  defineProps<{
    /**
     * @description 是否固定
     */
    isAffix?: boolean
    /**
     * isAffix为true
     * @description 顶部偏移量
     */
    offsetTop?: number
    /**
     * isAffix为true
     * @description 底部偏移量
     */
    offsetBottom?: number
    /**
     * @description 滚动区域容器
     */
    target?: Window | HTMLElement
    /**
     * @description 选项内容
     */
    items?: Array<AnchorLinkItemProps>
  }>(),
  {
    isAffix: true,
    target: () => {
      return window
    }
  }
)

const createNestedLink = (options: AnchorLinkItemProps[]) => {
  return Array.isArray(options)
    ? options.map((option) => {
        const { key, title, href, target, style, children } = option
        return (
          <AnchorLink
            key={key}
            title={title}
            href={href}
            target={target}
            style={style}
          >
            {children ? createNestedLink(children) : null}
          </AnchorLink>
        )
      })
    : null
}

const renderComp = (
  <div class="hp-anchor">
    <span class="hp-anchor-ink"></span>
    {Array.isArray(props.items)
      ? createNestedLink(props.items)
      : slots.default?.()}
  </div>
)
</script>
