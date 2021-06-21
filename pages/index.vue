<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">create-nuxt-app</h1>
      <todo-list />
      <h2 class="subtitle">Create</h2>
      <div>
        <input v-model="input" type="text" @keyup="keyupInput" />
        <button type="button" @click="updateTodo">
          {{ mode === 'add' ? 'ADD' : 'EDIT' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from '~/components/TodoList.vue'

export default {
  components: {
    TodoList,
  },
  data() {
    return {
      input: '',
      mode: 'add',
    }
  },
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

<style>
.container {
  margin: 0 auto;
  padding: 40px 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  margin-top: 32px;
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
