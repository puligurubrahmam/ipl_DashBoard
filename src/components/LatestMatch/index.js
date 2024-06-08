import './index.css'

const LatestMatch = props => {
  const {latestMatches} = props
  console.log(latestMatches)
  return (
    <div className="latest_matches_container">
      <div>
        <h1>{latestMatches.competing_team}</h1>
        <p>{latestMatches.date}</p>
        <p>{latestMatches.venue}</p>
        <p>{latestMatches.result}</p>
      </div>
      <div>
        <img src={latestMatches.competing_team_logo} alt="logo" />
      </div>
      <div>
        <h1>First Innings</h1>
        <p>{latestMatches.first_innings}</p>
        <h1>Second Innings</h1>
        <p>{latestMatches.second_innings}</p>
        <h1>Man Of The Match</h1>
        <p>{latestMatches.man_of_the_match}</p>
        <h1>Umpires</h1>
        <p>{latestMatches.umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
