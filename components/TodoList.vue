<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <input
        :value="todo.completed"
        :checked="todo.completed"
        type="checkbox"
        @change="toggleTodo(todo.id)"
      />
      <nuxt-link :to="`/todo/${todo.id}`">
        <span @click="onSetTodo(todo)">{{ todo.text }}</span>
      </nuxt-link>
      <button type="button" @click.prevent="onRemoveTodo(todo.id)">
        delete
      </button>
      <nuxt-link :to="`/todo/edit`">
        <button type="button" @click="onSetTodo(todo)">edit</button>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.state.todos
    },
  },
  created() {
    this.$store.dispatch('fetchTodo')
  },
  methods: {
    onRemoveTodo(id) {
      debugger
      console.log('########### todolist : ', id)
      return this.$store.dispatch('removeTodo', id)
    },
    onSetTodo(value) {
      return this.$store.dispatch('setTodo', value)
    },
  },
}
</script>

<style></style>
