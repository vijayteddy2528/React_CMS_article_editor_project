import  {marked}  from 'marked';

const MarkdownPreview = ({ markdown }) => {
  return (
    <div
      className="markdown-preview"
      dangerouslySetInnerHTML={{ __html: marked(markdown || '') }}
    ></div>
  );
};

export default MarkdownPreview;