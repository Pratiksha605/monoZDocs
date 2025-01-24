---
title: Host Communication
sidebar_position: 3
---


Communication with monoZ:Connect is simplified using monoZ:Connect Service(MZCS) Application. MZCS can be installed on Windows/Linux platform and using the MZCS commands, users can communicate to monoZ:Connect from the user application. Upon installation of MZCS, use the MZCS commands to interact with monoZ:Connect with MZCS.

<img src={require('@site/static/img/monoZ-Connect-Host-Comm.jpg').default} className="img-center" />

### System Requirements(MZCS)

#### Windows Platform

<table>
    <tr>
        <td> <b>Item</b></td>
        <td> <b>Requirement</b></td>
    </tr>
    <tr>
        <td>OS Version</td>
        <td>
        <codeBlock>
        Windows 7 (64bit)/ Windows10 (64 bit)/ Windows11 (64bit)/ <br/>
Windows Server 2008 (64bit)/ Windows Server 2012 (64bit)/ <br/>
Windows Server 2016 (64bit)/ Windows Server 2019 (64 bit) 

       </codeBlock>
</td>
    </tr>
     <tr>
        <td>CPU</td>
        <td>
      <codeBlock>
       Intel Pentium 4415Y @ 1.60GHz and later
      </codeBlock>
</td>
    </tr>
</table>

#### Linux Platform

<table>
    <tr>
        <td> <b>Item</b></td>
        <td> <b>Requirement</b></td>
    </tr>
    <tr>
        <td>Supported devices</td>
        <td>
        <codeBlock>
     Tinkerboard 2, 2S, 3S
       </codeBlock>
</td>
    </tr>
</table>

### Pre-requisites 
* To ensure proper use of the device, it is important to follow the below steps prior for using the device.

    -	Connect the MZC device to the PC via USB.

    -	Set the port settings for the specific COM port to which the device is connected, via the “Device manager”.

        1.	Bit rate:		115200

        2.	Data bits:	8

        3.	Parity:		None

        4.	Stop bits:	1

        5.	Flow control:	None

- monoZ:Connect use LwM2M protocol over NIDD to interact with the cloud. Users are expected to have a basic understanding of LwM2M protocol.
- monoZ:Connect connect exclusively to SoftBank IoT Platform. Users are expected to have understanding of the platform and how to trigger requests from the platform.