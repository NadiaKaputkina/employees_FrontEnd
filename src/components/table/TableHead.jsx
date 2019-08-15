import React from 'react';
import PropTypes from 'prop-types';

const TableHead = ({columnHeaders}) => {
  //  console.log('TableHead - render', columnHeaders);

    let headlines = [];

    for (let key in columnHeaders) {
        headlines.push(
            <th key={key}>{columnHeaders[key]}</th>
        )
    }

    return (
        <tr>
            { headlines }
        </tr>
    );
};

TableHead.propTypes = {
    columnHeaders: PropTypes.objectOf(PropTypes.string)
};

TableHead.defaultProps = {
    columnHeaders: {}
};

export default TableHead;
