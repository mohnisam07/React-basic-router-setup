
import PropTypes from 'prop-types'

function About({dynamic}) {
  return (
    <div>
        <h1>This is {dynamic} content</h1>
    </div>
  )
}

About.propTypes = {
    dynamic: PropTypes.string.isRequired
}

export default About
