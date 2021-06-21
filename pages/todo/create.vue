<template>
  <div>
    <h1>Create Todo</h1>
    <div>
      <input v-model="input" type="text" @keyup="keyupInput" />
      <button type="button" @click="updateTodo">
        {{ mode === 'add' ? 'ADD' : 'EDIT' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    updateTodo() {
      if (this.input.trim() !== '') {
        this.$store.dispatch('createTodo', this.input)
        this.input = ''
        this.$store.dispatch('fetchTodo')
      }
    },
    keyupInput(event) {
      if (event.key === 'Enter') {
        this.updateTodo(this.input)
      }
    },
  },
}
</script>
