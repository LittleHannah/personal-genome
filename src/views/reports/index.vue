<script setup lang="ts">

</script>

<template>
<div class="container reports-container">
  <div class="row reports-row">
    <div class="col-lg-2 reports-navbar">
      <div class="p-3 border bg-light">
        <ul class="list-unstyled">
          <li><router-link to="/reports/summary">Summary</router-link></li>
          <li><router-link to="/reports/ancestry">Ancestry</router-link></li>
          <li><router-link to="/reports/diseases">Disease</router-link></li>
          <li><router-link to="/reports/sequencing">Sequencing</router-link></li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <div class="p-3 border bg-light">
        <router-view />
      </div>
    </div>
    <div class="col-lg">
      <div class="p-3 border bg-light">Table of contents</div>
    </div>
  </div>
</div>
<button class="btn btn-primary d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">Toggle offcanvas</button>
<div class="offcanvas-lg offcanvas-end" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasResponsiveLabel">Responsive offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p class="mb-0">This is content within an <code>.offcanvas-lg</code>.</p>
  </div>
</div>
</template>

<style lang="scss" scoped>
@include media-breakpoint-down(lg) { 
 .reports-navbar {
  display: none;
 }
}
.reports-container {
  background-color: var(--main-bg-color);
  min-height: calc(100vh - var(--navbar-height));
}
</style>
