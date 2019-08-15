import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import TableRow from './TableRow';
import TableHead from "./TableHead";
import TableFoot from "./TableFoot";
import TableSize from './TableSize';

import store from "../../store";
import {act_tableSize} from "../../actions/actionsCreator";

class Table extends Component {
    state = {
        activePage: 1,
        from: 0,
        to: this.props.tableSize - 1,
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevState, this.state);

        const tableFoot = document.getElementsByClassName('table-foot')[0];
        const li = tableFoot.getElementsByTagName('li');
        const currentActivePage = this.state.activePage;

        if (currentActivePage !== prevState.activePage) {
            console.log(`currentActivePage !== prevState.activePage`);
            li[prevState.activePage - 1].classList.remove('active-page');
            li[currentActivePage - 1].classList.add('active-page');
        }
    }

    changeTableSize = (e) => {
        console.log('changeTableSize');
        const dataLength = this.props.data.length;
        const tableSize = +e.target.value;

        store.dispatch(act_tableSize(tableSize));

        this.setState({
            activePage: 1,
            from: 0,
            to: (dataLength < tableSize) ? (dataLength - 1) : (tableSize - 1)
        });
    };


    numberOfPages = () => {
        const dataLength = this.props.data.length;
        const {tableSize} = this.props;

        return Math.ceil(dataLength / tableSize);
    };


    changeActivePage = (e) => {
        console.log('changeActivePage');

        const pageNumber = +e.target.innerHTML;

        this.setState({
            activePage: pageNumber
        });

        this.getBorders(pageNumber);
    };


    getBorders = (pageNumber) => {
        console.log('getBorders');

        const dataLength = this.props.data.length;
        const {tableSize} = this.props;

       this.setState( {
            from: (pageNumber - 1) * tableSize,
            to: (pageNumber * tableSize > dataLength) ? (dataLength - 1) : (pageNumber * tableSize - 1)
        })
    };


    previousPage = (e) => {
        console.log('left', this.state.activePage);
        const {activePage} = this.state;
        const currentPage = activePage;

        if (activePage > 1) {
            this.setState({
                activePage: currentPage - 1
            });

            this.getBorders(currentPage - 1);
        }
    };

    nextPage = (e) => {
        console.log('right', this.state.activePage);
        const {activePage} = this.state;
        const currentPage = activePage;
        const numberOfPages = this.numberOfPages();

        if (activePage < numberOfPages) {
            this.setState({
                activePage: currentPage + 1
            });

            this.getBorders(currentPage + 1);
        }
    };

    render() {
        console.log('Table - render', this.props, this.state);

        const {data, columnHeaders, activeTab, tableSize} = this.props;
        const {from, to} = this.state;

        const rows = [];
        for (let i = from; i <= to; i++) {
            rows.push(
                <TableRow key={i} i={i} item={data[i]} activeTab={activeTab} />
            );
        }

        return (
            <table className='table'>

                <thead className='table-head'>
                    <TableHead columnHeaders={columnHeaders}/>
                </thead>

                <tbody className='table-body'>
                    { rows }
                </tbody>

                <tfoot className='table-foot'>
                    <TableFoot previousPage={this.previousPage} nextPage={this.nextPage}>

                        <TableSize tableSize={tableSize}
                                   changeTableSize={this.changeTableSize}
                                   numberOfPages={this.numberOfPages()}
                                   changeActivePage={this.changeActivePage}/>
                        </TableFoot>
                </tfoot>

            </table>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('---mapStateToProps---');
    return {
        tableSize: state.tableSize
    }
};


Table.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    columnHeaders: PropTypes.object,
    activeTab: PropTypes.string,
};

Table.defaultProps = {
    data: [],
    columnHeaders: {},
    activeTab: '',
};

export default connect(mapStateToProps)(Table);