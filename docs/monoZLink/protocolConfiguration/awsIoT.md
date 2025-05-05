---
title: AWS IoT Core
sidebar_position: 3
---
In this guide we will walkthrough setting up a “thing” in AWS IoT core to receive data from monoZ:Link. We will configure AWS IoT core configuration in monoZ:Link and attach it to device group. 

  <div className="card">
    <div className="card__body">
<img src={require('@site/static/img/monoZ-Link-AWS-Iot.png').default} />
</div>
</div>

#### Setup AWS IoT Core thing
1. Access the AWS console. AWS IoT Core -> Manage → All Devices → Things
  <div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Iot-step1.png').default} />
    </div></div>
 

2. Now click “Create Thing”.
  <div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Iot-step2.png').default} />
    </div>
    </div>
 

3. Select “Create Single Thing” and click “Next”.
  <div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Iot-step3.png').default} />
    </div>
    </div>

4. Enter a name in [Thing name] and click “Next”. Here, we'll name it "XXXXXXXXXXXXXXX5169".
  <div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Iot-step4.png').default} />
    </div>
    </div>
 


5. Select “Auto-generate a new certificate (recommended)” and click “Next”
  <div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Iot-step5.png').default} />
    </div>
    </div>

6. The Attach Policy to Certificate - Options screen appears, where you would typically select a policy and assign it to the certificate. Since no policy has been yet, click “Create Thing” without attaching a policy.
  <div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Iot-step6.png').default} />
    </div>
    </div>
 

7. Click the corresponding Download button to download the following four files, and then click “Finish”. You will use these certificates (Device certificate, Public Key File, Private key file, Amazon Root CA 1) later. Now that the thing is created, you can create a policy to assign to the device (thing).
  <div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Iot-step7.png').default} />
    </div>
    </div>
 


8. Click Administration → Security → Policies → Create Policy. This time, we will create a new “test” policy that can publish to any MQTT topic.
  <div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Iot-step8.png').default} />
    </div>
    </div>
 

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
  <div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Iot-step9.png').default} />
    </div>
    </div>
 

11. Next, attach the policy created to the thing certificate. Check the certificate you created and click Actions → Attach Policy.
  <div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Iot-step10.png').default} />
    </div>
    </div>
 

12. Select AWS IoT Test, check the “Test” policy you created, and click “Attach Policy”. This completes the registration of the thing in AWS IoT Core.
  <div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Iot-step11.png').default} />
    </div>
    </div>
 


13. Finally, we will get the custom endpoint for sending data to AWS IoT Core. This endpoint shall be used when creating configuration in monoZ:Link. Access the AWS IoT console and click [Settings] and copy the contents shown in [Endpoints] under [Device data endpoints]. 
  <div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Iot-step12.png').default} />
    </div>
    </div>
 


#### Setup monoZ:Link 
1. Prepare the following files downloaded upon creating AWS IoT Core Thing
    <table>
        <tr><td>Endpoint</td><td>	(Unique device data endpoint of AWS IoT core)</td></tr>
        <tr><td>Private key file</td><td>	random string-private.pem.key</td></tr>
        <tr><td>Device certificate</td><td>	random string-certificate.pem.crt</td></tr>
        <tr><td>Amazon Root CA 1</td><td> 	AmazonRootCA1.pem</td></tr>
    </table>

2. Open monoZ:Link -> Protocol configuration -> Add Configuration
  <div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Iot-step13.png').default} />
    </div>
    </div>

3. Select AWS IoT Core from the dropdown list
  <div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Iot-step14.png').default} />
    </div>
    </div>
 

4. Add the configuration details and click “Save”
    <table>
    <tr><td>Source Protocol</td><td>	MQTT</td></tr>
    <tr><td>Configuration Name</td><td>	Test Config (Any suitable name)</td></tr>
    <tr><td>Host</td><td>	Paste the device endpoint from AWS</td></tr>
    <tr><td>CA File (Server Cert)</td><td>	Upload “Amazon Root CA 1” file</td></tr>
    <tr><td>Topic</td><td>	Topic to publish on AWS IoT Core. It could be “Same as incoming” or Custom topic.</td></tr>
    <tr><td>QOS</td><td>	MQTTS QOS for publish to AWS IoT Core. Zero or One </td></tr>
    </table>
      <div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Iot-step15.png').default} />
    </div></div>

 

5. Navigate to Groups → Add Group
  <div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Iot-step16.png').default} />
    </div>
    </div>
 

6. Add the necessary details in the fields and click “Save”
    <table>
    <tr><td>Group Name</td><td>	Test Group (Any Name)</td></tr>
    <tr><td>Available Configuration</td><td>	Test Config (Select from the configuration)</td></tr>
    </table>
      <div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Iot-step17.png').default} />
    </div>
    </div>

 

7. Go to Devices and Click “Edit icon” on the device to be connected to AWS IoT core. Attach following details in their respective fields and click “Update”. The monoZ:Link configuration for AWS IoT core connection now complete.

    <table>
        <tr><td>Group</td><td>	Select the created Test group </td></tr>
        <tr><td>Client Certificate</td><td>	random string-certificate.pem.crt</td></tr>
        <tr><td>Client Key file</td><td>	random string-private.pem.key</td></tr>
    </table>
      <div className="card">
    <div className="card__body">
    <img src={require('@site/static/img/monoZ-Link-AWS-Iot-step18.png').default} />
    </div>
    </div>

 

#### Send data from the device
1. Before data send, lets setup test client on AWS IoT core to view the incoming data. Navigate to MQTT test client in AWS IoT core console and subscribe to your device push topic. 
  <div className="card">
    <div className="card__body">
<img src={require('@site/static/img/monoZ-Link-AWS-Iot-step19.png').default} />
</div>
</div>

2. Send payload data from the Device “XXXXXXXXXXXXXXX5169” to monoZ:Link. monoZ:Link shall translate protocol and push the received data to AWS IoT Core over MQTTS. It can be verified in the MQTT test client feature.
     
#### AWS IoT Core Data Push Format
monoZ:Link pushes incoming data to the specified AWS IoT Core broker without any changes to format.


Incoming data from Device to monoZ:Link :
 ```jsx
<payload>
```
monoZ:Link to AWS IoT core:
 ```jsx
<payload>
```

#### AWS IoT Core Data Push Rule:
1. Each incoming data packet is pushed as individual data push message. 
2. If AWS IoT core protocol configuration is set with QOS 1, then monoZ:Link shall ensure that the data push message is delivered at least once to AWS IoT Core. In case of not able to deliver the message to AWS IoT Core, the data will be discarded without retries. If the database function is enabled, the data will be stored as failed data.<br/>

