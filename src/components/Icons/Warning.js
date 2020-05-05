import PropTypes from 'prop-types'

const Warning = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={className}>
      <path
        fill="currentColor"
        d="M503.84 395.38L308.14 56.42A59.6 59.6 0 00256 26.32a59.6 59.6 0 00-52.14 30.1L8.16 395.38a59.59 59.59 0 000 60.2 59.6 59.6 0 0052.14 30.1h391.4a59.6 59.6 0 0052.14-30.1 59.59 59.59 0 000-60.2zm-25.98 45.2a29.9 29.9 0 01-26.16 15.11H60.3a29.9 29.9 0 01-26.16-15.1 29.9 29.9 0 010-30.21l195.7-338.96A29.9 29.9 0 01256 56.32a29.9 29.9 0 0126.16 15.1l195.7 338.96a29.9 29.9 0 010 30.2z"
      />
      <path
        fill="currentColor"
        d="M241 176.01h30v149.98h-30zM256 355.99c-11.03 0-20 8.97-20 20s8.97 20 20 20 20-8.98 20-20-8.97-20-20-20z"
      />
    </svg>
  )
}

Warning.propTypes = {
  className: PropTypes.string
}

export default Warning
