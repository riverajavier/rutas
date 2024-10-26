<template>
  <div>
    <h1>Home</h1>
    <p>ID: {{ id }}</p>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>