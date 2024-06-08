import './index.css'
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
class TeamMatches extends Component {
  state = {team: {}}
  componentDidMount() {
    this.teamMatches()
  }
  teamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    this.setState({team: data})
  }
  render() {
    const {team} = this.state
    const {team_banner_url, latest_match_details, recent_matches} = team
    console.log(latest_match_details)
    return (
      <div className="team-container">
        <img src={team_banner_url} className="banner" />
        <LatestMatch latestMatches={latest_match_details}  />
      </div>
    )
  }
}
export default TeamMatches
