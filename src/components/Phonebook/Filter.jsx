import { StyledInput } from './Phonebook.styled';
import propTypes from 'prop-types';

// export const Filter = ({ setFilter }) => {
//   return (
//     <StyledInput
//       onChange={setFilter}
//       name="filter"
//       placeholder="Enter filter value"
//     />
//   );
// };

// Filter.propTypes = {
//   setFilter: propTypes.func.isRequired,
// };

export const Filter = () => {
  return <StyledInput name="filter" placeholder="Enter filter value" />;
};
