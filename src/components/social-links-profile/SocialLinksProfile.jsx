import './SocialLinksProfile.scss'
import avatarImg from '../../assets/avatar-jessica.jpeg'

function SocialLinksProfile() {
  return (
    <div className="social-links-profile">
      <img className="avatar-image" src={avatarImg} alt="image" />
      <p className="name">Jessica Randall</p>
      <p className="city">London, United Kingdom</p>
      <p className="motto">"Front-end developer and avid reader."</p>
      <div className='links'>
        <a className="link" href="https://www.google.com">GitHub</a>
        <a className="link" href="https://www.google.com">Frontend Mentor</a>
        <a className="link" href="https://www.google.com">LinkedIn</a>
        <a className="link" href="https://www.google.com">Twitter</a>
        <a className="link" href="https://www.google.com">Instagram</a>
      </div>
    </div>
  )
}

export default SocialLinksProfile
