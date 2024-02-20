/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: {
        "back": "url('/src/assets/back.jpg')",
        "ramo": "url('https://i.postimg.cc/mgJ0vD0W/ramo.png')"

        
      },
      backgroundColor:{
        "melon": "#1E1E24",
        "melon2": "#35353d",
        "coral": "#FE938C",
        "nav": "#F7F7FF"
      },
      fontFamily:{
        "sacramento": ['Sacramento', "cursive"],
        "roboto": ['Roboto Slab', "serif"]
        
      },
      borderColor:{
        "melon": "#72788D",
      },
      textColor:{
        "melon": "#72788D",
        "titulo": "#72788D"
      }
      
    },
  },
  plugins: [],
}
