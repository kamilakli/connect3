import React from 'react';
import {WriteComment} from './writeComment';
import {Author} from './commentAuthor';
import {CommentButton} from './commentButton';
import {DisplayComments} from './displayComment';

export class Comments extends React.Component {
    render () {
        return (
            <div className = "allComments">
            <div className = "comments"><h1>Comments</h1>
                <WriteComment />
                <Author />
                <CommentButton text="Add Comment"/>
            </div>
                    <DisplayComments />
                </div>
        );
    }
}
