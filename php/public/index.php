<?php

/**
 * https://www.php.net/manual/en/curl.examples-basic.php
 
header("Access-Control-Allow-Origin: http://127.0.0.1");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, OPTIONS");
*/

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true ");
header("Access-Control-Allow-Methods: OPTIONS, GET, POST");
header("Access-Control-Allow-Headers: Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control");

public function get_request()
{
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $response = file_get_contents('https://jsonplaceholder.typicode.com/comments?postId=3');

        $response = json_decode($response);

        echo $response;
    }

}
