import json
import boto3

def SendEmail(subject, body, sender, recipient):
    print("Sending Email...")
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
    print(response['ResponseMetadata'])
    return response['ResponseMetadata']['HTTPStatusCode']

def handler(event, context):
    print('Received event:')

    statusCode = 400
    sender = "kindgardenist@gmail.com"
    recipient = "kindgardenist@gmail.com"

    try:
        event_body = json.loads(event['body'])
        print(event_body)
        subject = f"Message from [{event_body['email']}]"
        body = f"{event_body['message']} \n {event_body['first_name']}, {event_body['last_name']}"
        statusCode = SendEmail(subject, body, sender, recipient)
    except:
        print("Something went wrong")

    return_message = {
        'statusCode': statusCode,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps("Return from api")
    }
    
    return return_message