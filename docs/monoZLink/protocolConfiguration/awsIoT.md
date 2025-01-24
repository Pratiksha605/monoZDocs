---
title: AWS IoT Core
sidebar_position: 3
---
In this guide we will walkthrough setting up AWS IoT core configuration in monoZ:Link. As part of this guide, we will setup a “thing” in AWS IoT core to receive data from monoZ:Link. We will configure AWS IoT core configuration in monoZ:Link and attach it to device group. 
<img src={require('@site/static/img/monoZ-Link-AWS-Iot.png').default} />


#### Setup AWS IoT Core thing
1. Access the AWS console. AWS IoT Core -> Manage → All Devices → Things
    <img src={require('@site/static/img/monoZ-Link-AWS-Iot-step1.png').default} /><br /><br />
 

2. Now click “Create Thing”.
    <img src={require('@site/static/img/monoZ-Link-AWS-Iot-step2.png').default} /><br /><br />
 

3. Select “Create Single Thing” and click “Next”.
    <img src={require('@site/static/img/monoZ-Link-AWS-Iot-step3.png').default} /><br /><br />

4. Enter a name in [Thing name] and click “Next”. Here, we'll name it "XXXXXXXXXXXXXXX5169".
    <img src={require('@site/static/img/monoZ-Link-AWS-Iot-step4.png').default} /><br /><br />
 


5. Select “Auto-generate a new certificate (recommended)” and click “Next”
    <img src={require('@site/static/img/monoZ-Link-AWS-Iot-step5.png').default} /><br /><br />
 

6. The Attach Policy to Certificate - Options screen appears, where you would typically select a policy and assign it to the certificate. Since no policy has been yet, click “Create Thing” without attaching a policy.
    <img src={require('@site/static/img/monoZ-Link-AWS-Iot-step6.png').default} /><br /><br />
 

7. Click the corresponding Download button to download the following four files, and then click “Finish”. You will use these certificates (Device certificate, Public Key File, Private key file, Amazon Root CA 1) later. Now that the thing is created, you can create a policy to assign to the device (thing).
    <img src={require('@site/static/img/monoZ-Link-AWS-Iot-step7.png').default} /><br /><br />
 


8. Click Administration → Security → Policies → Create Policy. This time, we will create a new “test” policy that can publish to any MQTT topic.
    <img src={require('@site/static/img/monoZ-Link-AWS-Iot-step8.png').default} /><br /><br />
 

9. Set each item and click [Add new statement] and add the following items:
    <table>
        <thead>
            <tr>
                <th>[Policy Effects]</th>
                <th>[Policy Action]</th>
                <th>[Policy Resources]</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>“permission”</td>
                <td>iot:Connect</td>
                <td>*</td>
            </tr>
            <tr>
                <td>“permission”</td>
                <td>iot:Publish</td>
                <td>*</td>
            </tr>
            <tr>
                <td>“permission”</td>
                <td>iot:Receive</td>
                <td>*</td>
            </tr>
            <tr>
                <td>“permission”</td>
                <td>iot:Subscribe</td>
                <td>*</td>
            </tr>
        </tbody>
    </table>
    	

10. Click “Create”. The policy is created. 
    <img src={require('@site/static/img/monoZ-Link-AWS-Iot-step9.png').default} /><br /><br />
 

11. Next, attach the policy created to the thing certificate. Check the certificate you created and click Actions → Attach Policy.
    <img src={require('@site/static/img/monoZ-Link-AWS-Iot-step10.png').default} /><br /><br />
 

12. Select AWS IoT Test, check the “Test” policy you created, and click “Attach Policy”. This completes the registration of the thing in AWS IoT Core.
    <img src={require('@site/static/img/monoZ-Link-AWS-Iot-step11.png').default} /><br /><br />
 


13. Finally, we will get the custom endpoint for sending data to AWS IoT Core. This endpoint shall be used when creating configuration in monoZ:Link. Access the AWS IoT console and click [Settings] and copy the contents shown in [Endpoints] under [Device data endpoints]. 
    <img src={require('@site/static/img/monoZ-Link-AWS-Iot-step12.png').default} /><br /><br />
 


