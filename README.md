# meuvoto

## Candidatos e informações fornecidas pelo site
[Dados Abertos TSI Justiça Brasileira](https://dadosabertos.tse.jus.br/)
[Candidatos - 2024](https://dadosabertos.tse.jus.br/dataset/candidatos-2024)


## Firebase

Usando firebase para carregar as informações dos candidatos - Não funcionou e eles querem cobrar


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

## Hide the AWS credentials for DynamoDB
