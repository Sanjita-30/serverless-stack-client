const config = {
    s3: {
    REGION: "us-east-1",
    BUCKET: "sanjita-notes",
    },
    apiGateway: {
    REGION: "us-east-1",
    URL: " https://sjms08fhj8.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_QLMKlqVac",
      APP_CLIENT_ID: "q1gcrpi7dttsbjrqko5npc01i",
      IDENTITY_POOL_ID: "us-east-1:f7ed87a8-1676-416c-9727-f3d7accd2ab8",
    },
};
export default config;