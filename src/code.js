const defaultAge = 10

function setAge (age = defaultAge) {
  return age
}

const items = [{ id: 1, isCompleted: true }, { id: 2, isCompleted: false }]

function foo (bar = 'baz') {
  return bar
}

const color = '#FF0000'

const config = {
  color,
  data () {
    return {}
  },
}

const completedItems = items.filter(function (item) {
  return item.isCompleted
})

console.log(setAge(42))
console.log(foo())
console.log(config.color)
console.log(completedItems)

TweenMax.fromTo(
  '.element',
  2,
  {
    x: 0,
  },
  {
    x: 100,
  }
)

TweenMax.staggerTo(
  '.element circle',
  2,
  {
    x: 0,
  },
  0.1
)

var element = document.querySelector('.element circle')
TweenMax.staggerTo(
  element,
  2,
  {
    x: 0,
  },
  -0.1 // reverse
)

TweenMax.to('.star', 3, { x: 300, ease: Power4.easeOut })
TweenMax.to('.circle', 3, { x: 300, delay: 3, ease: Power4.easeOut })
TweenMax.to('.hex', 3, { x: 300, delay: 6, ease: Power4.easeOut })

var tl = new TimelineMax()

tl.to('.star', 3, { x: 300, ease: Power4.easeOut })
tl.to('.circle', 3, { x: 300, ease: Power4.easeOut })
tl.to('.hex', 3, { x: 300, ease: Power4.easeOut })
