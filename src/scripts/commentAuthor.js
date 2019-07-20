import React from 'react';

export class Author extends React.Component {
    render () {
        return (
        <div className ="text">
            <textarea id="writeComment" className ="textArea" rows="4" cols="50" placeholder="Your comment"></textarea>
        </div>
        );
    }
}