import React from 'react';
import PropTypes from "prop-types";

const TableSize = ({tableSize, changeTableSize, numberOfPages, changeActivePage}) => {
    let arrayNumberOfPages = [];

    if (numberOfPages !== 1) {
        for (let i = 1; i <= numberOfPages; i++) {
            arrayNumberOfPages.push(
                <li key={i} onClick={changeActivePage}>{i}</li>
            )
        }
    }

    return (
        <>
            <select defaultValue={tableSize} onChange={changeTableSize}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
                <option value={50}>50</option>
            </select>

            <ul>{arrayNumberOfPages}</ul>
        </>
    )
};

TableSize.propTypes = {
    tableSize: PropTypes.number,
    changeTableSize: PropTypes.func,
    numberOfPages: PropTypes.number,
    changeActivePage: PropTypes.func,
};

TableSize.defaultProps = {
    tableSize: 15,
    changeTableSize: () => {},
    numberOfPages: 1,
    changeActivePage: () => {},
};

export default TableSize;