import { useEffect, useState } from "react"
import { Link as ScrollLink } from "react-scroll"
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
          <ScrollLink id="github-info" to="home" smooth={true}>
            {avatarUrl && <img src={avatarUrl} alt="Avatar do Github"/>}
            {username && <p>{username}</p>}
          </ScrollLink>
        </div>
          
        <div>
          <ul>
            <li>
              <ScrollLink to="aboutme" smooth={true}>
                about me
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="techs" smooth={true}>
                techs
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="projects" smooth={true}>
                projects
              </ScrollLink>
            </li>
          </ul>
        </div>  
      </nav>
    </>
  )
}