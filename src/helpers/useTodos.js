import { ref, computed } from 'vue'

export const newTodo = ref('')

const todos = ref([])

export const pendingTodos = computed(() =>
  todos.value.filter(todo => todo.status === 'pending'),
)

export const completedTodos = computed(() =>
  todos.value.filter(todo => todo.status === 'done'),
)

export const changeStatus = id => {
  todos.value.map(todo => {
    if (todo.id === id) {
      todo.status = todo.status === 'pending' ? 'done' : 'pending'
    }
  })
}

export const addTodo = () => {
  if (newTodo.value.length > 0) {
    todos.value.push({
      id: todos.value.length,
      text: newTodo.value,
      status: 'pending',
    })
    newTodo.value = ''
  }
}
