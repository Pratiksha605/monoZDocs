---
title: POC Kit
sidebar_position: 1
---

Welcome to the Quickstart Guide for setting up your monoZ POC kit. In this guide we shall cover from POC kit unboxing and demonstrate how to send your first message from your device to monoZ:Link using monoZ:Jet and vice versa. This is a quickstart guide and for detailed description & limitations of individual features/commands, check out the respective sections in monoZ docs site.

### Prerequisites
Before we get started, let’s prepare the essentials. 
1.	We assume you already have a valid monoZ:Link account. If not, ask your organization admin to provide access to your organization`s existing account or <a target="_blank" href="https://link.monoz.io/monoZLink/Login">click here</a> to create a new organization and account.
2.	We assume you already have a POC kit in hand. If not, create an order from monoZ:Link Order management tab.
3.	We assume the ICCID of the 1NCE SIM in the POC kit is already registered in monoZ:Link under Devices menu or in Registered devices under Devices menu. If it is not registered, contact support by emailing customer-care@meritech.odoo.com
4.	Prepare your host device and soldering kit/USB cable to enable connection between host device and monoZ:Jet.

### Unboxing
1.	Open your POC kit package to find the following items,\
    i.	monoZ:Jet \
    ii.	1NCE SIM \
    iii.	Standard Antenna \
    iv.	Pi Add-on board (optional board) 
2.	Upon unboxing, verify if the ICCID on the SIM is available under Devices or under Registered devices list.
    <img className="img-center" src={require('@site/static/img/quickguide1.png').default} />

### Setting Up monoZ:Jet
1.	monoZ:Jet can communicate with the host via USB mode or UART mode. By default, USB mode is enabled.
2.	If you want the host to communicate with monoZ:Jet using UART, then monoZ:Jet can be switched to UART mode by one of the following methods, \
    i.	Method 1: Cutoff the optional part of the monoZ:Jet board using PCB cutter. This is a permanent switch and monoZ:Jet cannot be used under USB mode again, however it is ideal for space constrained usecases. 
    <img className="img-center" src={require('@site/static/img/quickguide2.png').default} />
    ii.	Remove the following 3 resistors shown below to disconnect the communication line between USB and the processor. In this method monoZ:Jet can be converted to USB mode by mounting the resistors back to its appropriate position.
    <img className="img-center" src={require('@site/static/img/quickguide3.png').default} />
3.	Check the communication configurations for USB mode & UART mode <a target="_blank" href="https://docs.monoz.io/docs/monoZJet/hostcommunication">here</a>.
4.	For this quickstart guide, we shall use our PC as the host device and communicate with monoZ:Jet over USB using a terminal emulator.
    <img className="img-center" src={require('@site/static/img/quickguide4.png').default} />

Caution:\
i)	Do not power up monoZ:Jet via USB and 5V cascade VBUS pin at the same time. This may cause the monoZ:Jet to fail. The power source may also face damage (or overcurrent).\
ii)	When in USB mode, the cascade UART pins shouldn’t be connected to any data source. monoZ:Jet shall face device failure when data is transmitted through cascade UART when monoZ:Jet is in USB mode.



### Setting Up monoZ:Link
1.	If this is your first device, the monoZ:Link setup is required. Let’s log in to monoZ:Link and start with protocol configurations. Protocol configurations allow you to transform protocol and forward your data from monoZ:Jet to your custom endpoints in public cloud like AWS or your own on-premises. For this guide, we shall push the data to a 3rd party custom HTTPS endpoint.
2.	Let’s navigate to protocol configurations and create a new webhook configuration. 
    <img className="img-center" src={require('@site/static/img/quickguide5.png').default} />
3.	Once configuration is done, let's navigate to Groups and create a new group. If there is no group, then the first created group shall be automatically allocated as “Default” group. 
    <img className="img-center" src={require('@site/static/img/quickguide6.png').default} />
4.	As we didn’t have a default group during time of purchase let’s manually assign a group to the device. Navigate to Registered devices in the Devices page and select the ICCID of the target device. When a default group was available during purchase (purchase here refers to the step when device ICCIDs are added to user`s monoZ:Link account), then the new devices are automatically assigned to the default group, thereby making them ready to use upon purchase. With this step, monoZ:Link setup is complete.
    <img className="img-center" src={require('@site/static/img/quickguide7.png').default} />
 

