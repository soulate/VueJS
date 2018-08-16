<template>
  <div>
    <p>{{name}}</p>
    <button>버튼</button>
  </div>
</template>

<script lang="ts">
  //import Vue from 'vue'
  //import Component from 'vue-class-component'

  import { Vue, Component, Prop } from 'vue-property-decorator';

  @Component
  export default class TestComponent extends Vue {
    // data
    name: string = 'World'

  }
</script>

<style scoped>
  p {
    color: blue;
  }
</style>
