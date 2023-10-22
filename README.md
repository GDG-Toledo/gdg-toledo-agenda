# Toledo Region blog using Next.js, Markdown, and TypeScript

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using Markdown files as the data source.

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## Supporting the Toledo Region tech events

- GDG Toledo
- Toledo Web Professionals
- WordPress Toledo
- And other organized tech events in the Toledo Region

## How to use

Execute [pnpm](https://pnpm.io) to install:

```bash
pnpm install && pnpm dev
```

Your blog should be up and running on [http://localhost:3000](http://localhost:3000)!

### Notes

`gdg-toledo-agenda` uses [Tailwind CSS](https://tailwindcss.com) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3).
