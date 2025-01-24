---
title: Webhook
sidebar_position: 1
---

In this guide we assume you have already have an external service ready to receive data from monoZ:Link.

1. Navigate to “Configuration” and click on “Add Configuration” from the top right corner. 

2. Choose “Webhook” as destination protocol.

<img src={require('@site/static/img/monoZ-Link-Wehbook.jpg').default} className="img-center" />

3. Add the destination server details and create the configurations.
   1.	Specify MQTT in the Source protocol 

   2.	Enter your configuration name 

   3.	Enter suitable description for the configuration  

   4.	Enter the HTTP/HTTPS URL for the destination Server 

   5.	Select the Authorization method under the Parameters 

   6.	If you wish to give a custom header (e.g., group name, etc.) add your custom Header 

   7.	Choose Between ICCID or Topic to be sent along with the payload to the destination server 
   
   8.	Upon Submit the configuration shall be created

  <img src={require('@site/static/img/monoZ-Link-Protocol-Configuration.png').default} className="img-center" />

#### Webhook Data Format

monoz:Link pushes data to the specified server in the following format.When multiple packets arrive per second, data output will be output in 10 packets for each registered group. Upon data push to the specified server, the server will wait for a response for up to 90 seconds. In case of no response from server, monoZ:Link will retry the data push immediately and if the retry is unsuccessful, the data will be discarded without further attempts. If the database function is enabled, the data will be stored as failed data. 

##### Format:
<table>
   <tr>
      <td><b>Field</b></td>
      <td><b>Item</b></td>
      <td><b>Remarks</b></td>
   </tr>
   <tr>
      <td rowspan="1">Method</td>
      <td>Post</td>
      <td></td>
   </tr>
   <tr>
      <td rowspan="1">API URL</td>
      <td>URL</td>
      <td>Customer defined POST API URL</td>
   </tr>
   <tr>
      <td rowspan="5">Header</td>
      <td>Authentication</td>
      <td>This will vary depending on the security method specified in monozLink. Security can be specified as Basic, BearerToken, or API Key</td>
   </tr>
   <tr>
      <td>Content Type</td>
      <td>application/json</td>
   </tr>
   <tr>
      <td>content-length</td>
      <td>Auto Calculation</td>
   </tr>
   <tr>
      <td>host</td>
      <td>Auto provision</td>
   </tr>
   <tr>
      <td>Custom Header</td>
      <td>User specified customer header</td>
   </tr>
   <tr>
      <td rowspan="4">Body</td>
      <td rowspan="2">ICCID</td>
      <td>Device ICCID registered in monoZ:Link</td>
   </tr>
   <tr>
      <td>When a user specifies a topic in monZ:Link setting, the topic value is provided and the field name is changed from "ICCID" to "Topic".</td>
   </tr>
   <tr>
      <td>Timestamp</td>
      <td>The timestamp when the data was sent from monoZ:Link (ISO:8601 format with milliseconds)</td>
   </tr>
   <tr>
      <td>Payload</td>
      <td>Raw data sent by GW device, user needs to parse, extract and decode the required data</td>
   </tr>
</table>

##### Example 1:
<table>
   <tr>
      <td><b>Field</b></td>
      <td><b>Item</b></td>
   </tr>
   <tr>
      <td rowspan="1">API URL</td>
      <td>URL</td>
   </tr>
   <tr>
      <td rowspan="5">Header</td>
      <td>Authentication: Basic dGVzdDoxMjM0NTY3ODk=</td>
   </tr>
   <tr>
      <td>Content-Type: application/json; charset=utf-8</td>
   </tr>
   <tr>
      <td>content-length: 102</td>
   </tr>
   <tr>
      <td>host: xxxxyyyxxxyyyxxx.net</td>
   </tr>
   <tr>
      <td>1_Area: Tokyo</td>
   </tr>
   <tr>
      <td rowspan="3">Body</td>
      <td>
         ```json
            { 
               "ICCID": 897612653856781234,
               "Timestamp": "2023-10-16T09:17:32.1233516Z", 
               "Payload": "ABC"
            }
         ```
      </td>
   </tr>
   
</table>

##### Example 2: When multiple packets are receiverd in 1 second:
<table>
   <tr>
      <td><b>Field</b></td>
      <td><b>Item</b></td>
   </tr>
   <tr>
      <td rowspan="1">API URL</td>
      <td>URL</td>
   </tr>
   <tr>
      <td rowspan="5">Header</td>
      <td>Authentication: Basic dGVzdDoxMjM0NTY3ODk=</td>
   </tr>
   <tr>
      <td>Content-Type: application/json; charset=utf-8</td>
   </tr>
   <tr>
      <td>content-length: 102</td>
   </tr>
   <tr>
      <td>host: xxxxyyyxxxyyyxxx.net</td>
   </tr>
   <tr>
      <td>1_Area: Tokyo</td>
   </tr>
   <tr>
      <td rowspan="3">Body</td>
      <td>
      ```json
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
    </td>
   </tr>
</table>