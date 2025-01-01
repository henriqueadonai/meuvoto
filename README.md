# meuvoto

## Candidatos e informações fornecidas pelo site
[Dados Abertos TSI Justiça Brasileira](https://dadosabertos.tse.jus.br/)
[Candidatos - 2024](https://dadosabertos.tse.jus.br/dataset/candidatos-2024)

Chave primária dos arquivos SQ_CANDIDATO para os arquivos consulta candidato e consulta complementar
SQ_CANDIDATO também é aplicado para o bem do candidato

https://g1.globo.com/politica/eleicoes/2024/quem-eu-escolho/

## Firebase

Usando firebase para carregar as informações dos candidatos - Não funcionou e eles querem cobrar mudando para Dynamo DB


## Dynamo DB

Script funcionou, dados carregados de Capão Bonito, iremos proceder com pedido de novas analises.
Usar aws client to store variables to load data into the dynamo DB
aws configure --profile myprofile
import boto3

session = boto3.Session(profile_name='myprofile')


## NextJS.ORG
https://nextjs.org/docs/getting-started/installation

npm run dev
Local host where next APP was created

## Amplify AWS
Auto build and deploy to Server


## Mock API
https://mockapi.io/


## Estrutura do APP
/app: Contains all the routes, components, and logic for your application, this is where you'll be mostly working from.

/app/lib: Contains functions used in your application, such as reusable utility functions and data fetching functions.

/app/ui: Contains all the UI components for your application, such as cards, tables, and forms. To save time, we've pre-styled these components for you.

/public: Contains all the static assets for your application, such as images.

Config Files: You'll also notice config files such as next.config.js at the root of your application. Most of these files are created and pre-configured when you start a new project using create-next-app. You will not need to modify them in this course.

Use .ts for TypeScript files that do not contain JSX.
Use .tsx for TypeScript files that contain JSX, typically React components. JSX is HTML

By using TypeScript, you can ensure you don't accidentally pass the wrong data format to your components or database, like passing a string instead of a number to invoice amount.

In Next.js, layouts are used to wrap pages and provide a consistent structure across different pages. You can define a layout component and use it in your pages to ensure that certain elements (like navigation bars, footers, etc.) are present on every page.



## Toggle components
https://github.com/lukeed/clsx


## Fonts Next font module
File fonts ts

## Images
However, this means you have to manually:

Ensure your image is responsive on different screen sizes.
Specify image sizes for different devices.
Prevent layout shift as the images load.
Lazy load images that are outside the user's viewport.

Images without dimensions and web fonts are common causes of layout shift due to the browser having to download additional resources.


## Routes

root / it's the APP - Root Segment
dashboard - Segment
candidatos - Leaf Segment

You can create separate UIs for each route using layout.tsx and page.tsx files.

Next.js automatically prefetches the code for the linked route in the background. By the time the user clicks the link, the code for the destination page will already be loaded in the background, and this is what makes the page transition near-instant!


## Fetching Data

### API Layer
- APIs are an intermediary layer between your application code and database. There are a few cases where you might use an API:
    - If you're using 3rd party services that provide an API.
    - If you're fetching data from the client, you want to have an API layer that runs on the server to avoid exposing your database secrets to the client.

- There are a few cases where you have to write database queries:
    - When creating your API endpoints, you need to write logic to interact with your database.
    - If you are using React Server Components (fetching data on the server), you can skip the API layer, and query your database directly without risking exposing your database secrets to the client.

That's right, you should not query your database directly when fetching data on the client as this would expose your database secrets.

### Server Components
By default, Next.js applications use React Server Components. Fetching data with Server Components is a relatively new approach and there are a few benefits of using them:
- Server Components support promises, providing a simpler solution for asynchronous tasks like data fetching. You can use async/await syntax without reaching out for useEffect, useState or data fetching libraries.
- Server Components execute on the server, so you can keep expensive data fetches and logic on the server and only send the result to the client.
- As mentioned before, since Server Components execute on the server, you can query the database directly without an additional API layer.

https://nextjs.org/learn/dashboard-app/fetching-data#what-are-request-waterfalls



## Static and Dynamic Rendering


## Next chapter
https://nextjs.org/learn/dashboard-app/fetching-data

https://tailwindui.com/components/preview