---
title: Get SIM Enable/Disable Status
sidebar_position: 3
---
<div className="row">
    <div className="col col--7">
        <p className="Get-link"><span className="get">GET</span> <em>https://link.monoz.io/api/v1/{Org-Id}/Sim/Enable/{ICCID}</em></p>
        Returns the status of IMEI lock, whether the SIM is currently locked to the device or not.

    ##### Args
    <div className="card">
        <div className="card__body">
            <div className="row mb-2">
                <div className="col col--4"><code>URL Path ICCID</code></div>
                <div className="col col--8">The ICCID of the SIM for which the enabled status is to be retrieved.</div>
            </div>
        </div>
    </div>
    <br/>
    ##### Response
    <details>
        <summary>
            <div> <div class="error_200 HTTPStatus "><span class="HTTPStatus-chit"></span></div>200</div>
            <small>Success <small className="text-gray">FetchSuccess</small></small>
        </summary>
        ###### Response Body
        <div className="response_details">
            <strong>Error</strong>&nbsp;&nbsp;  <small className="text-gray">boolean</small> 
            <p>Indicates if there was an error.</p>
        </div>
        <div className="response_details">
            <strong>Message</strong>&nbsp;&nbsp;  <small className="text-gray">string</small> 
            <p>Message indicating the result of the operation.</p>
        </div>
        <div className="response_details">
            <strong>StatusCode</strong>&nbsp;&nbsp;  <small className="text-gray">integer</small> 
            <p>HTTP status code of the response.</p>
        </div>
        <div className="response_details">
            <strong>Data</strong>&nbsp;&nbsp;  <small className="text-gray">object</small> 
            <p>Contains the enabled status of the SIM.</p>
        </div>
        <div className="response_details">
            <strong>Enabled</strong>&nbsp;&nbsp;  <small className="text-gray">boolean</small> 
            <p>Indicates whether the SIM is enabled or disabled.</p>
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
</div>
<div className="col col--5">
    <div className="sticky">
        ##### cURL
        ```jsx
            curl --location 'https://link.monoz.io/api/v1/mti/Sim/Enable/1234567890' \
            --header 'X-API-Key: abcdefgh123456'
        ```
        ##### Response
        ```jsx
        {
            "Error": false,
            "Message": "FetchSuccess",
            "StatusCode": 200,
            "Data": {
                "Enabled": true
            }
        }
        ```
    </div>
</div>

</div>