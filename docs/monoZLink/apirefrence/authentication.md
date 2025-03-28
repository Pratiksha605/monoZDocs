---
title: Authentication
sidebar_position: 1
---

Any call to the published APIs must be securely authenticated. During registration of the Organization in the monoZ:Link Platform an API Key is generated for the programmatic access of monoZ:Link Rest APIs. The API Key needs to be passed in header for every API call so as to authenticate the caller. The API Key is auto created by monoZ:Link and available to the organisation owner (tenant admin) only. If the key given to your organization is "abcdefg123456"  then pass in the API header as follows:

```jsx
--header 'X-API-Key: abcdefgh123456'
```
<img src={require('@site/static/img/cc.jpg').default} />