import Button from "../button/Button";
import PropTypes from 'prop-types'

const ContactList = ({ filtred, onButtonDeleteClick }) => {
    return (
        
        <ul>
          {filtred.map(({ name, number, id }) => {
            return (
              <li key={id}>
                <p>{name}:</p>
                <p>{number}</p>
                <Button
                  text="Delete"
                  onClick={() => {
                    onButtonDeleteClick(id);
                  }}
                />
              </li>
            );
          })}
        </ul>
    )
}

ContactList.propTypes = {
  filtred: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    number: PropTypes.string,
  })),
  onButtonDeleteClick: PropTypes.func
}


export default ContactList