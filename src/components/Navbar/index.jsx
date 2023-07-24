import { useEffect, useState } from "react"
import axios from 'axios'
import './styles.css'

export default function Navbar() {
  const [avatarUrl, setAvatarUrl] = useState('')
  const [username, setUsername] = useState('')

  const fetchAvatar = async () => {
    const profile = 'ricardoddev'
    try {
      const response = await axios.get(`https://api.github.com/users/${profile}`);
      setAvatarUrl(response.data.avatar_url);
      setUsername(response.data.login)
    } catch (error) {
      console.error(error);
      setAvatarUrl('');
    }
  };

  useEffect(() => {
    fetchAvatar()
  }, [])

  return (
    <>
      <nav>
        <div>
          <a id="github-info" href="#">
            {avatarUrl && <img src={avatarUrl} alt="Avatar do Github"/>}
            {username && <p>{username}</p>}
          </a>
        </div>
          
        <div>
          <ul>
            <li><a href="">about me</a></li>
            <li><a href="">techs</a></li>
            <li><a href="">projects</a></li>
          </ul>
        </div>

        
      </nav>
    </>
  )
}