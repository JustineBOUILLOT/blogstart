import React, { Component } from 'react'

import PostComplet from "./PostComplet/PostComplet"
import NvPost from './NvPost/NvPost'
import './Blog.css'

class Blog extends Component {

    render () {

        return (
            <div>
                <section>
                    <NvPost />
                </section>
                <section>
                    <PostComplet/>
                </section>
                <h2 className="text-center my-5">Tous les Articles ...</h2>
                <section className="Posts">
                </section>

            </div>
        );
    }
}

export default Blog;