import PropTypes from 'prop-types'

const List = ({ className, title }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -21 384 384" className={className}>
    <title>{title}</title>
    <path
      fill="currentColor"
      d="M362.67 0H21.33A21.37 21.37 0 000 21.33V64a21.37 21.37 0 0021.33 21.33h341.34A21.37 21.37 0 00384 64V21.33A21.37 21.37 0 00362.67 0zm0 0M362.67 128H21.33A21.37 21.37 0 000 149.33V192a21.37 21.37 0 0021.33 21.33h341.34A21.37 21.37 0 00384 192v-42.67A21.37 21.37 0 00362.67 128zm0 0M362.67 256H21.33A21.37 21.37 0 000 277.33V320a21.37 21.37 0 0021.33 21.33h341.34A21.37 21.37 0 00384 320v-42.67A21.37 21.37 0 00362.67 256zm0 0"
    />
  </svg>
)

List.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string
}

export default List
