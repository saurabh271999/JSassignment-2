// Q1.Find Grades
// Your school has the following grading system based upon the marks (M) obtained by a student:
//  If M≤10, the grade will be E.
//  If 11≥M≤20, the grade will be D.
//  If 21≥M≤30, the grade will be C.
//  If 31≥M≤40, the grade will be B.
//  If 41≥M≤50, the grade will be A.
// Your friend will enter his marks out of 5050, and your task is to print his grades using a switch statement.
// Note: You have to complete findGrades function. No need to take any input.
// Input Format
// The first and the only line of the input contain an integer M, representing the marks that your friend will enter in the grading system.
// Output Format
// Return the grade obtained by your friend.
// Constraints
// 0≤M≤50
// Example
// Sample Input
// 1
// Sa


let m = 50;
let grade;
switch(true){
    case m<10:
    grade = "E"
    break;
    case m>11 && m<=20:
    grade = "D"
    break;
    case m >= 21 && m <= 30:
        grade = "C"
        case m >= 31 && m <= 40:
            grade = "D"
            break;
            case m >= 41 && m <= 50:
                grade = "A"
                    default:
                        "invalid"
}
console.log(grade)

// Q2. Get Value
// You are provided with a table containing some characters and their corresponding values. Your task will be to find the value from the
// table corresponding to an input character and return it.
// | P or p - PrepBytes |
// | Z or z - Zenith |
// | E or e - Expert Coder |
// | D or d - Data Structure |
// Note: You have to complete getValue function. No need to take any input.
// Input Format
// The first and the only line of the input contain a character C, representing the character that you will get in input.
// Output Format
// Return the value corresponding to the input character.
// Constraints
// C will be one of the following characters: [P, p, Z, z, E, e, D, d].
// Example
  
    function getValue(character){
        switch(character){
    case 'p' : case  'P':
        return "prepBytes";
        
    case 'z' : case 'Z':
        return "Zenith";
        
    case 'e' : case 'E':
        return "Expert coder";
        
    case 'd' : case 'D':
        return "Data";
        
    default:
        return "inavalid character"
        }
    }
    console.log(getValue('p'))
    console.log(getValue('z'))
    console.log(getValue('e'))
    console.log(getValue('d'))

    
// Q3. Find the maximum out of three numbers.
// Take three numbers and print the largest number among them if all of three are same print −1−1.
// Note: You have to complete Max_out_of_three. No need to take any input.
// Input Format
// The input contains three numbers A, B and C.
// Output Format
// Return the maximum number out of the three numbers as result.
// Constraints
// 1≤A, B, C≤10000
// Example
// Sample Input
// 2 5 4


let a = 10
let b = 20
let c = 30

if(a>b && a>c){
    console.log('a is larger')

}else if(b>a && b>c){
    console.log('b is larger')
}else if(a == b && b == c && c == a ){
    console.log('-1')
}else{
    console.log('c is larges')
}

// Q4. Second Smallest
// You are given 33 distinct integers X, Y and Z and your task is to find and return the second smallest integer among the three provided
// integers.
// Note: You have to complete findSndSmallest function. No need to take any input.
// Input Format
// The first and the only line of the input contains three space-separated integers X, Y, and Z, denoting the integers among which you
// have to find the second smallest element.
// Output Format
// Return the second smallest integer among the three integers given to you.
// Constraints
// 1≤X, Y, Z≤500
// X! =Y! =, Y!=Z!=, X!=Z
// Example
// Sample Input
// 2 9 23
// Sam


let x = 10
let y = 30
let z = 50

if(x > y && x < z || x < y && x > z){
    console.log('x is second smallest')
}else if(y > a && y < z || y > z && y < x){
    console.log('y is second smallest')
}else{
    console.log('z is second smallest')
}

// Q5. Check whether the triangle is Acute or Obtuse
// Write a program takes takes three angles and checks whether the triangle is acute or obtuse.
// Note: You have to complete Triangle_Check. No need to take any input
// Input Format
// The input contains three numbers A, B and C which denotes the angles of a triangle.
// Output Format
// Return the required result.
// Constraints
// 0≤A, B, C≤180
// Example
// Sample Input
// 60 100 20
// Sample Output
// obtuse

let height = 10
let breadth = 10
let hypotense = 20

if(height == breadth){
    console.log('its right angle triangle')
}
