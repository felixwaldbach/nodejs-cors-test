import React, {Component} from 'react';
import $ from "jquery";
import {testRoute} from "../../../monitoring-ui/src/api/GetMethods";

export default class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            test: 'not tested'
        };
    }

    async executeTestRequest(e) {
        e.preventDefault();
        let response = await testRoute();
        console.log(response);
        this.setState({
            test: response
        })
    }

    render() {
        return (
            <div>
                {this.state.test}
                <button onClick={this.executeTestRequest.bind(this)}>Hit test</button>
            </div>
        )
    }
}
