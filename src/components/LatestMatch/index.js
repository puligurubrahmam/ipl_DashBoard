import './index.css'

const LatestMatch = props => {
  const {latestMatches} = props
  console.log(latestMatches)
  return (
    <div className="latest_matches_container">
      <div className="forSmall">
        <div>
          <p className="competingTeam">{latestMatches.competing_team}</p>
          <p className="para1">{latestMatches.date}</p>
          <p className="para2">{latestMatches.venue}</p>
          <p className="para2">{latestMatches.result}</p>
        </div>
        <div className="image-container">
          <img
            src={latestMatches.competing_team_logo}
            alt={`latest match ${latestMatches.competing_team}`}
            className="competingTeamLogo"
          />
        </div>
      </div>
      <div>
        <p className="para1">First Innings</p>
        <p className="para2">{latestMatches.first_innings}</p>
        <p className="para1">Second Innings</p>
        <p className="para2">{latestMatches.second_innings}</p>
        <p className="para1">Man Of The Match</p>
        <p className="para2">{latestMatches.man_of_the_match}</p>
        <p className="para1">Umpires</p>
        <p className="para2">{latestMatches.umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
