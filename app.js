var express = require('express');
var app = express();
var axios = require('axios');

const config = {
    baseUrl : 'http://localhost:3000/api/'
}

/***
 * 1. get albumId(aws)
 * 2. albumId를 인자로 받아 api 2 호출 
 * 3. albumId를 인자로 받아 api 3 호출
 * 4. 응답 받은 2,3값 가져와 비교
 */

const afterqs = axios.get( `${config.baseUrl}quesheets/v2` )
                .then( response => { return response.data } )
                .catch(err => console.log(err))

const beforeqs = axios.get( `${config.baseUrl}quesheets/v3` )
                .then( response => {  return response.data  } )
                .catch(err => console.log(err))

Promise.all([afterqs, beforeqs]).then(function(values) {
    const afterqsValue = values[0];
    const beforeqsValue = values[1];
    
    // console.log( JSON.stringify(afterqsValue) );
    // console.log("=====================");
    // console.log( JSON.stringify(beforeqsValue) );

    // 비교 구문
    
});


app.listen(3001, function () {
    console.log('Example app listening on port 3001!');
});
