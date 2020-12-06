class Person{
    constructor(name, age, height){
        this.name = name
        this.age = age
        this.height = height
    }

    sapa(){
        console.log(`hai nama saya ${this.name} umur ${this.age} taun, tingginya ${this.height}`)
    }

}

// const orang = {
//     name : "nopal",
//     age : 17,
//     height : 168
// }

module.exports = Person