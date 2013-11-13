// var h = new Object() //hamburger

function cooking(done) {
  this.doneness = done
}

var h = {
  doneness: 'medium-rare',
  cook: cooking
}

h.toppings = ['cheese', 'lettuce', 'tomato']
h.condiments = ['special sauce', 'ketchup']
h['bun toastedness'] = true

function toppings(name,amount) {
  this.name = name
  this.amount = amount
}

var m = new Topping('mustard', 'extra')
var p = new Topping('kosher', 'gazillion')
h.toppings = [mustard, pickles]
h.cook('blackened')

console.log(mustard)
h.toppings = mustard

console.log(h)
