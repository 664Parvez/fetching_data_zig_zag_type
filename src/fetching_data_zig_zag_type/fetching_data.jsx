import React, { useState, useEffect } from 'react'

import Data from './data.json'

const FetchingData = () => {


  return (
    <>
        <div className="container">
            <div className="row">
            {
                Data.map ( (items) => {
                    const { id, name, position, description } = items
                        if (id%2 === 0) {
                            return (
                                <>
                                        <div className="col-lg-5">
                                            <h1>{ name }</h1>
                                            <h5>{ position }</h5>
                                        </div>
                                        <div className="col-lg-7">
                                            <p>{ description }</p>
                                        </div>
                                </>
                            )
                        } 
                        else {
                            return (
                                <>
                                        <div className="col-lg-7">
                                            <p>{ description }</p>
                                        </div>
                                        <div className="col-lg-5">
                                            <h1>{ name }</h1>
                                            <h5>{ position }</h5>
                                        </div>
                                </>
                            )
                        }
                } )
            }
            </div>
        </div>
    </>
  )
}

export default FetchingData