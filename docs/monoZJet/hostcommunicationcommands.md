---
title: Host communication commands
sidebar_position: 3
---
import CodeBlock from '@theme/CodeBlock';  
import MDXComponents from '@theme-original/MDXComponents';
  
# MZCommands

### Module Ready URC
This URC is sent by monoZ:Jet to the host upon successful power-on. monoZ:Jet does not accept command inputs until this URC is sent back to host. If the host does not receive this URC, a hardware reset or power reboot of monoZ:Jet is recommended.

<CodeBlock language="javascript" title="URC"  className="responseJet">
{`+MZREADY`}
</CodeBlock>

<b>Note:</b>
1. If host and monoZ:Jet is powered ON at the same time, then there is a possibility the host may miss the +MZREADY message. 

#### Maximum Response Time
<table>
    <tr>
        <td>+MZREADY</td>
        <td>1 second</td>
    </tr>
  </table>

### Module Start
This command initializes the monoZ:Jet module and establish communication with the cellular network and the IoT platform using runtime parameters. If the SIM is not detected, the Band setting is incorrect, or the modem fails to start, an error URC is immediately generated without retries. In the event of a failed network or IoT platform connection, monoZ:Jet will return a failure URC and retry every 5 minutes indefinitely until a successful connection is established. The host can force an exit from this loop through a hardware reset, MZSLEEP=1, or a power shutdown. Upon +MZSTART:0, host can expect +MZSTART URCs in the event of network or IoT platform disconnection.

<CodeBlock language="javascript" title="Execution command">
{`MZSTART `}
</CodeBlock>

<CodeBlock language="javascript" title="Response"  className="responseJet">
{`MZOK/MZFAIL
+MZSTART: <s_sts> 
+MZDEBUG: <dbg_sts> `}
</CodeBlock>



#### Defined Values
<div className="card">
    <div className="card__body">
        <div className='row'> 
            <div className='col col--4'> 
                `<s_sts>`
            </div>
            <div className='col col--8'> 
                Integer Type.
                <div className="row">
                    <div className="col col--2">
                    0
                    </div>
                    <div className="col col--10">
                    Start Success
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    1
                    </div>
                    <div className="col col--10">
                    SIM Not Inserted.
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    2
                    </div>
                    <div className="col col--10">
                    Band Setting Fail. Check Band setting.
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    3
                    </div>
                    <div className="col col--10">
                    Network Connection Failed. Reattempting Netwok Connection.
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    4
                    </div>
                    <div className="col col--10">
                    IoT Platform Connection Failed. Reattemping Platform Connection.
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    5
                    </div>
                    <div className="col col--10">
                    Modem Start Fail. Perform Hardware Reset. 
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="card">
    <div className="card__body">
        <div className='row'> 
            <div className='col col--4'> 
                `<dbg_sts>`\
                <small>*Only when Debug mode is ON.</small>
            </div>
            <div className='col col--8'>               
                Integer Type.  
                <div className="row">
                    <div className="col col--2">0</div>
                    <div className="col col--10">  Not registered, monoZ:Jet is not currently searching a new operator to register</div>
                </div>
                <div className="row">
                    <div className="col col--2">1</div>
                    <div className="col col--10">  Registered, home network</div>
                </div>
                <div className="row">
                    <div className="col col--2">2</div>
                    <div className="col col--10">  Not registered, but monoZ:Jet is currently searching a new operator to  register</div>
                </div>
                <div className="row">
                    <div className="col col--2">3</div>
                    <div className="col col--10">  Registration denied</div>
                </div>
                <div className="row">
                    <div className="col col--2">4</div>
                    <div className="col col--10">  Unknown (e.g. out of GERAN/UTRAN/E UTRAN coverage)</div>
                </div>
                <div className="row">
                    <div className="col col--2">5</div>
                    <div className="col col--10">  Registered, roaming</div>
                </div>
                <div className="row">
                    <div className="col col--2">10</div>
                    <div className="col col--10">  Modem Power ON Success</div>
                </div>
                <div className="row">
                    <div className="col col--2">11 </div>
                    <div className="col col--10">  Modem Power ON Failed</div>
                </div>
                <div className="row">
                    <div className="col col--2">12</div>
                    <div className="col col--10">  Modem Power OFF Success</div>
                </div>
                <div className="row">
                    <div className="col col--2">13</div>
                    <div className="col col--10">  Modem Power OFF Failed</div>
                </div>
                <div className="row">
                    <div className="col col--2">14</div>
                    <div className="col col--10">  Modem Band Setting Success</div>
                </div>
                <div className="row">
                    <div className="col col--2">15</div>
                    <div className="col col--10">  Network Connect Success</div>
                </div>
                <div className="row">
                    <div className="col col--2">16</div>
                    <div className="col col--10">  Network Disconnect Success</div>
                </div>
                <div className="row">
                    <div className="col col--2">17</div>
                    <div className="col col--10">  Network Disconnect Failed</div>
                </div>
                <div className="row">
                    <div className="col col--2">20</div>
                    <div className="col col--10">IoT platform open Success</div>
                </div>
                <div className="row">
                    <div className="col col--2">21</div>
                    <div className="col col--10">IoT platform open Failed</div>
                </div>
                </div>
        </div>
    </div>
</div>

#### Maximum Response Time
<table>
    <tr>
        <td>MZOK/MZFAIL</td>
        <td>2 seconds</td>
    </tr>
    <tr>
        <td>+MZSTART/+MZDEBUG</td>
        <td>3 minutes</td>
    </tr>
</table>

#### Usage
<div className="card">
    <div className="card__body">
        <h5>Without Debug Mode</h5>
        Note: Response varies based on network situation.
        <br/>
        
        ```jsx
        +MZREADY
        MZSTART
        MZOK
        +MZSTART: 3
        +MZSTART: 0
        ```
        
    </div>
</div>
<div className="card">
    <div className="card__body">
            <h5>With Debug Mode</h5> 
            Note: Response varies based on network situation.           
            <br/>

            ```jsx
            MZSTART
            MZOK
            MZDEBUG=1
            MZOK
            +MZDEBUG: 10
            +MZDEBUG: 2
            +MZDEBUG: 0
            +MZDEBUG: 2
            +MZDEBUG: 2
            +MZDEBUG: 2
            +MZDEBUG: 5
            +MZDEBUG: 15
            +MZDEBUG: 20
            +MZSTART: 0
            ```
    </div>
