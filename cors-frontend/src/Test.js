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

    executeTestRequest(e) {
        e.preventDefault();
        let app = this;
        return new Promise((resolve, reject) => {
            $.ajax({
                    url: process.env.REACT_APP_BACKEND_ADDRESS,
                    cache: false,
                    type: "GET",
                    contentType: 'application/json',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer eohfoedsfdsoinfdsonfandsf'
                    },
                    data: {hello: 'world'},
                    success: function (data) {
                        app.setState({
                            test: data
                        })
                    },
                    error: function (xhr, status, err) {
                        reject(err);
                    }
                }
            );
        });
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
