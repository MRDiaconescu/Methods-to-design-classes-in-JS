/*
Methods to design classes in JS version 2.0, 23 July 2021
author: Maria Raluca Diaconescu
This program displays methods to design classes in JS
using techniques specific to object oriented programming*/


function Node(data) {
this.data= data;
this.next = null;
this.nextl = null;
this.set_next_node = set_next_node;
this.get_next_node = get_next_node;
}

function set_next_node(next) {
this.next = next;

}

function get_next_node() {
return this.next;
}

function LList() {
this.head = new Node("head");
this.create_llist = create_llist;
this.get_head_node = get_head_node;
this.find_item_in_llist = find_item_in_llist;
this.add_item_in_llist= add_item_in_llist;
this.display = display;
this.find_pre_item_in_llist = find_pre_item_in_llist;
this.remove_from_llist = remove_from_llist;
}

function create_llist(newElement){
    var newNode = new Node(newElement);
    newElement.next = this.head;
    this.head = newElement;

    
    
}
function get_head_node() {

return this.head;}

function add_item_in_llist(newElement, item) {
var newNode = new Node(newElement);
var current = this.find_item_in_llist(item);
newNode.next = current.next;
current.next = newNode;
}

function find_pre_item_in_llist(item) {
var currNode = this.head;
while (!(currNode.next == null) &&
(currNode.next.data != item)) {
currNode = currNode.next;
}
return currNode;
}
function display() {
var currNode = this.head;
while (!(currNode.next == null)) {
print(currNode.next.data);
currNode = currNode.next;
}
}
function find_item_in_llist(item) {
var currNode = this.head;
while (currNode.data != item) {
currNode = currNode.next;
}
return currNode;
}


function remove_from_llist(item) {
var prevNode = this.find_pre_item_in_llist(item);
if (!(prevNode.next == null)) {
prevNode.next = prevNode.next.next;
}
}







// function SystemQueue() {
// this.counter=0;
// this.llist_data = [];
// this.path_coordinates = [];
// this.add = add;
// this.remove = remove;
// this.retrieve_the_first_item = retrieve_the_first_item;
// this.retrieve_the_last_item = retrieve_the_last_item;
// this.convert_to_String = convert_to_String;
// this.empty = empty;


// }


// function add_path(arg1, arg2){

// var tuple_item = [arg1, arg2]
// this.llist_data.push(tuple_item)

// return this.llist_data

// }

// function add_path_f1(arg1){
    
//     for (var item in arg1) {
        
//       // print(arg1[item]);
       
//       if (item!=0){
       
//       this.counter++;
       
//       var path = [arg1[0], arg1[item]];
       
//       this.add_path(this.counter, path);}
        
//     }
    
//     return this;
// }


// function add(item) {
// this.llist_data.push(item);
// }
// function remove() {
// return this.llist_data.shift();
// }
// function retrieve_the_first_item() {
// return this.llist_data[0];
// }
// function retrieve_the_last_item() {
// return this.llist_data[this.llist_data.length-1];
// }

// function convert_to_String() {
// var str_data = "";
// for (var i = 0; i < this.llist_data.length; ++i) {
// str_data += this.llist_data[i] + "\n";
// }
// return str_data;
// }

// function size() {
// return this.llist_data;
// }

// function empty() {
// if (this.size() == 0) {
// return true;
// }
// else {
// return false;
// }
// }

// // function add_property(arg1, arg2){

// //   arg1.arg2 = this.arg2;
   
// //   return arg1;}

// var system_queue = new SystemQueue();

// print(system_queue.llist_data);

// print(this);

// for (var item in this)

//     print(item);
    
// print(this.SystemQueue)

// //this.SystemQueue.add_path = this.add_path;

// //print(this.SystemQueue)


// print(this.add_path)

// system_queue.add_path = this.add_path;

// // system_queue.add_path(1, ["Amsterdam", "Zurich"]);

// // system_queue.add_path(2, ["Amsterdam", "Eindhoven"]);

// // system_queue.add_path(3, ["Amsterdam", "Groningen"]);

// // system_queue.add_path(4, ["Amsterdam", "Maastricht"]);

