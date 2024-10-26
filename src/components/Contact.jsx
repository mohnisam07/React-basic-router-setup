
import PropTypes from 'prop-types'

function Contact({dynamic}) {
  return (
    <div>
        <h1>This is {dynamic} content</h1>
        </div>
  )
}

Contact.propTypes = {
    dynamic: PropTypes.string.isRequired
}

export default Contact
