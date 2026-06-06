let personStatus="Enrolled Member";
let dietaryService;
switch(personStatus){
    case "Employee":
        dietaryService="You hve access to Dietary Services only";
        break;
    case "Enrolled Member":
        dietaryService="You have access to Dietary sevices along with one to one interaction with a dietician";
        break;
    case "Subscriber":
        dietaryService="You have partial access to Dietary services";
        break;
    default:
        dietaryService="Subscribe to avail Dietary services";
}
console.log("Dietary Service Status:",dietaryService);