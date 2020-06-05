import React, { Component } from 'react'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'


class sell extends Component {
    state = {
        title : 'cool shoeds',
        description: '',
        image: '',
        largeImage: '',
        price: 0,  
    }

    handleChange = (e) => {
        const { name, type, value } = e.target;
        const val = type === 'number' ? parseFloat(value) : value;
        this.setState({ [name] :  val })
    }
    render() {
        return (
            <form>
                <label htmlFor='title'>
                    Title
                    <input type='text' id='title' name='title'
                        placeholder='title' required
                        value={this.state.title}   
                        onChange={this.handleChange} />
                </label>
            </form>
        )
    }
}

export default sell
