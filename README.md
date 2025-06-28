# 📗 Module 5. Logic and Control Flow - Lesson 08.02: Logical Assignment - Challenge

## 📝 Step 4: Project Challenge – Logical Assignment

### 🎯 Challenge Objective
Create a mini module that simulates a user preferences panel. You'll apply logical assignment operators (`||=`, `&&=`, `??=`) to initialize and modify values conditionally.

---
### 🛠️ Project Requirements
```javascript
1. Setup a user preferences object:

let userSettings2 = {
    darkMode: null,
    fontSize: undefined,
    language: '',
    notification: true
};

2. Create a defaultSettings object:

const defaultSettings2 = {
    darkMode: false,
    fontSize: 14,
    language: 'English',
    notification: false
};

3. Apply settings using logical assignment:
• Use ??= to set darkMode and fontSize
• Use ||= to set language only if it is empty
• Use &&= to turn off notifications only if already true.
```
---

### ✅ Expected Output

```javascript
{
  darkMode: false,
  fontSize: 14,
  language: 'English',
  notification: false
}
```
---

### 🧠 Bonus Exploration (Optional)
```javascript
• Allow the user to manually update a setting and test whether your logic prevents overwriting values unless needed.
• Wrap the logic in a function like applyDefaultSettings(user, defaults) for reusability.
```
---

### 📝 Reflection Prompts
```javascript
• Why did you choose ??= instead of ||= in some cases?
• What behavior surprised you when using logical assignment operators?
```
---

### ☑️ Pseudocode

```javascript
SET object userSettings
SET object defaultSettings

FOR each setting in userSettings:
    IF setting is null or undefined:
        SET setting to corresponding value from defaultSettings

    IF userSettings.language is falsy:
        SET userSettings.language to defaultSettings.language

    IF userSettings.notification is truthy:
        SET userSettings.notification to defaultSettings.notification

PRINT userSettings
```
---

### 🧮 Solution (JavaScript)

```javascript
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

// Apply logical assignment operations
userSettings.darkMode ??= defaultSettings.darkMode;
userSettings.fontSize ??= defaultSettings.fontSize;
userSettings.language ||= defaultSettings.language;
userSettings.notification &&= defaultSettings.notification;

console.log(userSettings);
```
---

### 💡 Bonus Idea

Turn this logic into a reusable function:

```javascript
function applyDefaultSettings(user, defaults) {
    user.darkMode ??= defaults.darkMode;
    user.fontSize ??= defaults.fontSize;
    user.language ||= defaults.language;
    user.notification &&= defaults.notification;
}
```
---
🎉 Well done!