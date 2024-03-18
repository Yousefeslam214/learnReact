import React, {Component} from 'react';

class Items extends Component {
    render() {
        // const id = this.props.id;
        // const name = this.props.name;
        // const age = this.props.age;

        // const {id ,name ,age} = this.props;
        const constItemReturn = this.props.itemsReturn;
        const theItems = constItemReturn.map( (item) => {
            return (
                // <div key={item.id}>
                <div key={Math.random() * 10}>
                    
                    <div>    {item.id}</div>
                    <div>    {item.name}</div>
                    <div>    {item.age}</div>
                    <div>--------</div>
                </div>
            )
        })
        return (
            <div>
                {/* <p>{this.props.id}</p><p>{this.props.name}</p><p>{this.props.age}</p> */}
                {/* <p>{id}</p>
                <p>{name}</p>
                <p>{age}</p> */}
                {theItems}
            </div>
        )
    }
}

export default Items;
