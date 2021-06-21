import TodoApi from '~/api/todo.js'

export const state = () => ({
  todos: [],
  visibility: 'all',
  selectedTodo: null,
})

export const mutations = {
  FETCH_TODO(state, todos) {
    state.todos = todos
  },
  SET_EDIT_TODO(state, todo) {
    state.selectedTodo = todo
  },
}

export const actions = {
  async fetchTodo({ commit }) {
    const todos = await TodoApi.getTodo()
    commit('FETCH_TODO', todos)
  },
  async createTodo({ commit }, text) {
    await TodoApi.addTodo({
      id: `todo-${Date.now()}`,
      text,
      completed: false,
    })
  },
  async removeTodo({ commit }, id) {
    await TodoApi.deleteTodo(id)
    const todos = await TodoApi.getTodo()
    commit('FETCH_TODO', todos)
  },
  async editTodo({ commit, state }, text) {
    await TodoApi.updateTodo({
      ...state.selectedTodo,
      text,
    })
    commit('SET_EDIT_TODO', null)
  },
  setTodo({ commit }, todo) {
    commit('SET_EDIT_TODO', todo)
  },
}
