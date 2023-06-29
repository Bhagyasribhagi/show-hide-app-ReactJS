// Write your code here

import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  clickfirstname = () => {
    const {firstName} = this.state
    this.setState({firstName: !firstName})
  }

  clicklastname = () => {
    const {lastName} = this.state
    this.setState({lastName: !lastName})
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div>
          <button type="button" className="btn" onClick={this.clickfirstname}>
            Show/Hide FirstName
          </button>
          {firstName && (
            <div className="name">
              <p>Joe</p>
            </div>
          )}
          <button type="button" className="btn" onClick={this.clicklastname}>
            Show/Hide LastName
          </button>
          {lastName && (
            <div className="name">
              <p>Jonas</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default ShowHide
