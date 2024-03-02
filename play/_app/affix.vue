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
        <HpAffix :target="a" :offsetTop="10" :offsetBottom="10">
          <div style="width: 200px; height: 200px; background: red"></div>
        </HpAffix>
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
      <HpAffix :offsetBottom="10">
        <div style="width: 200px; height: 500px; background: sienna"></div>
      </HpAffix>
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

onMounted(() => {
  a.value = document.getElementById('container1')
})
</script>
