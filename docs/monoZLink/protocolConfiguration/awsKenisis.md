---
title: AWS Kinesis connector 
sidebar_position: 4
---
AWS S3 is a scalable storage service, and AWS Kinesis with Data Firehose is used for delivering real-time streaming data to destinations such as S3. In this guide, we`ll walkthrough setting up AWS Kinesis and data firehose service to receive data from monoZ:Link and push the data to S3 bucket.
<img src={require('@site/static/img/monoZ-Link-AWS-Kenisis.png').default} />


#### Setup up AWS Kinesis Stream
1. Select Kinesis from AWS Management Console. 
    <img src={require('@site/static/img/monoZ-Link-AWS-Kenisis-step1.png').default} /><br /><br />
 

2. Click “Create data stream” and enter a Stream name (e.g., `MyDataStream`) and Specify the number of shards (start with 1; you can increase later if required).
    <img src={require('@site/static/img/monoZ-Link-AWS-Kenisis-step2.png').default} /><br /><br />

 

#### Set Up the Amazon S3 Bucket
1. Navigate to S3 from AWS Console. 
    <img src={require('@site/static/img/monoZ-Link-AWS-Kenisis-step3.png').default} /><br /><br />
 

2.Click “Create bucket” and configure the Bucket name: (Choose a globally unique name), e.g., `test -bucket`. And Region:  Select the same region where you will create your Kinesis Data Firehose and leave other options as default unless needed. Click “Create bucket” to finalize.
    <img src={require('@site/static/img/monoZ-Link-AWS-Kenisis-step4.png').default} /><br /><br />

#### Setup IAM user
1. Open IAM from AWS Console, navigate to Users and click “Add users”. Enter a User name (e.g., `KinesisAccessUser`)  
    <img src={require('@site/static/img/monoZ-Link-AWS-Kenisis-step5.png').default} /><br /><br />

2. On the Permissions page, select Attach policies directly and search for and attach the “AmazonKinesisFirehoseFullAccess”, “AmazonKinesisFullAccess” and “AmazonS3FullAccess” policy. (If you want fine-grained control, create a custom policy with only the necessary permissions for Kinesis) and finally click “Next” to review and create the user.
    <img src={require('@site/static/img/monoZ-Link-AWS-Kenisis-step6.png').default} /><br /><br />
 

3. Once the user is created, you create the Access Key ID and Secret Access Key by clicking “Create access key”.
    <img src={require('@site/static/img/monoZ-Link-AWS-Kenisis-step7.png').default} /><br /><br />
 

4. Select “Application running on an AWS Compute service” or any other suitable for your use case and click “Next”.
    <img src={require('@site/static/img/monoZ-Link-AWS-Kenisis-step8.png').default} /><br /><br />
 
 
5. download the .csv file or copy the keys to a secure location immediately (they will not be available again).
    <img src={require('@site/static/img/monoZ-Link-AWS-Kenisis-step9.png').default} /><br /><br />
 

#### Create an IAM Role for Kinesis Data Firehose
1. Navigate to the IAM service in the AWS Console. Go to Roles and click “Create role”  
    <img src={require('@site/static/img/monoZ-Link-AWS-Kenisis-step10.png').default} /><br /><br />

2. Select AWS service and choose “Kinesis Firehose” as the use case.
    <img src={require('@site/static/img/monoZ-Link-AWS-Kenisis-step11.png').default} /><br /><br />
 

3. Click “Next” to attach permissions policies, search for and attach “AmazonS3FullAccess”. (Optionally) Add “CloudWatchLogsFullAccess” for monitoring.
    <img src={require('@site/static/img/monoZ-Link-AWS-Kenisis-step12.png').default} /><br /><br />

4. Click “Next”, then name your role (any name e.g., `testfirehose`) and click “Create role”.
    <img src={require('@site/static/img/monoZ-Link-AWS-Kenisis-step13.png').default} /><br /><br />
 

#### Create a Kinesis Data Firehose Delivery Stream
1. Go to the Kinesis service in the AWS Console and navigate to Amazon Data Firehose and click “Create Firehose stream”.
    <img src={require('@site/static/img/monoZ-Link-AWS-Kenisis-step14.png').default} /><br /><br />

2. To Configure source, select “Direct PUT or other sources” and name the delivery stream: Provide a unique name, e.g., `my-data-firehose`. Select destination: Choose “Amazon S3”. Select your previously created S3 bucket. [Note: Copy the “Firehose stream name” for use in monoZ:Link
    <img src={require('@site/static/img/monoZ-Link-AWS-Kenisis-step15.png').default} /><br /><br />
 
 

3. Select the IAM role created in previous steps and review your configuration and click “Create Firehose stream”.
    <img src={require('@site/static/img/monoZ-Link-AWS-Kenisis-step16.png').default} /><br /><br />

#### Setup monoZ:Link
Before monoZ:Link setup, prepare the following things: Stream Name, IAM user Access Key,IAM user Secret Key which we prepared in AWS console.


1. Go to Protocol configuration →Add Configuration and Select AWS IoT Core from the dropdown list.
    <img src={require('@site/static/img/monoZ-Link-AWS-Kenisis-step17.png').default} /><br /><br />
 

2. Add Configuration details.
    <table>
        <tr><td>Source Protocol	</td><td>MQTT</td></tr>
        <tr><td>Configuration Name	</td><td>Test (Any suitable name)</td></tr>
        <tr><td>Stream Name	</td><td>Paste the Firehose stream name (created from AWS)</td></tr>
        <tr><td>Available Region	</td><td>Select your AWS region</td></tr>
        <tr><td>Access Key	</td><td>Paste IAM user Access key</td></tr>
        <tr><td>Secret Key	</td><td>Paste IAM user Secret Key</td></tr>
    </table>
    <img src={require('@site/static/img/monoZ-Link-AWS-Kenisis-step18.png').default} /><br /><br />

 

3. Go to Groups → Add Group.
    <img src={require('@site/static/img/monoZ-Link-AWS-Kenisis-step19.png').default} /><br /><br />
 

4. Add the necessary details in the fields and click “Save”.
    <table>
        <tr><td>Group Name	</td><td>Test (Any Name)</td></tr>
        <tr><td>Available Configuration	</td><td>Kinesis config</td></tr>
    </table>
    <img src={require('@site/static/img/monoZ-Link-AWS-Kenisis-step20.png').default} /><br /><br />

 

5. Go to Devices→Click “Edit icon”. Enter the details in the fields and
click “Update” it with the group linked to the kinesis configuration.
    <img src={require('@site/static/img/monoZ-Link-AWS-Kenisis-step21.png').default} /><br /><br />


#### Send data from the device
Send payload data from the registered device to monoZ:Link. monoZ:Link shall translate protocol and push the received data to AWS Kinesis. A new CSV is created at the periodic interval as per the delivery stream settings. Go to your S3 bucket in the AWS Console and navigate to the bucket and check for the folder structure based on your delivery stream settings (e.g., `YYYY/MM/DD/HH`). 
    <img src={require('@site/static/img/monoZ-Link-AWS-Kenisis-step22.png').default} /><br /><br />