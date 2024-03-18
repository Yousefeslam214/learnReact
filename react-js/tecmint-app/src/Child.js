import React, { Component } from 'react';

class Child extends Component {
    render() {
            return (
                <div className='App'> Hallo React from child</div>
            )
    }
}
/*stateless component */
const childFun = (props) => {
    return (
        <div>
            {props.test}
            <hr><br></br></hr>
        </div>
    )
}

export { Child, childFun };

