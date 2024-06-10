import './index.css'

const MatchCard = props => {
  const {details} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = details
  let name = null
  if (matchStatus === 'Won') {
    name = 'won'
  } else {
    name = 'lost'
  }
  return (
    <li className="matchCard">
      <img
        src={competingTeamLogo}
        className="matchCardLogo"
        alt={`competing team ${competingTeam}`}
      />
      <p className="para1-matchcard">{competingTeam}</p>
      <p className="para2-matchcard">{result}</p>
      <p className={`para2 ${name}`}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
