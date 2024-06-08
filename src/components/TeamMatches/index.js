import './index.css'
import {Component} from 'react'
import LatestMatch from '../LatestMatch'

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
    const formatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({team: formatedData})
  }

  render() {
    const {team} = this.state
    const {teamBannerUrl, latestMatchDetails} = team
    console.log(latestMatchDetails)
    return (
      <div className="team-container">
        <img src={teamBannerUrl} className="banner" alt="logo" />
        <LatestMatch latestMatches={latestMatchDetails} />
      </div>
    )
  }
}
export default TeamMatches
