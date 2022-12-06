import React, { FC, InputHTMLAttributes } from "react";

interface TableProps {
  data: Array<{ name: string, code: string }>
}

const Table: FC<TableProps> = ({ data }) => {
  return (
    <ul>
      {!!data &&
        data.map(
          (country, i) =>
            !!country && (
              <li key={i}>
                {country.code} ({country.name})
              </li>
            ),
        )}
    </ul>
  );
}

export default Table;