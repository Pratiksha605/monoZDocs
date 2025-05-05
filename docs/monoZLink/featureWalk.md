---
title: Feature Walk through
sidebar_position: 2
---

### Create monoZ:Link account

If your organisation already holds a monoZ:Link account, contact your organisation admin to add you as an user. If your organisation doesnt have an account, follow the steps below to create an account.

1. 	Navigate to the monoZ:Link login page and click "Create Account" button
2. 	In the screen that follows, enter the following information, 
    1.	Name: Full Name

    2.	Email: Enter a valid email address. This shall be your login ID for monoZ:Link and OTP shall be sent to this ID for verification

    3. Password: Password for your Login ID. Password must contain atleast 1 uppercase, 1 number and 1 special character

    4.	Organization Name: Enter the name of your company/organization.

    5.	Org ID: Unique identifier for your organization. Org ID is limited to a maximum of 8 Alpha-Numeric characters. Once created it cannot be changed. 

    6.	Contact Details: Click same as above or in case if you need someone else as contact person in your organization then enter their details. 

    7. Verify your email address and activate your account by clicking on the link in the email you receive from monoZ. The link will activate your account and you should be able to login to link.monoz.io.
<div className="card">
    <div className="card__body">
   <img src={require('@site/static/img/monoZ-Link-feature-walk-through.png').default} className="img-center" />
   </div>
   </div>
   <div className="card">
    <div className="card__body">
   <img src={require('@site/static/img/monoZ-Link-Account.png').default} className="img-center" />
   </div></div>
   <div className="card">
    <div className="card__body">
   <img src={require('@site/static/img/emailActivate.png').default} className="img-center" />
   </div>
   </div>

### Create Order

monoZ:Link also hosts order management system to procure, track orders of monoZ products. Note that creating an order is available only for organisation owner. Follow the steps below to place an order. 
1. Navigate to the “Order” screen and click on the “Add Order” from the top right corner.

2. In the pop-up, choose your Order Type from the drop-down list. 

3. Next, under choose a pricing plan for the order. Pricing plan varies based on the selected order type. For instance, monoZ:Link Bundle consists of 4 pricing plans however monoZ:Jet Bundle (POC Kit) has only one pricing plan.

4. Enter order quantity, shipping address, billing method and check the details in the summary view. Note that the total amount is exclusive of shipping fee and a representative from monoZ will contact your organisation`s contact person with the final quotation.

5. Once finalized, click “create order” to place the order. 

6. The created order appear in the orders list with a order number with “pending” order status. The created order can be edited until the order status is “pending”.

7. The order statutes can be interpreted as follows,

   1. Pending: Order created but not verified by monoZ team 

   2. Processing: Created order has been verified by monoZ team and currently being processed 

   3. Shipped: The order has been shipped by monoZ team 

   4. Delivered: The order has been delivered at destination 

   5. Cancelled: The order has been cancelled by monoZ team 

8. 	Every order status change is accompanied with an email notification to the contact email registered to the organization.
   <div className="card">
    <div className="card__body">
<img src={require('@site/static/img/monoZ-Link-Order.jpg').default} className="img-center" />
</div>
</div>
   <div className="card">
    <div className="card__body">
<img src={require('@site/static/img/monoZ-Link-Add-Order.jpg').default} className="img-center" />
</div>
</div>

### Create Protocol Configuration

Protocol configurations allow users to set the incoming protocol for device communication and as well to setup the destination server details as well as its communication protocol. monoZ:Link supports Webhook to any HTTPS endpoint as well as connectors to AWS services such as AWS IoT Core. Check out the Protocol configuration section for step-by-step guide on setting up protocol configurations.

### Create Group

Groups provide a way to organize your devices, distribute firmware, and set a common protocol configuration based on product line, deployed regions, deployment date, etc. Follow the steps below to create a group and attach a protocol configuration.

1.	Navigate “Groups” and click on the “Add Group” button on top right corner.

2.	Enter the respective information and click “save”.

    1. Group name: Max 20 Alpha-Numeric characters including @$#._-  

    2. Available configuration: Select protocol configuration for the group.

    3. Description: Free comments.

    4. Set as Default: Sets group as default. The new devices added to monoZ:Link shall be automatically added to the default group. 
    
    5. IMEI Lock: When enabled, when an device is attached to the group it locks the SIM of device with the currently connected device IMEI. If its a new SIM that hasn`t been connected to network, then enabling this feature will lock the SIM to the IMEI of its first device. If the IMEI locked SIM is swapped to another device it will fail to connect with network. 
   <div className="card">
    <div className="card__body">
 <img src={require('@site/static/img/monoZ-Link-Group.jpg').default} className="img-center" />
</div>
</div>
 ### Add Device to Group

 Devices represents the SIM used by actual device in the field. Follow the steps below to attach a newl device with a group.

