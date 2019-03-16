// warning: 'sayHi' is defined but never used
// warning: 'name' is defined but never used
function sayHi(name) {
  // error: 'age' is already declared in the upper scope
  // warning: 'age' is assigned a value but never used
  const age = 10
}

const age = 12

// warning:  'things' is assigned a value but never used
const things = ['cool', 'doubleee!!!']

// warning: 'foo' is defined but never used
function foo(bar = 'baz') {
  return bar
}

const color = '#FF0000'

// warning: 'config' is assigned a value but never used
const config = {
  color,
  data() {
    return {}
  },
}

// warning: 'completedItems' is assigned a value but never used
// error: 'items' is not defined
const completedItems = items.filter(function(item) {
  return item.isCompleted
})
