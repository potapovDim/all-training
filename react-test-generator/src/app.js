import React, {Component} from 'react'
import {fetchy} from './service'

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      paras: 4,
      html: true,
      text: ''
    }
  }
  componentWillMount() {
    this.getSampleText() 
  }
  getSampleText = () => {
    
  } 
  render() {
    return(
      <div>
        MAIN COMPONENT
      </div>
    )
  }
}

export default Main