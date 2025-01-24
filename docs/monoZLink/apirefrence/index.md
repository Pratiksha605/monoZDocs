---
title: monoZ:Link API 
sidebar_position: 4
---

### Introduction

The monoZ:Link is service which receives data in various supported protocols it then transforms the protocol and pushes the data to the receiver in the destination protocol. The service provides closed network security on the source side, handles protocol translation to take advantage of low data usage of an unsecured network at the source side while using the secured protocols on the destination side.
The document describes the REST APIs exposed by the monoZ:Link service.

### Terminology

The table below describes the standard terminology used throughout this API Documentation:

<table>
<tr>
<td>API</td>
<td><strong>A</strong>pplication <strong>P</strong>rogramming <strong>I</strong>nterface</td>
</tr>
<tr>
<td>REST</td>
<td>Representational State Transfer, and HTTP base architecture for data transfer.</td>
</tr>
<tr>
<td>JSON</td>
<td>JavaScript Object Notation, a data structuring format.</td>
</tr>
<tr>
<td>IoT</td>
<td>Internet of Things.</td>
</tr>
<tr>
<td>MQTT</td>
<td>Message Queuing Telemetry Transport.</td>
</tr>
</table>

<!-- # URI Structure

The URIs for the API resources have the following structure:

For example:

This document details the version 1 of the APIs.
The OrgID is the Organization ID which is generate when the Organization is re.g.,istered on the monoZ:Link portal. This is provided by Meritech to the account manager when the account is created. Please contact Meritech Support if you do not have the OrgID.
The Resource-Name is detailed in the sections below.

### Authentication

Any call to the published APIs must be securely authenticated. During re.g.,istration of the Organization in the monoZ:Link Platform an API Key is generated for the programmatic access of monoZ:Link Rest APIs. The API Key needs to be passed in header for every API call so as to authenticate the caller.
The API Key is provided by Meritech to the account manager when the account is created. Please contact Meritech Support if you do not have the API Key.
This is standard API Key implementation and the header needs to be X-API-Key. Hence if the Key given to your organization is: abcdefg123456 then one needs to pass the following in the API header:

--header 'X-API-Key: abcdefgh123456' -->

### REST API Description

The following are the REST APIs and their usages. In the below API description we will use the sample Instance, Version & Organization ID as shown in the example in section 3 above. They will be:

<table>
    <tr>
        <td>Instance: </td>
        <td>https://link.monoz.io/api</td>
    </tr>
    <tr>
        <td>Version: </td>
        <td>v1</td>
    </tr>
    <tr>
        <td>Organization ID: </td>
        <td>mti</td>
    </tr>
</table>

We will use a sample ICCID and dummy API Key for authentication as mentioned in section 3.1.

##### ICCID: 1234567890

##### API Key:

<table>
    <tr>
        <td>Key: </td>
        <td>X-API-Key</td>
    </tr>
    <tr>
        <td>Value: </td>
        <td>abcdefgh123456</td>
    </tr>
</table>

We will use cURL Command to show sample usage and we will show some sample data in API call return and explain the return data as well as any arguments to the API call.
Every API returns a JSON object as the response. The JSON object returned with each API is described in the sections below. Every JSON object contains a standard response format consisting of:

<ul>
<li>Error: Has a value of True/False denoting whether there was any error in processing the request.</li>
<li>Message: A message describing what was the error if any.</li>
<li>StatusCode: The standard HTTP Response Status Code.</li>
<li>Data: The optional node where a data structure specific to the API is added.</li>
</ul>	
Every record is associated with an Organization hence each API call needs the Organization ID to be provided. The.g.,ET APIs take the Organization ID in URL Path while the PUT/POST APIs take them as part of request body.