1.	Navigate to Devices menu and click on “Registered Devices”. When new endpoints are procured, upon successful communication, the endpoints are available in this space.

2.	Select the devices to be moved to your Device list. 

3.	Click “Move” button on the top left corner and select the target Group from the dropdown list. 

4.	Upon successful addition, the devices shall appear in the “Devices” page. Now the setup is complete and device is set to receive data from physical device. However, we recommend a 1minute delay after moving device and before sending data.

   <div className="card">
    <div className="card__body">
 <img src={require('@site/static/img/monoZ-Link-Registered-Devices.jpg').default} className="img-center" />
 </div>
 </div>
    <div className="card">
    <div className="card__body">
 <img src={require('@site/static/img/monoZ-Link-Destination-Group.jpg').default} 
 className="img-center" />
 </div>
 </div>
       <div className="card">
    <div className="card__body">
 <img src={require('@site/static/img/monoZ-Link-Devices.jpg').default} className="img-center" />
</div>
</div>

 ### View/Edit Device

 Once device is registered and attached to a group, users can access the following additional information related to the device. 
<!--  The following four action buttons can be seen on the top right corner of Devices page, 

   1.	Refresh icon: It refreshes the page 

   2.	Filter icon: It filters the device list by Group, tag, device name or ICCID. 

   3.	Registered Devices: These buttons enter the page where users can view the newly purchased device endpoints 

   4.	Others: Allow users to bulk export all/selected device to CSV, change group of selected devices. In case of changing group, the selected devices must be in the   same group. 

 <img src={require('@site/static/img/monoZ-Link-Actions.jpg').default} className="img-center" />  -->

On the devices list, each device has 3 action buttons

1.	ICCID: The unique 19-digit ID of the SIM used in physical device. 

2.	Device Name: Device name set by the user. 

3.  Tags: Tags associated to the device set by the user.

4.	Group Name: The name of group where device is linked. 

5.	Protocol: The protocol configuration attached to the group of the device.

6.	Activated Date: The activation date of the device. 

7. Edit Button: Edit the device information such as name, group, tag. 

8.	Send Button: Initiate Downlink request. 


   <div className="card">
    <div className="card__body">
<img src={require('@site/static/img/monoZ-Link-Device-List.jpg').default} className="img-center" />
</div>
</div>



Upon clicking on device row, a side menu pops up with more information.

1.	Action: Buttons to enable/disable IMEI lock, reset SIM, enable/disable SIM.

2.	Volume: Used data volume against the remaining volume. 

3.	Connectivity: Online/Offline status of device. 

4.	Last session: Last connected operator and country. 

5.	Last Received Message Timestamp: Timestamp of last recieved message. Updated within few seconds upon receipt of message.

6.	Device IMEI: IMEI information of the physical device. 

7.	Device IP: IP information of the SIM use in physical device. 

8.	SIM Status: Data status of the device. If disabled the device shall not be able transfer data. 

9.	Device Expiry Date: monoZ:Link plan expiry date for the corresponding device.

10.	Usage graph: Daily & monthly data as well as uplink & downlink message usage statistics.

  <div className="card">
    <div className="card__body">
<img src={require('@site/static/img/monoZ-Link-Device-Info.jpg').default} className="img-center" />
</div>
</div>


### Send data from IoT device to monoZ:Link

monoZ:Link use MQTT protocol to recieve data from its registered device. Details related to the Uplink message over MQTT are as follows, 

<!-- Payload data can be sent from monoZ:Jet or any IoT device to a registered endpoint in monoZ:Link over raw text or JSON using MQTT protocol with QOS 0 or QOS 1. -->

1. Broker & Topic: 
 <table>
    <tr>
        <td>Broker setting </td>
        <td>data.monoz.io:1883</td>
    </tr>
    <tr>
        <td>UL Publish Topic</td>
        <td>Level1/< orgid >/< iccid >/Level4</td>
    </tr>
</table>

2. Level1, level4 are optional levels that can be defined by the user.
3. Max length of topic including ORGID & ICCID is 512 bytes.
3. QOS support: 0 or 1.
4. Payload message format: raw text or JSON.
5. Max size of single message: 6KB.
6. Recommended interval between two payloads by the same device is 1 minute.

<b> Note: </b>
1. Even in the case of incorrect ORGID/ICCID, data publish shall be acknowledged by the broker. However it shall be immediately discarded without further processing. 


<!-- monoZ ecosystem strive to create solutions with minimal data expenditure at device end and hence in the case of monoZ:Jet, it doesn’t add any metadata while transferring payload to the cloud.

Here is a simple example of data transfer with monoZ:Jet,

<table>
    <tr>
        <td>HOST MCU to monoZ:Jet </td>
        <td>MZSEND = 35degC</td>
    </tr>
    <tr>
        <td>monoZ:Jet to monoZ:Link</td>
        <td>35degC</td>
    </tr>
      <tr>
        <td>monoZ:Link to user server (webhook)</td>
       <td> 
       ```jsx
{
  ICCID: < ICCID />,
  Timestamp: < Timestamp />,
  Payload: 35degC
}
```
</td>
    </tr>
