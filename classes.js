/*
Methods to design classes in JS version 1.0, 23 July 2021
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
    //var newNode = new Node(newElement);
    newElement.next = this.head;
    this.head = newElement; 
}




function get_head_node() {
return this.head;
}


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



function SystemQueue() {
this.counter=0;
this.llist_data = [];
this.path_coordinates = [];
this.add = add;
this.remove = remove;
this.retrieve_the_first_item = retrieve_the_first_item;
this.retrieve_the_last_item = retrieve_the_last_item;
this.convert_to_String = convert_to_String;
this.empty = empty;


}


function add_path(arg1, arg2){

var tuple_item = [arg1, arg2]

this.llist_data.push(tuple_item)

return this.llist_data

}



function add_path_f1(arg1){
    
    for (var item in arg1) {
        
       print(arg1[item]);
       
      if (item!=0){
       
      this.counter++;
       
      var path = [arg1[0], arg1[item]];
       
      this.add_path(this.counter, path);}
        
    }
    
    return this;
}


function add(item) {
this.llist_data.push(item);
}


function remove() {
return this.llist_data.shift();
}


function retrieve_the_first_item() {
return this.llist_data[0];
}

function retrieve_the_last_item() {
return this.llist_data[this.llist_data.length-1];
}

function convert_to_String() {
var str_data = "";
for (var i = 0; i < this.llist_data.length; ++i) {
str_data += this.llist_data[i] + "\n";
}
return str_data;
    
}

function size() {
return this.llist_data;
}

function empty() {
if (this.size() == 0) {
return true;
}
else {
return false;
}
}




print(this.SystemQueue)


var system_queue = new SystemQueue();

print(system_queue);

system_queue.add_path = this.add_path;


    


airports_list1 = ["Amsterdam", "Zurich", "Eindhoven", "Groningen", "Maastricht", "Ameland", "Arnhem" , "Bonaire", "Budel",
                    "Den Helder", "Deventer" ,"Drachten", "Enschede", "Hilversum", "Hoeven" ,"Hoegeveen" , "Lelystaad",  "MiddleBurg",
                    "MiddenMeer", "Rotterdam", "Saba", "Saint Eustatius" ,"Stadskanaal", "Texel" , "Winschoten"]


system_queue.add_path_f1 = add_path_f1;

system_queue.add_path_f1(airports_list1);

print(system_queue.llist_data)



function map_locations1(arg1, arg2) {
    
    var paths = this.paths =  function f1(arg1, arg2) {
        
        var items = []
        
        for (var item in arg2) {
            
            if (arg2[item] != arg1){
            
            items.push([arg1, arg2[item]]);}}
        
        return items;
    }
        
  return paths;
    
    

}

var map_f2_1 = map_locations1("Amsterdam", airports_list1);

var map_f2_1_1 = this.paths("Amsterdam", airports_list1);

print(map_f2_1_1);



function paths_f1_1(arg1, arg2, arg3) {
    
    
    arg2.path_coordinates.push(arg1);
    
    return arg2;
}


var path1_1 = paths_f1_1(map_f2_1_1, system_queue);




function LinkedList(arg1, arg2){
    
    var linked_list = new LList()
    
    for (var item in arg1[arg2]) {
        
        print(item);
        
        print(arg1[arg2][item]);
                
        for (var item1 in arg1[arg2][item]){
        
            var node = new Node(arg1[arg2][item][item1]);
           
            linked_list.create_llist(node);}}
    
    return linked_list;
    
}



var linked_list = LinkedList(system_queue.llist_data, 1);

print(linked_list);


linked_list.add_item_in_llist("from", linked_list.head.next.data);

linked_list.add_item_in_llist("to", linked_list.head.data);




function airport_number_generator(arg) {
    
    var counter = 0;
    
    var arg1 = [];
    
    for (var item in arg) {
        
        counter+=1;
        
        arg1.push([counter, arg[item]]);
        
        
    }
    
    return arg1;
}




var airport_numbers1 = airport_number_generator(airports_list1);

print(airport_numbers1);


function flight_number_generator(arg, arg1, arg2) {
    
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
    
    
   
}



flight_number1 = flight_number_generator("KLM", airport_numbers1, system_queue.llist_data[18]);

print(flight_number1);



function set_properties(var1, var2){

  for (var item in var2) {var1[item] = var2[item];}

  return var1;
}


set_properties(SystemQueue.prototype, {

add_path_coordinates : function (arg1, arg2) {
        
    this.path_coordinates[0][arg1].push(arg2);
          
    var aux = this.path_coordinates[0][arg1][this.path_coordinates[0][arg1].length-2];
    
    this.path_coordinates[0][arg1][this.path_coordinates[0][arg1].length-2] = this.path_coordinates[0][arg1][this.path_coordinates[0][arg1].length-1];
        
    this.path_coordinates[0][arg1][this.path_coordinates[0][arg1].length-1] = aux;
     
     return this.path_coordinates;}

    
    
});


system_queue.add_path_coordinates(18, "Den Haag");

print(system_queue.path_coordinates);




function SystemQueueClass(constructor) {
    
    return constructor;
    
}

var SystemQueueClass_var1 = SystemQueueClass(
function () {
this.counter=0;
this.llist_data = [];
this.path_coordinates = [];
this.add = add;
this.add_path = add_path;
this.add_path_f1 = add_path_f1;
this.remove = remove;
this.retrieve_the_first_item = retrieve_the_first_item;
this.retrieve_the_last_item = retrieve_the_last_item;
this.convert_to_String = convert_to_String;
this.empty = empty;
this.map_locations1 = map_locations1;
this.paths_f1_1 = paths_f1_1;
this.LinkedList = LinkedList;
this.airport_number_generator = airport_number_generator;
this.flight_number_generator = flight_number_generator;
this.add_path_coordinates = SystemQueue.prototype.add_path_coordinates;


}

);




SystemQueueClass_var1_1 = new SystemQueueClass_var1();

SystemQueueClass_var1_1.add_path_f1(airports_list1);

print(SystemQueueClass_var1_1.llist_data);



var var1 = SystemQueueClass_var1_1.map_locations1("Amsterdam", airports_list1);

var var2 = this.paths("Amsterdam", airports_list1);

print(var2);

var var5 = SystemQueueClass_var1_1.paths_f1_1(var2, SystemQueueClass_var1_1);

print(var5.path_coordinates);


var linked_list1_1 = LinkedList(SystemQueueClass_var1_1.llist_data, 1);

print(linked_list1_1);

var airport_numbers1_1 = SystemQueueClass_var1_1.airport_number_generator(airports_list1);

print(airport_numbers1_1);

flight_number1_1 = flight_number_generator("KLM", airport_numbers1, SystemQueueClass_var1_1.llist_data[18]);

print(flight_number1_1);


SystemQueueClass_var1_1.add_path_coordinates(18, "Den Haag");

print(SystemQueueClass_var1_1.path_coordinates);








