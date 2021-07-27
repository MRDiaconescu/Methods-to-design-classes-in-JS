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






airports_list1 = ["Amsterdam", "Bern", "Eindhoven", "Groningen", "Maastricht", "Ameland", "Arnhem" , "Bonaire", "Budel",
                    "Den Helder", "Deventer" ,"Drachten", "Enschede", "Hilversum", "Hoeven" ,"Hoegeveen" , "Lelystaad",  "MiddleBurg",
                    "MiddenMeer", "Rotterdam", "Saba", "Saint Eustatius" ,"Stadskanaal", "Texel" , "Winschoten"]




function set_properties(var1, var2){

  for (var item in var2) {var1[item] = var2[item];}

  return var1;
}




function SystemQueueClass(constructor, methods_list, instance_f) {
    
    if (methods_list) {set_properties(constructor.prototype, methods_list);
        
    }
    
    if (instance_f) {set_properties(constructor, instance_f);}
    
    for (var item in constructor.prototype) {print(item);}
    
    return constructor;
    
    
}

var SystemQueueClass_var1 =  SystemQueueClass(
function () {
this.counter=0;
this.llist_data = [];
this.path_coordinates = [];

},


{ 

add_path: function (arg1, arg2){

var tuple_item = [arg1, arg2];

this.llist_data.push(tuple_item);

return this.llist_data},


add_path_f1: function (arg1){
    
    for (var item in arg1) {
        
      print(arg1[item]);
       
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
        
        print(item);
        
        print(arg1[arg2][item]);
        
                
        for (var item1 in arg1[arg2][item]){
        
            var node = new Node(arg1[arg2][item][item1]);
            
            linked_list.create_llist(node);}}

    
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
        
        if (arg1[item][item1] == arg2[1][1]) {
            
            print(arg1[item][item1]);
            
            print(arg1[item][0]);
            
            var first_airport_id = arg1[item][0];
        }
        
      }
        
    }
    
    
     flight_number = arg + first_airport_id;
    
     return flight_number;
    
      
},

    
add_path_coordinates: function (arg1, arg2) {
        
     this.path_coordinates[0][arg1].push(arg2);
          
    var aux = this.path_coordinates[0][arg1][this.path_coordinates[0][arg1].length-2];
    
    this.path_coordinates[0][arg1][this.path_coordinates[0][arg1].length-2] = this.path_coordinates[0][arg1][this.path_coordinates[0][arg1].length-1];
        
    this.path_coordinates[0][arg1][this.path_coordinates[0][arg1].length-1] = aux;
    
     
     return this.path_coordinates;
     
    
    
    
}},


{ instance_f1 : function() {return new SystemQueueClass();}}

    
);




SystemQueueClass_var1_1 = new SystemQueueClass_var1();

print(SystemQueueClass_var1_1);

for (var item in SystemQueueClass_var1_1) {print(item);}


SystemQueueClass_var1_1.add_path_f1(airports_list1);

print(SystemQueueClass_var1_1.llist_data);


var var1 = SystemQueueClass_var1_1.map_locations1("Amsterdam", airports_list1);

var var2 = SystemQueueClass_var1_1.paths("Amsterdam", airports_list1);

print(var2);

var var5 = SystemQueueClass_var1_1.paths_f1_1(var2, SystemQueueClass_var1_1);

print(var5.path_coordinates);


var linked_list1_1 = SystemQueueClass_var1_1.LinkedList(SystemQueueClass_var1_1.llist_data, 1);

print(linked_list1_1);

var airport_numbers1_1 = SystemQueueClass_var1_1.airport_number_generator(airports_list1);

print(airport_numbers1_1);

flight_number1_1 = SystemQueueClass_var1_1.flight_number_generator("KLM", airport_numbers1_1, SystemQueueClass_var1_1.llist_data[18]);

print(flight_number1_1);

