<template>
  <div>
    <h1>About</h1>
    <p>ID: {{ id }}</p>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  }
}
</script>