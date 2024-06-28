export class User {
  id: number;
  name: string;
  lastname: string;
  address: string;
  country: string;
  email: string;
  email_recovery: string;
  password: string;
  phone: string;
  photo: string;
  registration_date: string;
  userRole_id: number;

  constructor(id: number, name: string, lastname: string, address: string, country: string, email: string, email_recovery: string, password: string, phone: string, photo: string, registration_date: string, userRole_id: number) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.address = address;
    this.country = country;
    this.email = email;
    this.email_recovery = email_recovery;
    this.password = password;
    this.phone = phone;
    this.photo = photo;
    this.registration_date = registration_date;
    this.userRole_id = userRole_id;
  }
}
