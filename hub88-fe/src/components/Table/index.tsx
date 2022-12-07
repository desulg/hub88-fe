import { FC } from "react";
import './index.css'

interface TableProps {
  data: Array<{ name: string, code: string }>
}

const Table: FC<TableProps> = ({ data }) => {
  return (
    <table className="table-list">
      <thead>
        <tr className="table-list__header">
          <th>Code</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {!!data &&
          data.map(
            (country, i) =>
              !!country && (
                <tr key={i}>
                  <td>{country.code}</td>
                  <td>{country.name}</td>
                </tr>
              ),
          )}
      </tbody>
    </table >
  );
}

export default Table;