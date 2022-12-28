export default function Home() {
  return (
    <div className="mx-auto text-center">
      <h1 className="font-bold pb-4 text-2xl">Welcome to our website</h1>
      <ul className="text-lg">
        <li className="pb-2">Built a Next.js app that allows users to browse articles and read their content</li>
        <li className="pb-2">Implemented a login and registration system for users to create an account and log in to the app</li>
        <li className="pb-2">Enabled users to post articles and comments on the platform, and added the ability for them to delete their own posts</li>
        <li className="pb-2">Added a settings page for users to update their username and full name, as well as other profile information</li>
        <li className="pb-2">Utilized server-side rendering with Next.js to improve the performance</li>
      </ul>
      <p className="pt-10">Overall, this Next.js app provides a platform for users to engage with articles, share their own content, and customize their experience on the platform.</p>
    </div>
  )
}
