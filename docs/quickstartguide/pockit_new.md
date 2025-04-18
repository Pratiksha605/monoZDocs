---
title: monoZ:Jet POC Kit
sidebar_position: 1
---

import CodeBlock from '@theme/CodeBlock';  

Welcome to the Quickstart Guide for setting up your monoZ POC kit. In this guide we shall cover from POC kit unboxing and demonstrate how to send your first message from your monoZ:Jet to monoZ:Link and vice versa. This is a quickstart guide and for detailed description & limitations of individual features/commands, check out the respective sections in monoZ docs site.


### Prerequisites
Before we get started, let’s prepare the essentials. 
1.	We assume you already have a valid monoZ:Link account. If not, ask your organization admin to provide access to your organization`s existing account or <a target="_blank" href="https://link.monoz.io/monoZLink/Login">click here</a> to create a new organization and account.
2.	We assume you already have a POC kit in hand. If not, create an order from monoZ:Link Order management tab.
3.	We assume the ICCID of the 1NCE SIM in the POC kit is already registered in your monoZ:Link account under Devices menu or in Registered devices under Devices menu. If it is not registered, contact support by emailing customer-care@meritech.odoo.com
4.	Prepare your host device which shall prepare the payload data for monoZ:Jet. 

### Unboxing
1.	Open your POC kit package to find the following items,\
    i.	monoZ:Jet \
    ii.	1NCE SIM \
    iii.	Standard Antenna \
    iv.	Pi Add-on board (optional board) 
2.	Upon unboxing, verify if the ICCID on the SIM is available under "Devices" or under "Registered devices" list of your monoZ:Link account. If it is under "Registerd devices", create a group and move it to "Devices".
    <img className="img-center" src={require('@site/static/img/quickguide1_1.png').default} /><br/>
    <img className="img-center" src={require('@site/static/img/quickguide1_2.png').default} />

### monoZ : Jet setup
1.	monoZ:Jet can communicate with the host via USB mode or UART mode. By default, USB mode is enabled.
2.	If you wish to setup monoZ:Jet to UART mode, then then following the instructions in <a target="_blank" href="https://docs.monoz.io/docs/monoZJet/hostcommunication">monoZ:Jet Host communication page </a> for detailed steps.
3.	For this quickstart guide, we shall use our PC as the host device and communicate with monoZ:Jet over USB using a terminal emulator.
    <img className="img-center" src={require('@site/static/img/quickguide4.png').default} />

##### Caution: 
i) Do not power up monoZ:Jet via USB and 5V cascade VBUS pin at the same time. This may cause monoZ:Jet to malfunction. The power source may also face overcurrent and potential damage.\
ii) When in USB mode, the cascade UART pins should remain disconnected from any data source. Transmitting data through the cascade UART while monoZ:Jet is in USB mode may result in signal corruption and monoZ:Jet malfunction.


### monoZ : Link Setup
Lets setup a fresh monoZ:Link account. In case you already have a device registered to a valid group in monoZ:Link then skip this section. In this guide we`ll setup a webhook configuration and attach it to the registered device.

1. Navigate to “Configuration” -> “Add Configuration” -> "Webhook". Add the destination server details and create the configurations.

   1.	Specify MQTT in the Source protocol 

   2.	Enter your configuration name 

   3.	Enter suitable description for the configuration  

   4.	Enter the HTTP/HTTPS URL for the destination Server 

   5.	Select the Authorization method under the Parameters 

   6.	If you wish to give a custom header (e.g., group name, etc.) add your custom Header 

   7.	Choose Between ICCID or Topic to be sent along with the payload to the destination server 
   
   8.	Upon Submit the configuration shall be created

  <img src={require('@site/static/img/monoZ-Link-Wehbook.jpg').default} className="img-center" />
  <img src={require('@site/static/img/monoZ-Link-Protocol-Configuration.png').default} className="img-center" />

