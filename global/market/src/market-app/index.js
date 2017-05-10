import React from 'react'

export class InitialPage extends React.Component {
  render() {
    return (
      <div>
        INITIAL PAGE
       {this.props.children}
      </div>
    )
  }
}