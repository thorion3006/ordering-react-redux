import React, { PropTypes } from "react";

const TableRow = ({ column }) => {
  return (
    <tr>
      <td>{column.a}</td>
      <td>{column.b}</td>
      <td>{column.c}</td>
      {"d" in column && <td>{column.d}</td>}
      {"e" in column && <td>{column.e}</td>}
      {"f" in column && <td>{column.f}</td>}
    </tr>
  );
};

TableRow.propTypes = {
  column: PropTypes.object.isRequired
};

export default TableRow;
