console.log("%cJS Lab Connected — Start completing the TODOs!", "font-weight:bold; font-size:14px;");

// ==========================
// TODO-2: SYNTAX & VARIABLES
// ==========================

// Task 2.1 — declare & reassign
let course = "CIS101";
console.log(course);
course = "CIS102";
console.log(course);

// Task 2.2 — const safety
const SCHOOL = "MyCollege";
// SCHOOL = "OtherCollege"; // <-- Uncomment to see the error, then re-comment after testing
// Reassignment fails because 'const' variables cannot be changed after initialization.

// ==========================
// TODO-3: ARITHMETIC & TYPES
// ==========================

// Task 3.1 — arithmetic basics
let x = 8, y = 3;
console.log(x + y); // 11
console.log(x - y); // 5
console.log(x * y); // 24
console.log(x / y); // 2.666...
console.log(x % y); // 2

// Task 3.2 — number vs string
console.log("2" + 3); // "23"
console.log(2 + "3"); // "23"
console.log(2 + 3);   // 5
// The first two concatenate because one operand is a string, so JS converts the other to a string.


// ==========================
// TODO-4: CONDITIONALS (CORE)
// ==========================

// Task 4.1 — else-if ladder
let age = 20; // Change this value to test
if (age < 13) {
    console.log("Child");
} else if (age >= 13 && age <= 35) {
    console.log("Young");
} else {
    console.log("Aged");
}

// Task 4.2 — Switch statement
let day = "Mon";
switch (day) {
    case "Mon":
    case "Tue":
    case "Wed":
    case "Thu":
    case "Fri":
        console.log("weekday");
        break;
    case "Sat":
    case "Sun":
        console.log("weekend");
        break;
    default:
        console.log("unknown");
        break;
}

// ===============
// TODO-5: LOOPS
// ===============

// Task 5.1 — for loop sum
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum); // 55

// Task 5.2 — while loop
let t = 3;
while (t > 0) {
    console.log(t);
    t--;
}

// Read Chapter 4 in zyBooks: Do-While Loop
let d = 3;
do {
    console.log("Do-While:", d);
    d--;
} while (d > 0);


// =============================
// TODO-6: FUNCTIONS (DECL, RETURN, ARROW)
// =============================

// Task 6.1 — pure function + return
function add(a, b) {
    return a + b;
}
console.log(add(2, 5)); // 7

// Task 6.2 — Arrow functions
const cube = n => n * n * n;
console.log(cube(3)); // 27


// =================================
// TODO-7: SCOPE & GLOBAL OBJECT (ESSENTIALS)
// =================================

// Task 7.1 — var vs let scope
{
    var a = 1;
    let b = 2;
}
console.log(a); // 1 (var is function/global scoped)
try {
    console.log(b); // ReferenceError (let is block scoped)
} catch (e) {
    console.log("b is not accessible outside the block");
}


// ==================
// TODO-8: ARRAYS (CORE)
// ==================

// Task 8.1 — create & mutate
let nums = [3, 1, 4];
nums.push(1);
nums.unshift(9);
nums.pop();
console.log(nums); // [9, 3, 1]
console.log(nums.length); // 3


// End of manual — great job! Keep this file open and work task by task.
