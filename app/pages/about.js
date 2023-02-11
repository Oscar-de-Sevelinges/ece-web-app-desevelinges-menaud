import React from "react";

export default function About() {
    return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-4">Hello and welcome to Our Blogging App!</h1>
          <p className="text-xl mb-4">
            Our blogging app is a project developed using Next.js, a framework for building server-rendered React applications, as well as Supabase, a realtime database platform, and Tailwind CSS, a utility-first CSS framework.
          </p>
          <p className="text-xl mb-4">
            Our app allows users to create and publish their own blog posts, as well as browse and read posts from other users. We designed it with a focus on simplicity and ease of use, so that anyone can easily start sharing their thoughts and ideas online.
          </p>
          <p className="text-xl mb-4">Thank you for using Our Blogging App!</p>
        </div>
      );
}
