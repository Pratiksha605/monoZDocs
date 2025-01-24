---
title: MZCS Application Commands
sidebar_position: 4
---

import CodeBlock from '@theme/CodeBlock';  
import MDXComponents from '@theme-original/MDXComponents';

### MZCS Start Process

MZCS can be executed as a standalone application from the CLI or it can be controlled and run from the Process-handler. The service can be started by following the specified pattern,

<CodeBlock language="javascript" title="Execution Command" className="execution">
{`monoZConnectService.exe-c<COM Port>`}
</CodeBlock>

<CodeBlock language="javascript" title="Response"  className="response">
{`<upon success>
MZOK 
<upon failure>
MZNG`}
</CodeBlock>

#### Defined Values
<div className="card">
    <div className="card__body">
        <div className='row'> 
            <div className='col col--4'> 
                COM Port
            </div>
            <div className='col col--8'> Valid COM Port</div>
        </div>
    </div>
</div>

#### Maximum Response Time
<table>
    <tr>
        <td>15s</td>
    </tr>
</table>

### MZCS Device Initialization
This API establishes the communication with the MZC device and check the device’s configuration status. If MZC device is not configured, the service will be closed and an appropriate message will be displayed. To ensure proper usage, this API must be called first after the start of MZCS application.

<CodeBlock language="javascript" title="Execution Command" className="execution">
{`mzcs_init `}
</CodeBlock>

<CodeBlock language="javascript" title="Response"  className="response">
{`<upon success>
MZOK
<upon failure>
MZRUNDEVICECONFIG
MZNG`}
</CodeBlock>

#### Defined Values
<div className="card">
    <div className="card__body">
        <div className='row'> 
            <div className='col col--4'> 
                `None `
            </div>
            <div className='col col--8'> 
            </div>
        </div>
    </div>
</div>

#### Maximum Response Time
<table>
    <tr>
        <td>311 s + 900 ms</td>
    </tr>
</table>

### MZCS Device Configuration
The main function of this API is to set up the MZC device by configuring its Band, APN, LwM2M settings. The configured settings will be saved in the device memory. Once the device has been successfully configured, this API returns the endpoint name that will be used for further communication with the PF. Additionally, the application will close its service upon completion of this API. It is recommended to use this API when initially configuring the device or when updating the existing settings. However, frequent usage of this API should be avoided as it is intended for configuring the device only.

<CodeBlock language="javascript" title="Execution Command" className="execution">
{`mzcs_devcfg `}
</CodeBlock>

<CodeBlock language="javascript" title="Response"  className="response">
{`<upon success>
MZOK 
<upon failure> 
MZNG`}
</CodeBlock>

#### Defined Values
<div className="card">
    <div className="card__body">
        <div className='row'> 
            <div className='col col--4'> 
                `None `
            </div>
            <div className='col col--8'> 
            </div>
        </div>
    </div>
</div>

#### Maximum Response Time
<table>
    <tr>
        <td>1407 s + 200 ms</td>
    </tr>
</table>

### MZCS Set Network Attach
To establish communication with the Server/Platform (PF), the MZC device needs network connectivity, which can be enabled by using this API. It is important to note that the usage of this API should be restricted to the following conditions:
- It must be called after a successful execution of the “MZCS Device Initialization” API.
- It should not be called before network disconnection (network detach).
- It should not be called until the registration interval expires. For more information, please refer to “Network Attach Attempt”.

<CodeBlock language="javascript" title="Execution Command" className="execution">
{`mzcs_nwattach `}
</CodeBlock>

<CodeBlock language="javascript" title="Response"  className="response">
{`<upon success>
MZOK 
<upon failure> 
MZNG`}
</CodeBlock>

#### Defined Values
<div className="card">
    <div className="card__body">
        <div className='row'> 
            <div className='col col--4'> 
                `None `
            </div>
            <div className='col col--8'> 
            </div>
        </div>
    </div>
