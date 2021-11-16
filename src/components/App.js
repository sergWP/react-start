import React from 'react'
import Header from "./Header";
import Order from "./Order";
import MenuAdmin from "./MenuAdmin";
import sampleBurgers from "../sample-burgers";
import Burger from './Burger';
import base from "../base";

class App extends React.Component {
    state = {
        burgers: {},
        order: {}
    };

    // метод жизненного цикла
    // https://ru.reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class
    componentDidMount() {
        const { params } = this.props.match;
        this.ref = base.syncState(`${params.restaurantId}/burgers`, {
            context: this,
            state: "burgers"
        })
    }

    componentWillUnmount() {
        base.removeBinding(this.ref)
    }

    loadSampleBurgers = () => {
        //this.state.burgers = sampleBurgers;  // нельзя менять состояние state напрямую
        this.setState({burgers: sampleBurgers});
        //console.log(this.state);
    };

    addBurger = (burger) => {
        //console.log('addBurger', burger);
        // 1. делаем копию state (спред)
        const burgers = {...this.state.burgers};
        // 2. добавить новый бургер в объект burgers
        burgers[`burger${Date.now()}`] = burger;
        // 3. записать обновленный burgers в объект state
        this.setState({burgers: burgers});           // ES6 - this.setState({burgers})
    };

    addToOrder = (key) => {
        // копия стейт
        const order = {...this.state.order};
        // добавить ключ к заказу со значением 1, либо обновить текущее значение
        order[key] = order[key] + 1 || 1;
        // записываем значение ордер в стейт
        this.setState({order: order});              // ES6 - this.setState({order})
    };

    render() {
        return (
            <div className={'burger-paradise'}>
                <div className={'menu'}>
                    <Header title={'Very Hot Burger'} amount={2} />
                    <ul className={'burgers'}>

                        {
                            /*
                            Object.keys()
                            https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

                            Array.prototype.map()
                            https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map
                            */
                        }

                        {Object.keys(this.state.burgers).map(key => {
                            return <Burger
                                key={key}
                                index={key}
                                addToOrder = {this.addToOrder}
                                details={this.state.burgers[key]}
                            />
                        })}

                    </ul>
                </div>
                <Order
                    burgers={this.state.burgers}
                    order={this.state.order}
                />
                <MenuAdmin
                    addBurger={this.addBurger}
                    loadSampleBurgers={this.loadSampleBurgers}
                />
            </div>
        )
    }
}

export default App