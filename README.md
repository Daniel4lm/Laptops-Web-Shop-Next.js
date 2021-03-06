## This is a Web Shop App made by [Next.js](https://nextjs.org/) react framework, bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

  :camera: Screenshots:
    
  ![image](https://user-images.githubusercontent.com/1280747/115972906-8a877800-a551-11eb-8d2f-5f556a6f9793.png)
   ------------------------------------------------------------------------------------------------------------------------------
  ![image](https://user-images.githubusercontent.com/1280747/115972916-9f640b80-a551-11eb-94db-2996a72b039e.png)
   ------------------------------------------------------------------------------------------------------------------------------
  ![image](https://user-images.githubusercontent.com/1280747/115972924-ab4fcd80-a551-11eb-8f2d-6f58c1749344.png)
   ------------------------------------------------------------------------------------------------------------------------------
  ![image](https://user-images.githubusercontent.com/1280747/115972940-c91d3280-a551-11eb-8ece-2790cb9fcae6.png)
   ------------------------------------------------------------------------------------------------------------------------------
  ![image](https://user-images.githubusercontent.com/1280747/115972961-f10c9600-a551-11eb-89c0-61f9456147e8.png)
   ------------------------------------------------------------------------------------------------------------------------------

  👋 In this project, I have built an e-commerce website and learned how to use **getStaticProps** and **getStaticPaths** in Next.js to statically generate the whole website.

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

 :mag: The whole project structure is as follows:
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

 :star: The list of laptops is located inside `pages/laptops/index.js`. Inside `[curPage].tsx` I have basicaly imported getStaticProps and Page Laptops from `index.js` and created getStaticPaths to generate all url paths for each laptop. Laptop details for every single unit is located inside `pages/laptop/[id].tsx` page. 

*We don't serve any API routes in this case*

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
