import React from 'react'
import { hot } from 'react-hot-loader'

class Main extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        const props = this.props
        return <div>Test</div>
    }
}

export default ()=><Main />