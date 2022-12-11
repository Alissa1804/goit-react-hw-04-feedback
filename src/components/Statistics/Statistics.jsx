import PropTypes from 'prop-types';
import { List, Span, P, Item } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  totalC,
  positivePercentage,
}) => {
  return (
    <List>
      <Item>
        <P>Good:</P>
        <Span>{good}</Span>
      </Item>
      <Item>
        <P>Neutral:</P>
        <Span>{neutral}</Span>
      </Item>
      <Item>
        <P>Bad:</P>
        <Span>{bad}</Span>
      </Item>
      <Item>
        <P>Total:</P>
        <Span>{totalC()}</Span>
      </Item>
      <Item>
        <P>Positive Feedback:</P>
        <Span>{positivePercentage()}%</Span>
      </Item>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalC: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