// // system_queue.add_path(5, ["Amsterdam", "Rotterdam"]);


// // system_queue.add_path(6, ["Amsterdam", "Ameland"]);

// // system_queue.add_path(7, ["Amsterdam", "Arnhem"]);

// // system_queue.add_path(8, ["Amsterdam", "Bonaire"]);


// // system_queue.add_path(9, ["Amsterdam", "Budel"]);


// // system_queue.add_path(10, ["Amsterdam", "Den Helder"]);

// // system_queue.add_path(11, ["Amsterdam", "Deventer"]);

// // system_queue.add_path(12, ["Amsterdam", "Drachten"]);


// // system_queue.add_path(15, ["Amsterdam", "Enschede"]);
// // system_queue.add_path(16, ["Amsterdam", "Hilversum"]);

// // system_queue.add_path(17, ["Amsterdam", "Hoeven"]);


// // system_queue.add_path(18, ["Amsterdam", "Hoegeveen"]);


// // system_queue.add_path(19, ["Amsterdam", "Lelystaad"]);

// // system_queue.add_path(20, ["Amsterdam", "MiddleBurg"]);

// // system_queue.add_path(21, ["Amsterdam", "MiddenMeer"]);

// // system_queue.add_path(22, ["Amsterdam", "Rotterdam"]);


// // system_queue.add_path(23, ["Amsterdam", "Saba"]);

// // system_queue.add_path(24, ["Amsterdam", "Saint Eustatius"]);

// // system_queue.add_path(25, ["Amsterdam", "Stadskanaal"]);

// // system_queue.add_path(26, ["Amsterdam", "Texel"]);

// // system_queue.add_path(27, ["Amsterdam", "Winschoten"]);


    
    


airports_list1 = ["Amsterdam", "Bern", "Eindhoven", "Groningen", "Maastricht", "Ameland", "Arnhem" , "Bonaire", "Budel",
                    "Den Helder", "Deventer" ,"Drachten", "Enschede", "Hilversum", "Hoeven" ,"Hoegeveen" , "Lelystaad",  "MiddleBurg",
                    "MiddenMeer", "Rotterdam", "Saba", "Saint Eustatius" ,"Stadskanaal", "Texel" , "Winschoten"]

// system_queue.add_path_f1 = add_path_f1;

// system_queue.add_path_f1(airports_list1);

// print(system_queue.llist_data)




// function map_locations1(arg1, arg2) {
    
//     var paths = this.paths =  function f1(arg1, arg2) {
        
//         var items = []
        
//         for (var item in arg2) {
            
//             if (arg2[item] != arg1){
            
//             items.push([arg1, arg2[item]]);}}
            
//         // for (var item in items) {
    
//         //  items_var.push(items[item][1]);

        
//         return items;
//     }
        
//   return paths;
    
    

// }

// var map_f2_1 = map_locations1("Amsterdam", airports_list1);

// //print(this.paths("Amsterdam", airports_list));

// var map_f2_1_1 = this.paths("Amsterdam", airports_list1);

// print(map_f2_1_1);





// function paths_f1_1(arg1, arg2, arg3) {
    
    
//     arg2.path_coordinates.push(arg1);
    
//     return arg2;
// }
// var path1_1 = paths_f1_1(map_f2_1_1, system_queue);




// print(system_queue.llist_data);

// function LinkedList(arg1, arg2){
    
//     var linked_list = new LList()
    
//     for (var item in arg1[arg2]) {
        
//         print("item", item);
        
//         print("item1", arg1[arg2][item]);
        
//         var list_var = [];
        
//         for (var item1 in arg1[arg2][item]){
        
//             var node = new Node(arg1[arg2][item][item1]);
            
//             print("data", arg1[arg2][item][item1]);
            
//             print("data", node);
            
//             print("data", node.data);//}
            
//             print("head node", linked_list.head);
            
//             print("head node", linked_list.head.data);
            
//             print("current:", node.data);
            
//             current = linked_list.head;

           
//             linked_list.create_llist(node);}}


        
//       // print(list_var);
    
//     return linked_list;
    
// }


// var linked_list = LList();

// var linked_list = LinkedList(system_queue.llist_data, 1);

// print("linked_list", linked_list);

