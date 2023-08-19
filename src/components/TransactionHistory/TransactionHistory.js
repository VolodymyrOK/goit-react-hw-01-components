import {
  Table,
  Thead,
  ThType,
  TbodyTr,
  TdType,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Thead>
        <tr>
          <ThType>Type</ThType>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Thead>
      <tbody>
        {items.map(({ id, type, amount, currency }, idx) => (
          <TbodyTr idx={idx} key={id}>
            <TdType>{type}</TdType>
            <td>{amount}</td>
            <td>{currency}</td>
          </TbodyTr>
        ))}
      </tbody>
    </Table>
  );
};