</div>

<b> Note: </b>
1. Reception of FOTA from IoT Platform data to monoZ:Jet  will be enabled upon +MZSTART:0
2. MZBAND & MZORGID setting cannot be set after MZSTART:0 


### Firmware Version
This command reads the current firmware version of monoZ:Jet.

<CodeBlock language="javascript" title="Execution command">
{`MZVERSION `}
</CodeBlock>

<CodeBlock language="javascript" title="Response"  className="responseJet">
{`MZOK/MZFAIL
+MZVERSION: <version> `}
</CodeBlock>



#### Defined Values
<div className="card">
    <div className="card__body">
        <div className='row'> 
            <div className='col col--4'> 
                `<version>`
            </div>
            <div className='col col--8'> 
                String Type.
            </div>
        </div>
    </div>
</div>

#### Maximum Response Time
<table>
    <tr>
        <td>MZOK/MZFAIL</td>
        <td>2 seconds</td>
    </tr>
    <tr>
        <td>+MZVERSION</td>
        <td>2 seconds</td>
    </tr>
</table>

#### Usage
<div className="card">
    <div className="card__body">
                
        ```jsx
        MZVERSION
        MZOK
        +MZVERSION: MZJ2_V2.0.1
        ```     
    </div>
</div>


### Data Send
This command transmits payload data to the IoT platform. If an internal timeout occurs, monoZ:Jet automatically retries up to three times at the protocol level before returning a data send failure URC to the host. Following a failure, the module disconnects and reconnects to the network and IoT platform to resolve any potential network or platform related issues. 

<CodeBlock language="javascript" title="Execution command">
{`MZSEND=<payload> `}
</CodeBlock>

<CodeBlock language="javascript" title="Response"  className="responseJet">
{`MZOK/MZFAIL
+MZSEND: <send_sts> 
+MZDEBUG: <dbg_sts> `}
</CodeBlock>



#### Defined Values
<div className="card">
    <div className="card__body">
        <div className='row'> 
            <div className='col col--4'> 
                `<payload>`
            </div>
            <div className='col col--8'> 
                String Type.
                <div className="row">
                    <div className="col col--6">
                    Max byte size
                    </div>
                    <div className="col col--6">
                    1024B
                    </div>
                </div>
                <div className="row">
                    <div className="col col--6">
                    Accepted Characters
                    </div>
                    <div className="col col--6">
                    Alphanumeric, Kanji, “#$%&’()/\<>.,?{};+-!@
                    <br/> There is a possibility certain kanji characters may not be accepted.
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="card">
    <div className="card__body">
        <div className="row">
            <div className="col col--4">
                `<send_sts>`
            </div>
            <div className="col col--8">
                Integer Type.
                <div className="row">
                    <div className="col col--2">
                    0
                    </div>
                    <div className="col col--8">
                    Data Send Success
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    1
                    </div>
                    <div className="col col--8">
                    Data Send Failed
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    2
                    </div>
                    <div className="col col--8">
                    Payload Size Exceeds limit
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="card">
    <div className="card__body">
        <div className='row'> 
            <div className='col col--4'> 
                `<dbg_sts>`\
                <small>*Only when Debug mode is ON.</small>
            </div>
            <div className='col col--8'>               
                Integer Type.  
                <div className="row">
                    <div className="col col--2">
                    30
                    </div>
                    <div className="col col--10">
                    Data Send Success
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    31
                    </div>
                    <div className="col col--10">
                    Data Send Retransmit
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    32
                    </div>
                    <div className="col col--10">
                    Data Send Failed
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

#### Maximum Response Time
<table>
    <tr>
        <td>MZOK/MZFAIL</td>
        <td>2 seconds</td>
    </tr>
    <tr>
        <td>+MZSEND/+MZDEBUG</td>
        <td>20 seconds</td>
    </tr>
</table>

#### Usage
<div className="card">
    <div className="card__body">
        <h5>Without Debug Mode</h5>
        <br/>
        Normal case
        ```jsx
        MZSEND=Payload123
        MZOK
        +MZSEND: 0
        ```
        <br/>
        Network/Platform Disruption while MZSEND: case 1
        ```jsx
        MZSEND=Payload123
        MZOK  
        +MZSEND: 1
        +MZSTART: 3 or 4
        +MZSTART: 0

        ```
        <br/>
       Network/Platform Disruption while MZSEND: case 2
        ```jsx
        MZSEND=Payload123
        MZOK
        +MZSTART: 3 or 4
        +MZSTART: 3 or 4
        +MZSTART: 0
        +MZSEND: 0
        ```
        
    </div>
</div>
<div className="card">
    <div className="card__body">
            <h5>With Debug Mode</h5>            
            <br/>

            ```jsx
            MZSEND=Payload123
            MZOK
            +MZDEBUG: 30
            +MZSEND: 0
            ```
    </div>
</div>

### Downlink Data
This command enables monoZ:Jet to open downlink session with IoT platfom. Once enabled, the session remains active until a power-off, hardware reset, or full sleep occurs. In the event of a network disconnection and reconnection, the module automatically re-enables itself without requiring host intervention.

<CodeBlock language="javascript" title="Execution command">
{`MZRECEIVE `}
</CodeBlock>

<CodeBlock language="javascript" title="Response"  className="responseJet">
{`MZOK/MZFAIL
+MZRECEIVE: <r_sts> 
+MZRECEIVE: <r_sts>,<DL data> 
+MZDEBUG: <dbg_sts>`}
</CodeBlock>



