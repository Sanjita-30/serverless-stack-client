const config = {
  MAX_ATTACHMENT_SIZE: 5000000,

    s3: {
    REGION: "us-east-1",
    BUCKET: "sanji-bucket",
    },
    apiGateway: {
    REGION: "us-east-1",
    URL: "  https://sjms08fhj8.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_Pfy9bKmJD",
      APP_CLIENT_ID: "7v511shas104ukg0lc0nnrieqh",
      IDENTITY_POOL_ID: "us-east-1:330e0499-cdf4-4400-b032-49f6a7ac5962",
    },
    social: {
      FB: "277971548057554"
    },
};
export default config;