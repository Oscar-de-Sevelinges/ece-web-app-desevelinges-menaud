import { useSession } from "@supabase/auth-helpers-react";
import moment from 'moment';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import supabase from "../pages/api/supabase";

export default function Article({ key, articleID, title, content, autor, created_at, reader }) {
  const createdAt = moment(created_at).format('DD/MM/YYYY');
  const session = useSession();
  let username;
  reader.then(function(result) {
    username = result;
  });
  console.log(reader);

  const updateArticle = async (articleID, title, content) => {}

    return (
      <div>
        <Link href={'/articles/' + articleID} className="inline-block">
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
        {session && (autor === username) && (
          <button
            className="button primary block bg-blue-500 text-white rounded-md px-4 py-2 w-32"
            onClick={() => updateArticle(articleID, title, content)}
          >
            Update
          </button>
        )}
      </div>
    );
}