#### Defined Values
<div className="card">
    <div className="card__body">
        <div className='row'> 
            <div className='col col--4'> 
                `<DL data>`
            </div>
            <div className='col col--8'> 
                String Type.
                <div className="row">
                    <div className="col col--6">
                    Max Byte size
                    </div>
                    <div className="col col--6">
                    1020B
                    </div>
                </div>
                <div className="row">
                    <div className="col col--6">
                    Accepted Characters
                    </div>
                    <div className="col col--6">
                    Alphanumeric, Kanji, “#$%&’()/\<>.,?{};+-!@
                    <br/> There is a possibility certain kanji characters may not be accepted.
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="card">
    <div className="card__body">
        <div className='row'> 
            <div className='col col--4'> 
                `<receive_sts>`
            </div>
            <div className='col col--8'> 
                Integer Type.
                <div className="row">
                    <div className="col col--2">
                    0
                    </div>
                    <div className="col col--10">
                    Downlink enable success
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    1
                    </div>
                    <div className="col col--10">
                    Downlink enable failed
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    2
                    </div>
                    <div className="col col--10">
                    Downlink data received 
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    3
                    </div>
                    <div className="col col--10">
                    Downlink data error - payload size exceed limit
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="card">
    <div className="card__body">
        <div className='row'> 
            <div className='col col--4'> 
                `<dbg_sts>`\
                <small>*Only when Debug mode is ON.</small>
            </div>
            <div className='col col--8'>               
                Integer Type.  
                <div className="row">
                    <div className="col col--2">40</div>
                    <div className="col col--10">IoT Platform subscription success</div>
                </div>
                <div className="row">
                    <div className="col col--2">41</div>
                    <div className="col col--10">IoT Platform subscription failed </div>
                </div>
            </div>
        </div>
    </div>
</div>

#### Maximum Response Time
<table>
    <tr>
        <td>MZOK/MZFAIL</td>
        <td>2 seconds</td>
    </tr>
    <tr>
        <td>+MZRECEIVE/+MZDEBUG</td>
        <td>5 seconds</td>
    </tr>
</table>

#### Usage
<div className="card">
    <div className="card__body">
        <h5>Without Debug Mode</h5>
        <br/>
        ```jsx
        MZRECEIVE
        MZOK
        +MZRECEIVE: 0
        <when message sent from platform>
        +MZRECEIVE: 2,"Test message"
        ```
    </div>
</div>
<div className="card">
    <div className="card__body">
            <h5>With Debug Mode</h5>            
            <br/>
            ```jsx
            MZRECEIVE
            +MZDEBUG: 40
            +MZRECEIVE: 0
            <when message sent from platform>
            +MZRECEIVE: 2,"Test message"
            ```
    </div>
</div>

### Module Sleep
This command puts the monoZ:Jet module to different Low Power Modes(LPM).

<CodeBlock language="javascript" title="Execution command">
{`MZSLEEP=<Key_val> `}
</CodeBlock>

<CodeBlock language="javascript" title="Response"  className="responseJet">
{`MZOK/MZFAIL
+MZSLEEP: <sleep_sts> 
+MZDEBUG: <dbg_sts>`}
</CodeBlock>



#### Defined Values
<div className="card">
    <div className="card__body">
        <div className='row'> 
            <div className='col col--4'> 
                `<Key_val>`
            </div>
            <div className='col col--8'> 
                Integer Type.
                <div className="row">
                    <div className="col col--2">
                    0
                    </div>
                    <div className="col col--10">
                    Full sleep mode. monoZ:Jet will go to full deep sleep mode after 5 seconds of sending back +MZSLEEP: 0 URC to the host. monoZ:Jet cannot take MZ commands in this mode and wake up is triggered by raising HOST to BOARD_WKP(P407) Pin to HIGH or via power off/on.
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    1
                    </div>
                    <div className="col col--10">
                    Semi sleep mode.monoZ:Jet shall be in ON state however it will be disconnected from the network similar to airplane mode. Wakeup is triggered using MZSTART.
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    2
                    </div>
                    <div className="col col--10">
                    Light Sleep mode. monoZ:Jet shall be in network connected state however the module shall be disconnected from the IoT platform. Wakeup is triggered using MZSTART.
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="card">
    <div className="card__body">
        <div className='row'> 
            <div className='col col--4'> 
                `<sleep_sts>`
            </div>
            <div className='col col--8'> 
                Integer Type.
                <div className="row">
                    <div className="col col--2">
                    0
                    </div>
                    <div className="col col--10">
                    Sleep mode success
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    1
                    </div>
                    <div className="col col--10">
                    Sleep mode fail
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="card">
    <div className="card__body">
        <div className='row'> 
            <div className='col col--4'> 
                `<dbg_sts>`\
                <small>*Only when Debug mode is ON.</small>
            </div>
            <div className='col col--8'>               
                Integer Type.  
                <div className="row">
                    <div className="col col--2">12</div>
                    <div className="col col--10">Modem Power OFF Success</div>
                </div>
                <div className="row">
                    <div className="col col--2">13</div>
                    <div className="col col--10">Modem Power OFF Failed</div>
                </div>
                <div className="row">
                    <div className="col col--2">15</div>
                    <div className="col col--10">Network Disconnect Success</div>
                </div>
                <div className="row">
                    <div className="col col--2">16</div>
                    <div className="col col--10">Network Disconnect Failed</div>
                </div>
                <div className="row">
                    <div className="col col--2">50</div>
                    <div className="col col--10">IoT platform Disconnect Success</div>
                </div>
                <div className="row">
                    <div className="col col--2">51</div>
                    <div className="col col--10">IoT platform Disconnect Failed</div>
                </div>
            </div>
        </div>
    </div>
</div>

#### Maximum Response Time
<table>
    <tr>
        <td>MZOK/MZFAIL</td>
        <td>2 seconds</td>
    </tr>
    <tr>
        <td>+MZSLEEP/+MZDEBUG</td>
        <td>10 seconds</td>
    </tr>
</table>

#### Usage
<div className="card">
    <div className="card__body">
        <h5>Without Debug Mode</h5>
        <br/>
        
        ```jsx
        MZSLEEP=1
        MZOK
        +MZSLEEP:0
        ```
        
    </div>
</div>
<div className="card">
    <div className="card__body">
            <h5>With Debug Mode</h5>            
            <br/>

            ```jsx
            MZSLEEP=1
            MZOK
            +MZDEBUG: 16
            +MZSLEEP: 0
            ```
    </div>
</div>

<b>Note:</b>
1. monoZ:Jet stores the last connected network information during the full sleep process. To speed up network connection after the next power-on, it is recommended to execute MZSLEEP=0 before powering off the monoZ:Jet. 
2. If MZRECEIVE was enabled on the monoZ:Jet before Semi sleep or Light sleep, then monoZ:Jet automatically enables the session after wakeup.
3. In the case of Full Sleep, the user must reenable the downlink session upon wakeup.