SystemQueueClass_var1_1.add_path_coordinates(18, "Den Haag");

print(SystemQueueClass_var1_1.path_coordinates);






var linked_list2 = new LList();



function TiedLinkedListsClass(InitialClass, constructor, methods_list, instance_f) {

    constructor.prototype = InitialClass;
        
    constructor.prototype.constructor = constructor;
    
    if (methods_list) {set_properties(constructor.prototype, methods_list);
    
    }
    
    if (instance_f) {set_properties(constructor, instance_f);}
    
    
    for (var item in constructor.prototype) {print(item);}

    
    return constructor;
    
    
}



var TiedLinkedListsClass_var1 =  TiedLinkedListsClass(linked_list2,

function() {

this.head = new Node("head");

},

    {   set_properties: set_properties,
     
        
        setter:  function()  {this.llist = this;
    
                    return this;},

    
        star_model: function(){

        var current_node = this.get_head_node();

        var next_node = current_node.get_next_node();

        current_node.set_next_node(next_node.get_next_node());

        current_node.nextl = next_node;

        inst_3 = next_node.get_next_node();

        next_node.set_next_node(next_node.get_next_node().get_next_node());

        print(String(current_node.data) +  " : "  + String(current_node.get_next_node().data));

        print(String(next_node.data) + " : " + String(next_node.get_next_node().data));

        next_node.nextl = inst_3;

        inst_3.nextl = inst_3.get_next_node();

        inst_f = inst_3.nextl;

        inst_3.set_next_node(next_node.get_next_node().get_next_node());

        print(String(inst_3.data) + " : " + String(inst_3.get_next_node().data));

        inst_f.nextl = inst_f.get_next_node();

        inst_fl3 = inst_f.nextl;

        inst_fl2 = inst_f.nextl.get_next_node();

        inst_f.set_next_node(inst_3.get_next_node().get_next_node());

        print(String(inst_f.data) + " : " + String(inst_f.get_next_node().data));

        inst_fl1 = inst_fl2.get_next_node();

        inst_fl3.set_next_node(inst_fl1);

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
        

        return this;}
        
 
 
 },

 { instance_f1 : function() {return new TiedLinkedListsClass();}}


);




var TiedLinkedListsClass_var1_1 = new TiedLinkedListsClass_var1();

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




var TiedLinkedLists = TiedLinkedListsClass_var1.prototype.set_properties(
    
function TiedLinkedLists(llist, f1, f2) {
    
    this.llist = llist;
    this.f1 = f1;
    this.f2 = f2;
    this.llist.f1 = this.f1;
    this.llist.f2 = this.f2;
},

{infinite_model: function(llist2){

        h1 = this.head;

        h2 = llist2.head;
        

        five = h1;

        four = h1.next;

        three = h1.next.next;

        two = h1.next.next.next;

        one = h1.next.next.next.next;

        print(one.data, two.data, three.data, four.data, five.data);


        ten = h2;

        nine = h2.next;

        eight = h2.next.next;

        seven = h2.next.next.next;

        six = h2.next.next.next.next;

        print(ten.data, nine.data, eight.data, seven.data, six.data);




        one.set_next_node(six)

        six.set_next_node(seven);

        seven.set_next_node(three);

        three.set_next_node(nine);

        nine.set_next_node(ten);

        ten.set_next_node(five);

        five.set_next_node(four);

        four.set_next_node(eight);

        eight.set_next_node(two);

        two.set_next_node(one);


       return this;
   
 
 },
    
    
    
print_the_linked_list_infinite_model: function(){


        var current_node = this.head;

        var counter = 0

        while (current_node){

            print(current_node.next.data);

            current_node = current_node.next;

            counter+=1;

            if (counter == 10){

                break;}} 
            
     
   }})




var TiedLinkedLists1 = new TiedLinkedLists(new TiedLinkedListsClass_var1, TiedLinkedLists.infinite_model, TiedLinkedLists.print_the_linked_list_infinite_model); 

