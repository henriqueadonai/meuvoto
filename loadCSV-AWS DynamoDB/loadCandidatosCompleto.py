import json
import csv
import boto3


# Initialize a session using Amazon DynamoDB
session = boto3.Session()

# Initialize DynamoDB resource
dynamodb = session.resource('dynamodb')
table = dynamodb.Table('candidatoCompleto')


# Transform the data
# Read the CSV file
with open('csv/consulta_cand_2024_SP.csv', mode='r') as file:
    consulta_cand_2024 = csv.DictReader(file, delimiter=';')
    
    # Transform and insert the data
    for row in consulta_cand_2024:
        # Insert each row into the DynamoDB table
        # print (row)
        # Check if the partition key exists and is not empty
        if 'SQ_CANDIDATO' in row and row['SQ_CANDIDATO']:
            # Insert the item into the DynamoDB table
            # table.put_item(Item=row)
            if row.get('NM_UE') == 'CAPÃO BONITO':
                key = row.pop('SQ_CANDIDATO')
                json_data = json.dumps(row)
                item = {
                    'SQ_CANDIDATO': key,
                    'candidato': json_data
                }
                with open('csv/consulta_cand_complementar_2024_SP.csv', mode='r') as file:
                    consulta_cand_complementar_2024 = csv.DictReader(file, delimiter=';')                    
                    for complementar_row in consulta_cand_complementar_2024:
                        if complementar_row.get('SQ_CANDIDATO') == key:
                            json_data = json.dumps(complementar_row)
                            item['complementar'] = json_data
                            break
                # Initialize the 'bem' list
                item['bem'] = []        
                with open('csv/bem_candidato_2024_SP.csv', mode='r') as file:
                    bem_candidato_2024 = csv.DictReader(file, delimiter=';')                   
                    
                    for bem_row in bem_candidato_2024:
                        if bem_row.get('SQ_CANDIDATO') == key:
                            item['bem'].append(bem_row)
                    # Convert the 'bem' list to a JSON string
                    item['bem'] = json.dumps(item['bem'])

                #print(f"Adding item: {item}")  
                #break
                table.put_item(Item=item)

print("Data inserted successfully.")