import React from 'react'

const defaultPrice = 72

const PriceContext = React.createContext({ price: defaultPrice })

export class PriceProvider extends React.Component {
  state = { price: defaultPrice }
  render() {
    return (
      <PriceContext.Provider
        value={{
          price: this.state.price,
          setPrice: newPrice => this.setState({ price: newPrice }),
        }}
      >
        {this.props.children}
      </PriceContext.Provider>
    )
  }
}

export default PriceContext
