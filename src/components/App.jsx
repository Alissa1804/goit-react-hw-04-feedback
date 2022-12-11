import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from '../components/Notification/Notification';
import { Title, Container } from '../components/Statistics/Statistics.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = type => {
    this.setState({
      [type]: this.state[type] + 1,
    });
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (!(this.state.good * 100) / total) {
      return 0;
    }
    return Math.floor((this.state.good * 100) / total);
  };

  render() {
    return (
      <Section title="Please leave your feedback!">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.onLeaveFeedback}
        ></FeedbackOptions>
        <Container>
          <Title>Statistics</Title>
          {this.countTotalFeedback() >= 1 ? (
            <Statistics
              totalC={this.countTotalFeedback}
              state={this.state}
              positivePercentage={this.countPositiveFeedbackPercentage}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Container>
      </Section>
    );
  }
}

export default App;
