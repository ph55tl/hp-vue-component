<template>
  <div>
    paly
    <div style="height: 500px"></div>
    <div style="height: 500px"></div>
    <div style="height: 500px"></div>
    <div style="height: 500px"></div>
    <div style="height: 500px"></div>
    <div style="height: 500px"></div>
    <div
      id="container1"
      ref="container"
      style="height: 500px; overflow-y: scroll; border: green"
    >
      <div style="height: 500px"></div>
      <div style="height: 500px"></div>
      <div style="height: 500px"></div>
      <div style="height: 500px"></div>
      <div style="height: 500px"></div>
      <div style="height: 500px"></div>
      <div style="height: 500px"></div>
      <div style="height: 500px"></div>
      <div style="height: 500px"></div>
      <div style="height: 500px"></div>
      <div style="height: 500px"></div>
      <div style="height: 500px"></div>
      <div style="display: flex">
        <div
          style="
            width: 200px;
            height: 500px;
            background: transparent;
            border: 1px solid;
          "
        ></div>
        <div
          style="
            width: 200px;
            height: 500px;
            background: transparent;
            border: 1px solid;
          "
        ></div>
        <div
          style="
            width: 200px;
            height: 500px;
            background: transparent;
            border: 1px solid;
          "
        ></div>
        <HpAnchor :target="a" :offsetTop="10" :offsetBottom="10" :items="items">
          <div>无数据</div>
        </HpAnchor>
      </div>
      <div style="height: 500px"></div>
      <div style="height: 500px"></div>
      <div style="height: 500px"></div>
      <div style="height: 500px"></div>
      <div style="height: 500px"></div>
      <div style="height: 500px"></div>
      <div style="height: 500px"></div>
      <div style="height: 500px"></div>
      <div style="height: 500px"></div>
      <div style="height: 500px"></div>
      <div style="height: 500px"></div>
      <div style="height: 500px"></div>
    </div>
    <div style="display: flex">
      <div
        style="
          width: 200px;
          height: 500px;
          background: transparent;
          border: 1px solid;
        "
      ></div>
      <HpAnchor :offsetBottom="10">
        <div>无数据</div>
      </HpAnchor>
    </div>
    <div style="height: 500px"></div>
    <div style="height: 500px"></div>
    <div style="height: 500px"></div>
    <div style="height: 500px"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const container = ref()
const a = ref()

const items = [
  {
    key: '1',
    title: '1',
    href: '#1',
    style: { color: 'red' },
    children: [
      {
        key: '11',
        title: '1-1',
        href: '#1-1',
        style: { color: 'blue' },
        children: []
      },
      {
        key: '12',
        title: '1-2',
        href: '#1-2',
        style: { color: 'green' },
        children: []
      }
    ]
  },
  {
    key: '2',
    title: '2',
    href: '#2',
    style: { color: 'red' },
    children: [
      {
        key: '2',
        title: '2-1',
        href: '#2-1',
        style: { color: 'blue' },
        children: []
      }
    ]
  }
]

onMounted(() => {
  a.value = document.getElementById('container1')
})
</script>
