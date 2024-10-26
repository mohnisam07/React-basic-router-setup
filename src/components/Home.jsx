
import PropTypes from 'prop-types'

function Home({dynamic}) {
  return (
    <div>
    <h1>This is {dynamic} content</h1>
    </div>
  )
}

Home.propTypes = {
    dynamic: PropTypes.string.isRequired
}

export default Home
