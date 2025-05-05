---
title: AWS Lambda function - hide
sidebar_position: 2
---

In this guide we'll walkthrough setting up AWS Lambda function to receive data from monoZ:Link and trigger email upon successfully receiving data. Creating an SNS topic in the AWS SNS Console and subscribing to it. This integration allows for directly passing data from monoZ:Link to user`s Lambda function in their AWS environment thereby facilitating efficient data handling for critical applications.

 <div className="card">
    <div className="card__body">
<img src={require('@site/static/img/monoZ-Link-AWS-Lambda.png').default} />
</div>
</div>

#### Setup SNS service
1. First step is to create a SNS topic. In the AWS Management Console, go to SNS (Simple Notification Service) and click "Create Topic."
 <div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Lambda-step1.png').default} />
    </div>
    </div>

2. Choose the type as "Standard" and give your topic a name (e.g., LambdaEmailTopic).\
Click "Create Topic."
 <div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Lambda-step2.png').default} />
</div>
</div>

3. After creating the topic, click "Create subscription”.  
 <div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Lambda-step3.png').default} />
</div>
</div>

4. Set the protocol as Email. Enter the email address you want to receive notifications and click "Create subscription."
 <div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Lambda-step4.png').default} />
</div>
</div>

5. Check your email inbox and confirm the subscription by clicking the link in the confirmation email from AWS.
 <div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Lambda-step5.png').default} />
    </div>
    </div>

#### Create the Lambda Function
1. In the AWS Management Console, go to Lambda.
 <div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Lambda-step6.png').default} />
    </div>
    </div>

2. Click "Create Function."
 <div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Lambda-step7.png').default} />
    </div>
    </div>
 
3. Choose "Author from scratch". Enter a name for the function (e.g., ProcessIncomingData) and select your runtime (e.g., Python 3.x). Create a new role with basic Lambda permissions.

 <div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Lambda-step8.png').default} />
 </div>
 </div>

4. The following code written in Python receives an event (which can be a JSON payload), processes it, and publishes a message to the SNS topic.
    ```jsx
    import json
    import boto3

    sns_client = boto3.client(‘sns’)

    def lambda_handler(event, context):
        # Extract only the body field from the event
        if "body" in event:
            message = event["body"]
        else:
                return {
                    "statusCode": 400,
                    "body": json.dumps("Invalid event format, 'body' not found.")
                }

        # Send the message to SNS
        sns_client.publish(
                TopicArn='arn:aws:sns:region:account-id:topic-name',
                Message=message
        )
        return {
                "statusCode": 200,
                "body": json.dumps("Message sent to SNS successfully.")
        }
    ```
  <div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Lambda-step9.png').default} />
</div></div>

5. To setup environment variable, go to "Configuration > Environment variables" in the Lambda console and add the following variable: SNS_TOPIC_ARN: The ARN of the SNS topic you created (find it under SNS topic details).
<div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Lambda-step10.png').default} />
</div></div>

6. Next, to assign Lambda permissions, navigate to IAM Console from the AWS Management Console. Under Roles, find the execution role created for your Lambda function (its name will be similar to the Lambda function name).
<div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Lambda-step11.png').default} />
 </div>
 </div>

7. Click on the role, then click Add permissions > Attach policies.
<div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Lambda-step12.png').default} />
 </div>
</div>

8. In the search bar, type SNS, check the box for AmazonSNSFullAccess 

<div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Lambda-step13.png').default} />
 </div></div>

9. Alternatively you can create a custom policy that allows sns:Publish to your topic ARN.
    ```jsx
    {
    "Version": "2012-10-17",
    "Statement": [
        {
        "Effect": "Allow",
        "Action": "sns:Publish",
        "Resource": "<your-SNS-topic-ARN>"
        }
    ]
    }
    ```
    <div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Lambda-step14.png').default} />
    </div> 
    </div>


10. To test the function, open your ProcessIncomingData function in lambda console. Click "Test" and create a test event with sample data (e.g., a simple JSON payload). Click "Test" again to invoke the function. Or send it through the Device
<div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Lambda-step15.png').default} />
</div>
</div>

11. Before concluding, copy the custom endpoint for sending data to AWSLambda. Access AWS Lambda console and click your created Function (e.g., ProcessIncomingData) and copy the contents shown in [Function URL] under [Description]

   <div className="card">
    <div className="card__body">
     <img src={require('@site/static/img/monoZ-Link-AWS-Lambda-step16.png').default} />
</div>
</div>

#### Setup monoZ:Link 
1. Go to Protocol Configuration→Add Configuration
<div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Lambda-step17.png').default} />
 </div>
 </div>

2. Select Webhook from the dropdown list
<div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Lambda-step18.png').default} />
   </div>
   </div>

3. Add the configuration details and click “Save”
    <table>
        <tr>
            <td>Source Protocol</td>
            <td>MQTT</td>
        </tr>
        <tr>
            <td>Configuration Name</td>
            <td>Test (Any suitable name)</td>
        </tr>
        <tr>
            <td>Host</td>
            <td>Custom end point to send data to lambda</td>
        </tr>
    </table>
	

    <div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Lambda-step19.png').default} />
    </div>
    </div>


4. Go to Groups→Add Group

   <div className="card">
    <div className="card__body">
     <img src={require('@site/static/img/monoZ-Link-AWS-Lambda-step20.png').default} />
    </div>
    </div>



5. Add the necessary details in the fields and click “Save”
    <table>
        <tr>
            <td>Group Name</td>
            <td>Test Group (Any Value)</td>
        </tr>
        <tr>
            <td>Available Configuration</td>
            <td>Test Config (the configuration created with AWS Lambda)</td>
        </tr>
    </table>
 	
    <div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Lambda-step21.png').default} />
    </div></div>




6. Go to Devices→Click “Edit icon”. Enter the details in the fields and click “Update”
    <table>
        <tr>
            <td>Device Name</td>
            <td>12344</td>
        </tr>
        <tr>
            <td>Group</td>
            <td>Select the Lambda group for this device</td>
        </tr>
    </table>


    <div className="card">
    <div className="card__body">	
    <img src={require('@site/static/img/monoZ-Link-AWS-Lambda-step22.png').default} />
    </div>
    </div>



#### Send data from the device
Send payload data from the registered device to monoZ:Link. monoZ:Link shall translate protocol and push the received data to AWS Lambda function which in turn invoke the email with the incoming data.
    <div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Lambda-step23.png').default} />
    </div>
    </div>