### Network Time
This command is used to capture and return the real time clock.

<CodeBlock language="javascript" title="Execution command">
{`MZTIME`}
</CodeBlock>

<CodeBlock language="javascript" title="Response"  className="responseJet">
{`MZOK/MZFAIL
+MZTIME: <r_sts>,<yy/mm/dd,hh:mm:ss±zz>
+MZTIME: <r_sts>`}
</CodeBlock>



#### Defined Values
<div className="card">
    <div className="card__body">
        <div className='row'> 
            <div className='col col--4'> 
                `<r_sts>`
            </div>
            <div className='col col--8'> 
                Integer Type.
                <div className="row">
                    <div className="col col--2">
                    0
                    </div>
                    <div className="col col--10">
                    Time Read Success
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    1
                    </div>
                    <div className="col col--10">
                    Time Read Failed
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

#### Maximum Response Time
<table>
    <tr>
        <td>MZOK/MZFAIL</td>
        <td>2 seconds</td>
    </tr>
    <tr>
        <td>+MZTIME</td>
        <td>2 seconds</td>
    </tr>
</table>

#### Usage
<div className="card">
    <div className="card__body">
              
        ```jsx
        MZTIME
       +MZTIME: 0,2024/06/17,16:11:23+36
        ```
        
    </div>
</div>

### Network Status
This command is used to read the status of connected network. 

<CodeBlock language="javascript" title="Execution command">
{`MZSTATUS`}
</CodeBlock>

<CodeBlock language="javascript" title="Response"  className="responseJet">
{`MZOK
+MZNWSTATUS: <r_sts>,"<lac>","<ci>","<oper>","<band>",<rssi>,<rsrp>,<sinr>,<rsrq>
+MZNWSTATUS: <r_sts>`}
</CodeBlock>

#### Defined Values
<div className="card">
    <div className="card__body">
        <div className="row">
            <div className="col col--4">
                `<r_sts>`
            </div>
            <div className="col col--8">
                Integer Type.
                <div className="row">
                    <div className="col col--4">0</div>
                    <div className="col col--8">Network Status Read Success</div>
                </div>
                <div className="row">
                    <div className="col col--4">1</div>
                    <div className="col col--8">Network Status Read Failed</div>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="card">
    <div className="card__body">
        <div className="row">
            <div className="col col--4">
                `<lac>`
            </div>
            <div className="col col--8">
                 String type. 
                 <br/>Two-byte location area code in hexadecimal format.
                </div>
        </div>
    </div>
</div>

<div className="card">
    <div className="card__body">
        <div className="row">
            <div className="col col--4">
                `<ci>`
            </div>
            <div className="col col--8">
                 String type. 
                 <br/>Four-byte E-UTRAN cell ID in hexadecimal format.
                 </div>
        </div>
    </div>
</div>

<div className="card">
    <div className="card__body">
        <div className="row">
            <div className="col col--4">
                `<oper>`
            </div>
            <div className="col col--8">
                 String type. 
                 <br/>Operator in numeric format.
                 </div>
        </div>
    </div>
</div>

<div className="card">
    <div className="card__body">
        <div className="row">
            <div className="col col--4">
                `<band>`
            </div>
            <div className="col col--8">
                 String type. 
                 <br/>Selected band for network connection.
                 </div>
        </div>
    </div>
</div>

<div className="card">
    <div className="card__body">
        <div className="row">
            <div className="col col--4">
                `<rssi>`
            </div>
            <div className="col col--8">
                 Integer type. 
                 <br/>LTE Received signal strength indicator.
                 </div>
        </div>
    </div>
</div>

<div className="card">
    <div className="card__body">
        <div className="row">
            <div className="col col--4">
                `<rsrp>`
            </div>
            <div className="col col--8">
                 Integer type. 
                 <br/>Reference signal received power.
                 </div>
        </div>
    </div>
</div>
<div className="card">
    <div className="card__body">
        <div className="row">
            <div className="col col--4">
                `<sinr>`
            </div>
            <div className="col col--8">
                 Integer type. 
                 <br/>Integer type. Signal-to-interference-plus-noise-ratio (SINR). Logarithmic value of
SINR. Values are in 1/5th of a dB. Range: 0–250, which translates to -20dB to +30dB.
                 </div>
        </div>
    </div>
</div>
<div className="card">
    <div className="card__body">
        <div className="row">
            <div className="col col--4">
                `<rsrq>`
            </div>
            <div className="col col--8">
                 Integer type. 
                 <br/>Reference signal received quality (RSRQ). Unit: dB.
                 </div>
        </div>
    </div>
</div>


#### Maximum Response Time
<table>
    <tr>
        <td>MZOK/MZFAIL</td>
        <td>2 seconds</td>
    </tr>
    <tr>
        <td>+MZNWSTATUS</td>
        <td>2 seconds</td>
    </tr>
</table>

#### Usage
<div className="card">
    <div className="card__body">
        
        
        ```jsx
        MZNWSTATUS
        MZOK
       +MZNWSTATUS: 0,"1859","017CED06","44020","LTE BAND 8",-66,-94,75,-15
        ```
        
    </div>
</div>

### Debug
This command enables or disables debugging mode on monoZ:Jet. When enabled, the module generates additional URCs, indicated by +MZDEBUG, for the corresponding MZ commands.

<CodeBlock language="javascript" title="Execution command">
{`MZDEBUG=<key_val>`}
</CodeBlock>

<CodeBlock language="javascript" title="Response"  className="responseJet">
{`MZOK/MZFAIL`}
</CodeBlock>



#### Defined Values
<div className="card">
    <div className="card__body">
        <div className="row">
            <div className="col col--4">
                `<key_val>`
            </div>
            <div className="col col--8">
                Integer Type.
                <div className="row">
                    <div className="col col--2">
                    0
                    </div>
                    <div className="col col--10">
                    Exit Debugging Mode
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    1
                    </div>
                    <div className="col col--10">
                    Enter Debugging Mode
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

#### Maximum Response Time
<table>
    <tr>
        <td>MZOK/MZFAIL</td>
        <td>1 second</td>
    </tr>
   
</table>

