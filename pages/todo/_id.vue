<template>
  <div>
    <h1>Todo View</h1>
    <span>{{ todo.completed ? '완료' : '미완료' }}</span>
    <p>{{ todo.text }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    todo() {
      return this.$store.state.selectedTodo
    },
  },
}
</script>
