---
title: Host communication commands
sidebar_position: 3
---
import CodeBlock from '@theme/CodeBlock';  
import MDXComponents from '@theme-original/MDXComponents';
  
# MZCommands

### Module Start
This command is used to initialize monoZ:Jet module and check SIM Status, Configure Band and OrgID, attach to cellular network and open connection with IoT platform using run time value. This command must be used after +MZREADY from monoZ:Jet module. Upon unsuccessful network/IoT connection in first attempt, monoZ:Jet shall send back a failure URC and attempt connection with network/platform 2 more times with unsuccessful URC after every attempt in case of failure. After +MZSTART:0, further +MZSTART URCs can be expected anytime in the event of network or IoT PF disconnect.

<CodeBlock language="javascript" title="Execution command">
{`MZSTART `}
</CodeBlock>

<CodeBlock language="javascript" title="Response"  className="responseJet">
{`MZOK/MZFAIL
+MZSTART: <s_sts> 
+DEBUG: <dbg_sts> `}
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
                    SIM Not Inserted
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    2
                    </div>
                    <div className="col col--10">
                    Band Setting Fail
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    3
                    </div>
                    <div className="col col--10">
                    Network Connection Fail
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    4
                    </div>
                    <div className="col col--10">
                    IoT Platform Connection Fail
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    5
                    </div>
                    <div className="col col--10">
                    Modem Start Fail
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
                    <div className="col col--10">  Not registered, MZJ is not currently searching a new operator to register</div>
                </div>
                <div className="row">
                    <div className="col col--2">1</div>
                    <div className="col col--10">  Registered, home network</div>
                </div>
                <div className="row">
                    <div className="col col--2">2</div>
                    <div className="col col--10">  Not registered, but MZJ is currently searching a new operator to  register</div>
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
                <div className="row">
                    <div className="col col--2">22</div>
                    <div className="col col--10">IoT platform not connected</div>
                </div>
                <div className="row">
                    <div className="col col--2">23</div>
                    <div className="col col--10">Network not connected</div>
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
    <tr>
        <td>+MZSTART/+DEBUG</td>
        <td>3 minutes</td>
    </tr>
</table>

#### Usage
<div className="card">
    <div className="card__body">
        <h5>Without Debug Mode</h5>
        <br/>
        
        ```jsx
        +MZREADY
        MZSTART
        MZOK
        +MZSTART: 0
        ```
        
    </div>
</div>
<div className="card">
    <div className="card__body">
            <h5>With Debug Mode</h5>            
            <br/>

            ```jsx
            MZSTART
            MZOK
            MZDEBUG=1
            MZOK
            +MZDEBUG: 10
            +MZDEBUG: 14
            +MZDEBUG: 10
            +MZDEBUG: 2
            +MZDEBUG: 0
            +MZDEBUG: 2
            +MZDEBUG: 5
            +MZDEBUG: 15
            +MZDEBUG: 20
            +MZSTART: 0
            ```
    </div>
</div>

### Firmware Version
This command reads the current software version of monoZ:Jet.

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
        <td>1 second</td>
    </tr>
    <tr>
        <td>+MZVERSION</td>
        <td>1 second</td>
    </tr>
</table>

#### Usage
<div className="card">
    <div className="card__body">
        <h5>Without Debug Mode</h5>
        <br/>
        
        ```jsx
        MZVERSION
        MZOK
        +MZVERSION: MZJ2_V2.0.1
        ```     
    </div>
</div>


### Data Send
This command is used to send data to IoT PF through monoZ:Jet. 

<CodeBlock language="javascript" title="Execution command">
{`MZSEND=<payload> `}
</CodeBlock>

<CodeBlock language="javascript" title="Response"  className="responseJet">
{`MZOK/MZFAIL
+MZSEND: <send_sts> 
+DEBUG: <dbg_sts> `}
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
                    Alphanumeric, Kanji, “#$%&’()//\<>.,?{}\
                    There is a possibility certain kanji characters may not be accepted.
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
                    Send Success
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    1
                    </div>
                    <div className="col col--8">
                    Send Fail
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    2
                    </div>
                    <div className="col col--8">
                    Send Payload size exceeds
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
        <td>1 second</td>
    </tr>
    <tr>
        <td>+MZSEND/+DEBUG</td>
        <td>5 seconds</td>
    </tr>
</table>