#### Usage
<div className="card">
    <div className="card__body">
               
        ```jsx
        MZDEBUG=1
        MZOK
        ```
        
    </div>
</div>

### Set Org ID
This command configures the Organization ID (ORGID) required for connecting to the monoZ:Link IoT platform. The ORGID is a one-time setting and does not need to be reconfigured after each power cycle. It can only be set before executing MZSTART.

<CodeBlock language="javascript" title="Execution command">
{`MZORGID="<org_id>"`}
</CodeBlock>

<CodeBlock language="javascript" title="Response"  className="responseJet">
{`MZOK/MZFAIL
+MZORGID: <cfg_sts>`}
</CodeBlock>



#### Defined Values
<div className="card">
    <div className="card__body">
        <div className="row">
            <div className="col col--4">
                `<org_id>`
            </div>
            <div className="col col--8">
                String Type.
                <div className="row">
                    <div className="col col--6">
                    Maximum Size:
                    </div>
                    <div className="col col--6">
                    12B
                    </div>
                </div>
                <div className="row">
                    <div className="col col--6">
                    Acceptable characters
                    </div>
                    <div className="col col--6">
                    Alphanumeric, “#$%&’()//\<>.,?{}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="card">
    <div className="card__body">
        <div className="row">
            <div className="col col--4">
                `<cfg_sts>`
            </div>
            <div className="col col--8">
                Integer Type.
                <div className="row">
                    <div className="col col--2">
                    0
                    </div>
                    <div className="col col--10">
                    ORGID Configuration Success
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    1
                    </div>
                    <div className="col col--10">
                    ORGID Configuration Fail
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    2
                    </div>
                    <div className="col col--10">
                    ORGID Syntax Invalid
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    3
                    </div>
                    <div className="col col--10">
                    ORGID Length Exceeds
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

#### Maximum Response Time
<table>
    <tr>
        <td>MZOK/MZFAIL</td>
        <td>2 seconds</td>
    </tr>
    <tr>
        <td>+MZORGID</td>
        <td>5 seconds</td>
    </tr>
</table>

#### Usage
<div className="card">
    <div className="card__body">
        
        ```jsx
        MZORGID="MTI-1"
        MZOK
        +MZORGID: 0
        ```
    </div>
</div>

### Set Band
This command configures the BAND setting on monoZ:Jet for cellular network connectivity. By default, all supported bands are enabled, and during MZSTART, the module attempts to connect to the network in ascending order of the configured band priority. This setting must be applied before executing MZSTART.

<CodeBlock language="javascript" title="Execution command">
{`MZBAND=<GSM_bandval>,<eMTC_bandval>,<NB_IoT_bandval>`}
</CodeBlock>

<CodeBlock language="javascript" title="Response"  className="responseJet">
{`MZOK/MZFAIL
+MZBAND: <cfg_sts>`}
</CodeBlock>



