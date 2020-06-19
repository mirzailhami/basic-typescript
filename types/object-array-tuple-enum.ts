// OBJECT
// const programmer: {
//     firstName: string;
//     lastName: string;
// } 
const programmer = {
    firstName: 'John',
    lastName: 'Doe'
};

// console.log(programmer.firstName);


// ARRAY
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     hobbies: ['Reading', 'Swimming']
// };
// for (const hobby of person.hobbies) {
//     console.log(hobby.toUpperCase());
// }


// TUPLE
const student: {
    firstName: string;
    lastName: string;
    hobbies: string[];
    role: [number, string]
} = {
    firstName: 'John',
    lastName: 'Doe',
    hobbies: ['Reading', 'Swimming'],
    role: [2, 'Admin']
};

student.role.push(3, 'Editor');
// console.log(student);

// ENUM
enum Role {WRITE_ONLY = 0, READ_ONLY};
const person = {
    firstName: 'John',
    lastName: 'Doe',
    hobbies: ['Reading', 'Swimming'],
    role: Role.READ_ONLY
};

if (person.role == Role.READ_ONLY) {
    console.log('is read only');
}

// ANY
let data: any[];
data = ['5', 10, true, 10.4];

let first: any;
first = 'John';
first = 10;