import { v4 as uuidv4 } from 'uuid';
// import PropTypes from 'prop-types';

const Contacts = ({ title, contacts }) => {
  return (
    <section>
      {title && <h1>Contacts</h1>}
    
      <ul>
        {contacts.map(contact => (
          <li
            key={uuidv4()}>
            {contact}
          </li>
        )) }
      </ul>
    </section>
  )
}
 
// Contacts.PropTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     }),
//   ),
// }

export default Contacts