#### Defined Values
<div className="card">
    <div className="card__body">
        <div className="row">
            <div className="col col--4">
                `<GSM_bandval>`
            </div>
            <div className="col col--8">
                A hexadecimal value that specifies the GSM frequency band (e.g.: 0xa =0x2(DCS1800) + 0x8(PCS1900)). If it is set to 0, it means not to change GSM frequency band.
                <div className="row">
                    <div className="col col--2">
                    0
                    </div>
                    <div className="col col--10">
                    No Change
                    </div>
                </div>
                <div className="row">
                    <div className="col col-2">
                    0x1
                    </div>
                    <div className="col col--10">
                    EGSM900
                    </div>
                </div>
                <div className="row">
                    <div className="col col-2">
                    0x2
                    </div>
                    <div className="col col--10">
                    DCS1800
                    </div>
                </div>
                <div className="row">
                    <div className="col col-2">
                    0x4
                    </div>
                    <div className="col col--10">
                    GSM850
                    </div>
                </div>
                <div className="row">
                    <div className="col col-2">
                    0x8
                    </div>
                    <div className="col col--10">
                    PCS1900
                    </div>
                </div>
                <div className="row">
                    <div className="col col-2">
                    0xf
                    </div>
                    <div className="col col--10">
                    All of the supported bands above
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="card">
    <div className="card__body">
        <div className="row">
            <div className="col col--4">
                `<eMTC_bandval>`
            </div>
            <div className="col col--8">
                A hexadecimal value that specifies the eMTC frequency band (e.g.: 0x15 =0x01(LTE B1) + 0x04(LTE B3) + 0x10(LTE B5)). If it is set to 0, the eMTC frequency band will not be changed. 
                <br/>
                <div className="row">
                    <div className="col col--8">
                    0
                    </div>
                    <div className="col col--4">
                    No Change
                    </div>
                </div>
                <div className="row">
                    <div className="col col--8">
                    0x0
                    </div>
                    <div className="col col--4">
                    All supported bands
                    </div>
                </div>
                <div className="row">
                    <div className="col col--8">
                    0x1 (BAND_PREF_LTE_BAND1)
                    </div>
                    <div className="col col--4">
                    LTE B1
                    </div>
                </div>
                <div className="row">
                    <div className="col col--8">
                    0x2 (BAND_PREF_LTE_BAND2)
                    </div>
                    <div className="col col--4">
                    LTE B2
                    </div>
                </div>
                <div className="row">
                    <div className="col col--8">
                    0x4 (BAND_PREF_LTE_BAND3)
                    </div>
                    <div className="col col--4">
                    LTE B3
                    </div>
                </div>
                <div className="row">
                    <div className="col col--8">
                    0x8 (BAND_PREF_LTE_BAND4)
                    </div>
                    <div className="col col--4">
                    LTE B4
                    </div>
                </div>
                <div className="row">
                    <div className="col col--8">
                    0x10 (BAND_PREF_LTE_BAND5)
                    </div>
                    <div className="col col--4">
                    LTE B5
                    </div>
                </div>
                <div className="row">
                    <div className="col col--8">
                    0x80 (BAND_PREF_LTE_BAND8)
                    </div>
                    <div className="col col--4">
                    LTE B8
                    </div>
                </div>
                <div className="row">
                    <div className="col col--8">
                    0x800 (BAND_PREF_LTE_BAND12)
                    </div>
                    <div className="col col--4">
                    LTE B12
                    </div>
                </div>
                <div className="row">
                    <div className="col col--8">
                    0x1000 (BAND_PREF_LTE_BAND13)
                    </div>
                    <div className="col col--4">
                    LTE B13
                    </div>
                </div>
                <div className="row">
                    <div className="col col--8">
                    0x20000 (BAND_PREF_LTE_BAND18)
                    </div>
                    <div className="col col--4">
                    LTE B18
                    </div>
                </div>
                <div className="row">
                    <div className="col col--8">
                    0x40000 (BAND_PREF_LTE_BAND19)
                    </div>
                    <div className="col col--4">
                    LTE B19
                    </div>
                </div>
                <div className="row">
                    <div className="col col--8">
                    0x80000 (BAND_PREF_LTE_BAND20)
                    </div>
                    <div className="col col--4">
                    LTE B20
                    </div>
                </div>
                <div className="row">
                    <div className="col col--8">
                    0x1000000 (BAND_PREF_LTE_BAND25)
                    </div>
                    <div className="col col--4">
                    LTE B25
                    </div>
                </div>
                <div className="row">
                    <div className="col col--8">
                    0x2000000 (BAND_PREF_LTE_BAND26)
                    </div>
                    <div className="col col--4">
                    LTE B26
                    </div>
                </div>
                <div className="row">
                    <div className="col col--8">
                    0x4000000 (BAND_PREF_LTE_BAND27)
                    </div>
                    <div className="col col--4">
                    LTE B27
                    </div>
                </div>
                <div className="row">
                    <div className="col col--8">
                    0x8000000 (BAND_PREF_LTE_BAND28)
                    </div>
                    <div className="col col--4">
                    LTE B28
                    </div>
                </div>
                <div className="row">
                    <div className="col col--8">
                    0x20000000000000000 (BAND_PREF_LTE_BAND66)
                    </div>
                    <div className="col col--4">
                    LTE B66
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="card">
    <div className="card__body">
        <div className="row">
            <div className="col col--4">
                `<NB-IoT_bandval>`
            </div>
            <div className="col col--8">
                A hexadecimal value that specifies the NB-IoT frequency band (e.g.: 0x15 =0x01(LTE B1) + 0x04(LTE B3) + 0x10(LTE B5)). If it is set to 0, the NB-IoT frequency band will not be changed. By default, all bands are set. 
                <br/>
                <div className="row">
                    <div className="col col--8">
                    0
                    </div>
                    <div className="col col--4">
                    No Change
                    </div>
                </div>
                <div className="row">
                    <div className="col col--8">
                    0x0
                    </div>
                    <div className="col col--4">
                    All supported bands
                    </div>
                </div>
                <div className="row">
                    <div className="col col--8">
                    0x1 (BAND_PREF_LTE_BAND1)
                    </div>
                    <div className="col col--4">
                    LTE B1
                    </div>
                </div>
                <div className="row">
                    <div className="col col--8">
                    0x2 (BAND_PREF_LTE_BAND2)
                    </div>
                    <div className="col col--4">
                    LTE B2
                    </div>
                </div>
                <div className="row">
                    <div className="col col--8">
                    0x4 (BAND_PREF_LTE_BAND3)
                    </div>
                    <div className="col col--4">
                    LTE B3
                    </div>
                </div>
                <div className="row">
                    <div className="col col--8">
                    0x8 (BAND_PREF_LTE_BAND4)
                    </div>
                    <div className="col col--4">
                    LTE B4
                    </div>
                </div>
                <div className="row">
                    <div className="col col--8">
                    0x10 (BAND_PREF_LTE_BAND5)
                    </div>
                    <div className="col col--4">
                    LTE B5
                    </div>
                </div>
                <div className="row">
                    <div className="col col--8">
                    0x80 (BAND_PREF_LTE_BAND8)
                    </div>
                    <div className="col col--4">
                    LTE B8
                    </div>
                </div>
                <div className="row">
                    <div className="col col--8">
                    0x800 (BAND_PREF_LTE_BAND12)
                    </div>
                    <div className="col col--4">
                    LTE B12
                    </div>
                </div>
                <div className="row">
                    <div className="col col--8">
                    0x1000 (BAND_PREF_LTE_BAND13)
                    </div>
                    <div className="col col--4">
                    LTE B13
                    </div>
                </div>
                <div className="row">
                    <div className="col col--8">
                    0x20000 (BAND_PREF_LTE_BAND18)
                    </div>
                    <div className="col col--4">
                    LTE B18
                    </div>
                </div>
                <div className="row">
                    <div className="col col--8">
                    0x40000 (BAND_PREF_LTE_BAND19)
                    </div>
                    <div className="col col--4">
                    LTE B19
                    </div>
                </div>
                <div className="row">
                    <div className="col col--8">
                    0x80000 (BAND_PREF_LTE_BAND20)
                    </div>
                    <div className="col col--4">
                    LTE B20
                    </div>
                </div>
                <div className="row">
                    <div className="col col--8">
                    0x1000000 (BAND_PREF_LTE_BAND25)
                    </div>
                    <div className="col col--4">
                    LTE B25
                    </div>
                </div>
                <div className="row">
                    <div className="col col--8">
                    0x8000000 (BAND_PREF_LTE_BAND28)
                    </div>
                    <div className="col col--4">
                    LTE B28
                    </div>
                </div>
                <div className="row">
                    <div className="col col--8">
                    0x20000000000000000 (BAND_PREF_LTE_BAND66)
                    </div>
                    <div className="col col--4">
                    LTE B66
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="card">
    <div className="card__body">
        <div className="row">
            <div className="col col--4">
                `<cfg_sts>`
            </div>
            <div className="col col--8">
                Integer Type.
                <br/>
                <div className="row">
                    <div className="col col--4">
                    0
                    </div>
                    <div className="col col--8">
                    Band Configuration Success
                    </div>
                </div>
                <div className="row">
                    <div className="col col--4">
                    1
                    </div>
                    <div className="col col--8">
                    Invalid GSM Band value
                    </div>
                </div>
                <div className="row">
                    <div className="col col--4">
                    2
                    </div>
                    <div className="col col--8">
                    GSM Band value Length Exceeds
                    </div>
                </div>
                <div className="row">
                    <div className="col col--4">
                    3
                    </div>
                    <div className="col col--8">
                    Invalid eMTC Band value
                    </div>
                </div>
                <div className="row">
                    <div className="col col--4">
                    4
                    </div>
                    <div className="col col--8">
                    eMTC Band value Length Exceeds
                    </div>
                </div>
                <div className="row">
                    <div className="col col--4">
                    5
                    </div>
                    <div className="col col--8">
                    Invalid NB-IoT Band value
                    </div>
                </div>
                <div className="row">
                    <div className="col col--4">
                    6
                    </div>
                    <div className="col col--8">
                    NB-IoT Band value Length Exceeds
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

