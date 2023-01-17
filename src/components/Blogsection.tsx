import Post from '../post';
import BlogCard from './Blogcard';
import { useState } from 'react';
import './Blogsection.css'

interface Props {
    tag: string;
    posts: Post[];
}

const BlogSection: React.FC<Props> = ({ tag, posts }) => {

const [isOpen, setIsOpen] = useState(false);

return (
    <section>
        <div className='h2'><h2 onClick={() => setIsOpen(!isOpen)}>{tag}</h2></div>
        <div className={`posts ${isOpen ? 'open' : ''}`}>
            {isOpen &&
                posts.filter(post => post.tags.includes(tag)).map((post, i) => (
                    <div className='card' key={i}>
                    <BlogCard key={post.title} title={post.title} body={post.body} tags={post.tags} />
                    </div>
                ))
            }
        </div>
    </section>
    );
};

export default BlogSection;