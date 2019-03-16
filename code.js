function sayHi(name) {
  // error: 'age' is already declared in the upper scope
  const age = 10
}

const age = 12

const things = ['cool', 'doubleee!!!']

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

// error: 'items' is not defined
const completedItems = items.filter(function(item) {
  return item.isCompleted
})
