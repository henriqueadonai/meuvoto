import boto3
import csv

# Initialize a session using Amazon DynamoDB
session = boto3.Session()

# Initialize DynamoDB resource
dynamodb = session.resource('dynamodb')
table = dynamodb.Table('candidato')

# Open the CSV file
with open('consulta_cand_2024_SP.csv', mode='r') as file:
    reader = csv.DictReader(file, delimiter=';')
    for row in reader:
        # Insert each row into the DynamoDB table
        # print (row)
        # Check if the partition key exists and is not empty
        if 'NR_TITULO_ELEITORAL_CANDIDATO' in row and row['NR_TITULO_ELEITORAL_CANDIDATO']:
            # Insert the item into the DynamoDB table
            # table.put_item(Item=row)
            if row.get('NM_UE') == 'CAPÃO BONITO':
                item = {k: v for k, v in row.items()}
                table.put_item(Item=item)
                # print(f"Adding item: {item}")
        else:
            print(f"Skipping item due to missing partition key: {row}")

print("Data loaded successfully!")
