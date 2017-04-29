import React, { Component } from 'react'
import { Output } from './output'
import { Selecter } from './selecter'
import axios from 'axios'

class Main extends Component {
  constructor(props) {
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
  changeHtmlToText = (html) => {
    this.setState({
      html
    })
    this.getSampleText()
  }
  getSampleText = () => {
    const url = `http://hipsterjesus.com/api?paras=${this.state.paras}&html=${this.state.html}`
    axios.get(url).then(response => {
      this.setState({
        text: response.data.text
      }, () => console.log('text inited')).catch((e) => console.error(e.message))
    })
  }
  render() {
    const { text, html } = this.state
    return (
      <div>
        MAIN COMPONENT
        <Selecter handleChange={this.changeHtmlToText}/>
        <Output text={text}/>
      </div>
    )
  }
}

export default Main