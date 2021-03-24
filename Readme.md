<li>Use /upload/file API to upload your file from node to s3 bucket <br> </li>
<li>set your <code>accesskeyid</code> and <code>secretaccesskey</code> as env variables <br> </li>
<li>set this code in the CORS setting of your S3 bucket to enable file reading from all domains
</li>

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
