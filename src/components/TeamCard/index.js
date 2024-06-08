import './index.css'
import {Link} from 'react-router-dom'
const TeamCard = props => {
  const {details} = props
  const {id, name, team_image_url} = details
  return (
    <Link to={`/team-matches/${id}/`} className="link">
      <li className="list-item">
        <img src={team_image_url} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
