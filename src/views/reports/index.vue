<script setup>
  // import { reactive, ref } from 'vue'
  // import { onActivated, onMounted } from 'vue'
  // import { useRoute } from 'vue-router'

  // const show = ref()
  // const route = useRoute()
  // let data = reactive({
  //   contents: []
  // })

  // onMounted(() => {
  //   data.contents = route.meta.contents
  //   console.log(route.meta.contents)
  // })
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
                <span>Getting Started</span>
                <li><router-link active-class="side-nav-active" to="/reports/summary">Summary</router-link></li>
                <span>Ancestry</span>
                <li><router-link active-class="side-nav-active" to="/reports/admixture">Overview</router-link></li>
                <li><router-link active-class="side-nav-active" to="/reports/admixture">Admixture</router-link></li>
                <li><router-link active-class="side-nav-active" to="/reports/mt">MT Chromosome</router-link></li>
                <li><router-link active-class="side-nav-active" to="/reports/y">Y Chromosome</router-link></li>
                <li><router-link active-class="side-nav-active" to="/reports/aims">AIMS</router-link></li>
                <li><router-link active-class="side-nav-active" to="/reports/as">Archaic Seeker</router-link></li>
                <li><router-link active-class="side-nav-active" to="/reports/pca">PCA</router-link></li>
                <span>Disease</span>
                <li><router-link active-class="side-nav-active" to="/reports/admixture">Overview</router-link></li>
                <li><router-link active-class="side-nav-active" to="/reports/snpedia">SNPedia</router-link></li>
                <li><router-link active-class="side-nav-active" to="/reports/prs">PRS</router-link></li>
                <li><router-link active-class="side-nav-active" to="/reports/geneset">Gene Set</router-link></li>
                <span>Sequencing</span>
                <li><router-link active-class="side-nav-active" to="/reports/statistics">Statistics</router-link></li>
                <li><router-link active-class="side-nav-active" to="/reports/hla">HLA</router-link></li>

              </ul>
          </div>
        </div>
      </div>
      <div class="col-lg-10">
        <router-view />
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.side-nav {
  width: 100%;
  > span {
    font-size: 0.875rem;
    font-weight: 650;
    color: rgba(var(--dark-violet-rgb), 1);
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }
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
</style>
