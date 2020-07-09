import React, { Component } from 'react';

class Default extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-uppercase pt-5">
                        <h1 className="display-3">404</h1>
                        <h1>Page no Found</h1>
                        <h3>
                            the requested URL
                            <span className="">{this.props.location.pathname}</span> {" "}
                            Was not found
                        </h3>
                    </div>
                </div>
               
            </div>
        );
    }
}

export default Default;