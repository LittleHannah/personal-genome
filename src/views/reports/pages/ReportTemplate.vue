<script setup>
import { onActivated, onMounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const show = ref()
let data = reactive({
  contents: []
})

onMounted(() => {
  data.contents = route.meta.contents
})
</script>

<template>
  <div class="row" style="display:flex;flex-direction:row-reverse">
    <!-- table of contents -->
    <div class="col-md-3">
      <div class="text-muted">
        <div class="d-grid">
          <button @click="show = !show" class="btn btn-primary mobile-content-title" style="text-align:left" type="button">On this page</button>
          <span class="laptop-content-title">On this page</span>
        </div>
        <Transition>
          <div class="page-table-of-content" v-show="show">
            <ul>
              <li v-for="(content,index) in data.contents" v-bind:key="index">
                <a :href="'#'+content">{{ content }}</a>
              </li>
            </ul>
          </div>
        </Transition>
      </div> 
    </div>
    <!-- reports contents -->
    <div class="col-md-9">
      <div>
        <h1>Summary</h1>
        <h2 id="hello">Hello</h2>
        <h2 id="hi">Hi</h2>
        <h2 id="okay">Okay</h2>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@include media-breakpoint-down(md) { 
 .mobile-content-title {
  display: block;
 }
 .laptop-content-title {
  display: none;
 }

}
@include media-breakpoint-up(md) { 
  .mobile-content-title {
  display: none;
 }
 .laptop-content-title {
  display: block;
 }
 .page-table-of-content {
  display: block !important;
 }
}
/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
