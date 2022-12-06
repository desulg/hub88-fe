import { FC } from "react";
import './index.css'

interface TableProps {
  data: Array<{ name: string, code: string }>
}

const Table: FC<TableProps> = ({ data }) => {
  return (
    <ul className="table-list">
      {!!data &&
        data.map(
          (country, i) =>
            !!country && (
              <li className="table-list__item" key={i}>
                ({country.code}) {country.name} 
              </li>
            ),
        )}
    </ul>
  );
}

export default Table;