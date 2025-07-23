import React, { useState, useEffect } from "react";
import MarkdownPreview from "./MarkdownPreview";

const ArticleForm = ({ onSave, currentArticle }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (currentArticle) {
      setTitle(currentArticle.title);
      setBody(currentArticle.body);
    }
  }, [currentArticle]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: currentArticle?.id || Date.now(), title, body });
    setTitle("");
    setBody("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"placeholder="Article Title"value={title}onChange={(e) => setTitle(e.target.value)}required/>
        <textarea placeholder="Write markdown here..."rows={6}value={body}onChange={(e) => setBody(e.target.value)}required></textarea>
        <button type="submit">
          {currentArticle ? "Update" : "Create"} Article
        </button>
      </form>
      <h3>Live Preview:</h3>
      <MarkdownPreview markdown={body} />
    </div>
  );
};

export default ArticleForm;
