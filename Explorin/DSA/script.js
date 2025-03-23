// document.addEventListener('DOMContentLoaded', function() {
//     const themeChangerBtn = document.getElementById('themeChangerBtn');

//     // Function to generate 15 unique hex color values
//     function generateColors() {
//         const colors = new Set();
//         while (colors.size < 15) {
//             const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
//             colors.add(color);
//         }
//         return Array.from(colors);
//     }

//     const colors = generateColors();

//     // Event listener for the button click
//     themeChangerBtn.addEventListener('click', function() {
//         const randomColor = colors[Math.floor(Math.random() * colors.length)];
//         document.body.style.backgroundColor = randomColor;
//     });
// });
const colors=[
"#FF5f5f",
"#FAFAFA",
"#F0F8FF",
"#FFF8DC",
"#FDF5E6",
"#F0FFF0",
"#FFF0F5",
"#E6E6FA",
"#F5FFFA",
"#FFFAF0",
"#F8F8FF",
"#F5F5DC",
"#FAEFAF",
"#FFF5AF",
"#F0E68C",
"#F0E68C"
];

function randomValue(){
    const val= Math.floor(Math.random()*15);
    return val;
}

// for (let i=0;i<50;i++){
//     console.log(colors[randomValue()]);
// }

function changetheme(){
    const body=document.body;
    const index=randomValue();
    const randomColor=colors[index];
    body.style.backgroundColor=randomColor;
}
changetheme();
// const btn =document.getElementById("themeChangerBtn");
// btn.addEventListener('onclick', changetheme);