import PropTypes from 'prop-types';
import { LiaStarOfLifeSolid } from 'react-icons/lia';
import {
  Statistic,
  Wrapper,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';


export const Statistics = ({ title, stats }) => {
  return (
    <Statistic>
      <Wrapper>
        <Title>{title}</Title>
        <StatList>
          {stats.map(({ id, label, percentage }) => (
            <StatItem $color={id} key={id}>
              <Label>
                <LiaStarOfLifeSolid />
                {label}
              </Label>
              <Percentage>{percentage}%</Percentage>
            </StatItem>
          ))}
        </StatList>
      </Wrapper>
    </Statistic>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
