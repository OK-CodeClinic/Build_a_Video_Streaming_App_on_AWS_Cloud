# React.js Video Streaming App on AWS Cloud

This github repo shows building a simple React.js application and hosting it on Amazon Web Services (AWS) using EC2, S3, and CloudFront. I'll guide you through the process of building and deploying a React app on AWS.

![react](https://github.com/OK-CodeClinic/Build_a_Video_Streaming_App_on_AWS_Cloud/assets/100064229/71745397-85af-4f5a-b58f-4a3c5edffe3a)
#### how does this works?
- The user initiates access to a public URL, which is routed through Amazon Route 53, allowing them to obtain the IP address of an Amazon Ec2 instance housing the React.js application.
- The React.js application, hosted on the EC2 instance, generates a request to stream a specific video content.
- Amazon CloudFront, a content delivery network (CDN), processes the request from the React.js application and interfaces with Amazon Simple Storage Service (Amazon S3) to retrieve the requested video asset.
- Amazon S3 grants the user access to the requested video content, enabling real-time streaming. Live!

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
- Upload video file(s).
- .
![Screenshot (259)](https://github.com/OK-CodeClinic/Build_a_Video_Streaming_App_on_AWS_Cloud/assets/100064229/c05a3fca-86fd-4c22-b46f-d9ca8f436793)



## Step 4: Configure CloudFront
- First create Origin Access
  ![Screenshot (258)](https://github.com/OK-CodeClinic/Build_a_Video_Streaming_App_on_AWS_Cloud/assets/100064229/e4d80e46-bc0e-4c5d-bbf3-af2f202e4982)

- Create distribution
  ![Screenshot (256)](https://github.com/OK-CodeClinic/Build_a_Video_Streaming_App_on_AWS_Cloud/assets/100064229/ad007ebd-e9d6-43f5-9609-a220f67ef691)

- In the "Origin Settings," select your S3 bucket as the Origin Domain Name
- Redirect HTTP to HTTPS;  to enable encryption in flight for users while streaming
- Leave other settings as default or configure them as needed.

After creating the CloudFront distribution, you'll be provided with a CloudFront Domain Name. This is the URL where your React app will be accessible once deployed.
  ![Screenshot (257)](https://github.com/OK-CodeClinic/Build_a_Video_Streaming_App_on_AWS_Cloud/assets/100064229/90307883-faaa-44bc-8ef3-26fd75388624)


## Step 5: Update react.js video source.
- The video source will be the cloudfront distribution url and the videom file key in the s3 bucket, the url should be like this ; https://d2xpign8lqkkjx.cloudfront.net/SuperbVideo.mp4


## Step 5: Set Up Ec2 Instance where React.js app will be running
- Install all dependencies to run your app
- clone your app on the machine
- start the react application using;
 ```npm start my-video-streaming-app```


 ## OUTCOME
 App is running smoothly with the video content streaming live via the ip address of the ec2 instance that can be connected to Route53 for a custom domain name.
 ![Screenshot (260)](https://github.com/OK-CodeClinic/Build_a_Video_Streaming_App_on_AWS_Cloud/assets/100064229/9b18b3e4-19c7-41c8-a35f-87e6c0743910)


This complete how i built and deployed a simple React.js Application on AWS using EC2, S3, and CloudFront. This is a  reliable cloud-hosted web application. This is the logic behind all streaming platforms including; Neflix, Youtube, etc. Although, they might have some significant differences based on their business models, content delivery, and technical implementations, but all the logic remains the same.

 ### Author
Kehinde Omokungbe
