import React from 'react'

export class InitialPage extends React.Component {
  render() {
    return (
      <div>
       {this.props.children}
      </div>
    )
  }
}