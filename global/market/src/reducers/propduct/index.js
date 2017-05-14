export const addProduct = 'ADD_PRODUCT'
export const removeProduct = 'REMOVE_PRODUCT'
export const buyProduct = 'BUY_PRODUCT'

const initialState = [{
  name: 'TEST GOOD 1',
  price: 10,
  buyer: null,
  article: 1,
  description: 'TEST DESCRIPTION 1'
}, {
  name: 'TEST GOOD 2',
  price: 10,
  buyer: null,
  article: 2,
  description: 'TEST DESCRIPTION 2'
}, {
  name: 'TEST GOOD 3',
  price: 10,
  buyer: null,
  article: 3,
  description: 'TEST DESCRIPTION 3'
}]

export const addNewProductToStore = ({ product }) =>
  ({ type: addProduct, product })
export const removeProductFormStore = ({ article }) => ({ type: removeProduct, article })
export const buyProductFromStore = ({ article, buyer }) => ({
  type: buyProduct, article, buyer
})

export default (state = initialState, action) => {
  switch (action.type) {
    case addProduct:
      return state.push(action.product)
    case removeProduct:
      return state.filter(good => good.article != action.article)
    case buyProduct: {
      return state.map(good => {
        if (good.article === action.article) {
          good.buyer = action.buyer
        }
        return good
      })
    }
    default:
      return state
  }
}