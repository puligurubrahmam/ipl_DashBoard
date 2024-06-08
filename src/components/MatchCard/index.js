import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competing_team_logo, competing_team, result, match_status} =
    matchDetails
  return (
    <li>
      <img src={competing_team_logo} />
      <h1>{competing_team}</h1>
      <p>{result}</p>
      <p>{match_status}</p>
    </li>
  )
}
export default MatchCard
