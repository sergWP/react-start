import React from 'react'

class Burger extends React.Component {

    handleClick = () => {
        this.props.addToOrder(this.props.index);
    };

    render() {

        /*
        const image = this.props.details.image,
              name = this.props.details.name;
         */

        // то же самое что и вверху, вариант с деструктурированием
        const { image, name, price, desc, status } = this.props.details;
        const isAvailable = status === 'available';

        return (
            <li className={'menu-burger'}>
                <div className={'image-container'}>
                    <img src={image} alt={name} />
                </div>
                <div className={'burger-details'}>
                    <h3 className={'burger-name'}>
                        {name}
                        <span className={'price'}>{price} ₴</span>
                    </h3>
                    <p>{desc}</p>
                    <button
                        className={'button-order'}
                        disabled={!isAvailable}
                        onClick={this.handleClick}
                    >
                        {isAvailable ? 'Заказать' : 'Временно нет'}
                    </button>
                </div>
            </li>
        )
    }
}

export default Burger