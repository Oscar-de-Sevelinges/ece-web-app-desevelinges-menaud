import moment from 'moment';
import Link from 'next/link';
import React from 'react';

export default function Article({ key, articleID, title, content, autor, created_at }) {
  const createdAt = moment(created_at).format('DD/MM/YYYY');
    return (
      <Link href={'/articles/' + articleID} key={key}>
        <div className="max-w-2xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <p className="text-lg leading-relaxed mb-4">{content}</p>
          <div className="flex items-center text-sm font-medium">
            <p className="mr-2">
              Published on {createdAt}
            </p>
            <p>
              by {autor}
            </p>
          </div>
        </div>
      </Link>
    );
}
