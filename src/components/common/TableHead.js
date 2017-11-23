import React, { PropTypes } from "react";

const TableHead = ({ title }) => {
  return (
    <thead>
      <tr>
        <th>{title.a}</th>
        <th>{title.b}</th>
        <th>{title.c}</th>
        {"d" in title && <th>{title.d}</th>}
        {"e" in title && <th>{title.e}</th>}
        {"f" in title && <th>{title.f}</th>}
      </tr>
    </thead>
  );
};

TableHead.propTypes = {
  title: PropTypes.object.isRequired
};

export default TableHead;
