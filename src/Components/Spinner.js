import React, { Component } from 'react'
import load from './Hourglass.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center mb-5 mt-2'>
        <img src={load} alt="Loading" />
      </div>
    )
  }
}
