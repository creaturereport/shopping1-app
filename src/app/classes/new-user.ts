export class NewUser {
    constructor(firstName: string, lastName: string, city: string, birthDay: string, phoneNumber: number, email: string){
        this.firstName = firstName; 
        this.lastName = lastName; 
        this.memberID = Math.random(); 
        this.city = city;
        this.loyaltyPoints = 0; 
        this.birthDay = birthDay; 
        this.phoneNumber = phoneNumber; 
        this.email = email;
    }
}
