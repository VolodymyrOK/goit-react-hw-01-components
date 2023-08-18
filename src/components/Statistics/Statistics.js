import {
  Statistic,
  Wrapper,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';
export const Statistics = ({ stats }) => {
  return (
    <Statistic>
      <Wrapper>
        <Title>Upload stats</Title>

        <StatList>
          {stats.map(({ id, label, percentage }) => (
            <StatItem id={id} key={id}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </StatItem>
          ))}
        </StatList>
      </Wrapper>
    </Statistic>
  );
};