// print(linked_list.head.data);

// print(linked_list.head.next.data);

// print(linked_list.head.next.next.data);






// var linked_list1 = LinkedList(system_queue.llist_data, 2);

// print("linked_list1", linked_list1);

// print(linked_list1.head.data);

// print(linked_list1.head.next.data);

// print(linked_list1.head.next.next.data);



// print("-------------------------------------")

// linked_list.add_item_in_llist("from", linked_list.head.next.data);

// print(linked_list.head.data);

// print(linked_list.head.next.data);

// print(linked_list.head.next.next.data);


// print(linked_list.head.next.next.next.data);

// linked_list.add_item_in_llist("to", linked_list.head.data);


// print(linked_list.head.data);

// print(linked_list.head.next.data);

// print(linked_list.head.next.next.data);


// print(linked_list.head.next.next.next.data);


// print(linked_list.head.next.next.next.next.data);



// function airport_number_generator(arg) {
    
//     var counter = 0;
    
//     var arg1 = [];
    
//     for (var item in arg) {
        
//         counter+=1;
        
//         arg1.push([counter, arg[item]]);
        
        
//     }
    
    
//     return arg1;
// }








// var airport_numbers1 = airport_number_generator(airports_list1);

// print(airport_numbers1);


    
    
    


// function flight_number_generator(arg, arg1, arg2) {
    
//     var first_airport_id;
    
//     var flight_number;
    
//     for (var item in arg1) {
        
//         for (var item1 in arg1[item]) {
            
//           // print(arg1[item][item1]);
        
        
//         if (arg1[item][item1] == arg2[1][1]) {
            
//             print("Found", arg1[item][item1]);
            
//             print("map path to airport number", arg1[item][0]);
            
//             var first_airport_id = arg1[item][0];
//         }
        
//         }
        
//     }
    
//     print(arg2[1]);
    
//      flight_number = arg + first_airport_id;
    
//      return flight_number;
    
    
    
    
// }


// print(system_queue.llist_data[17]);

// flight_number1 = flight_number_generator("KLM", airport_numbers1, system_queue.llist_data[19]);

// print(flight_number1);


// // print(system_queue.llist_data)

// // print(path1_1.llist_data);

// // print(path1_1.path_coordinates);

// // system_queue.add_path_f1 = add_path_f1;

// // system_queue.add_path_f1(airports_list1);

// // print(system_queue.llist_data)


// print(system_queue.llist_data)




function set_properties(var1, var2){

  for (var item in var2) {var1[item] = var2[item];}

  return var1;
}




// function add_path_coordinates(arg1, arg2) {
    
//     print(this.path_coordinates);
    
//      this.path_coordinates[0][arg1].push(arg2);
     
//      print("this.path_coordinates", this.path_coordinates[0][arg1]);
     
//     var aux = this.path_coordinates[0][arg1][this.path_coordinates[0][arg1].length-2];
    
//     this.path_coordinates[0][arg1][this.path_coordinates[0][arg1].length-2] = this.path_coordinates[0][arg1][this.path_coordinates[0][arg1].length-1];
    
//     print(this.path_coordinates[0][arg1][this.path_coordinates[0][arg1].length-2]);
    
//     this.path_coordinates[0][arg1][this.path_coordinates[0][arg1].length-1] = aux;
    
//     print(this.path_coordinates[0][arg1][this.path_coordinates[0][arg1].length-1]);

     
//      return this.path_coordinates;
     
    
//      //print(this.path_coordinates[0][19].length);
   
//      // print(this.path_coordinates[0][19][this.path_coordinates[0][19].length-3]);

    
    
    
// }

// system_queue.add_path_coordinates = add_path_coordinates;

// system_queue.add_path_coordinates(19, "Den Haag");

// print(system_queue.path_coordinates);









function SystemQueueClass(constructor, methods_list, instance_f) {
    
    if (methods_list) {set_properties(constructor.prototype, methods_list);
        
        print("Methods_list", methods_list);
    }
    
    if (instance_f) {set_properties(constructor, instance_f);}
    
    for (var item in constructor.prototype) {print("Property", item);}
    
    return constructor;
    
    
}