</table>  -->

### Send data from monoZ:Link to IoT Device

Payload data can be sent from monoZ:Link to any registered device over MQTT protocol. Details related to the downlink message over MQTT are as follows,

1. Broker & Topic: 
<table>
    <tr>
        <td>monoZ:Link broker </td>
        <td>data.monoz.io:1883</td>
    </tr>
    <tr>
        <td>Subscribe Topic</td>
        <td>/< orgid >/< iccid >/sub/level4</td>
    </tr>
</table>

2. Level4 is an optional levels that can be defined by the user.
3. Max length of topic including ORGID & ICCID is 512 bytes.
4. QOS support: 0 or 1 as per user setting.
5. Payload message format: raw text or JSON.
6. Max size of single message: 4096 bytes.
7. Recommended interval between two downlink messages from the same device is 1 minute.

Follow steps below to send a downlink message from monoZ:Link to the device,

1.	Click the "send downlink button" of the device for which downlink need to be initiated 

2.	User can choose between JSON/Text message format over QOS 0 or QOS 1 

3.	Enter the message in the DL message content and press send to initiate the downlink message. 

4. When "Retain last message" is checked, the message to stored to the broker topic and device shall receive it upon successful subscribe.

<!-- <img src={require('@site/static/img/monoZ-Link-DownLink-Message.jpg').default} className="img-center" />  -->
  <div className="card">
    <div className="card__body">
<img src={require('@site/static/img/monoZ-Link-DownLinkBtn.png').default} className="img-center" /> 
</div>
</div>

<b> Note: </b>
1. Line breaks are not supported in the message box, including linebreaks in JSON format.


### Add users to your account

Multiple users can be added to single organisation of monoZ:Link. Users have different levels of access as described below;

<table>
    <tr>
        <td><b>Role </b> </td>
        <td> <b>Limitations </b></td>
        <td><b>Role </b> </td>
    </tr>
    <tr>
        <td>Owner</td>
        <td>1</td>
        <td>All functionality </td>
    </tr>
     <tr>
        <td>Manager</td>
          <td> 4</td>
        <td>Full access except placing new orders & user management</td>
    </tr>
     <tr>
        <td>Read-only</td>
           <td>4</td>
        <td>Read access to all features except user & order management</td>
    </tr>
</table>

Follow steps below to create new users,

1. Login as organisation owner. 
2. Enter “Users” menu and click “Add User”.

  <div className="card">
    <div className="card__body">
<img src={require('@site/static/img/monoZ-Link-Users.jpg').default} className="img-center" />
</div>
</div>

3. Enter the respective information and click “save”.

  <div className="card">
    <div className="card__body">
<img src={require('@site/static/img/monoZ-Link-Save.jpg').default} className="img-center" />
</div>
</div>

    -   User name: enter any name
    -   Login ID: enter login ID. Enter in email address format.
    -	User type: specify the user role. Set to [General/Read only].
    -	Password: enter the password.
    -	Active: creates an account based on whether it is active or not. If active, the user is immediately available.

### Limitations-Group Blocking

To block connections from misbehaving servers, monoZ:Link has incorporated group blocking feature. If data push failure occur atleast 10 consecutive times and for 10minutes then monoZ:Link determine that there is a problem with the user server and data push for all devices in that group will be stopped. An alert email will be sent to customer for unblocking the group and data push will resume only after unblocking.

  <div className="card">
    <div className="card__body">
<img src={require('@site/static/img/monoZ-Link-Limitations-Group-Blocking.jpg').default} className="img-center" />
</div>
</div>

Example scenario for blocking:

<table>
    <tr>
        <td> <b>Scenario </b></td>
        <td> <b>Condition </b></td>
        <td> <b>Result </b></td>
    </tr>
    <tr>
        <td>Data push failed for 10 consecutive times in 5minutes and successful in next transfer at 6th minute.</td>
        <td>
        <codeBlock>
         10 minutes: no <br/>
       10 consecutive failure: yes
       </codeBlock>
</td>
        <td>No block</td>
    </tr>
     <tr>
        <td>Data push failed for 20 consecutive time in 10 minutes and successful in next transfer at 11th minute. </td>
        <td>
      <codeBlock>
       10 minutes: yes <br/>
       10 consecutive failure: yes
      </codeBlock>
</td>
        <td>Block from 11th message</td>
    </tr>
     <tr>
        <td>Data push failed for 9 consecutive time in 18minutes and successful in next transfer at 20 minute.</td>
        <td>   
        <codeBlock>
         10 minutes: yes <br/>
       10 consecutive failure: no
       </codeBlock>
</td>
        <td>No block</td>
    </tr>
</table>








    