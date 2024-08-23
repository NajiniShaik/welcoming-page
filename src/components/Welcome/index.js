import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onChangeStatus = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state

    return (
      <div className="bg-container">
        <h1 className="title">Welcome</h1>
        <p>Thank you! Happy Learning</p>
        {isSubscribed && (
          <button onClick={this.onChangeStatus}>Subscribed</button>
        )}
        {!isSubscribed && (
          <button onClick={this.onChangeStatus}>Subscribe</button>
        )}
      </div>
    )
  }
}

export default Welcome
