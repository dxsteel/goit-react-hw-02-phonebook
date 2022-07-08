import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ filterContacts, deleteContact }) => {
  return (
    <div className={styles.item}>
      {filterContacts.map(({ id, number, name }) => {
        return (
          <li key={id}>
            {name}: {number}
            <div className={styles.position}>
            <button className={styles.button} onClick={() => deleteContact(id)}>
              Delete
              </button>
              </div>
          </li>
        );
      })}
    </div>
  );
};

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  filterContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
