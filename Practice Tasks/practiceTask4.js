const breakfastMenu = ['Pancakes-$12', 'Eggs Benedict-$5', 'Oatmeal-$20', 'Frittata-$45'];
const mainCourseMenu = ['Steak-$152.12', 'Pasta-$99.99', 'Burger-$50', 'Salmon-$250'];
const dessertMenu = ['Cake-$89.50', 'Ice Cream-$10', 'Pudding-$15', 'Fruit Salad-$18'];
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
        document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;
        
let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;
