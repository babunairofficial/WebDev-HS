

//classes 

class Rectangle {
    constructor(width, height, color) {
         this.width = width;
         this.height = height;
         this.color = color; 
    }
    
    area() {
        const area = this.width * this.height;
          return area;
    }
    
    paint() {
             console.log(`Painting with color ${this.color}`);
    }
    
 }
 
 const rect = new Rectangle(2, 4, "red") //instatiate instance of a class
 const area = rect.area();
 console.log(area)

 // pre-defined classes

 //Date
 const now = new Date();
 console.log(now.toISOString());

 //Maps
 const map = new Map();
 map.set('name', 'sachin');
 map.set('age', 30);
 console.log(map.get('name'));
 console.log(map.get('age'));