let userRole="admin";
let accessLevel;

// if-else implementation
if(userRole==="admin"){
    accessLevel="Full access granted";
}else if(userRole==="manager"){
    accessLevel="Limited access granted";
}else{
    accessLevel="No access granted";
}
console.log("Access Level:",accessLevel);

let isLoggedIn=true;
let userMessage;
// nested if-else condition implementation
if(isLoggedIn){
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
}else{
    userMessage="Please log in to access the system.";
}
console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;
// switch case implementation
switch(userType){
    case "admin":
        userCategory= "Adminiistrator";
        break;
    case "manager":
        userCategory="Manager";
        break;
    case "subscriber":
        userCategory="Subscriber";
        break;
    default:
        userCategory= "Unknown";        
}
console.log("User Category:", userCategory);

let isAuthenticated=true;
// ternary operator implementation
let authenticationStatus= isAuthenticated ? "Authenticated" : "Not Authenticated";
console.log("Authentication Status:", authenticationStatus);