</div>

#### Maximum Response Time
<table>
    <tr>
        <td>530 s + 200 ms</td>
    </tr>
</table>

### MZCS Set Data
This API enables the storage of data on the device for a specific Object ID, Instance ID, Resource ID. It is important to note that the data must be in Hex format and must not exceed the specified limit of 1428 bytes after conversion to Hex. This stored data will be transferred to the server, whenever there’s a read request from the server.

<CodeBlock language="javascript" title="Execution Command" className="execution">
{`mzcs_setdata: -o <OID> -i <IID> -r <RID> -d <Data> `}
</CodeBlock>

<CodeBlock language="javascript" title="Response"  className="response">
{`<upon success> 
MZOK
<upon failure>
MZNG`}
</CodeBlock>

#### Defined Values
<div className="card">
    <div className="card__body">
        <div className='row'> 
            <div className='col col--4'> 
                `OID: `
            </div>
            <div className='col col--8'> 
                LwM2M Object (19) 
            </div>
        </div>
        <div className='row'> 
            <div className='col col--4'> 
                `IID: `
            </div>
            <div className='col col--8'> 
                LwM2M Instance (0~2)
            </div>
        </div>
        <div className='row'> 
            <div className='col col--4'> 
                `RID: `
            </div>
            <div className='col col--8'> 
                LwM2M Resource (0)
            </div>
        </div>
        <div className='row'> 
            <div className='col col--4'> 
                `Data: `
            </div>
            <div className='col col--8'> 
                Hex string (max. 1428 bytes)
            </div>
        </div>
    </div>
</div>

#### Maximum Response Time
<table>
    <tr>
        <td>15 s + 100 ms</td>
    </tr>
</table>

### MZCS Send Data
This API enables transfer of data to the server for a specific Object ID, Instance ID, Resource ID. Additionally, it overwrites the previous stored data on the device. It is important to note that the data must be in Hex format and must not exceed the specified limit of 1428 bytes after conversion to Hex.\
This API has a restriction on the frequency of usage, which is set to 900 second by default. For more information, please refer Section 5.7 Send Data Limitation Lock in the MZCS message description.

<CodeBlock language="javascript" title="Execution Command" className="execution">
{`1. mzcs_senddata: -o <OID> -i <IID> -r <RID> -d <Data> -a <ACK>
2. mzcs_senddata: -o <OID> -i <IID> -r <RID> -d <Data> -d <Data>`}
</CodeBlock>

<CodeBlock language="javascript" title="Response"  className="response">
{`
<upon success> 
MZOK
<upon failure>
MZNG
`}
</CodeBlock>

#### Defined Values
<div className="card">
    <div className="card__body">
        <div className='row'> 
            <div className='col col--4'> 
                `OID: `
            </div>
            <div className='col col--8'> 
                LwM2M Object (19) 
            </div>
        </div>
        <div className='row'> 
            <div className='col col--4'> 
                `IID: `
            </div>
            <div className='col col--8'> 
                LwM2M Instance (0~2)
            </div>
        </div>
        <div className='row'> 
            <div className='col col--4'> 
                `RID: `
            </div>
            <div className='col col--8'> 
                LwM2M Resource (0)
            </div>
        </div>
        <div className='row'> 
            <div className='col col--4'> 
                `Data: `
            </div>
            <div className='col col--8'> 
                Hex string (max. 1428 bytes)
            </div>
        </div>
        <div className='row'> 
            <div className='col col--4'> 
                `ACK: `
            </div>
            <div className='col col--8'> 
                0: Non conformable notify\
                1: Conformable notify (default)
            </div>
        </div>
    </div>
</div>

#### Maximum Response Time
<table>
    <tr>
        <td>245 s + 200 ms</td>
    </tr>
</table>

Please note that if the send data API returns with MZNG after displaying the message “Sending OK”, MZCS will clear the data stored on the device for the specified OID, IID and RID by replacing it with null data.

