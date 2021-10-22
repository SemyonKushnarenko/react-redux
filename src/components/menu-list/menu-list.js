import React, {Component} from 'react';
import MenuListItem from '../menu-list-item'
import {connect} from 'react-redux'
import {menuLoaded, menuRequested, menuError, onAddToCart} from '../../actions'
import WithRestoService from '../hoc'
import Spinner from '../spinner'
import Error from '../error'

import './menu-list.scss';

class MenuList extends Component {
    componentDidMount() {
        this.props.menuRequested()
        const {RestoService} = this.props
        RestoService.getMenuItems()
        .then(res => {
            this.props.menuLoaded(res)
        })
        .catch(error => {this.props.menuError()})
    }

    render() {

        const {menuItems, loading, error, onAddToCart} = this.props

        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <Error/>
        }

        const items = menuItems.map(menuItem => {
            return <MenuListItem onAddToCart={onAddToCart} menuItem={menuItem} key={menuItem.id} />
        })

        return <View items={items} />
    }
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}

const View = ({items}) => {
    return (
        <ul className="menu__list">
            {items}
        </ul>
    )
}

export default WithRestoService()(connect(mapStateToProps, {menuLoaded, menuRequested, menuError, onAddToCart})(MenuList))