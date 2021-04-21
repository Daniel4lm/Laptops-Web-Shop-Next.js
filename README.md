# This is a Web Shop App made by [Next.js](https://nextjs.org/) react framework, bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

  -> Screenshots:
    
    ![image](https://user-images.githubusercontent.com/1280747/115615384-2e251e00-a2ef-11eb-9f69-4965c5a00e1a.png)
    ------------------------------------------------------------------------------------------------------------------------------
    ![image](https://user-images.githubusercontent.com/1280747/115615487-51e86400-a2ef-11eb-8994-c0caab39427f.png)
    ------------------------------------------------------------------------------------------------------------------------------
    ![image](https://user-images.githubusercontent.com/1280747/115615546-64fb3400-a2ef-11eb-878a-160ee7f28687.png)
    ------------------------------------------------------------------------------------------------------------------------------
    ![image](https://user-images.githubusercontent.com/1280747/115615647-852af300-a2ef-11eb-916b-96db8a0b5152.png)

  In this project, I have built an e-commerce website and learned how to use **getStaticProps** and **getStaticPaths** in Next.js to statically generate the whole website. 

## How to test app

First, clone the project files to your local host. Install SQlite and setup installation on your computer. Once you're done this, be sure that you have the latest Node.js version 

  ``` node -v ```

Open your favorite code editor, like Visual Studio Code or Sublime, open the project workspace and run the development server:

  ```bash
  npm run dev
  # or
  yarn dev
  ```

Then, open [http://localhost:3000](http://localhost:3000) with your browser and navigate to my shop.

The wholeproject structure is as follows:
```
  [+] laptops
   |
   | - .next
   | - [*] components
   |    |
   |    | - [*] footer
   |    |    | - Footer.tsx
   |    |
   |    | - [*] navigation
   |    |    | - NavBar.tsx
   |    |  
   |    | - [*] paginator
   |    |    | - MyPaginator.tsx
   ...
   | - [*] lib
   |    | - openDB.ts
   |    
   | - [*] migrations
   |    | - 001_initial_shema.sql
   ...
   | - [*] model
   |    | - Laptops.tsx
   ...
   | - [*] pages
   |    | - [*] laptops
   |    |    | - [curPage].tsx
   |    |    | - index.tsx
   |    |
   |    | - [*] laptop
   |    |    | - [id].tsx
   |    | 
   |    | - _app.tsx <- tweaked for material-ui
   |    | - _document.js <- tweaked for material-ui
   |    | - index.tsx 
   |    | - theme.js <- theme configuration for material-ui
   ...
   | - [*] public
   |    | - [*] laptops
   |         | <- here are our items pictures
   ...
   | - [*] styles
   |    | <- styles for whole app
   ```

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
