---
title: API Authentication
sidebar_position: 2
---
### Organization ID
Organization ID (commonly referred ORG-ID or ORGID) is used for verification of target monoZ:Link organisation.

### API Authentication
Any call to the published APIs must be securely authenticated. During registration of the Organization in the monoZ:Link Platform an API Key is generated for the programmatic access of monoZ:Link Rest APIs. The API Key needs to be passed in header for every API call so as to authenticate the caller. The API Key is auto created by monoZ:Link and available to the organisation owner (tenant admin) only. If ORG-ID and API key was correct, user request will be accepted. If the key given to your organization is "exampleapikeyabcdefgh123456"  then pass in the API header as follows:

```jsx
--header 'X-API-Key: exampleapikeyabcdefgh123456'
```
<img src={require('@site/static/img/cc.jpg').default} />

