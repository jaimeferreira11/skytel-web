export class Usuario {
  constructor(
    public name: string,
    public lastName: string,
    public phoneNumber: string,
    public email?: string,
    public id?: number
  ) {}
}
