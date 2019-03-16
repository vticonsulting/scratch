const defaultAge = 10

function setAge(age = defaultAge) {
  return age
}

const items = [{ id: 1, isCompleted: true }, { id: 2, isCompleted: false }]

function foo(bar = 'baz') {
  return bar
}

const color = '#FF0000'

const config = {
  color,
  data() {
    return {}
  },
}

const completedItems = items.filter(function(item) {
  return item.isCompleted
})

console.log(setAge(42))
console.log(foo())
console.log(config.color)
console.log(completedItems)
