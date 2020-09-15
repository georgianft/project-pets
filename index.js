class Statement {
    constructor(title, contactPersonName, contactPersonNumber, address, description, pet, img) {
        this.title = title;
        this.contactPersonName = contactPersonName;
        this.contactPersonNumber = contactPersonNumber;
        this.address = address; 
        this.description = description; 
        this.pet = pet; 
        this.img = img; 
    }
}

class pet {
    constructor(category, age) {
        this.category = category;
        this.age = age;
    }

}

class Cat extends pet {
    constructor(category, age, gender, toiletFriendly){
        super(category, age, gender);
        this.toiletFriendly = toiletFriendly;
    }
}