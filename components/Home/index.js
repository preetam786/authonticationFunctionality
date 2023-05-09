import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="homepage">
      <div className="homepage-responsive">
        <h1 className="heading">Home Route</h1>
        <LogoutButton />
      </div>
    </div>
  </>
)

export default Home
