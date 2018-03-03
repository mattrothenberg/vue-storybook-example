<template>
  <button class="button-styles" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'my-button',

    methods: {
      onClick () {
        this.$emit('click');
      }
    }
  }
</script>

<story name="Button with better text">
  <my-button>Click Me!</my-button>
</story>

<style>
  .button-styles {
    border: 1px solid #eee;
    border-radius: 3px;
    background-color: #fff;
    cursor: pointer;
    font-size: 15pt;
    padding: 3px 10px;
    margin: 10px;
  }
</style>