#### Maximum Response Time
<table>
    <tr>
        <td>MZOK/MZFAIL</td>
        <td>2 seconds</td>
    </tr>
    <tr>
        <td>+MZBAND</td>
        <td>5 seconds</td>
    </tr>
</table>

#### Usage
<div className="card">
    <div className="card__body">
        
        ```jsx
        MZBAND=”0x0”,”0x2089b”,”0x80a”
        +MZBAND: 0
        ```
    </div>
</div>
Note:
1. The BAND setting is crucial for minimizing network connection time. Since the bands supported by the 1NCE network vary by country, we recommend configuring the appropriate band settings based on the device's target region of operation(see table). Contact us for tailored recommendations for your specific country or region.

<table>
    <tr>
        <td>Japan</td>
        <td>MZBAND=0x0,0x20081,0x0</td>
    </tr>
    <tr>
        <td>Europe</td>
        <td>MZBAND=0x0,0x80084,0x80084</td>
    </tr>
        <tr>
        <td>US&Canada</td>
        <td>MZBAND=0x0,0x81A,0x81A</td>
    </tr>
        <tr>
        <td>All Bands (Default)</td>
        <td>MZBAND=0xf,0x2000000000f0e189f,0x200000000090f189f</td>
    </tr>
</table>

### FOTA - Send FOTA message
This command allows the host to set a firmware update status message for the OTA server after successful monoZ:Jet initialization via MZSTART. It is typically used to report the latest host firmware version or the outcome of an OTA update. The MZSTARTMSG command can only be executed before MZSTART, and the configured message will be sent as the first payload to the FOTA topic upon connection to the IoT platform.


<CodeBlock language="javascript" title="Execution command">
{`MZSTARTMSG=<message>`}
</CodeBlock>
<CodeBlock language="javascript" title="FOTA update URC"  className="responseJet">
{`MZOK/MZFAIL
<upon_succesful_MZSTART>
+MZSTARTMSG: <send_sts>`}
</CodeBlock>


#### Defined Values
<div className="card">
    <div className="card__body">
        <div className='row'> 
            <div className='col col--4'> 
                `<payload>`
            </div>
            <div className='col col--8'> 
                String Type.
                <div className="row">
                    <div className="col col--6">
                    Max byte size
                    </div>
                    <div className="col col--6">
                    1024B
                    </div>
                </div>
                <div className="row">
                    <div className="col col--6">
                    Accepted Characters
                    </div>
                    <div className="col col--6">
                    Alphanumeric, Kanji, “#$%&’()/\<>.,?{};+-!@
                    <br/> There is a possibility certain kanji characters may not be accepted.
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="card">
    <div className="card__body">
        <div className="row">
            <div className="col col--4">
                `<send_sts>`
            </div>
            <div className="col col--8">
                Integer Type.
                <div className="row">
                    <div className="col col--2">
                    0
                    </div>
                    <div className="col col--10">
                    FOTA message send success
                    </div>
                </div>
               <div className="row">
                    <div className="col col--2">
                    1
                    </div>
                    <div className="col col--10">
                    FOTA message send failed
                    </div>
                </div>
                 <div className="row">
                    <div className="col col--2">
                    2
                    </div>
                    <div className="col col--10">
                    FOTA message Length exceed
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    3
                    </div>
                    <div className="col col--10">
                    FOTA message invalid format
                    </div>
                </div>                
                 </div>
                 </div>
    </div>
</div>

#### Maximum Response Time
<table>
    <tr>
        <td>MZOK/MZFAIL</td>
        <td>2 seconds</td>
    </tr>
    <tr>
        <td>+MZMZSTATMSG</td>
        <td>5 seconds (from MZSTART:0)</td>
    </tr>
</table>

#### Usage
<div className="card">
    <div className="card__body">
        ```jsx
        MZSTARTMSG=V.1.2 update complete
        MZOK
        MZSTART
        +MZSTART:0
        +MZREQFOTASEG: 0
        ```
         </div>
</div>

### FOTA - Update URC
monoZ:Jet pass the FOTA update availability notification & FOTA payload to the host using this URC. New FOTA update notification message can be received anytime during an active MZSTART session. 

<CodeBlock language="javascript" title="FOTA update URC"  className="responseJet">
{`
+MZFOTARECEIVE: <receive_sts>,dt:<Epoch-Time>,host:<new-version-no>,hostsize:<size-in-Bytes>,hostseg:<total-segments>
+MZFOTARECEIVE: <receive_sts>,<segment-number>,<payload-format>,<Requested-segment>
+MZDEBUG: <dbg_sts>`}
</CodeBlock>


#### Defined Values

<div className="card">
    <div className="card__body">
        <div className="row">
            <div className="col col--4">
                `<receive_sts>`
            </div>
            <div className="col col--8">
                Integer Type.
                <div className="row">
                    <div className="col col--2">
                    1
                    </div>
                    <div className="col col--10">
                    New host firmware information received
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    2
                    </div>
                    <div className="col col--10">
                    Requested firmware segment received
                    </div>
                </div>
                                <div className="row">
                    <div className="col col--2">
                    3
                    </div>
                    <div className="col col--10">
                    Received firmware segment size exceeds limits
                    </div>
                </div>
                </div>
        </div>
    </div>
</div>

<div className="card">
    <div className="card__body">
        <div className="row">
            <div className="col col--4">
                `<fota data>`
            </div>
            <div className="col col--8">
                String Type. <br/>Max Byte size: 1200B <br/>Accepted Characters: Alphanumeric
                <div className="row">
                </div>
            </div>
        </div>
    </div>
</div>

