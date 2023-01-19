import React, { useEffect, useState }  from 'react';
import './App.css';
import axios from 'axios';
import Post from './post';
import BlogSection from './components/Blogsection';

const App: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const selectedTags: string[] = ['history', 'american', 'love', 'crime', 'mystery'];

    useEffect(() => {
        axios.get('https://dummyjson.com/posts').then(response => {
        setPosts(response.data.posts);
        });
    }, []);

      return (
      <div className='main-container'>
          {selectedTags.map( (tag, i) => (
              <BlogSection key={i} tag={tag} posts={posts} />
          ))}
      </div>
  );
};

export default App;