2. Next, navigate to Groups -> Add Group. Enter the respective information and click “save”.
    1. Group name: Max 20 Alpha-Numeric characters including @$#._-  
    2. Available configuration: Select protocol configuration for the group.
    3. Description: Free comments.
    4. Set as Default: Sets group as default. The new devices added to monoZ:Link shall be automatically added to the default group. 
    5. IMEI Lock: When enabled, when an device is attached to the group it locks the SIM of device with the currently connected device IMEI. If its a new SIM that hasn`t been connected to network, then enabling this feature will lock the SIM to the IMEI of its first device. If the IMEI locked SIM is swapped to another device it will fail to connect with network. 

 <img src={require('@site/static/img/monoZ-Link-Group.jpg').default} className="img-center" />

3. Now Devices represents the SIM used by actual device in the field. Follow the steps below to attach a newl device with a group.

    1.	Navigate to Devices menu and click on “Registered Devices”. When new endpoints are procured, upon successful communication, the endpoints are available in this space.
    2.	Select the devices to be moved to your Device list. 
    3.	Click “Move” button on the top left corner and select the target Group from the dropdown list. 
    4.	Upon successful addition, the devices shall appear in the “Devices” page. Now the setup is complete and device is set to receive data from physical device. However, we recommend a 1minute delay after moving device and before sending data.

 <img src={require('@site/static/img/monoZ-Link-Registered-Devices.jpg').default} className="img-center" />
 <img src={require('@site/static/img/monoZ-Link-Destination-Group.jpg').default} className="img-center" />
 <img src={require('@site/static/img/monoZ-Link-Devices.jpg').default} className="img-center" />


### Send data from monoZ : Jet
1.	Let’s initiate data transfer from host to monoZ:Jet. As mentioned earlier, we shall use PC as the host device for this QuickStart guide. To begin, attach the standard antenna on u.FL port (Cellular) and insert the 1NCE SIM from the POC package to monoZ:Jet.
    <img className="img-center" src={require('@site/static/img/quickguide8.png').default} />
 
2.	Connect monoZ:Jet to your PC via USB-C cable. Once connected you should immediately notice the Power LED (Red) light-up on the monoZ:Jet board.
    <img className="img-center" src={require('@site/static/img/quickguide9.png').default} />

3.	Now, let's set up the terminal emulator to communication with monoZ:Jet from PC. <a target="_blank" href="https://docs.monoz.io/v1/_d_e_b_u_g__c_o_n_s_o_l_e.html">Click here to view</a> step by step guide on setting PUTTY, an open-source software terminal emulator.

4.	Upon power on, monoZ:Jet sends +MZREADY to the host signaling readiness to receive commands for next action. This is received within milliseconds on connecting USB to monoZ:Jet and hence you may not be able to capture it on the emulator console. 

5.	Once ready, we recommend band setting using <a target="_blank" href="https://docs.monoz.io/docs/monoZJet/hostcommunicationcommands#set-band"> MZBAND command</a>. By default monoZ:Jet is set with all supported network bands, and we strongly advise to set the recommended bands for your target regions of operation to quicken the time to network connection. Since we are performing this setup from Japan, let’s set the band for Japan. +MZBAND: 0 response refers to successful Band setting. Band setting is an one-time setting on monoZ:Jet.
    
   <CodeBlock language="javascript" title="Execution Command" className="execution">
{` MZBAND=0x0,0x20081,0x0`}
    </CodeBlock>

  <CodeBlock language="javascript" title="Response"  className="responseJet">
{`MZOK
+MZBAND: 0 `}
</CodeBlock>    

    <img className="img-center" src={require('@site/static/img/quickguide10.png').default} />


6.	Next let's go ahead and set the ORG ID for monoZ:Jet using <a target="_blank" href="https://docs.monoz.io/docs/monoZJet/hostcommunicationcommands#set-org-id"> MZORGID MZ command</a>. ORG ID is a security feature by monoZ:Link to validate the device transferred data to monoZ:Link. ORG ID is an one-time setting on monoZ:Jet.
    <img className="img-center" src={require('@site/static/img/quickguide11.png').default} /><br/>

   <CodeBlock language="javascript" title="Execution Command" className="execution">
    {`MZORGID="xxxx"`}
    </CodeBlock>

    <CodeBlock language="javascript" title="Response"  className="responseJet">
{`MZOK
+MZORGID: 0`}
</CodeBlock>

     <img className="img-center" src={require('@site/static/img/quickguide12.png').default} />

7. Next, let’s initialize monoZ:Jet using <a target="_blank" href="https://docs.monoz.io/docs/monoZJet/hostcommunicationcommands#module-start">MZSTART </a>. There could be chance that MZSTART might respond back with +MZSTART: 3 or +MZSTART: 4, where monoZ:Jet is retrying to connect to network or monoZ:Link platform. In such cases host is expected to wait for +MZSTART: 0. When searching for network, monoZ:Jet searches all the set bands in incremental order to attach to the best possible network supported in the region, and hence setting the recommended regional bands plays a crucial role to minimize the time to connect with network. 

    <CodeBlock language="javascript" title="Execution Command" className="execution">
    {`MZSTART`}
    </CodeBlock>

    <CodeBlock language="javascript" title="Response"  className="responseJet">
    {`
     MZOK
     +MZSTART: 0
    `}
    </CodeBlock>

    <img className="img-center" src={require('@site/static/img/quickguide13.png').default} />
8. Once the +MZSTART: 0 is recieved, host can send data to monoZ:Link using the <a target="_blank" href="https://docs.monoz.io/docs/monoZJet/hostcommunicationcommands#data-send">MZSEND</a> command. 

    <CodeBlock language="javascript" title="Execution Command" className="execution">
    {`MZSEND=quickstartguide_test
    `}
    </CodeBlock>
    
   <CodeBlock language="javascript" title="Response"  className="responseJet">
    {`
     MZOK
     +MZSEND: 0
    `}
    </CodeBlock>

    <img className="img-center" src={require('@site/static/img/quickguide14.png').default} />

9. The data is sent to monoZ:Link through a secure channel. From monoZ:Link it is then further pushed to the configured server as per its protocol configuration. The image below shows the successful receipt of data on the 3rd party server thorugh monoZ:Link.
    <img className="img-center" src={require('@site/static/img/quickguide15.png').default} />


10. Use <a target="_blank" href="https://docs.monoz.io/docs/monoZJet/hostcommunicationcommands#dl-data-receive">MZRECEIVE</a> to enable downlink passthrough on monoZ:Jet. Once enabled, monoZ:Jet push the data received from monoZ:Link to the host using the +MZRECEIVE URC. 

    <CodeBlock language="javascript" title="Execution Command" className="execution">
    {`MZRECEIVE`}
    </CodeBlock>

    <CodeBlock language="javascript" title="Response"  className="response">
    {` 
     MZOK
     +MZRECEIVE: 0
    `}
    </CodeBlock>

    <img className="img-center" src={require('@site/static/img/quickguide16.png').default} />
11.	Let’s send downlink from monoZ:Link.
    <img className="img-center" src={require('@site/static/img/quickguide17.png').default} /><br/>

    <CodeBlock language="javascript" title="Response"  className="response">
    {` 
     +MZRECEIVE: 2,"{"key1":"value1","key2":" value2 "}"
     `}
    </CodeBlock>
    <img className="img-center" src={require('@site/static/img/quickguide18.png').default} />
 
12. Congrats! With this, you have learnt the basics of enabling connectivity with monoZ:Jet and monoZ:Link. Now go transform your physical products to connected solutions. In case you have any specific questions, create a support request by emailing us at customer-care@meritech.odoo.com