### MZCS Get RF Status
This API provides the RF status of the device. If `-r` is used in the API it provides raw RF info, and if it is not used then RF status is provided in simplified form.

<CodeBlock language="javascript" title="Execution Command" className="execution">
{`mzcs_rf -r`}
</CodeBlock>

<CodeBlock language="javascript" title="Response"  className="response">
{`<upon success - simplified>
RF status: [1] Good
           [2] Poor
           [3] Bad
           [4] Cell searching
           [5] No service: 
MZOK
<upon failure - simplified>
RF status: [6] No response
MZNG
<upon success - raw>
<earfcn>,<cellID>,<RSRP>,<RSRQ>,<SINR>
MZOK
<upon failure - raw>
MZNG`}
</CodeBlock>

#### Defined Values
<div className="card">
    <div className="card__body">
        <div className='row'> 
            <div className='col col--4'> 
                `None`
            </div>
            <div className='col col--8'> 
            </div>
        </div>
    </div>
</div>

#### Maximum Response Time
<table>
    <tr>
        <td>15 s + 100 ms</td>
    </tr>
</table>

### MZCS Device Reset
This API allows the user to restart the MZC device, returning it to its default state without altering any configuration settings. Following the reset the user must initiate the “MZCS Network Attach” API to reconnect and re-register with the network.

<CodeBlock language="javascript" title="Execution Command" className="execution">
{`mzcs_devicereset`}
</CodeBlock>

<CodeBlock language="javascript" title="Response"  className="response">
{`<upon success> 
MZOK
<upon failure>
MZNG`}
</CodeBlock>

#### Defined Values
<div className="card">
    <div className="card__body">
        <div className='row'> 
            <div className='col col--4'> 
                `None`
            </div>
            <div className='col col--8'> 
            </div>
        </div>
    </div>
</div>

#### Maximum Response Time
<table>
    <tr>
        <td> 120 s + 100ms</td>
    </tr>
</table>

### MZCS Device Heartbeat Check
This API enables the user to verify if the MZC device is currently active.

<CodeBlock language="javascript" title="Execution Command" className="execution">
{`mzcs_heartbeat`}
</CodeBlock>

<CodeBlock language="javascript" title="Response"  className="response">
{`<upon success> 
MZOK
<upon failure>
MZNG`}
</CodeBlock>

#### Defined Values
<div className="card">
    <div className="card__body">
        <div className='row'> 
            <div className='col col--4'> 
                `None`
            </div>
            <div className='col col--8'> 
            </div>
        </div>
    </div>
</div>

#### Maximum Response Time
<table>
    <tr>
        <td>30 s + 200ms</td>
    </tr>
</table>

### MZCS Set LED
This API enables the user to control the Red (LED1) and Blue (LED2) LED, allowing them to turn it on, off, or make it blink.

<CodeBlock language="javascript" title="Execution Command" className="execution">
{`1. mzcs_led: -l <LED> -m <Mode> -t <Time ms>
2. mzcs_led: -l <LED> -m <Mode>`}
</CodeBlock>

<CodeBlock language="javascript" title="Response"  className="response">
{`<upon success>
MZOK 
<upon failure>
MZNG`}
</CodeBlock>

#### Defined Values
<div className="card">
    <div className="card__body">
        <div className='row'> 
            <div className='col col--4'> 
                `LED`
            </div>
            <div className='col col--8'> 
                0: Both, 1: LED1, 2: LED2
            </div>
        </div>
        <div className='row'> 
            <div className='col col--4'> 
                `Mode: `
            </div>
            <div className='col col--8'> 
                0: OFF, 1: ON, 2: BLINK
            </div>
        </div>
        <div className='row'> 
            <div className='col col--4'> 
                `Time: `
            </div>
            <div className='col col--8'> 
                100 ms ~ 3000 ms (500 ms default)
            </div>
        </div>
    </div>
