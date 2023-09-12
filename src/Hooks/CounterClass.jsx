import React, { Component } from 'react'

export default class CounterClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
        }
    }
    increamentcount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div className='py-2 px-4'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded '
                    onMouseOver={this.increamentcount}>Count {this.state.count}</button>
            </div>
        )
    }
}
