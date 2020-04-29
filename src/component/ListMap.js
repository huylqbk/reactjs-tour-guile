import React from 'react';

const posts = [
    { id: 1, title: 'Hello ', content: 'Welcome to learning React!' },
    { id: 2, title: 'World', content: 'You can code React.' }
];

export default function Blog() {

    const sidebar = (
        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    {post.title}
                </li>
            ))}
        </ul>
    )

    const content = posts.map((post) => (
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    ))

    return (
        <div>
          {sidebar}
          {content}
        </div>
      );
}