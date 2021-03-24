Use /upload/file API to upload your file from node to s3 bucket <br>
set your <code>accesskeyid</code> and <code>secretaccesskey</code> as env variables <br>

<h3>set this code in the CORS setting of your S3 bucket to enable file reading from all domains</h3>

<code>[
{
"AllowedHeaders": [
"*"
],
"AllowedMethods": [
"GET",
"HEAD",
"POST",
"PUT"
],
"AllowedOrigins": [
"*"
],
"ExposeHeaders": []
}
]</code>
