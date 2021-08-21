import React from 'react'
import { Component } from "react";

class Form extends Component{
    state = {
     name: '',
      number:''
    }
  handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
 

 onSubmit = (e) => {
    e.preventDefault()
     this.props.propOnSubmit(this.state)
    this.reset()
    }
    reset = () => {
        this.setState( {
     name: '',
      number:''
    }) 
    }

    render() {
        const{name, number}= this.state
        return  (  <form onSubmit={this.onSubmit}>
        <label> Name
    <input
  type="text"
      name="name"
      onChange={this.handleChange}
      value={name}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name"
  required
          /></label>
             <label> Number
    <input
  type="text"
      name="number"
      onChange={this.handleChange}
      value={number}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Name"
  required
        /></label>

        <button type="submit">Add contact</button>
      </form>)
    }
}
export default Form