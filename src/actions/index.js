const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
}

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'
    }
}

const menuError = () => {
    return {
        type: 'MENU_ERROR'
    }
}

const onAddToCart = (id) => {
    return {
        type: 'ADDED',
        payload: id
    }
}

const onDeleteFromCart = (id) => {
    return {
        type: 'REMOVED',
        payload: id
    }
}

export {
    menuLoaded,
    menuRequested,
    menuError,
    onAddToCart,
    onDeleteFromCart
}