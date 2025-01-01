// lib/fetchData.ts
import { QueryCommand, ScanCommand } from '@aws-sdk/client-dynamodb';
import client from './dynamodbClient';

export async function fetchCandidato(SQ_CANDIDATO: string) {
    const command = new QueryCommand({
        TableName: 'candidatoCompleto',
        KeyConditionExpression: 'SQ_CANDIDATO = :nrTitulo',
        ExpressionAttributeValues: {
          ':nrTitulo': { S: SQ_CANDIDATO }
        }
      });
      const response = await client.send(command);
      console.log('Ready info' + response);
      return response.Items ? response.Items[0] : null;
}