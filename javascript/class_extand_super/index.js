  /* Using extends with built-in objects */
  class myDate extends Date {
      constructor() {
          super();
      }

      getFormattedDate() {
          var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          return this.getDate() + '-' + months[this.getMonth()] + '-' + this.getFullYear();
      }
  }

  console.log(new myDate().getFormattedDate());





  class formatDate extends Date {

      /* The extends keyword is used in class declarations or class expressions 
    to create a class which is a child of another class.

 */


      /*  constructor() {
           super();
       } 
        */


      constructor(dateStr) {
          super(dateStr);

          /* The super keyword is used to access and call functions on an object's parent.
          
          Syntax
          super([arguments]); // calls the parent constructor.
          super.functionOnParent([arguments]);
          */


          console.log('dateStr');
          console.log(dateStr);
          console.log(this);
      }

      getFormattedDate() {

          const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          console.log(this);
          console.log(this.getMonth());

          // console.log('August 19, 1975 23:15:30'.getMonth());

          return `
        ${this.getHours()} - 
        ${this.getMinutes()} - 
        ${this.getDate()} -
        -- ${this.getMonth()} --
        ${months[this.getMonth()]} 
        - ${this.getFullYear()} `;
      }

  } // end class

  console.log('(Central European Standard Time)');

  console.log('dateStr', 'August 19, 1975 23:15:30');

  console.log(
      new formatDate('August 19, 1975 23:15:30').getFormattedDate()
  );
  // expected output: "19-Aug-1975"




  class Polygon {
      constructor(height, width) {
          this.name = 'Polygon';
          this.height = height;
          this.width = width;
      }
  }

  class Square extends Polygon {
      constructor(length) {
          super(length, length);
          this.name = 'Square';
      }
  }

  let p1 = new Polygon(6, 5);
  console.log(p1);

  let s1 = new Square(4);
  console.log(s1);
  