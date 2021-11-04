import React from 'react'
import restaurants from '../sample-restaurants'

class Landing extends React.Component {
    state = {
        display: false,
        title: '',
        url: ''
    };

    displayList = () => { // this родителя
        const { display } = this.state;     // const display = this.state.display
        this.setState({ display: !display });  // меняем state.display на противоположное значение
    };

    render() {
        return(
            <React.Fragment>
                <div className={'restaurant_select'}>
                    <div className={'restaurant_select_top'}>
                        <div
                            onClick={this.displayList}
                            className={'restaurant_select_top-header font-effect-outline'}>Выбери ресторан</div>
                        <div className={'arrow_picker'}>
                            <div className={'arrow_picker-up'}></div>
                            <div className={'arrow_picker-down'}></div>
                        </div>
                    </div>

                    <div className={'restaurant_select_bottom'}>
                        <ul>
                            {
                                restaurants.map(restaurant => {
                                    return <li key={restaurant.index}>{restaurant.title}</li>
                                })
                            }
                        </ul>
                    </div>

                    <button>Перейти в ресторан</button>
                </div>
            </React.Fragment>
        );
    }
}

export default Landing