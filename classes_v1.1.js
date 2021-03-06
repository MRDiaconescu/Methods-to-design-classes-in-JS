/*
Methods to design classes in JS version 1.1, 23 July 2021
author: Maria Raluca Diaconescu
This program displays methods to design classes in JS
using techniques specific to object oriented programming*/





function Node(data) {
this.data= data;
this.next = null;
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



airports_list1 = ["Amsterdam", "Basel", "Eindhoven", "Groningen", "Maastricht", "Ameland", "Arnhem" , "Bonaire", "Budel",
                    "Den Helder", "Deventer" ,"Drachten", "Enschede", "Hilversum", "Hoeven" ,"Hoegeveen" , "Lelystaad",  "MiddleBurg",
                    "MiddenMeer", "Rotterdam", "Saba", "Saint Eustatius" ,"Stadskanaal", "Texel" , "Winschoten"]





function set_properties(var1, var2){

  for (var item in var2) {var1[item] = var2[item];}

  return var1;
}




function SystemQueueClass(constructor, methods_list, instance_f) {
    
    if (methods_list) {set_properties(constructor.prototype, methods_list);}
    
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
