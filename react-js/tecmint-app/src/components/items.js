import React, {Component} from "react";


class Items extends Component {
    render() {
        // const id = this.props.id;
        // const name = this.props.name;
        // const age = this.props.age;
        /*equal */
        const {id, name, age} = this.props;
        const items = this.props.items;
        const theItems = items.map((item) => {
            return (
                <div>
                    <p>
                    {item.id}
                    {item.name}
                    {item.age}
                    </p>
                </div>
            )
        })
        return (
            <div>
                <div>
                    {theItems}
                    {id}
                    {name}
                    {age}
                </div>
                
            </div>
        );
    }
}
export default Items;
