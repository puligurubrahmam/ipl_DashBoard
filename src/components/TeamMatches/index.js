import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {team: {}, isLoading: true}

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
    this.setState({
      team: formatedData,
      isLoading: false,
    })
  }

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    let teamColor = ''
    let recentMatchesList = []
    switch (id) {
      case 'RCB': {
        teamColor = 'RCB'
        break
      }
      case 'KKR': {
        teamColor = 'KKR'
        break
      }
      case 'KXP': {
        teamColor = 'KXP'
        break
      }
      case 'CSK': {
        teamColor = 'CSK'
        break
      }
      case 'RR': {
        teamColor = 'RR'
        break
      }
      case 'MI': {
        teamColor = 'MI'
        break
      }
      case 'SH': {
        teamColor = 'SH'
        break
      }
      case 'DC': {
        teamColor = 'DC'
        break
      }
      default: {
        teamColor = ''
      }
    }
    const {team, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = team
    console.log(latestMatchDetails)
    if (isLoading === false) {
      recentMatchesList = recentMatches.map(eachItem => ({
        umpires: eachItem.umpires,
        result: eachItem.result,
        manOfTheMatch: eachItem.man_of_the_match,
        id: eachItem.id,
        date: eachItem.date,
        venue: eachItem.venue,
        competingTeam: eachItem.competing_team,
        competingTeamLogo: eachItem.competing_team_logo,
        firstInnings: eachItem.first_innings,
        secondInnings: eachItem.second_innings,
        matchStatus: eachItem.match_status,
      }))
    }
    return (
      <div className={`team-container ${teamColor}`}>
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <img src={teamBannerUrl} className="banner" alt="team banner" />
            <p className="para2">Latest Matches</p>
            <LatestMatch latestMatches={latestMatchDetails} />
            <ul className="recentMatchesContainer">
              {recentMatchesList.map(item => (
                <MatchCard key={item.id} details={item} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
