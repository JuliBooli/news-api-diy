import React, { useState, useEffect } from "react";

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

const News: React.FC<NewsProps> = ({ data = [] }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 10;
    const [totalPages, setTotalPages] = useState(0);
    console.log(data);

    useEffect(() => {
        if (data.length !== 0) {
            setTotalPages(Math.ceil(data.length / articlesPerPage));
        }
    }, [data]);

    const handleClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const startIndex = (currentPage - 1) * articlesPerPage;
    const selectedArticles = data.slice(startIndex, startIndex + articlesPerPage);

    return (
        <div>
            {selectedArticles.map((article, index) => (
                <div key={index} id="article">
                    {article.urlToImage && <img id="articleImage" src={article.urlToImage} alt={article.title || "Article Image"} />}
                    <div>
                        <div id="articleInfo">
                            <div><strong>Source:</strong> {article.source.name}</div>
                            <div><strong>Author:</strong> {article.author}</div>
                            <div><strong>Title:</strong> {article.title}</div>
                        </div>
                        <div id="articleContent">
                            <div><strong>Description:</strong> {article.description}</div>
                            <div><strong>URL:</strong> <a href={article.url || "#"} target="_blank" rel="noopener noreferrer">{article.url}</a></div>
                            <div><strong>Published At:</strong> {article.publishedAt}</div>
                            <div><strong>Content:</strong> {article.content}</div>
                        </div>
                    </div>
                </div>
            ))}
            <div id="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handleClick(index + 1)}
                        disabled={currentPage === index + 1}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default News;