var SystemQueueClass_var1 =  SystemQueueClass(
function () {
this.counter=0;
this.llist_data = [];
this.path_coordinates = [];
// this.add = add;
// this.add_path = add_path;
// this.add_path_f1 = add_path_f1;
// this.remove = remove;
// this.retrieve_the_first_item = retrieve_the_first_item;
// this.retrieve_the_last_item = retrieve_the_last_item;
// this.convert_to_String = convert_to_String;
// this.empty = empty;
// this.map_locations1 = map_locations1;
// this.paths_f1_1 = paths_f1_1;
// this.LinkedList = LinkedList;
// this.airport_number_generator = airport_number_generator;
// this.flight_number_generator = flight_number_generator;
// this.add_path_coordinates = add_path_coordinates;


},


{ 

add_path: function (arg1, arg2){

var tuple_item = [arg1, arg2];

this.llist_data.push(tuple_item);

return this.llist_data},


add_path_f1: function (arg1){
    
    for (var item in arg1) {
        
      // print(arg1[item]);
       
      if (item!=0){
       
      this.counter++;
       
      var path = [arg1[0], arg1[item]];
       
      this.add_path(this.counter, path);}
        
    }
    
    return this;
}, 


add: function(item) {
this.llist_data.push(item);
},


remove: function() {
return this.llist_data.shift();
}, 


retrieve_the_first_item: function() {
return this.llist_data[0];
},


retrieve_the_last_item : function() {
return this.llist_data[this.llist_data.length-1];
},

convert_to_String: function() {
var str_data = "";
for (var i = 0; i < this.llist_data.length; ++i) {
str_data += this.llist_data[i] + "\n";
}
return str_data;
},

size: function () {
return this.llist_data;
},

empty: function empty() {
if (this.size() == 0) {
return true;
}
else {
return false;
}
},

map_locations1: function (arg1, arg2) {
    
    var paths = this.paths =  function f1(arg1, arg2) {
        
        var items = []
        
        for (var item in arg2) {
            
            if (arg2[item] != arg1){
            
            items.push([arg1, arg2[item]]);}}
            
        // for (var item in items) {
    
        //  items_var.push(items[item][1]);

        
        return items;
    }
        
  return paths;
    
    

},


paths_f1_1 : function (arg1, arg2, arg3) {
    
    
    arg2.path_coordinates.push(arg1);
    
    return arg2;
},





LinkedList : function(arg1, arg2){
    
    var linked_list = new LList()
    
    for (var item in arg1[arg2]) {
        
        print("item", item);
        
        print("item1", arg1[arg2][item]);
        
        var list_var = [];
        
        for (var item1 in arg1[arg2][item]){
        
            var node = new Node(arg1[arg2][item][item1]);
            
            print("data", arg1[arg2][item][item1]);
            
            print("data", node);
            
            print("data", node.data);//}
            
            print("head node", linked_list.head);
            
            print("head node", linked_list.head.data);
            
            print("current:", node.data);
            
            current = linked_list.head;

           
            linked_list.create_llist(node);}}


        
      // print(list_var);
    
    return linked_list;
    
}, 

airport_number_generator : function (arg) {
    
    var counter = 0;
    
    var arg1 = [];
    
    for (var item in arg) {
        
        counter+=1;
        
        arg1.push([counter, arg[item]]);
        
        
    }
    
    
    return arg1;
},



flight_number_generator : function(arg, arg1, arg2) {
    
    var first_airport_id;
    
    var flight_number;
    
    for (var item in arg1) {
        
        for (var item1 in arg1[item]) {
            
          // print(arg1[item][item1]);
        
        
        if (arg1[item][item1] == arg2[1][1]) {
            
            print("Found", arg1[item][item1]);
            
            print("map path to airport number", arg1[item][0]);
            
            var first_airport_id = arg1[item][0];
        }
        
        }
        
    }
    
    print(arg2[1]);
    
     flight_number = arg + first_airport_id;
    
     return flight_number;
    
    
    
    
},

add_path_coordinates: function (arg1, arg2) {
    
    print(this.path_coordinates);
    
     this.path_coordinates[0][arg1].push(arg2);
     
     print("this.path_coordinates", this.path_coordinates[0][arg1]);
     
    var aux = this.path_coordinates[0][arg1][this.path_coordinates[0][arg1].length-2];
    
    this.path_coordinates[0][arg1][this.path_coordinates[0][arg1].length-2] = this.path_coordinates[0][arg1][this.path_coordinates[0][arg1].length-1];
    
    print(this.path_coordinates[0][arg1][this.path_coordinates[0][arg1].length-2]);
    
    this.path_coordinates[0][arg1][this.path_coordinates[0][arg1].length-1] = aux;
    
    print(this.path_coordinates[0][arg1][this.path_coordinates[0][arg1].length-1]);

     
     return this.path_coordinates;
     
    
     //print(this.path_coordinates[0][19].length);
   
     // print(this.path_coordinates[0][19][this.path_coordinates[0][19].length-3]);

    
    
    
}},


{ instance_f1 : function() {return new SystemQueueClass();}}

    
);



