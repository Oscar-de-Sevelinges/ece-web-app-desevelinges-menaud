import { useSession } from "@supabase/auth-helpers-react";
import moment from 'moment';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import supabase from "../pages/api/supabase";
import Edit from "../pages/articles/edit";

export default function Article({ key, articleID, title, content, autorID, autor, created_at }) {
  const createdAt = moment(created_at).format('DD/MM/YYYY');
  const session = useSession();

  const handleDelete = async () => {
    const { data, error } = await supabase.from('articles').delete().eq('id', articleID);
    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
    }
    window.location.reload();
  }

  console.log(session.user.id);
  console.log(autorID);

    return (
      <div className="pb-8">
        <Link href={'/articles/' + articleID} className="inline-block rounded-t-l rounded-b-r shadow-md">
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
        {session.user.id === autorID && (
          <button
            className="button primary block bg-blue-500 text-white rounded-md px-4 py-2 w-32"
            type="submit"
            onClick={handleDelete}
          >
            Delete article
          </button>
        )}
      </div>
    );
}

/*{session.user.id === autor && (
  <Link href={'/articles/' + articleID + '/edit'}>
    <button
      className="button primary block bg-blue-500 text-white rounded-md px-4 py-2 w-32"
      type="submit"
    >
      Edit article
    </button>
  </Link>
)}*/
