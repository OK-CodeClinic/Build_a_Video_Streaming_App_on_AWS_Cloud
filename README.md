# React.js Video Streaming App on AWS Cloud

This github repo shows building a simple React.js application and hosting it on Amazon Web Services (AWS) using EC2, S3, and CloudFront. I'll guide you through the process of building and deploying a React app on AWS.

## Prerequisites
Before you get started, make sure you have the following:
- An AWS account: Sign up for an AWS account if you don't have one already.
- Node.js and npm: Make sure you have Node.js and npm installed on your local development machine.

## Step 1: Create a React Application
- This command will help you create a new react application
```
npx create-react-app my-video-streaming-app
cd my-react-app
npm start

```

- This will create a new React app and start the development server. You can access your app at ```http://localhost:3000``` in your web browser.

## Step 2: Build React Application
- you can use this command to build
 ```npm run build```

## Step 3: Set Up an S3 Bucket
Set up s3 bucket that will store all the video resources. Then, upload video files
- Enable versioning
- Enable buckey key
- Update the bucket policy to this
```
{
    "Version": "2008-10-17",
    "Id": "PolicyForCloudFrontPrivateContent",
    "Statement": [
        {
            "Sid": "AllowCloudFrontServicePrincipal",
            "Effect": "Allow",
            "Principal": {
                "Service": "cloudfront.amazonaws.com"
            },
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::my-video-streaming-app/*",
            "Condition": {
                "StringEquals": {
                    "AWS:SourceArn": "arn:aws:cloudfront::729175374817:distribution/E227FP06ZTSAGU"
                }
            }
        }
    ]
}

```

## Step 4: Configure CloudFront
- First create Origin Access
- Create distribution 
- In the "Origin Settings," select your S3 bucket as the Origin Domain Name
- Redirect HTTP to HTTPS;  to enable encryption in flight for users while streaming
- Leave other settings as default or configure them as needed.

After creating the CloudFront distribution, you'll be provided with a CloudFront Domain Name. This is the URL where your React app will be accessible once deployed.

## Step 5: Update react.js video source.
- The video source will be the cloudfront distribution url and the videom file key in the s3 bucket, the url should be like this ; https://d2xpign8lqkkjx.cloudfront.net/SuperbVideo.mp4


## Step 5: Set Up Ec2 Instance where React.js app will be running
- Install all dependencies to run your app
- clone your app on the machine
- start the react application using;
 ```npm start my-video-streaming-app```


 ## OUTCOME


This complete how i built and deployed a simple React.js Application on AWS using EC2, S3, and CloudFront. This is a  reliable cloud-hosted web application. This is the logic behind all streaming platforms includingn Neflix, Youtube, etc. Although, they might have some has significant differences based on their business models, content delivery, and technical implementations, but all logic remains the same.

 ### Author
Kehinde Omokungbe