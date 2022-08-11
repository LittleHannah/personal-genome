<script>
  
</script>

<template>
  <!-- top nav bar -->
  <nav class="navbar fixed-top navbar-expand-lg bg-light">
    <div class="container-fluid">
      <button class="btn d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">
        Menu
      </button>
      <a class="navbar-brand" href="#">Personal Genome</a>
      <a class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link active-class="active" class="nav-link" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link active-class="active" class="nav-link" to="/reports">Report Demo</router-link>
          </li>
        </ul>
      </div>
    </div>

  </nav>
  <router-view class="app-main" />
</template>

<style lang="scss" scoped>
.app-main {
  padding-top: calc(var(--navbar-height) + 1rem);
  min-height: calc(100vh);
}
@include media-breakpoint-up(lg) { 
 .second-navbar {
    display: none;
 }
}
</style>