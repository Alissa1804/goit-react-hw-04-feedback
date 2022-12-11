import PropTypes from 'prop-types';
import { CSection, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <CSection>
      <Title>{title}&#x2615;</Title>
      {children}
    </CSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
