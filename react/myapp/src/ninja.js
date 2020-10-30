import React, {Component} from 'react';

class Nanjas extends Component {
 
     
    render (){
        const {name,age,city} = this.props;
        return (
            <div className="ninja">
                <div>name:{name}</div>
                <div>age:{age}</div>
        <div>city:{city}</div>
            </div>
        )
    }
}

export default Nanjas;