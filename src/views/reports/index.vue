<script setup>
  import { reactive, ref } from 'vue'
  import { useRouter , useRoute } from 'vue-router'

  const show = ref()
</script>

<template>
  <div class="container-fluid reports-container">
    <div class="row reports-row">
      <!-- responsive navbar -->
      <div class="col-lg-2">
        <div class="offcanvas-lg offcanvas-start" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasResponsiveLabel">Contents of Report</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
              <ul class="list-unstyled side-nav">
                <span>Summary</span>
                <li><router-link active-class="side-nav-active" to="/reports/summary">Summary</router-link></li>
                <span>Ancestry</span>
                <li><router-link active-class="side-nav-active" to="/reports/ancestry/admixture">Admixture</router-link></li>
                <li><router-link active-class="side-nav-active" to="/reports/ancestry/mt">MT Chromosome</router-link></li>
                <li><router-link active-class="side-nav-active" to="/reports/ancestry/y">Y Chromosome</router-link></li>
                <li><router-link active-class="side-nav-active" to="/reports/ancestry/aims">AIMS</router-link></li>
                <li><router-link active-class="side-nav-active" to="/reports/ancestry/as">Archaic Seeker</router-link></li>
                <li><router-link active-class="side-nav-active" to="/reports/ancestry/pca">PCA</router-link></li>
                <span>Disease</span>
                <li><router-link active-class="side-nav-active" to="/reports/diseases/snpedia">SNPedia</router-link></li>
                <li><router-link active-class="side-nav-active" to="/reports/diseases/prs">PRS</router-link></li>
                <li><router-link active-class="side-nav-active" to="/reports/diseases/geneset">Gene Set</router-link></li>
                <span>Sequencing</span>
                <li><router-link active-class="side-nav-active" to="/reports/sequencing/statistics">Statistics</router-link></li>
                <li><router-link active-class="side-nav-active" to="/reports/sequencing/hla">HLA</router-link></li>

              </ul>
          </div>
        </div>
      </div>
      <div class="col-lg-10">
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
                  balabala
                </div>
              </Transition>
            </div> 
          </div>
          <!-- reports contents -->
          <div class="col-md-9">
            <div>
              <router-view />
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.side-nav {
  width: 100%;
  > li {
    width: 100%;
    margin: 0.275rem 0;
    > a {
    text-decoration: none;
    display: inline-block;
    padding: 0.1875rem 0.5rem;
    margin-top: 0.125rem;
    margin-left: 1rem;
    border-radius: 5px;
    color: grey;

   }
   > a:hover {
    background-color: rgba(var(--bd-violet-rgb), 0.1);
   }
  }
}
.side-nav-active {
  background-color: rgba(var(--bd-violet-rgb), 0.1);
  font-weight: 560;
  color: rgba(0,0,0,0.85) !important;
}
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
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>