#### Setup monoZ:Link 
1. Prepare the following files downloaded upon creating AWS IoT Core Thing
    <table>
        <tr><td>Endpoint</td><td>	(Unique device data endpoint of AWS IoT core)</td></tr>
        <tr><td>Private key file</td><td>	random string-private.pem.key</td></tr>
        <tr><td>Device certificate</td><td>	random string-certificate.pem.crt</td></tr>
        <tr><td>Amazon Root CA 1</td><td> 	AmazonRootCA1.pem</td></tr>
    </table>

2. Open monoZ:Link -> Protocol configuration -> Add Configuration
    <img src={require('@site/static/img/monoZ-Link-AWS-Iot-step13.png').default} /><br /><br />

3. Select AWS IoT Core from the dropdown list
    <img src={require('@site/static/img/monoZ-Link-AWS-Iot-step14.png').default} /><br /><br />
 

4. Add the configuration details and click “Save”
    <table>
    <tr><td>Source Protocol</td><td>	MQTT</td></tr>
    <tr><td>Configuration Name</td><td>	Test Config (Any suitable name)</td></tr>
    <tr><td>Host</td><td>	Paste the device endpoint from AWS</td></tr>
    <tr><td>CA File (Server Cert)</td><td>	Upload “Amazon Root CA 1” file</td></tr>
    <tr><td>Topic</td><td>	Topic to publish on AWS IoT Core. It could be “Same as incoming” or Custom topic.</td></tr>
    <tr><td>QOS</td><td>	MQTTS QOS for publish to AWS IoT Core. Zero or One </td></tr>
    </table>
    <img src={require('@site/static/img/monoZ-Link-AWS-Iot-step15.png').default} /><br /><br />

 

5. Navigate to Groups → Add Group
    <img src={require('@site/static/img/monoZ-Link-AWS-Iot-step16.png').default} /><br /><br />
 

6. Add the necessary details in the fields and click “Save”
    <table>
    <tr><td>Group Name</td><td>	Test Group (Any Name)</td></tr>
    <tr><td>Available Configuration</td><td>	Test Config (Select from the configuration)</td></tr>
    </table>
    <img src={require('@site/static/img/monoZ-Link-AWS-Iot-step17.png').default} /><br /><br />

 

7. Go to Devices and Click “Edit icon” on the device to be connected to AWS IoT core. Attach following details in their respective fields and click “Update”. The monoZ:Link configuration for AWS IoT core connection now complete.

    <table>
        <tr><td>Group</td><td>	Select the created Test group </td></tr>
        <tr><td>Client Certificate</td><td>	random string-certificate.pem.crt</td></tr>
        <tr><td>Client Key file</td><td>	random string-private.pem.key</td></tr>
    </table>
    <img src={require('@site/static/img/monoZ-Link-AWS-Iot-step18.png').default} /><br /><br />

 

#### Send data from the device
1. Send payload data from the Device “XXXXXXXXXXXXXXX5169” to monoZ:Link. monoZ:Link shall translate protocol and push the received data to AWS IoT Core over MQTTS. It can be verified in AWS IoT console using MQTT test client feature.
    <img src={require('@site/static/img/monoZ-Link-AWS-Iot-step19.png').default} /><br /><br />
 

#### AWS IoT Core Data format
monoZ:Link pushes data to the specified AWS IoT Core broker in the following format. By default each incoming message is pushed as individual outgoing message however when monoZ:Link recieve multiple messages within 1 second from devices belonging to same monoZ:Link, then based on the processing load, monoZ:Link may club upto 10 messages in a single outgoing message packet. In case of QOS 1 setting, monoZ:Link client ensure message is delivered at least once to the receiver. In case of not able to deliver the message to the server, the data will be discarded. If the database function is enabled, the data will be stored as failed data.<br/>
    **Example 1:** Single packet in outgoing message
    ```jsx
    { 
        "ICCID": 897612653856781234,
        "Timestamp": "2023-10-16T09:17:32.1233516Z", 
        "Payload": "ABC"
    }
    ```
    **Example 2:** When multiple packets clubbed in single outgoing messages 
    ```jsx
        [
            { 
                "ICCID": 897612653856781234,
                "Timestamp": "2023-10-16T09:17:32.1233516Z", 
                "Payload": "ABC"
            },
            { 
                "ICCID": 897612653856787890,
                "Timestamp": "2023-10-16T09:17:32.8383516Z", 
                "Payload": "123"
            }
        ]
    ```