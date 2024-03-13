export class User {
    constructor(
    public firstName: string,
    public lastName: string,
    public userName: string,
    public password: string,
    public email: string,
    public admin?: boolean
    ) {}

  }