#### Usage
<div className="card">
    <div className="card__body">
        <h5>Without Debug Mode</h5>
        <br/>
        
        ```jsx
        MZSEND=Payload123
        MZOK
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

### DL Data Receive
This command enable monoZ:Jet to receive data from IoT Platform. 

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
                    Alphanumeric, Kanji, “#$%&’()//\<>.,?{}
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
                    Receive success
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    1
                    </div>
                    <div className="col col--10">
                    Receive failed
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    2
                    </div>
                    <div className="col col--10">
                    Receive payload
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    3
                    </div>
                    <div className="col col--10">
                    Receive payload size exceed limit
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
                    <div className="col col--10">IoT Platform Receive Subscribe Success</div>
                </div>
                <div className="row">
                    <div className="col col--2">41</div>
                    <div className="col col--10">IoT Platform Receive Subscribe Failed </div>
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
    <tr>
        <td>+MZRECEIVE/+DEBUG</td>
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

### Sleep
This command is used to put the module to different Low Power Modes(LPM).

<CodeBlock language="javascript" title="Execution command">
{`MZSLEEP=<Key_val> `}
</CodeBlock>

<CodeBlock language="javascript" title="Response"  className="responseJet">
{`MZOK/MZFAIL
+MZSLEEP: <sleep_sts> 
+DEBUG: <dbg_sts>`}
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
                    Full sleep. Wake up triggered by raising HOST to BOARD_WKP(P407) Pin to HIGH. MCU will go to Full sleep mode after 5 sec of receiving +MZSLEEP: 0 URC and shall not take any MZ input via UART.
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    1
                    </div>
                    <div className="col col--10">
                    Network Disconnect (Module will be in ON state but Network will be disconnected).
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    2
                    </div>
                    <div className="col col--10">
                    Platform Disconnect (Module will be in ON state, Network will be in connected state, module will be disconnected from IoT PF).
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
                    Sleep Success
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    1
                    </div>
                    <div className="col col--10">
                    Sleep Fail
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
        <td>1 second</td>
    </tr>
    <tr>
        <td>+MZSLEEP/+DEBUG</td>
        <td>5 seconds</td>
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
            +DEBUG: 50
            +MZSLEEP: 0
            ```
    </div>
</div>

### Time
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
        <td>1 second</td>
    </tr>
    <tr>
        <td>+MZTIME</td>
        <td>1 second</td>
    </tr>
</table>

#### Usage
<div className="card">
    <div className="card__body">
        <h5>Without Debug Mode</h5>
        <br/>
        
        ```jsx
        MZTIME
       +MZTIME: 0,2024/06/17,16:11:23+36
        ```
        
    </div>
</div>

### NW Status
This command is used to read current network status. \
**MZNWSTATUS Capture Network Status**

<CodeBlock language="javascript" title="Execution command">
{`MZSTATUS`}
</CodeBlock>

