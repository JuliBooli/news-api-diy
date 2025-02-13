import React from "react";

interface NewsProps {
    data: Array<{
        source: { name: string | null };
        author: string | null;
        title: string | null;
        description: string | null;
        url: string | null;
        urlToImage: string | null;
        publishedAt: string | null;
        content: string | null;
    }>;
}

function News({ data }: NewsProps) {
    if (!data || data.length === 0) {
        return <div>No news available</div>;
    }
    return (
        <div>
            {data.map((article, index) => (
                <div key={index} style={{ display: "block", marginBottom: "20px" }}>
                    <div><strong>Source:</strong> {article.source.name}</div>
                    <div><strong>Author:</strong> {article.author}</div>
                    <div><strong>Title:</strong> {article.title}</div>
                    <div><strong>Description:</strong> {article.description}</div>
                    <div><strong>URL:</strong> <a href={article.url} target="_blank" rel="noopener noreferrer">{article.url}</a></div>
                    <div><strong>URL To Image:</strong> <img src={article.urlToImage} alt={article.title} style={{ width: "100px" }} /></div>
                    <div><strong>Published At:</strong> {article.publishedAt}</div>
                    <div><strong>Content:</strong> {article.content}</div>
                </div>
            ))}
        </div>
    );
}

export default News;