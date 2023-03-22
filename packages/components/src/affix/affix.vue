<template>
  <div ref="root" :style="rootStyle">
    <div :class="{ 'hp-affix': fixed }" :style="affixStyle">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import './style/index.less';
import { computed, ref, watchEffect } from 'vue';
import { getHTMLElement } from '@hp-vue-component/utils';
import {
  useElementBounding,
  useElementSize,
  useWindowSize
} from '@vueuse/core';

defineOptions({ name: 'HpAffix' });

const props = withDefaults(
  defineProps<{
    /**
     * @description 顶部偏移量
     */
    offsetTop?: number;
    /**
     * @description 底部偏移量
     */
    offsetBottom?: number;
    /**
     * @description 滚动区域容器
     */
    target?: Window | HTMLElement;
  }>(),
  {
    target: () => {
      return window;
    }
  }
);

const emits = defineEmits<{
  (e: 'change', fixed: 'top' | 'bottom' | undefined): void;
}>();

const root = ref<HTMLDivElement>();
const fixed = ref<'top' | 'bottom' | undefined>();
const offset = ref(0);

const windowSize = useWindowSize();

const rootRect = useElementBounding(root);
const targetRect = computed(() => {
  return useElementBounding(getHTMLElement(props.target));
});

const rootStyle = computed(() => {
  return {
    width: fixed.value ? root.value?.style.width + 'px' : '',
    height: fixed.value ? root.value?.style.height + 'px' : ''
  };
});

const affixStyle = computed(() => {
  if (fixed.value) {
    return {
      top: fixed.value === 'top' && props.offsetTop ? offset.value + 'px' : '',
      bottom:
        fixed.value === 'bottom' && props.offsetBottom
          ? offset.value + 'px'
          : '',
      width: root.value?.style.width + 'px',
      height: root.value?.style.height + 'px'
    };
  } else {
    return {};
  }
});

const update = () => {
  fixed.value = undefined;
  if (props.target === window) {
    if (props.offsetTop && props.offsetTop > rootRect.top.value) {
      offset.value = props.offsetTop;
      fixed.value = 'top';
    }
    if (
      props.offsetBottom &&
      windowSize.height.value + props.offsetBottom < rootRect.bottom.value
    ) {
      offset.value = props.offsetBottom;
      fixed.value = 'bottom';
    }
  } else {
    if (
      props.offsetTop &&
      props.offsetTop + targetRect.value.top.value > rootRect.top.value
    ) {
      offset.value = props.offsetTop + targetRect.value.top.value;
      fixed.value = 'top';
    }

    if (
      props.offsetBottom &&
      props.offsetBottom + targetRect.value.bottom.value < rootRect.bottom.value
    ) {
      offset.value =
        windowSize.height.value -
        props.offsetBottom -
        targetRect.value.bottom.value;
      fixed.value = 'bottom';
    }
  }
  emits('change', fixed.value);
};

watchEffect(update);
</script>
