import './index.css'
import {Component} from 'react'
import TeamCard from '../TeamCard'
class Home extends Component {
  state = {iplTeamList: []}
  componentDidMount = () => {
    this.iplDetailsFunction()
  }
  iplDetailsFunction = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data.teams)
    this.setState({iplTeamList: data.teams})
  }
  render() {
    const {iplTeamList} = this.state
    return (
      <div className="home-container">
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1 className="ipl-heading">IPL Dashboard</h1>
        </div>
        <ul className="list-container">
          {iplTeamList.map(item => (
            <TeamCard key={item.key} details={item} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Home