</div>

#### Maximum Response Time
<table>
    <tr>
        <td>66 s</td>
    </tr>
</table>

### MZCS Get COM Port
This API provides the COM port number being used for communication between the application and the MZC device.

<CodeBlock language="javascript" title="Execution Command" className="execution">
{` mzcs_com: ?`}
</CodeBlock>

<CodeBlock language="javascript" title="Response"  className="response">
{`<upon success>
Port:<COM Port>
MZOK 
<upon failure>
MZNG`}
</CodeBlock>

#### Defined Values
<div className="card">
    <div className="card__body">
        <div className='row'> 
            <div className='col col--4'> 
                `code?: `
            </div>
            <div className='col col--8'> 
                Query
            </div>
        </div>
    </div>
</div>

#### Maximum Response Time
<table>
    <tr>
        <td> 500 ms</td>
    </tr>
</table>

### MZCS Help
This API enumerates the available API commands that are supported.

<CodeBlock language="javascript" title="Execution Command" className="execution">
{`mzcs_help`}
</CodeBlock>

<CodeBlock language="javascript" title="Response"  className="response">
{`<upon success>
List of API
MZOK
<upon failure>
MZNG
`}
</CodeBlock>

#### Defined Values
<div className="card">
    <div className="card__body">
        <div className='row'> 
            <div className='col col--4'> 
                `None`
            </div>
            <div className='col col--8'> 
            </div>
        </div>
    </div>
</div>

#### Maximum Response Time
<table>
    <tr>
        <td> 500 ms</td>
    </tr>
</table>

### MZCS Stop Process
This API terminates the MZCS process and shut down its related services

<CodeBlock language="javascript" title="Execution Command" className="execution">
{`mzcs_stop`}
</CodeBlock>

<CodeBlock language="javascript" title="Response"  className="response">
{`<upon success>
MZOK
<upon failure>
MZNG`}
</CodeBlock>

#### Defined Values
<div className="card">
    <div className="card__body">
        <div className='row'> 
            <div className='col col--4'> 
                `None`
            </div>
            <div className='col col--8'> 
            </div>
        </div>
    </div>
</div>

#### Maximum Response Time
<table>
    <tr>
        <td>391s + 100 ms</td>
    </tr>
</table>

<br/>
# MZCS MESSAGE/ACK DESCRIPTION

### MZOK

MZOK represents that the process has been completed successfully and the service application is ready to receive next request.

### MZNG

MZNG represents that the process is not a success and the service application is ready to receive next request.

### Connection ACK

Connection ACK, compress of two message “Connection OK/Connection NG”. It states connection of the MZCS with the PF is Success/Fail respectively.

### Registration ACK

Registration ACK, compress of two message “Registration OK/Registration NG”. It states that the  registration process of the MZC with the PF is Success/Fail respectively. \
Note 1: If the registration is not a success, retry network attach process by using “MZCS Network Attach” API. \
Note 2: If the registration is still not a success after retry, contact the necessary party.

### Observe ACK

	On receiving observe from the PF, service application will provide the details of observe received. If the observe message has code [0], meaning the device has been provided with the token for sending the data to PF.  If the observe message has code [1], meaning the token has been cancelled. Cancellation of the token could be, due to the token has expired.

  #### Message: 
    ```jsx
    MZOBSERVE, <CODE>, <OID>, <IID>, <RID> 
    ```

  #### Parameters
<div className="card">
            <div className="card__body">
                <div className="row mb-2">
                    <div className="col col--4"><code>CODE: </code></div>
                    <div className="col col--8">[0] Observe start; [1] Observe cancel</div>
                </div>
                <div className="row mb-2">
                    <div className="col col--4"><code>OID: </code></div>
                    <div className="col col--8">19</div>
                </div>
                <div className="row mb-2">
                    <div className="col col--4"><code>IID: </code></div>
                    <div className="col col--8">0~2</div>
                </div>
                <div className="row mb-2">
                    <div className="col col--4"><code>RID: </code></div>
                    <div className="col col--8">0</div>
                </div>
            </div>
        </div>
        <br/>
        Note 1: Before using “MZCS Send data” API, receiving observe start token is a must. \
