import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class addPost extends Component {

    state = {
        title: '',
        description: '',
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    savePost = async (e) => {
        e.preventDefault();

        const res = await axios.post('http://127.0.0.1:8000/api/addPost', this.state);
        if(res.data.status === 200)
        {
            console.log(res.data.message);
            this.setState({
                title: '',
                description: '',
            });
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4>Add New Posts
                                    <Link to={'/'} className='btn btn-primary btn-sm float-end'>Back</Link>
                                </h4>
                            </div>
                            <div className='card-body'>

                                <form onSubmit={this.savePost}>

                                    <div className='form-group mb-2'>
                                        <label className='mb-2'>Title</label>
                                        <input type='text' name='title' onChange={this.handleInput} value={this.state.title} className='form-control' />
                                    </div>
                                    <div className='form-group mb-2'>
                                        <label for="paragraph" className='mb-2'>Enter description</label>

                                        <textarea id="paragraph" name="description" onChange={this.handleInput} rows="5" cols="40" value={this.state.description} className='form-control'></textarea>

                                    </div>
                                    <div className='form-group mb-2'>
                                        <button type='submit' className='btn btn-primary btn-sm'>Add Post</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default addPost;