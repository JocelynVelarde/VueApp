console.log("Hello this is a console test");

//Create a Vue App, it can be the entire website or just a section of the website
//This case would be a section of the website

//This creates a Vue App
const app = Vue.createApp({
  //we need to pass an object to the vue app first, it is the root component
  //basically set up data, functions and template that will be rendered (BETTER CREATE TEMPLATE ON THE HTML TO MAKE IT MNORE CLEAN)
  //template: "<h2>I am the template</h2>"

  //we create a function that returns an object, the object attribute can be displayed as a variable then
  data() {
    return {
      url: "https://www.google.com",
      showBooks: true,
      books: [{
            title: "Name of the Wind",
            author: "Patrick Rothfuss",
            image: "assets/nameOfTheWind.jpg",
            isFav: true,
      },
        {
            title: "The Final Empire",
            author: "Brandon Sanderson",
            image: "assets/theFinalEmpire.jpg",
            isFav: false,
        },
        {
            title: "The Hero of Ages",
            author: "Brandon Sanderson",
            image: "assets/theHeroAges.jpg",
            isFav: true,
        },
        ],
      x: 0,
      y: 0
    };
  },

  methods: {
    //we create methods inside here
    changeTitle(title) {
      //always use this to refer to a variable inside the data object
      this.title = title;
    },

    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },

    handleEvent(e){
        //e.type meand the type of event that was triggered
        console.log(e, e.type);
    },

    handleMouseMove(e){
        //position of the mouse in the box where the event was triggered
        this.x = e.offsetX;
        this.y = e.offsetY;
    }
  },
});
//This mounts it on the current DOM, we need an element with this id "#app"
//We add that id too on the html file and now our vue app will control everythung inside that element
app.mount("#app");
