<template>
  <div id="app">
    <el-container>
      <el-header>
        <Navbar />
      </el-header>
      <transition name="fade" mode="out-in">
        <router-view v-if="isRouterAlive" class="page" />
      </transition>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/navbar.vue";

export default {
  name: "App",
  provide() {
    return {
      reload: this.reload
    };
  },
  components: {
    Navbar
  },
  data() {
    return {
      isRouterAlive: true
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    }
  }
};
</script>


<style lang="scss">
body {
  margin: 0%;
}

.page {
  max-height: calc(100vh - 60px);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-header,
el-footer {
  border-bottom: solid 1px #e6e6e6;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.1s;
}
.fade-enter,
.fade-leave-active {
  // transform: translateX(10px);
  opacity: 25%;
}
@media (max-width: 600px) {
  .hiddenM {
    display: none !important;
  }
  .hiddenS {
    display: block;
  }
}
@media (min-width: 600px) {
  .hiddenM {
    display: block;
  }
  .hiddenS {
    display: none !important;
  }
}
</style>
