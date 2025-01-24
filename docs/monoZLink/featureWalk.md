---
title: Feature Walk through
sidebar_position: 2
---

### Create a monoZ:Link account

monoZ:Link acts as central platform for all the services. If a member of your organisation already holds an account, then they may add a new user from their console. If no account exists for you. 
Follow the steps below to create an account.
1. 	Navigate to the monoZ:Link website and click on the "Create Account" button
2. 	In the screen that follows, enter the following information, 
    1.	Name: Full Name

    2.	Email: Enter your unique email. This shall be your login ID

    3. Password: Password for your Login ID. Password must contain atleast 1 uppercase, 1 number and 1 special character

    4.	Organization Name: Enter the name of your company or organization.

    5.	Org ID: Unique identifier for your organization. Org ID is limited to a maximum of 8 Alpha-Numeric characters. Once created it cannot be changed. 

    6.	Contact Details: Click same as above or in case if you need someone else as contact person in your organization then enter their details. 

    7. Verify your email address and activate your account by clicking on the link in the email you receive from monoZ. The link will return you to link.monoz.io and you will be ready to create your first deployment.

   <img src={require('@site/static/img/monoZ-Link-feature-walk-through.png').default} className="img-center" />
   <img src={require('@site/static/img/monoZ-Link-Account.png').default} className="img-center" />

### Create an Order

monoZ:Link also hosts order management system to procure, track orders of monoZ products. Note that creating an order is available only for admin users of the organization. Follow the steps below to place an order. 
1. Navigate to the “Order” screen and click on the “Add Order” from the top right corner.

2. In the pop-up, choose your order content from Order Description Type from the drop-down list. Bundles such as monoZ:Jet bundle, monoZ:Link bundle can be selected. 

3. 	Next choose a pricing plan for the endpoint procured through the bundle. For instance, Both monoZ:Link Bundle consists of 4 pricing plans, namely Essential, Essential  +, Fleet, High Data.

4. Enter order quantity, shipping address, billing method and check the details in the summary view. 

5. Once finalized, click “create order” to place the order. 

6. The created order appear in the orders list with a order number with “pending” order status. The created order can be edited until the status of the order is under “pending”.

7. The order statutes can be interpreted as follows,

   1. Pending: Order created but not verified by monoZ team 

   2.	Processing: Created order has been verified by monoZ team and currently being processed 

   3.	Shipped: The order has been shipped by monoZ team 

   4.	Delivered: The order has been delivered at destination 

   5.	Cancelled: The order has been cancelled by monoZ team 

8. 	Every order status change is accompanied with an email notification to the contact email registered to the organization.

<img src={require('@site/static/img/monoZ-Link-Order.jpg').default} className="img-center" />
<img src={require('@site/static/img/monoZ-Link-Add-Order.jpg').default} className="img-center" />


### Create Protocol Configuration

Protocol configurations or configurations allow users to set the incoming and outgoing protocol of the device and route the incoming device data to its respective destinations. monoZ:Link supports native Webhook and AWS IoT Core integration. Check out the configurations section for step-by-step guide on protocol configurations.

### Create a Group

Groups provide a way to organize your devices, distribute firmware, and set a common configuration. Users may group devices based on product line, deployed regions, etc. Follow the steps below to create a group and attach a configuration.

1.	Navigate to link.monoz.io, enter “Groups” and click on the “Add Group” button on top right corner. 

2.	Enter the respective information and click “save”.

    1.	 Group name: Max 20 Alpha-Numeric characters including @$#._-  

    2.	 Available configuration: Select configuration setting for the group 

    3. Description: Free comments. 

    4.	 Set as Default: Used when the enterprise edition auto registration function is enabled. Specifies the group settings to be used for auto-registered devices. 
    
    5.	 IMEI Lock: When enabled, when an endpoint is attached to the group it locks the SIM with device IMEI. 

 <img src={require('@site/static/img/monoZ-Link-Group.jpg').default} className="img-center" />

 ### Add Device to Group

 Devices or device endpoint represents the actual device in the monoZ:Link space. Devices are uniquely identified by the ICCIDs of the SIM. Follow the steps below to attach a newly procured device endpoint with a group.

1.	Navigate to Devices menu and click on “Registered Devices”. When new endpoints are procured, upon successful communication, the endpoints are available in this space.

2.	Select the devices to be moved to your Device list. 

3.	Click “Move” button on the top left corner and select the target Group from the dropdown list. 

4.	Upon successful addition, the devices shall appear in the “Devices” page. Now the setup is complete and device endpoint is ready to receive data from actual device. We recommend a 1minute delay after moving device and before sending data.

 <img src={require('@site/static/img/monoZ-Link-Registered-Devices.jpg').default} className="img-center" />
 <img src={require('@site/static/img/monoZ-Link-Destination-Group.jpg').default} className="img-center" />
 <img src={require('@site/static/img/monoZ-Link-Devices.jpg').default} className="img-center" />

 ### View/Edit Device

 Once device is registered and attached to a configuration, users can access several information related to the device. Further, users can edit existing information of devices in the devices page.
