// ## Challenge: Online Movie Booking System 🎬

// Create a **JavaScript Online Movie Booking System** that calculates the final ticket price and displays a complete booking summary.
// You must use the concepts you have learned so far: **variables, primitive data types, string methods, type conversion, Math methods, arithmetic operators, comparison operators, logical operators, if/else-if/else, ternary operator, switch, and template literals.**

// ### Given Data

// Start with the following variables:

// ```js
// let customerName = "  Mudassir  ";
// let rawAge = " 17 ";
// let rawTickets = " 3 ";
// let isStudent = true;
// let isWeekend = true;
// let isMember = false;
// let movie = "Avengers: Endgame";
// ```

// Also create a variable for the **base ticket price**.

// ---

// ### Requirements

// #### 1. Customer Information

// * Remove unnecessary spaces from `customerName` using `.trim()`.
// * Convert `rawAge` into a number.
// * Convert `rawTickets` into a number.
// * Generate a random **booking ID between 10000 and 99999** using the `Math` object.

// ---

// #### 2. Customer Category

// Use a **ternary operator** to determine the customer's category:

// * Age `18` or above → `"Adult"`
// * Age below `18` → `"Minor"`

// Store the result in a variable called `category`.

// ---

// #### 3. Base Ticket Price

// Use an `if / else if / else` statement:

// * Age below `5` → Free
// * Age `5–12` → `$8`
// * Age `13–17` → `$12`
// * Age `18+` → `$18`

// Store the result in `ticketPrice`.

// ---

// #### 4. Student Discount

// If the customer is a student **AND** their age is between `13` and `25`, give them a **20% discount**.

// Otherwise, there should be no student discount.

// ---

// #### 5. Weekend Charge

// If it is a weekend **AND** the customer is an adult, add a **$3 weekend charge per ticket**.

// Otherwise, there is no weekend charge.

// ---

// #### 6. Membership Discount

// If the customer is a member **OR** the total number of tickets is `3` or more, give a **10% discount**.

// Use the appropriate logical operator.

// ---

// #### 7. Calculate Total

// Calculate:

// * Base ticket cost
// * Student discount
// * Membership discount
// * Weekend charges
// * Final amount

// Make sure the discounts and charges are calculated correctly based on the number of tickets.

// ---

// #### 8. Booking Type

// Use a **ternary operator**:

// * Tickets `>= 5` → `"Group Booking"`
// * Otherwise → `"Regular Booking"`

// ---

// #### 9. Concession Offer

// Use `switch(true)` to determine the concession offer:

// * Final amount is `$0` → `"Free Popcorn 🍿"`
// * Final amount is `<= $20` → `"50% Off Snacks 🥤"`
// * Final amount is `<= $50` → `"Free Soft Drink 🥤"`
// * Otherwise → `"No Concession"`

// ---

// #### 10. Booking Status

// Use `if / else if / else`:

// * Invalid age or tickets → `"Invalid Booking"`
// * Tickets greater than `10` → `"Maximum 10 tickets allowed"`
// * Final amount greater than `$100` → `"Premium Booking"`
// * Otherwise → `"Booking Confirmed"`

// ---

// #### 11. Final Output

// Using **template literals**, display a complete booking receipt containing:

// ```text
// ================================
//        MOVIE BOOKING
// ================================

// Customer:
// Movie:
// Booking ID:
// Age:
// Category:
// Tickets:
// Booking Type:

// Ticket Price:
// Student Discount:
// Membership Discount:
// Weekend Charge:
// Final Amount:

// Concession:
// Booking Status:

// ================================
// ```

// ### Restrictions

// Try to solve the entire problem using **only the concepts covered so far**. Do not use arrays, objects, functions, loops, or advanced methods yet.
