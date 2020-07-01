import React, { Component } from 'react';

export default function Title({namaku,titleku}){
    
        return (
            <div className="row">
                <div className="col-10 mx-auto my-2 text-center text-title">
                    <h1 className="text-capitalize font-weight-">
                        {namaku}<strong className="text-blue">{titleku}</strong>
                    </h1>
                </div>

             
            </div>
        );
    
}

