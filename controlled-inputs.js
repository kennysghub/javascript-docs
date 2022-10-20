import React, { useState } from "react";

const Create = () => {
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ author, SetAuthor ] = useState('mario');

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        // console.log(blog);
        fetch('http://localhost:8000/blogs', { //endpoint with which the post request sends , json server automaticlaly adds the id as well
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog) //pass in the object we want to turn into a json string
        }).then(() => {
            console.log('new blog added')
        })
    }


    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />

                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}>
                </textarea>
                <label>Blog Author:</label>
                <select value={author}
                    onChange={(e) => SetAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <button>Add Blog</button>
                <p><label type="text">
                </label>
                    <text area>{title}</text>
                </p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    );
};

export default Create;
