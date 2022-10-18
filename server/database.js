export let db = {
    articles: [
        {
            id: 1,
            title: 'Article 1',
            content: 'Article 1 content',
        },
        {
            id: 2,
            title: 'Article 2',
            content: 'Article 2 content',
        },
        {
            id: 3,
            title: 'Article 3',
            content: 'Article 3 content',
        },
    ],
    comments: [
        {
            id: 1,
            articleId: 1,
            content: 'Comment 1 content',
            author: 'Comment 1 author',
        },
        {
            id: 2,
            articleId: 1,
            content: 'Comment 2 content',
            author: "Comment 2 author",
        },
        {
            id: 3,
            articleId: 2,
            content: 'Comment 3 content',
            author: 'Comment 3 author',
        }
    ]
}
