import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Affix from '../index'

const AffixMounter = {
  props: ['offsetBottom', 'offsetTop'],
  render() {
    return (
      <div ref="container" class="container">
        <Affix class="fixed" ref="affix">
          <Button type="primary">Fixed at the top of container</Button>
        </Affix>
      </div>
    );
  },
};

describe('Affix component', () => {
  it('should fix to the top when scrolling down', async () => {
    const wrapper = mount(Affix, {
      props: {
        offsetTop: 50, // 替换为你的 offsetTop 值
        target: window // 替换为你的滚动容器，可能是 window 或其他 DOM 元素
      }
    })

    // 模拟滚动事件
    window.scrollTo(0, 10)

    // 等待异步更新
    await wrapper.vm.$nextTick()

    // 验证是否固定
    expect(wrapper.element).toBe(true)
  })

  // it('should fix to the bottom when scrolling up', async () => {
  //   const wrapper = createAffix({
  //     offsetBottom: 20
  //   })

  //   // 模拟滚动事件
  //   wrapper.vm.$emit('scroll', {
  //     scrollTop: 50 // 模拟滚动到离顶部 50px 的位置
  //   })

  //   // 使用断言检查组件是否处于固定状态
  //   expect(wrapper.find('.hp-affix-fixed')).toBeTruthy()
  // })

  // it('should not fix when scrolling within offset range', async () => {
  //   const wrapper = createAffix({
  //     offsetTop: 10
  //   })

  //   // 模拟滚动事件
  //   wrapper.vm.$emit('scroll', {
  //     scrollTop: 5 // 模拟滚动到离顶部 5px 的位置
  //   })

  //   // 使用断言检查组件是否不处于固定状态
  //   expect(wrapper.find('.hp-affix-fixed')).toBeFalsy()
  // })

  // it('should not fix when scrolling outside offset range', async () => {
  //   const wrapper = createAffix({
  //     offsetBottom: 20
  //   })

  //   // 模拟滚动事件
  //   wrapper.vm.$emit('scroll', {
  //     scrollTop: 1000 // 模拟滚动到离顶部 100px 的位置
  //   })

  //   // 使用断言检查组件是否不处于固定状态
  //   expect(wrapper.find('.hp-affix-fixed')).toBeFalsy()
  // })
})
