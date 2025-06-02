---
title: Send Downlink Message
sidebar_position: 9
---
<!-- <div className="row">
    <div className="col col--7"> -->
        <p className="Get-link"><span className="get">POST</span> <em>https://link.monoz.io/api/v1/{Org-Id}/Publish/Message</em></p>
        This API can be used to send a downlink message to the connected device. The default topic for downlink message shall be published to /< ORGID>/< ICCID>/sub

        ##### Args
        <div className="card">
            <div className="card__body">
 <!--                <div className="row mb-2">
                    <div className="col col--4"><code>ORG-ID</code></div>
                    <div className="col col--8">The unique ID assigned to your organisation</div>
                </div> -->
                <div className="row mb-2">
                    <div className="col col--4"><code>ICCID</code></div>
                    <div className="col col--8">Unique ICCID of target device</div>
                </div>
                <div className="row mb-2">
                  <div className="col col--4"><code>Topic</code></div>
                    <div className="col col--8">MQTT Topic can be empty or multiple but must start with a slash (/). For example: "/Name1/Name2/..".
                    <br/>Max length is 512 bytes with including default topc "\/\< ORGID\>\/\<ICCID\>\/sub".</div>
                </div>
                <div className="row mb-2">
                    <div className="col col--4"><code>QoS</code></div>
                    <div className="col col--8">MQTT QoS can be 0 or 1.</div>
                </div>
                <div className="row mb-2">
                <div className="col col--4"><code>Message</code></div>
                    <div className="col col--8">Downlink message. Range is 1-4096 bytes.
                    <br/>monoZ:Jet max message length is 1024 bytes.</div>
                </div>
                <div className="row mb-2">
                    <div className="col col--4"><code>RetainLastMessage</code></div>
                    <div className="col col--8"> When set to true, the message is stored by monoZ:Link broker and device shall receive it upon successful subscribe.
                    <br/>True: Send as Retain message.
                    <br/>False: Send as Non-Retain message.</div>
                </div>
                <div className="row mb-2">
                    <div className="col col--4"><code>Format</code></div>
                    <div className="col col--8">Designate downlink message format.
                    <br/>0:JSON
                    <br/>If message is JSON format, any CRLF or CR included in messsage shall be removed by monoZ:Link before pushing to the device. 
                    <br/>1:TEXT
                    <br/>Sends message without any formatting.</div>
                </div>
            </div>
        </div>
        <br/>
        ##### Response
        <details>
            <summary>
                <div> <div class="error_200 HTTPStatus "><span class="HTTPStatus-chit"></span></div>200</div>
                <small>Success <small className="text-gray">MessagePublished</small></small>
            </summary>
            ###### Response Body
            
            <div className="response_details">
                <strong>StatusCode</strong>&nbsp;&nbsp;  <small className="text-gray">integer</small> 
                <p>HTTP status code of the response.</p>
            </div>
            <div className="response_details">
                <strong>Message</strong>&nbsp;&nbsp;  <small className="text-gray">string</small> 
                <p>Message indicating the result of the operation.</p>
            </div>
        </details> 
        <div className="Block-error">
            <div className="error_block_400">
                <summary className="border-bottom">
                    <div className="summery-error"> 
                        <div><code class="HTTPStatus  error_404"><span class="HTTPStatus-chit"></span></code>401</div>
                        <small>Unauthorized <small className="text-gray">If the API Key is wrong or there is no permission to access the requested data.</small></small>
                    </div>
                </summary>
            </div>
            <div className="error_block_400">
                <summary className="border-bottom">
                    <div className="summery-error"> 
                        <div><code class="HTTPStatus  error_404"><span class="HTTPStatus-chit"></span></code>400</div>
                        <small>Bad Request <small className="text-gray">If the input value is not in the correct format.</small></small>
                    </div>
                </summary>
            </div>
            <div className="error_block_400">
                <summary className="border-bottom">
                    <div className="summery-error"> 
                        <div><code class="HTTPStatus  error_404"><span class="HTTPStatus-chit"></span></code>404</div>
                        <small>Not Found <small className="text-gray">If the specified ICCID was not found in the system.</small></small>
                    </div>
                </summary>
            </div>
            <div className="error_block_400">
                <summary className="border-bottom">
                    <div className="summery-error"> 
                        <div><code class="HTTPStatus  error_404"><span class="HTTPStatus-chit"></span></code>500</div>
                        <small>Server Error <small className="text-gray">As described in the Message field.</small></small>
                    </div>
                </summary>
            </div>
        </div>
<!-- </div>
    <div className="col col--5"> -->
        <br/>
        <div className="sticky">
            ##### cURL
            ```jsx
                curl --location 'https://link.monoz.io/api/v1/mti/Publish/Message' \
                --header 'Content-Type: application/json' \
                --header 'X-API-Key: 3fa36b0e-c88b-45f4-95b9-d77c0e27c07a' \
                --data '{
                    "ICCID": "12345678",
                    "Topic": "/ABC",
                    "Message": "XYZ",
                    "RetainLastMessage": true,
                    "QoS": 0,
                    "Format": 1
                }'
            ```
            ##### Response
            ```jsx
            {
                "StatusCode": 200,
                "Message": "MessagePublished"
            }
            ```
        </div>
<!-- </div>
</div> -->