<div className="card">
    <div className="card__body">
        <div className="row">
            <div className="col col--4">
                `<dbg_sts>`
            </div>
            <div className="col col--8">
                Integer Type.
                <div className="row">
                    <div className="col col--2">
                    40
                    </div>
                    <div className="col col--10">
                    IoT platform subscription success
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    41
                    </div>
                    <div className="col col--10">
                                        IoT platform subscription failed
                    </div>
                </div>
                 </div>
        </div>
    </div>
</div>

#### Usage
<div className="card">
    <div className="card__body">
         <h5>Without Debug Mode</h5>
         New Firmware available
        ```jsx
        +MZFOTARECEIVE: 1,dt:1740104482,host:1.1.5,hostsize:hostappV1.0.2.zip - 223390,hostseg:219
        ```

        Requested Firmware segment
        ```jsx
        +MZFOTARECEIVE: 2,1,A,504b03041400000008001b84545aede14634b3b30100d0f603000b000000633361707056312e302e32cc5d097c94c5159f3d727018220408476113142d2a12ce445136893150149144a4b47577b359482424210997a85912af9aaa7c42c5965602d6ca465b690505b512c05a5ada0a7851b57593a805c2114842b25cdbff9b99dd9d5df643dbfefafb157f9bef7bff3733efcd9b376fce5dab736ebbd568309898fc6762af33039e3fcb15b455e289272849004b673df077381bc662419b83e92e7e761bc29ff10139325fba117fa23c87b0f0a74179c630fd7fd7e49802cf408ec05faeab653a70fe34873dbba562453d58583ea3ccd7761bf2f1a739ec694182d033543fb3fce473fce2e72d2cfc6996cf995f5615d2fbb96394f0e267092a1f7a86f2dd897cb1ec9bff4b94cf5924ef1276f1e2117a86dae1fa92e282eb4b0aaf2b292e5dbcec3a87a3c2593471fce8cab2d16942a724d9c6b933ee62a977bef14adbda6d6fbef7f29e25aee7660e7eeccca9c7cd5207834813f48938c53f34a5dd665a0a562539cc66c29ec6e719d261e9d5176e7bf5e96d49fbff3ae48da9739ff718fe79acf017b5b1150fdf36e4daccde2facefff9739512b1f94d18b25a747c307b1fa3c7318d60cbfe81ba50c439fe8f87934d7e551f091a6e8e97fa453cecb3af8953da2977f85397afa845ed1d377b0e8e9e7e994d3161b1ddfd0
        ```
    </div>
</div>
<div className="card">
    <div className="card__body">
            <h5>With Debug Mode</h5>
            FOTA subscribe
           ```jsx
            +MZSTART: 0
            +MZDEBUG: 40
           ```
    </div>
</div>

### FOTA - Request firmware segment
This command is used to request the firmware segment from monoZ:Link.

<CodeBlock language="javascript" title="Execution command">
{`MZREQFOTASEG=<segment>`}
</CodeBlock>
<CodeBlock language="javascript" title="FOTA update URC"  className="responseJet">
{`MZOK/MZFAIL
+MZREQFOTASEG: <send_sts> 
+MZDEBUG: <dbg_sts>`}
</CodeBlock>


#### Defined Values

<div className="card">
    <div className="card__body">
        <div className="row">
            <div className="col col--4">
                `<segment>`
            </div>
            <div className="col col--8">
                String Type. <br/>Max Byte size: 1B <br/>Accepted Characters: Numeric
                <div className="row">
                </div>
            </div>
        </div>
    </div>
</div>

<div className="card">
    <div className="card__body">
        <div className="row">
            <div className="col col--4">
                `<send_sts>`
            </div>
            <div className="col col--8">
                Integer Type.
                <div className="row">
                    <div className="col col--2">
                    0
                    </div>
                    <div className="col col--10">
                    Request send success
                    </div>
                </div>
               <div className="row">
                    <div className="col col--2">
                    1
                    </div>
                    <div className="col col--10">
                    Request send failed
                    </div>
                </div>
                 <div className="row">
                    <div className="col col--2">
                    2
                    </div>
                    <div className="col col--10">
                    Invalid segment
                    </div>
                </div>                
                 </div>
                 </div>
    </div>
</div>

<div className="card">
    <div className="card__body">
        <div className="row">
            <div className="col col--4">
                `<dbg_sts>`
            </div>
            <div className="col col--8">
                Integer Type.
                <div className="row">
                    <div className="col col--2">
                    30
                    </div>
                    <div className="col col--10">
                    Data send success
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    31
                    </div>
                    <div className="col col--10">
                    Data send retransmitting
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    32
                    </div>
                    <div className="col col--10">
                    Data send failed
                    </div>
                </div>
                 </div>
        </div>
    </div>
</div>

#### Maximum Response Time
<table>
    <tr>
        <td>MZOK/MZFAIL</td>
        <td>2 seconds</td>
    </tr>
    <tr>
        <td>+MZREQFOTASEG/+MZDEBUG</td>
        <td>20 seconds</td>
    </tr>
</table>

#### Usage
<div className="card">
    <div className="card__body">
         <h5>Without Debug Mode</h5>
         ```jsx
        MZREQFOTASEG=1
        MZOK
        +MZREQFOTASEG: 0
        ```
         </div>
</div>
<div className="card">
    <div className="card__body">
            <h5>With Debug Mode</h5>
            ```jsx
             MZREQFOTASEG=1
             MZOK
             +MZDEBUG: 30
             +MZREQFOTASEG: 0
           ```
    </div>
</div>

### Special URC
monoZ:Jet has 2 special URCs namely MZFAIL and MZERROR as described below.

<table>
    <tr>
        <td>MZFAIL</td>
        <td><ul><li>MZFAIL URC shall be returned for a MZ command if any prior MZ Command is in progress and its respective URC has not been sent back to host</li>
        <li>MZFAIL shall be returned for MZ commands ***(MZTIME, MZNWSTATUS, MZSEND, MZRECEIVE)*** when executed before succesful ***MZSTART***.</li>
        <li>MZFAIL shall be returned for MZ commands ***(MZBAND, MZORGID)*** when executed after succesful ***MZSTART***.</li></ul></td>
    </tr>
    <tr>
        <td>MZFAIL</td>
        <td><ul><li>**MZERROR** URC shall be returned for any invalid MZ command </li></ul></td>
    </tr>
</table>