print(SystemQueueClass_var1);

print(SystemQueueClass_var1.prototype);



SystemQueueClass_var1_1 = new SystemQueueClass_var1();

print(SystemQueueClass_var1_1);

for (var item in SystemQueueClass_var1_1) {print(item);}




print(SystemQueueClass_var1_1.add_path_f1);

SystemQueueClass_var1_1.add_path_f1(airports_list1);

print(SystemQueueClass_var1_1.llist_data);



//var var1 = SystemQueueClass_var1_1.instance_f1();

var var1 = SystemQueueClass_var1_1.map_locations1("Amsterdam", airports_list1);

// //print(this.paths("Amsterdam", airports_list));

var var2 = SystemQueueClass_var1_1.paths("Amsterdam", airports_list1);

print(var2);

var var5 = SystemQueueClass_var1_1.paths_f1_1(var2, SystemQueueClass_var1_1);

print(var5.path_coordinates);


var linked_list1_1 = SystemQueueClass_var1_1.LinkedList(SystemQueueClass_var1_1.llist_data, 1);

print("linked_list", linked_list1_1);

print(linked_list1_1.head.data);

print(linked_list1_1.head.next.data);

print(linked_list1_1.head.next.next.data);





var airport_numbers1_1 = SystemQueueClass_var1_1.airport_number_generator(airports_list1);

print(airport_numbers1_1);




print(SystemQueueClass_var1_1.llist_data[17]);

flight_number1_1 = SystemQueueClass_var1_1.flight_number_generator("KLM", airport_numbers1_1, SystemQueueClass_var1_1.llist_data[18]);

print(flight_number1_1);



SystemQueueClass_var1_1.add_path_coordinates(18, "Den Haag");

print(SystemQueueClass_var1_1.path_coordinates);







var linked_list2 = new LList();




function TiedLinkedListsClass(InitialClass, constructor, methods_list, instance_f) {

    constructor.prototype = InitialClass;
    
   print("Constructor prototype", InitialClass);
    
   for (var item in constructor.prototype) {print("Property", item);}

    constructor.prototype.constructor = constructor;
    
    if (methods_list) {set_properties(constructor.prototype, methods_list);
        
        print("Methods_list", methods_list);
    }
    
    if (instance_f) {set_properties(constructor, instance_f);}
    
    for (var item in constructor.prototype) {print("Property1", item);}
    
    return constructor;
    
    
}









