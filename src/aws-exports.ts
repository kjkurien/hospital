

const awsmobile = {
  "aws_project_region": "ap-south-1",
  "aws_cognito_identity_pool_id": "ap-south-1:dab9912d-a03a-48ab-9aa8-9b50634b41d7",
  "aws_cognito_region": "ap-south-1",
  "aws_user_pools_id": "ap-south-1_3kFcM1l5K",
  "aws_user_pools_web_client_id": "93iudiauetqutncetqfh6s731",
  "oauth": {
    "domain": "diet.auth.ap-south-1.amazoncognito.com",
    "scope": [
      "email",
      "openid",
      "phone"
    ],
    "redirectSignIn": "https://www.google.com",
    "redirectSignOut": "https://www.facebook.com",
    "responseType": "code"
  },
  "federationTarget": "COGNITO_USER_POOLS",
  "aws_cognito_username_attributes": [
    "EMAIL"
  ],
  "aws_cognito_social_providers": [
    "GOOGLE"
  ],
  "aws_cognito_verification_mechanisms": [
    "EMAIL"
  ]
};

export default awsmobile;