Note 2: After Observe cancel, PF will not accept data. Hence the user has to wait for the next observe start token.


### Notify Process ACK

“MZCS Send data” API will display the following message as shown on the line diagram below, based on the acknowledgement option chosen. Sending OK/NG if acknowledgment option is chosen as Non-Conformable notify, refer Figure 2 and Send OK/NG & Sending OK/NG if acknowledgment option is chosen as conformable notify, refer Figure 3. 
<div className="card">
    <div className="card_body">
        <img src={require('@site/static/img/monoZ-Connect-Non-Comforable.jpg').default} className="img-center" />
   </div>
</div>

<div className="card">
   <div className="card_body">
        <img src={require('@site/static/img/monoZ-Connect-Comforable-Notify.jpg').default} className="img-center" />
   </div>
</div>

### Send Data Limitation Lock

“MZCS Send data” API will be locked for 900 seconds after its usage, in order to restrict the data being transferred to PF. When lock is released the following message will be seen “MZSEND,1,00:00:00” where, [1] unlocked. 

On using “MZCS Send data” API when lock is in progress the following message will be seen  “MZSEND,0,HH:MM:SS” where, [0] Locked; HH:MM:SS represents the absolute wait time.

### Write/DL Request

On receiving Write request from the PF, service application will provide the information as follows,

#### Message: 
    ```jsx
    MZDLREQ,<OID>,<IID>,<RID>,<DATA> 
    ```

  #### Parameters
 <div className="card">
            <div className="card__body">
                <div className="row mb-2">
                    <div className="col col--4"><code>OID: </code></div>
                    <div className="col col--8">19</div>
                </div>
                <div className="row mb-2">
                    <div className="col col--4"><code>IID: </code></div>
                    <div className="col col--8">0~2</div>
                </div>
                <div className="row mb-2">
                    <div className="col col--4"><code>RID: </code></div>
                    <div className="col col--8">0</div>
                </div>
                <div className="row mb-2">
                    <div className="col col--4"><code>Data: </code></div>
                    <div className="col col--8">Hex string (max. 1438 characters)</div>
                </div>
            </div>
        </div>
        <br/>

### Network Attach Attempt

In MZC, for a successful registration it requires a minimum of 242 second interval before the retry/re-use of “MZCS Network Attach” API. Hence, the MZCS locks the “MZCS Network attach” API usage, the following message will be seen on lock release, “MZNW,1,00:00:00” where, [1] unlocked. 

On using the “MZCS Network Attach” API when lock is in progress, the following message will be seen  “MZNW,0,HH:MM:SS” where, [0] Locked; HH:MM:SS represents the absolute wait time.

### COM Port Disconnection

After the start of the application, if the COM port is disconnected the following message will be seen < COM port> disconnected.

### User Request During Ongoing Process

During an API is in progress on receiving a new request, MZCS respond with the following message “MZPROCESSRUNNING”.

### Device Failure

If an API failed and MZCS responded with the following message “MZCSDEVICEFAILURE”. Follow the below steps,
        -	Ensure if the MZCS service has been ended, if not wait for the service to end.
        -	Disconnect the device from the PC.
        -	Reconnect the device with the PC after few minutes.
        -	Now run the application again.
        -	If the issue still prevails contact the necessary party.

### Valid Request

On receiving a API request, MZCS validate the request and the following arguments (if any). For a successful validation MZCS respond with, “Valid Request.”.

### Invalid Request

On receiving a API request, MZCS validate the request and the following arguments (if any). For an unsuccessful validation MZCS respond with, “Invalid Request.”.