<CodeBlock language="javascript" title="Response"  className="responseJet">
{`MZOK
+MZNWSTATUS: <r_sts>,<sysmode>,<value1>,<value2>,<value3,<value4>
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
        <div className='row'> 
            <div className='col col--4'> 
                `<sysmode>`
            </div>
            <div className='col col--8'> 
                String Type.
                <div className="row">
                    <div className="col col--4">
                    "NOSERVICE"
                    </div>
                    <div className="col col--8">
                    No Service Mode
                    </div>
                </div>
                <div className="row">
                    <div className="col col--4">
                    "GSM"
                    </div>
                    <div className="col col--8">
                    GSM/GPRS/EDGE mode
                    </div>
                </div>
                <div className="row">
                    <div className="col col--4">
                    "eMTC"
                    </div>
                    <div className="col col--8">
                    eMTC mode
                    </div>
                </div>
                <div className="row">
                    <div className="col col--4">
                    "NBIoT"
                    </div>
                    <div className="col col--8">
                    NB-IoT mode
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col col--12">
                    The following table lists the signal strength type corresponding to each service mode.
                    </div>
                </div>
                <br/>
                <table>
                    <tr>
                        <td><b>{`<sysmode>`}</b></td>
                        <td><b>{`<value1>`}</b></td>
                        <td><b>{`<value2>`}</b></td>
                        <td><b>{`<value3>`}</b></td>
                        <td><b>{`<value4>`}</b></td>
                    </tr>
                    <tr>
                        <td>NO SERVICE</td>
                        <td>{`-`}</td>
                        <td>{`-`}</td>
                        <td>{`-`}</td>
                        <td>{`-`}</td>
                    </tr>
                    <tr>
                        <td>GSM</td>
                        <td>{`<GSM_RSSI>`}</td>
                        <td>{`-`}</td>
                        <td>{`-`}</td>
                        <td>{`-`}</td>
                    </tr>
                    <tr>
                        <td>eMTC</td>
                        <td>{`<LTE_RSSI>`}</td>
                        <td>{`<LTE_RSRP>`}</td>
                        <td>{`<LTE_SINR>`}</td>
                        <td>{`<LTE_RSRQ>`}</td>
                    </tr>
                    <tr>
                        <td>NBIoT</td>
                        <td>{`<LTE_RSSI>`}</td>
                        <td>{`<LTE_RSRP>`}</td>
                        <td>{`<LTE_SINR>`}</td>
                        <td>{`<LTE_RSRQ>`}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</div>
<div className="card">
    <div className="card__body">
        <div className="row">
            <div className="col col--4">
                `<GSM_RSSI>`
            </div>
            <div className="col col--8">
                Integer Type.
                <div className="row">
                    <div className="col">
                    Received signal strength indicator (dBm)
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
                `<LTE_RSSI>`
            </div>
            <div className="col col--8">
                Integer Type.
                <div className="row">
                    <div className="col">
                    Received signal strength indicator (dBm)
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
                `<LTE_RSRP>`
            </div>
            <div className="col col--8">
                Integer Type.
                <div className="row">
                    <div className="col">
                    Received signal strength indicator (dBm)
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
                `<LTE_SINR>`
            </div>
            <div className="col col--8">
                Integer Type.
                <div className="row">
                    <div className="col">
                    Signal-to-interference-plus-noise-ratio (SINR). Logarithmic value of SINR. Values are in 1/5th of a dB. Range: 0–250, which translates to -20 dB to +30 dB
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
                `<LTE_RSRQ>`
            </div>
            <div className="col col--8">
                Integer Type.
                <div className="row">
                    <div className="col">
                    Reference signal received quality (dBm)
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

#### Maximum Response Time
<table>
    <tr>
        <td>MZOK</td>
        <td>1 second</td>
    </tr>
    <tr>
        <td>+MZNWSTATUS</td>
        <td>2 second</td>
    </tr>
</table>

#### Usage
<div className="card">
    <div className="card__body">
        <h5>Without Debug Mode</h5>
        <br/>
        
        ```jsx
        MZNWSTATUS
       +MZNWSTATUS: 0,"eMTC",-66,-88,140,-8
        ```
        
    </div>
</div>

### Debug
This command is used to enter and exit Debugging mode. If entered once it shall put monoZ:Jet in debug mode until exited.

<CodeBlock language="javascript" title="Execution command">
{`MZDEBUG=<key_val>`}
</CodeBlock>

<CodeBlock language="javascript" title="Response"  className="responseJet">
{`MZOK/MZFAIL
MZOK`}
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
                    Enter Debugging Mode
                    </div>
                </div>
                <div className="row">
                    <div className="col col--2">
                    1
                    </div>
                    <div className="col col--10">
                    Exit Debugging Mode
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
    <tr>
        <td>OK/</td>
        <td>1 second</td>
    </tr>
</table>

#### Usage
<div className="card">
    <div className="card__body">
        <h5>Without Debug Mode</h5>
        <br/>
        
        ```jsx
        MZDEBUG=1
        MZOK
        ```
        
    </div>
</div>

### Set Org ID
This command is used to configure ORGID setting for connecting with monoZ:Link IoT PF. ORG ID can be set only before MZSTART.

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
        <td>1 second</td>
    </tr>
    <tr>
        <td>+MZORGID</td>
        <td>5 second</td>
    </tr>
</table>

#### Usage
<div className="card">
    <div className="card__body">
        <h5>Without Debug Mode</h5>
        <br/>
        
        ```jsx
        MZORGID="MTI-1"
        +MZORGID: 0
        ```
    </div>
</div>

### Set Band
This command is used for configure BAND setting to connect with network. By default, all supported bands are enabled in ascending order of priority. 

<CodeBlock language="javascript" title="Execution command">
{`MZBAND="<GSM_bandval>","<eMTC_bandval>","<NB_IoT_bandval>"`}
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
        <td>1 second</td>
    </tr>
    <tr>
        <td>+MZBAND</td>
        <td>5 second</td>
    </tr>
</table>

#### Usage
<div className="card">
    <div className="card__body">
        <h5>Without Debug Mode</h5>
        <br/>
        
        ```jsx
        MZBAND=”0x0”,”0x2089b”,”0x80a”
        +MZBAND: 0
        ```
    </div>
</div>

### Special URC
monoZ:Jet has 2 special URCs namely MZFAIL and MZERROR as described below.

<table>
    <tr>
        <td colspan="2">MZFAIL SPECIAL MZFAIL</td>
    </tr>
    <tr>
        <td>Response URC <br/> MZFAIL</td>
        <td><ul><li>MZFAIL URC shall be returned for each new MZ command If any prior MZ Command is in progress and respected success URC has not been received</li>
        <li>Host commands **(MZTIME, MZNWSTATUS, MZSEND, MZRECEIVE) before MZSTART** will return **MZFAIL**.</li>
        <li>Host Configuration Commands **(MZBAND, MZORGID) after MZSTART** will return **MZFAIL URC**</li></ul></td>
    </tr>
    <tr>
        <td>Response URC <br/> MZFAIL</td>
        <td><ul><li>**MZERROR** URC shall be returned for Invalid MZ command </li></ul></td>
    </tr>
</table>