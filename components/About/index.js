import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const About = () => (
  <>
    <Header />
    <div className="About-page">
      <div className="About-page-responsive">
        <h1 className="heading">About Route</h1>
        <LogoutButton />
      </div>
    </div>
  </>
)

export default About
