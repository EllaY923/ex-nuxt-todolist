<template>
  <div>
    <h1>Edit Todo</h1>
    <todo-input-form
      :callback="edit"
      :mode="`edit`"
      :default-text="selectedTodo && selectedTodo.text"
    />
  </div>
</template>

<script>
export default {
  computed: {
    selectedTodo() {
      return this.$state.selectedTodo
    },
  },
  methods: {
    edit(input) {
      this.$store.dispatch('editTodo', this.input)
      // redirect list
      this.$router.push('/')
    },
  },
}
</script>