The following four action buttons can be seen on the top right corner of Devices page,

   1.	Refresh icon: It refreshes the page 

   2.	Filter icon: It filters the device list by Group, tag, device name or ICCID. 

   3.	Registered Devices: These buttons enter the page where users can view the newly purchased device endpoints 

   4.	Others: Allow users to bulk export all/selected device to CSV, change group of selected devices. In case of changing group, the selected devices must be in the   same group. 
<img src={require('@site/static/img/monoZ-Link-Actions.jpg').default} className="img-center" />

On the devices list, each device has 3 action buttons

1.	ICCID: The 19-digit ID from the device SIM. 

2.	Device Name: Device name set by the user. 

3. Tags: Tags associated to the device by the user.

4.	Group Name: The name of group where device is categoried. 

5.	Protocol: The protocol configuration attached to the group of the device.

6.	First timestamp packet: The activation date of the device (day of first packet) 

7. Edit Button: Edit the device information such as name, group, tag. 

8.	Send Button: Initiate Downlink request. 

<img src={require('@site/static/img/monoZ-Link-Device-List.jpg').default} className="img-center" />

Upon clicking the device, a side menu pops up with more information about the device.

1.	Action: Buttons to enable/disable IMEI lock, reset SIM, enable/disable SIM.

2.	Volume: Used data volume against the remaining volume. 

3.	Connectivity: Online/Offline status of device. 

4.	Last session: Last connected operator and country. 

5.	Last GPRS update: Timestamp of the last GPRS update as captured by the network. Last GPRS update is a representative timestamp of the device`s active date and it doesn’t doesn’t represent the last message from the device. 

6.	Device IMEI: IMEI information of the device. 

7.	Device IP: IP information of the device. 

8.	SIM Status: Data status of the device. If disabled the device shall not be able transfer data. 

9.	SIM Expiry Date: By Default, the SIM card used in device have a different expiry date as compared to monoZ:Link endpoint expiry date. 

10.	Usage graph: Shows data/UL & DL message usage statistics.

<img src={require('@site/static/img/monoZ-Link-Device-Info.jpg').default} className="img-center" />

### Send data from IoT device to monoZ:Link

Payload data can be sent to monoZ:Jet or any IoT device to a registered endpoint in monoZ:Link over raw text or JSON using MQTT protocol with QOS 0 or QOS 1.

<table>
    <tr>
        <td>monoZ:Link broker </td>
        <td>data.monoz.io:1883</td>
    </tr>
    <tr>
        <td>Publish Topic</td>
        <td>< orgid>/< iccid></td>
    </tr>
</table>

monoZ ecosystem strive to create solutions with minimal data expenditure at device end and hence in the case of monoZ:Jet, it doesn’t add any metadata while transferring payload to the cloud.

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
</table>

### Send data from monoZ:Link to IoT Device

Payload data can be sent from monoZ:Link to any registered IoT device endpoint over raw text or JSON using MQTT protocol.

<table>
    <tr>
        <td>monoZ:Link broker </td>
        <td>data.monoz.io:1883</td>
    </tr>
    <tr>
        <td>Subscribe Topic</td>
        <td>< orgid>/< iccid>/sub</td>
    </tr>
</table>

Follow steps below to send a downlink message from monoZ:Link to the device,

1.	Click the send button of the device for which downlink need to be initiated 

2.	User can choose between JSON/Text message format over QOS 0 or QOS 1 

3.	Enter the message in the DL message content and press send to initiate the downlink message. 

4. If the registered device is not connected to the platform, it shall receive it upon next successful subscribe.

<img src={require('@site/static/img/monoZ-Link-DownLink-Message.jpg').default} className="img-center" />

### Add users to your account

To delegate the management of your project, collaborate with other developers, or offer read-only access, you can add team members. It’s straightforward to add members, and you can assign them different levels of access as described below.

<table>
    <tr>
        <td><b>Role </b> </td>
        <td> <b>Limitations </b></td>
        <td><b>Role </b> </td>
    </tr>
    <tr>
        <td>Admin User</td>
        <td>1</td>
        <td>All functionality </td>
    </tr>
     <tr>
        <td>General</td>
          <td> 4</td>
        <td>Full access to dashboard, groups, config, device management</td>
    </tr>
     <tr>
        <td>Read-only</td>
           <td>4</td>
        <td>Read access to dashboard, groups, config, device management</td>
    </tr>
</table>

To add new members to your monoZ:Link project:

1. Login as Tenant admin. 
2. Enter “Users” menu and click “Add User”.

<img src={require('@site/static/img/monoZ-Link-Users.jpg').default} className="img-center" />

3. Enter the respective information and click “save”.

<img src={require('@site/static/img/monoZ-Link-Save.jpg').default} className="img-center" />

    -   User name: enter any name
    -   Login ID: enter login ID. Enter in email address format.
    -	User type: specify the user role. Set to [General/Read only].
    -	Password: enter the password.
    -	Active: creates an account based on whether it is active or not. If active, the user is immediately available.

### Limitations-Group Blocking

To block connections from misbehaving servers, monoZ:Link has incorporated group blocking feature. If data push failure occur atleast 10 consecutive times and for 10minutes then monoZ:Link determine that there is a problem with the server and data push for all devices in that group will be stopped. An alert email will be sent to customer for unblocking the group and data push will resume after unblocking.

<img src={require('@site/static/img/monoZ-Link-Limitations-Group-Blocking.jpg').default} className="img-center" />

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








    