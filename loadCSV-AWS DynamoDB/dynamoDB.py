import boto3

# Initialize a session using Amazon DynamoDB
session = boto3.Session()

# Initialize DynamoDB resource
dynamodb = session.resource('dynamodb')
table = dynamodb.Table('candidato')

# Perform a scan operation with the count
response = table.scan(
    Select='COUNT'
)

# Get the count from the response
row_count = response['Count']

print(f"Total number of rows: {row_count}")


