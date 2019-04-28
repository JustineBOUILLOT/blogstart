import React, { Component } from 'react'

import './PostComplet.css'

class PostComplet extends Component {

    render () {
        let post = <p>Choisis un article !</p>;

            post = (
                <div className="PostComplet">
                    <h1>Titre</h1>
                    <p>Contenu</p>
                    <div className="Edit">
                        <button className="btn btn-danger my-3">Supprimer</button>
                    </div>
                </div>
    
            );
        
     
        return post;
    }
}

export default PostComplet;