import PropTypes from 'prop-types';
import { List, Span, P, Item } from './Statistics.styled';

export const Statistics = ({ state, totalC, positivePercentage }) => {
  return (
    <List>
      <Item>
        <P>Good:</P>
        <Span>{state.good}</Span>
      </Item>
      <Item>
        <P>Neutral:</P>
        <Span>{state.neutral}</Span>
      </Item>
      <Item>
        <P>Bad:</P>
        <Span>{state.bad}</Span>
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
  state: PropTypes.object.isRequired,
  totalC: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
