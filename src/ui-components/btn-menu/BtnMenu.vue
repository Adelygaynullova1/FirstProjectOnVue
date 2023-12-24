<template>
<button>
  <slot name="before"></slot>
  {{text}}
  <slot name="after"></slot>

</button>
</template>

<script>
export default {
  name: "BtnMenu",
  props:['text']
}
</script>

<style scoped>

</style>