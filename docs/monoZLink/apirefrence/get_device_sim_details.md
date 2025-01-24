---
title: Get Device & SIM Details
sidebar_position: 1
---

<div className="row">
    <div className="col col--7">
        <p className="Get-link"><span className="get">GET</span> <em>https://link.monoz.io/api/v1/{ORG-ID}/Device/Sim/Detail/{ICCID}</em></p>
        Returns the device & sim details & data consumed by the sim for last 30 days from current date. 
        
        ##### Args
        <div className="card">
            <div className="card__body">
                <div className="row mb-2">
                    <div className="col col--4"><code>ORG-ID</code></div>
                    <div className="col col--8">The unique ID assigned to your organisation</div>
                </div>
                <div className="row">
                    <div className="col col--4"><code>ICCID</code></div>
                    <div className="col col--8">Unique ICCID of target device</div>
                </div>
            </div>
        </div>
        <br/>
        ##### Response
        <details>
            <summary>
                <div> <div class="error_200 HTTPStatus "><span class="HTTPStatus-chit"></span></div>200</div>
                <small>Ok <small className="text-gray">Success</small></small>
            </summary>
            ###### Response Body
            <div className="response_details">
                <strong> Name</strong>&nbsp;&nbsp;  <small className="text-gray">string</small> 
                <p>Device name as registered in monoZ:Link</p>
            </div>
            <div className="response_details">
                <strong> ICCID</strong>&nbsp;&nbsp;  <small className="text-gray">string</small> 
                <p>Unique device ID as registered in monoZ:Link</p>
            </div>
            <div className="response_details">
                <strong>IMEILock</strong>&nbsp;&nbsp;  <small className="text-gray">boolean</small> 
                <p>Flag that indicates if SIM is locked to the current device IMEI.</p>
            </div>
            <div className="response_details">
                <strong>ActivationDate</strong>&nbsp;&nbsp;  <small className="text-gray">timestamp</small> 
                <p>The date when the SIM card was activated</p>
            </div>
            <div className="response_details">
                <strong>ExpiryDate</strong>&nbsp;&nbsp;  <small className="text-gray">timestamp</small> 
                <p>The date when the SIM card shall be expired</p>
            </div>
            <div className="response_details">
                <strong>Status</strong>&nbsp;&nbsp;  <small className="text-gray">integer</small> 
                <p>Status of the SIM/Device. A SIM can be enabled (active) or disabled (deactivated)</p>
            </div>
            <div className="response_details">
                <strong>MessageCount</strong>&nbsp;&nbsp;  <small className="text-gray">integer</small> 
                <p>Total number of succesful uplink messages from the device</p>
            </div>
            <div className="response_details">
                <strong>DLMessageCount</strong>&nbsp;&nbsp;  <small className="text-gray">integer</small> 
                <p>Total number of Downlink messages from monoZ:Link to device</p>
            </div>
            <div className="response_details">
                <strong>Volume</strong>&nbsp;&nbsp;  <small className="text-gray">integer</small> 
                <p>The remaining data volume of the SIM/device</p>
            </div>
            <div className="response_details">
                <strong>CreatedDate</strong>&nbsp;&nbsp;  <small className="text-gray">timestamp</small> 
                <p>Date of regisration of device in monoZ:Link</p>
            </div>
            <div className="response_details">
                <strong>UpdatedDate</strong>&nbsp;&nbsp;  <small className="text-gray">timestamp</small> 
                <p>Date of last update of the device in monoZ:Link</p>
            </div>
        </details> 
        <div className="Block-error">
            <div className="error_block_400">
                <summary className="border-bottom">
                    <div className="summery-error"> 
                        <div><code class="HTTPStatus  error_404"><span class="HTTPStatus-chit"></span></code>400</div>
                        <small>Invalid <small className="text-gray">If the input value is not correct format</small></small>
                    </div>
                </summary>
            </div>
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
                        <div><code class="HTTPStatus  error_404"><span class="HTTPStatus-chit"></span></code>404</div>
                        <small>Not Found <small className="text-gray">If the specified ICCID was not found in the system.</small></small>
                    </div>
                </summary>
            </div>
            <div className="error_block_400">
                <summary className="border-bottom">
                    <div className="summery-error"> 
                        <div><code class="HTTPStatus  error_404"><span class="HTTPStatus-chit"></span></code>500</div>
                        <small>Server Error <small className="text-gray">As described in Message field.</small></small>
                    </div>
                </summary>
            </div>
        </div>
    </div>
    <div className="col col--5">
        <div className="sticky">
            ##### cURL
            ```jsx
                curl --location 'https://link.monoz.io/api/v1/mti/Device/Sim/Detail/1234567890\
                --header X-API-Key: abcdefgh123456
            ```
            ##### Response
            ```jsx
            {
                "Error": false,
                "Message": "FetchSuccess",
                "StatusCode": 200,
                "Data": {
                    "Name": "Device name as registeres in monoZ:Link",
                    "ICCID": "Unique device ID as registered in monoZ:Link",
                    "IMEILock": "Flag that indicates if SIM is locked to the current device IMEI.",
                    "ActivationDate": "The date when the SIM card was activated",
                    "ExpiryDate": "The date when the SIM card shall be expired",
                    "Status": "Status of the SIM/Device. A SIM can be enabled (active) or disabled (deactivated)",
                    "MessageCount": "Total number of succesful uplink messages from the device",
                    "DLMessageCount": "Total number of Downlink messages from monoZ:Link to device",
                    "Volume": "The remaining data volume of the SIM/device"
                    "CreatedDate": "Date of regisration of device in monoZ:Link",
                    "UpdatedDate": "Date of last update of the device in monoZ:Link"
                }
            }
            ```
        </div>
    </div>
</div>