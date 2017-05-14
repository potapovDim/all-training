import React from 'react'

export class InitialPage extends React.Component {
  render() {
    return (
      <div>
        SOME PAGE
       {this.props.children}
      </div>
    )
  }
}