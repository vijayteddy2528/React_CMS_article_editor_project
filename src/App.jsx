
import React, { useState, useEffect } from "react";
import ArticleForm from "./components/ArticleForm";
import ArticleList from "./components/ArticleList";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [editingArticle, setEditingArticle] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("articles")) || [];
    setArticles(saved);
  }, []);

  const saveArticles = (newArticles) => {
    localStorage.setItem("articles", JSON.stringify(newArticles));
    setArticles(newArticles);
  };

  const handleSave = (article) => {
    let newArticles;
    if (articles.find((a) => a.id === article.id)) {
      newArticles = articles.map((a) => (a.id === article.id ? article : a));
    } else {
      newArticles = [article, ...articles];
    }
    saveArticles(newArticles);
    setEditingArticle(null);
  };

  const handleEdit = (article) => {
    setEditingArticle(article);
  };

  const handleDelete = (id) => {
    const newArticles = articles.filter((a) => a.id !== id);
    saveArticles(newArticles);
  };

  return (
    <div className="container">
      <h1>Basic CMS Article Editor</h1>
      <ArticleForm onSave={handleSave} currentArticle={editingArticle} />
      <ArticleList
        articles={articles}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;
