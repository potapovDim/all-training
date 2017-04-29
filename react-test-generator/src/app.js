import React, {Component} from 'react'
import axios from 'axios'

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
    const url = `http://hipsterjesus.com/api?paras=${this.state.paras}&html=${this.state.html}`
    axios.get(url).then(response => {
      this.setState({
        text: response.data.text
      }, () => cosole.log('text inited'))
    })
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