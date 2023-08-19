import {
  Statistic,
  Wrapper,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';

import { LiaStarOfLifeSolid } from 'react-icons/lia';

export const Statistics = ({ stats }) => {
  return (
    <Statistic>
      <Wrapper>
        <Title>Upload stats</Title>
        <StatList>
          {stats.map(({ id, label, percentage }) => (
            <StatItem id={id} key={id}>
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
