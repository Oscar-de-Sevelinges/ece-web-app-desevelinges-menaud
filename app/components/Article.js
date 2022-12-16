import React from 'react';

export default function Article({ article }) {
    return (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
          <p className="text-lg leading-relaxed mb-4">{article.content}</p>
          <div className="flex items-center text-sm font-medium text-gray-600">
            <div className="mr-2">
              Published on {article.created_at}
            </div>
            <div>
              By {article.autor}
            </div>
          </div>
        </div>
    );
}