for (var item in TiedLinkedLists1) {print(item);}


print(TiedLinkedLists1.llist);



var one = new Node(1);

var two = new Node(2);

var three = new Node(3);

var four = new Node(4);

var five = new Node(5);

var six = new Node(6);

var seven = new Node(7);

var eight = new Node(8);

var nine = new Node(9);

var ten = new Node(10);

TiedLinkedLists1.llist.create_llist(one);

TiedLinkedLists1.llist.create_llist(two);

TiedLinkedLists1.llist.create_llist(three);

TiedLinkedLists1.llist.create_llist(four);

TiedLinkedLists1.llist.create_llist(five);

TiedLinkedLists1.llist.display();


var TiedLinkedListsClass_var2 = new TiedLinkedListsClass_var1();

TiedLinkedListsClass_var2.create_llist(six);

TiedLinkedListsClass_var2.create_llist(seven);

TiedLinkedListsClass_var2.create_llist(eight);

TiedLinkedListsClass_var2.create_llist(nine);

TiedLinkedListsClass_var2.create_llist(ten);

TiedLinkedListsClass_var2.display();


var llist7 = TiedLinkedLists1.llist.f1(TiedLinkedListsClass_var2);

llist7.f2();






function TiedLinkedLists_setter(llist, f1, f2) {

    var attributes_list = {


        llist : {value: llist, enumerable:true, writable:false, configurable: false},

        f1: {value: f1, enumerable:true, writable:false, configurable:false},

        f2: {value: f2, enumerable:true, writable: false, configurable:false},
        

    };
    
    llist.f1 = f1;
    
    llist.f2 = f2;

    if (this instanceof TiedLinkedLists_setter) {

        Object.defineProperties(this, attributes_list);

    }
 }

var TiedLinkedLists2 =  new TiedLinkedLists_setter(new TiedLinkedListsClass_var1, TiedLinkedLists.infinite_model, TiedLinkedLists.print_the_linked_list_infinite_model); 



function print_attributes(arg, arg1) {
    
    var attribute_descriptor = Object.getOwnPropertyDescriptor(arg, arg1);
    
    print(attribute_descriptor.enumerable);
    
    print(attribute_descriptor.writable);
    
    print(attribute_descriptor.configurable);
    
}

print_attributes(TiedLinkedLists1, "llist");

print_attributes(TiedLinkedLists2, "llist");



   



TiedLinkedListsClass_var1.prototype.getter = TiedLinkedLists.print_the_linked_list_infinite_model;

function TiedLinkedLists_setter_f1(llist, f1, f2, getter, setter) {
        
    var attributes_list = {


        llist : {value: llist, enumerable:true, writable:false, configurable: false},

        f1: {value: f1, enumerable:true, writable:false, configurable:false},

        f2: {value: f2, enumerable:true, writable: false, configurable:false},
        

    };
    

    llist.f1 = f1;
    
    llist.f2 = f2;
    
    var attributes_list1 = { 
        
    get: {value: getter, enumerable:true, writable: false, configurable:false},
        
    set: {value: setter, enumerable:true, writable: false, configurable:false}

        
    };

        

    if (this instanceof TiedLinkedLists_setter_f1) {

         Object.defineProperties(this, attributes_list);
         Object.defineProperties(this, attributes_list1);

      
    }

}






var TiedLinkedLists5 =  new TiedLinkedLists_setter_f1(new TiedLinkedListsClass_var1, TiedLinkedLists.infinite_model, TiedLinkedLists.print_the_linked_list_infinite_model, TiedLinkedLists.getter, TiedLinkedListsClass_var1.setter); 

var attribute_descriptor5 = Object.getOwnPropertyDescriptor(TiedLinkedLists5, "llist");

for (var item in TiedLinkedLists5) {

    print_attributes(TiedLinkedLists5, item);

}





