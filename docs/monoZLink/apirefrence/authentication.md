---
title: Authentication
sidebar_position: 1
---

Any call to the published APIs must be securely authenticated. During re.g.,istration of the Organization in the monoZ:Link Platform an API Key is generated for the programmatic access of monoZ:Link Rest APIs. The API Key needs to be passed in header for every API call so as to authenticate the caller.
The API Key is provided by Meritech to the account manager when the account is created. Please contact Meritech Support if you do not have the API Key.
This is standard API Key implementation and the header needs to be X-API-Key. Hence if the Key given to your organization is:  abcdefg123456  then one needs to pass the following in the API header:

```jsx
--header 'X-API-Key: abcdefgh123456'
```
<img src={require('@site/static/img/cc.jpg').default} />