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

    getTitle = (restaurant) => {
        const { title, url } = restaurant;
        this.setState({ title: title, url: url, display: false });  // ES6 this.setState({ title, url, display: false });
    };

    goToRestaurant = () => {
        const {url} = this.state; // rest url
        console.log(url);
        this.props.history.push(`/restaurant/${url}`);
    };

    render() {
        return(
            <React.Fragment>
                <div className={'restaurant_select'}>
                    <div className={'restaurant_select_top'}>
                        <div
                            onClick={this.displayList}
                            className={'restaurant_select_top-header font-effect-outline'}>
                            { this.state.title ? this.state.title : 'Выбери ресторан' }
                        </div>
                        <div className={'arrow_picker'}>
                            <div className={'arrow_picker-up'}></div>
                            <div className={'arrow_picker-down'}></div>
                        </div>
                    </div>

                    {/* отображаем список если state.display == true*/}
                    {this.state.display ? <div className={'restaurant_select_bottom'}>
                        <ul>
                            {
                                restaurants.map(restaurant => {
                                    return <li
                                        onClick={ () => this.getTitle(restaurant) }
                                        key={restaurant.id}
                                    >{restaurant.title}</li>
                                })
                            }
                        </ul>
                    </div> : null}

                    {
                        this.state.title && !this.state.display ?
                        (<button onClick={this.goToRestaurant}>Перейти в ресторан</button>)
                        : null
                    }

                </div>
            </React.Fragment>
        );
    }
}

export default Landing