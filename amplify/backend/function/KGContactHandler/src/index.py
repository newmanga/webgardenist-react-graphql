import json
import boto3

def send_email(subject, body, sender, recipient):
    client = boto3.client('ses', region_name='us-east-2')
    response = client.send_email(
        Source=sender,
        Destination={
            'ToAddresses': [recipient]
        },
        Message={
            'Subject': {
                'Data': subject
            },
            'Body': {
                'Text': {
                    'Data': body
                }
            }
        }
    )
    return response['MessageId']

def handler(event, context):
    print('received event:')
    print(event)

    statusCode = 200
    email_result = {}
    subject = "Hello from AWS Lambda"
    body = "This is the body of the email."
    sender = "kindgardenist@gmail.com"
    recipient = "kindgardenist@gmail.com"

    try:
        email_result = send_email(subject, body, sender, recipient)
    except:
        statusCode = 400
    
    return {
        'statusCode': statusCode,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': email_result
  }