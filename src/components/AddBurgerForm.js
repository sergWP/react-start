import React from 'react'

class AddBurgerForm extends React.Component {

    //ref-ссылки на поля формы
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createBurger = (event) => {
        event.preventDefault();
        //console.log('add burger', this.nameRef.current.value);
        const burger = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value || 0), // если ниче не введено, указываем 0
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value
        }

        //console.log(burger)
        this.props.addBurger(burger);
        // очищаем форму
        event.currentTarget.reset();
    }

    render() {
        return (
            <form className={'burger-edit'} onSubmit={this.createBurger}>
                <input ref={this.nameRef} name={'name'} type={'text'} placeholder={'Name'} autoComplete={'off'} />
                <input ref={this.priceRef} name={'price'} type={'text'} placeholder={'Price'} autoComplete={'off'} />
                <select ref={this.statusRef} name={'status'} className={'status'}>
                    <option value={'avalible'}>Доступно</option>
                    <option value={'unavalible'}>Убрать из меню</option>
                </select>
                <textarea ref={this.descRef} name={'desc'} placeholder={'Desc'} />
                <input ref={this.imageRef} name={'image'} type={'text'} placeholder={'Image'} autoComplete={'off'} />
                <button type={'submit'}>Добавить в меню</button>
            </form>
        )
    }
}

export default AddBurgerForm