var TiedLinkedLiestsClass_var1 =  TiedLinkedListsClass(linked_list2,

function() {

this.head = new Node("head");

},



{
//     create_llist: function (newElement){
//     //var newNode = new Node(newElement);
//     newElement.next = this.head;
//     this.head = newElement;
    
//     return this;
   
// },

// get_head_node: function() {

// return this.head;},

// add_item_in_llist : function (newElement, item) {
// var newNode = new Node(newElement);
// var current = this.find_item_in_llist(item);
// newNode.next = current.next;
// current.next = newNode;
// },

// find_pre_item_in_llist : function (item) {
// var currNode = this.head;
// while (!(currNode.next == null) &&
// (currNode.next.data != item)) {
// currNode = currNode.next;
// }
// return currNode;
// },

// display: function () {
// var currNode = this.head;
// while (!(currNode.next == null)) {
// print(currNode.next.data);
// currNode = currNode.next;
// }
// },

// find_item_in_llist : function (item) {
// var currNode = this.head;
// while (currNode.data != item) {
// currNode = currNode.next;
// }
// return currNode;
// },


// remove_from_llist: function (item) {
// var prevNode = this.find_pre_item_in_llist(item);
// if (!(prevNode.next == null)) {
// prevNode.next = prevNode.next.next;
//  }},
 
star_model: function(){

        var current_node = this.get_head_node();

       // while current_node:

        var next_node = current_node.get_next_node();

        current_node.set_next_node(next_node.get_next_node());

        current_node.nextl = next_node;

        //----------------------------------------------------

        inst_3 = next_node.get_next_node();

        next_node.set_next_node(next_node.get_next_node().get_next_node());

        print(String(current_node.data) +  " : "  + String(current_node.get_next_node().data));

        print(String(next_node.data) + " : " + String(next_node.get_next_node().data));

        next_node.nextl = inst_3;


        //print(str(inst_3));

        //print(next_node.nextl);

        //next_node.set_next_node(next_node.get_next_node());  


        //print(next_node.data);

        //print(next_node.get_next_node());

        //-----------------------------------------------------

        inst_3.nextl = inst_3.get_next_node();

        inst_f = inst_3.nextl;

        //print(inst_3.nextl);

        inst_3.set_next_node(next_node.get_next_node().get_next_node());

        print(String(inst_3.data) + " : " + String(inst_3.get_next_node().data));//#str(next_node.get_next_node().get_next_node()))

        //-----------------------------------------------------

        inst_f.nextl = inst_f.get_next_node();

        inst_fl3 = inst_f.nextl;

        inst_fl2 = inst_f.nextl.get_next_node();

        inst_f.set_next_node(inst_3.get_next_node().get_next_node());

        print(String(inst_f.data) + " : " + String(inst_f.get_next_node().data));

        inst_fl1 = inst_fl2.get_next_node();

        inst_fl3.set_next_node(inst_fl2);

        inst_fl3.nextl= inst_fl2;

        inst_fl2.nextl = inst_fl1;

        inst_fl1.set_next_node(null);

        print(String(inst_fl3.data) + " : " + String(inst_fl3.get_next_node().data));

        print(String(inst_fl2.data) + " : " + String(inst_fl2.get_next_node().data));



        print("Printing the links to one node...")

        print(String(current_node.nextl.data));
        print(String(next_node.nextl.data));
        print(String(inst_3.nextl.data));
        print(String(inst_f.nextl.data));
        print(String(inst_fl3.nextl.data));
        print(String(inst_fl2.nextl.data));

        //print("--------------------------------------------------")

        //print(str(current_node.get_link_node()))

        return this;}
        
 
 
 },

 { instance_f1 : function() {return new TiedLinkedListsClass();}}


);



var TiedLinkedListsClass_var1_1 = new TiedLinkedLiestsClass_var1();

print(TiedLinkedListsClass_var1_1);

for (var item in TiedLinkedListsClass_var1_1) {print(item);}


var vertex1 = new Node(1);

var vertex2 = new Node(2);

var vertex3 = new Node(3);

var vertex4 = new Node(4);

var vertex5 = new Node(5);

var vertex6 = new Node(6);

var vertex7 = new Node(7);


TiedLinkedListsClass_var1_1.create_llist(vertex1);
TiedLinkedListsClass_var1_1.create_llist(vertex2);
TiedLinkedListsClass_var1_1.create_llist(vertex3);
TiedLinkedListsClass_var1_1.create_llist(vertex4);
TiedLinkedListsClass_var1_1.create_llist(vertex5);
TiedLinkedListsClass_var1_1.create_llist(vertex6);
TiedLinkedListsClass_var1_1.create_llist(vertex7);

TiedLinkedListsClass_var1_1.display();



print(TiedLinkedListsClass_var1_1.get_head_node());


print(TiedLinkedListsClass_var1_1.find_item_in_llist(1).data);

TiedLinkedListsClass_var1_1.star_model();







// print("------------------------------------------");

// for (var item in linked_list2) {
    
//     print(item);
// }

