### Send data from monoZ:Jet
1.	Let’s initiate data transfer from host to monoZ:Jet. As mentioned earlier, we shall use PC as the host device for this QuickStart guide. To begin, attach the standard antenna on u.FL port (Cellular) and insert the 1NCE SIM from the POC package to monoZ:Jet.
    <img className="img-center" src={require('@site/static/img/quickguide8.png').default} />
 
2.	Connect monoZ:Jet to your PC via USB-C cable. Once connected you should immediately notice the Power LED (Red) light up on the monoZ:Jet board.
    <img className="img-center" src={require('@site/static/img/quickguide9.png').default} />
 
3.	Now, Let's set up the terminal emulator to establish communication with monoZ:Jet. <a target="_blank" href="https://docs.monoz.io/v1/_d_e_b_u_g__c_o_n_s_o_l_e.html">Click here to view</a> step by step guide on setting PUTTY, an open-source software terminal emulator.
4.	Upon power on, monoZ:Jet sends +MZREADY to the host signaling readiness to receive commands for next action. This is received within milliseconds on connecting USB to monoZ:Jet and hence you may not be able to capture it on the emulator console. 
5.	By default monoZ:Jet is set with all supported network bands, and we strongly advise to set the recommended bands in your target regions of operation to quicken the time to network connection. Refer to the MZBAND MZ command for more details on recommended band settings. Since we are performing this setup from Japan, let’s set the band for Japan. This is a one-time setting and doesn’t need to be repeated unless required to change the target region for usage. +MZBAND: 0 response refers to successful Band setting.
    <img className="img-center" src={require('@site/static/img/quickguide10.png').default} />
6.	Next let's go ahead and set the ORG ID for monoZ:Jet. ORG ID is a security feature by monoZ:Link to ignore data transferred from devices not belonging to the tenants. ORG ID is set by the user during organization creation and can be verified under the “Profile” section of the organization/tenant admin. ORG ID is a one-time setting on monoZ:Jet.
    <img className="img-center" src={require('@site/static/img/quickguide11.png').default} /><br/>
    <img className="img-center" src={require('@site/static/img/quickguide12.png').default} />

7.	Now let’s initialize monoZ:Jet and get connected using MZSTART. There could be chances MZSTART might respond back with +MZSTART: 3 or +MZSTART: 4, where monoZ:Jet is retrying to connect to network or monoZ:Link platform. In such cases host is expected to wait for +MZSTART: 0. When searching for network, monoZ:Jet searches all the set bands in incremental order to attach to the best possible network supported in the region, and hence setting the recommended regional bands plays a crucial role to minimize the time to connect with network. With the recommended band settings, we can expect first network connection to be completed in under 2 minutes. While creating this guide, we received successful +MZSTART:0 in about 45 seconds. 
    <img className="img-center" src={require('@site/static/img/quickguide13.png').default} />
8.	Once the +MZSTART: 0 is recieved, host can send data to monoZ:Link using the MZSEND command. 
    <img className="img-center" src={require('@site/static/img/quickguide14.png').default} />

9.	The transmitted data is received by monoZ:Link through a secure channel, and then data is pushed to the configured server as per configuration settings. The data pushed from monoZ:Jet was successfully received on the 3rd party server via monoZ:Link.
    <img className="img-center" src={require('@site/static/img/quickguide15.png').default} />
10.	Use MZRECEIVE to enable downlink passthrough on monoZ:Jet. Once enabled, monoZ:Jet push the data received from monoZ:Link to the host using the +MZRECEIVE URC. If downlink is required, host needs to enable downlink passthrough using MZRECEIVE after every monoZ:Jet power on, hardware reset and wakeup from MZSLEEP=0.
    <img className="img-center" src={require('@site/static/img/quickguide16.png').default} />
11.	Let’s send downlink from monoZ:Link.
    <img className="img-center" src={require('@site/static/img/quickguide17.png').default} /><br/>
    <img className="img-center" src={require('@site/static/img/quickguide18.png').default} />
 
12.	Congrats! With this, you have learnt the basics of enabling connectivity with monoZ:Jet and monoZ:Link. Now go transform your physical products to connected solutions. In case you have any specific questions, create a support request by emailing us at customer-care@meritech.odoo.com
