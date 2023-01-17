import React from 'react';
import './Blogcard.css';

interface Props {
    title: string;
    body: string;
    tags: string[];
}

const BlogCard: React.FC<Props> = ({ title, body, tags }) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
            <div>
                {tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                ))}
            </div>
        </div>
    );
};

export default BlogCard;
