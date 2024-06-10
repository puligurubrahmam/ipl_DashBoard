import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {iplTeamList: [], isLoading: true}

  componentDidMount = () => {
    this.iplDetailsFunction()
  }

  iplDetailsFunction = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const finalData = data.teams
    const formated = finalData.map(item => ({
      name: item.name,
      id: item.id,
      teamImageUrl: item.team_image_url,
    }))
    console.log(formated)
    this.setState({iplTeamList: formated, isLoading: false})
  }

  render() {
    const {iplTeamList, isLoading} = this.state
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
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="list-container">
            {iplTeamList.map(item => (
              <TeamCard key={item.id} details={item} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default Home
