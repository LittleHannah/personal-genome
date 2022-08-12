<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import AdmixturePlot from '@/components/AdmixturePlot';
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
      <div class="text-muted content-table">
        <div class="d-grid">
          <button @click="show = !show" class="btn mobile-content-title btn-bd-secondary" style="text-align:left" type="button">On this page</button>
          <div class="laptop-content-title">
            <span>On this page</span>
            <hr style="margin: 0.5rem 0;"/>
          </div>
        </div>
        <Transition>
          <div class="page-table-of-content" v-show="show">
            <ul class="list-unstyled">
              <li v-for="(content,index) in data.contents" v-bind:key="index">
                <a class="link-secondary" :href="'#'+content">{{ content }}</a>
              </li>
            </ul>
          </div>
        </Transition>
      </div> 
    </div>
    <!-- reports contents -->
    <div class="col-md-9">
      <div class="border" style="border-radius:0.3rem;padding: 0;">
        <div class="section-title">
          <h1>Summary</h1>
          <p>Personal genome report summay</p>
        </div>
        <div class="section-content">
          <h2 id="hello">Hello</h2>
          <admixture-plot />
          <h2 id="hi">Hi</h2>
          <h2 id="okay">Okay</h2>
        </div>
        
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section-content {
  padding: 0.5rem 1rem;
}
.section-title {
  border-radius: 0.3rem 0.3rem 0rem 0rem;
  color: #fff;
  padding: 0.7rem 1rem 0.2rem;
  background: #8E2DE2;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, rgba(var(--bd-violet-rgb), 1), rgba(var(--bd-violet-rgb), 0.9));  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, rgba(var(--bd-violet-rgb), 1), rgba(var(--bd-violet-rgb), 0.9)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.link-secondary {
  text-decoration: none;
}
.link-secondary:hover {
    text-decoration: underline;
  }
@include media-breakpoint-down(md) { 
  .content-table {
    padding: 0;
  }
 .mobile-content-title {
  display: block;
  margin: 0 0.1rem 1rem;
 }
 .laptop-content-title {
  display: none;
 }
.page-table-of-content {
  padding: 1.25rem;
  background-color: var(--bs-gray-100);
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  margin: 0 0.1rem 1rem;
}
}
@include media-breakpoint-up(md) { 
  .content-table {
    padding: 0 1rem;
  }
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
.v-enter-active, .v-leave-active {
  transition: opacity 0.2s ease;
}
.v-enter-from, .v-leave-to {
  opacity: 0;
}
</style>
