import React from 'react'
import Header from "./Header";
import Order from "./Order";
import MenuAdmin from "./MenuAdmin";

class App extends React.Component {
    state = {
        burgers: {},
        order: {}
    }

    addBurger = (burger) => {
        //console.log('addBurger', burger);
        // 1. делаем копию state
        const burgers = {...this.state.burgers};
        // 2. добавить новый бургер в объект burgers
        burgers[`burger${Date.now()}`] = burger;
        // 3. записать обновленный burgers в объект state
        this.setState({burgers: burgers});           // ES6 - this.setState({burgers})
    }

    render() {
        return (
            <div className={'burger-paradise'}>
                <div className={'menu'}>
                    <Header title={'Very Hot Burger'} amount={2} />
                </div>
                <Order />
                <MenuAdmin addBurger={this.addBurger} />
            </div>
        )
    }
}

export default App