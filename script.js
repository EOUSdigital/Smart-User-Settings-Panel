//TODO 📗 Module 5. Logic and Control Flow - Lesson 08.02: Logical Assignment - Challenge


//TODO 📝 Step 1: Smart User Settings Panel

//* 🎯 Challenge Objective
//  Build a mini JavaScript module that simulates a user preferences panel. You will use logical assignment operators (||=, &&=, ??=) to manage and initialize user settings efficiently.

//* 🛠️ Project Requirements
//  1. Setup a user preferences object:

let userSettings2 = {
    darkMode: null,
    fontSize: undefined,
    language: '',
    notification: true
};

//  2. Create a defaultSettings object:

const defaultSettings2 = {
    darkMode: false,
    fontSize: 14,
    language: 'English',
    notification: false
};

//  3. Apply settings using logical assignment:

//  • Use ??= to set darkMode and fontSize
//  • Use ||= to set language only if it is empty
//  • Use &&= to turn off notifications only if already true

//* 📋 Expected Output Example

let Output = {
    darkMode: false,
    fontSize: 14,
    language: 'English',
    notifications: false
};

//* 🧠 Bonus Exploration (Optional)
//  • Allow the user to manually update a setting and test whether your logic prevents overwriting values unless needed.
//  • Wrap the logic in a function like applyDefaultSettings(user, defaults) for reusability.

//* 📝 Reflection Prompts
//  • Why did you choose ??= instead of ||= in some cases?
//  • What behavior surprised you when using logical assignment operators?


//? ☑️ Pseudocode

//  SET object userSettings
//  SET object defaultSettings

//  FOR each property in userSettings:
//    IF property is null or undefined:
//        APPLY ??= with default value
//    ELSE IF property is falsy and should be a string:
//        APPLY ||= with default value
//    ELSE IF property is truthy and should be conditionally disabled:
//        APPLY &&= with default value

//  PRINT userSettings


//! 🧮 Solution

let userSettings = {
    darkMode: null,
    fontSize: undefined,
    language: '',
    notification: true
};

const defaultSettings = {
    darkMode: false,
    fontSize: 14,
    language: 'English',
    notification: false
};

userSettings.darkMode ??= defaultSettings.darkMode;
userSettings.fontSize ??= defaultSettings.fontSize;
userSettings.language ||= defaultSettings.language;
userSettings.notification &&= defaultSettings.notification;

console.log(userSettings);


//* ✅ Explanation of Each Line
//  • ??= checks for null or undefined (best for darkMode and fontSize)
//  • ||= assigns if the current value is falsy (great for empty strings like '')
//  • &&= only assigns if the current value is truthy (for disabling notification when it's on)




















