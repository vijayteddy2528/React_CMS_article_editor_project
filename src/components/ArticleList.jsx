import React from 'react';

const ArticleList = ({ articles, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Articles</h2>
      {articles.length === 0 && <p>No articles yet.</p>}
      {articles.map(article => (
        <div key={article.id} className="article-list-item">
          <h3>{article.title}</h3>
          <button className="edit-btn"onClick={() => onEdit(article)}>Edit</button>
          <button className="delete-btn"onClick={() => onDelete(article.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;