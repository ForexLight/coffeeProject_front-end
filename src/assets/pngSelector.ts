import bakeryImg from './bakery.png'
import coffeeImg from './coffee.png'
import desertImg from './dessert.png'
import drinksImg from './drinks.png'

const pngSelector = (query: string): any => {
  switch (query) {
    case 'bakery':
      return bakeryImg
    case 'coffee':
      return coffeeImg
    case 'dessert':
      return desertImg
    case 'drinks':
      return drinksImg
  }
}
export { pngSelector }
