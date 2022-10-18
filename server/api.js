// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { db } from './database.js';
import express from 'express';

export function apiHandler(req, res) {
    res.write('API request received\n\n');
    /*const app = express();
    app.get('/api/articles', function(req, res) {
        res.send('Fetching articles');
    });*/
    if (req.method === 'GET') {
        // list all articles with GET http://localhost:8000/api/articles
        if (req.url === '/api/articles') {
            // print all articles titles
            res.write('Displayin all articles :\n\n\nID\tTitle\t\t\tContent\n\n');
            for (let i = 0; i < db.articles.length; i++) {
                res.write(db.articles[i].id + '\t' + db.articles[i].title + '\t' + db.articles[i].content + '\n');
            }
        }
        else if (req.url === '/api/articles/:articleId') {
            // print the article with the given id
            res.write('Displaying the article with the given id :\n\n\nID\tTitle\t\t\tContent\n\n');
            for (let i = 0; i < db.articles.length; i++) {
                if (db.articles[i].id === req.params.articleId) {
                    res.write('gaga' + db.articles[i].id + '\t' + db.articles[i].title + '\t' + db.articles[i].content + '\n');
                }
            }
        }
    }
    else if (req.method === 'POST') {
        // create a new article with POST http://localhost:8000/api/articles
        if (req.url === '/api/articles') {
            // create a new article with an id, a title and a content
            res.write('Creating a new article (check with GET if it has been added)');
            let id = db.articles.length + 1;
            let title = 'Article ' + id;
            let content = 'Article ' + id + ' content';
            let newArticle = {
                id: id,
                title: title,
                content: content,
            };
            db.articles.push(newArticle);
        }
    }
  }
