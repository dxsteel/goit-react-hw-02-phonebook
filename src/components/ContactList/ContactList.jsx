import PropTypes from 'prop-types';

const ContactList = ({ filterContacts, deleteContact }) => {
    return (
        <div>
            {filterContacts.map(({ id, number, name }) => {
                return (
                    <li key={id}>
                        {name}: {number}
                        <button onClick={() => deleteContact(id)}>
                            Delete
                        </button>
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