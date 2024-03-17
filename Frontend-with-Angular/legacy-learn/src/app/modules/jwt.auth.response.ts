export class JwtAuthResponse {
    constructor(
      public accessToken: string,
      public tokenType: string) {} 
    // Add other methods or properties if needed
  }