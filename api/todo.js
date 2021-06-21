import axios from 'axios'

const getTodo = async () => {
  try {
    const request = await axios.get('http://localhost:5000/todo')
    return request.data
  } catch (e) {
    console.error(`server error : ${e.error}`)
  }
}

const addTodo = async (todo) => {
  try {
    await axios.post('http://localhost:5000/todo', todo)
  } catch (e) {
    console.error(`server error : ${e.error}`)
  }
}

const updateTodo = async (todo) => {
  try {
    await axios.put(`http://localhost:5000/todo/${todo.id}`, todo)
  } catch (e) {
    console.error(`server error : ${e.error}`)
  }
}

const deleteTodo = async (id) => {
  try {
    const request = await axios.delete(`http://localhost:5000/todo/${id}`)
    return request.data
  } catch (e) {
    console.error(`server error : ${e.error}`)
  }
}

export default {
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo,
}
