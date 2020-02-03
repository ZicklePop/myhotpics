import AWS from 'aws-sdk'

AWS.config.region = 'us-west-2'
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'us-west-2:1764a85f-2e60-4c44-a4d9-bb53dd4a40c0'
})

const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: {
    Bucket: 'my-hot-pics'
  }
})

export default s3
