import { StyledList, StyledEl } from './Phonebook.styled';
import propTypes from 'prop-types';

// export const ContactList = ({ filterData, onDelete }) => {
//   const filteredData = filterData;
//   return (
//     <StyledList>
//       {filteredData.map(contact => (
//         <StyledEl key={contact.id}>
//           {contact.name}:{contact.number}
//           <button onClick={() => onDelete(contact.id)} style={inlineStyle}>
//             Delete
//           </button>
//         </StyledEl>
//       ))}
//     </StyledList>
//   );
// };

// ContactList.propTypes = {
//   filterData: propTypes.array.isRequired,
//   onDelete: propTypes.func.isRequired,
// };

export const ContactList = () => {
  // const inlineStyle = { marginLeft: '15px', cursor: 'pointer' };

  return (
    <StyledList>
      {/* {filteredData.map(contact => (
        <StyledEl key={contact.id}>
          {contact.name}:{contact.number}
          <button style={inlineStyle}>Delete</button>
        </StyledEl>
      ))} */}
    </StyledList>
  );
};
