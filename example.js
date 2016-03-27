
(Root Component)

import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core";

@Component({
  selector: 'myapp',
  template: '<div>Hello World!</div>'

});

class myApp{}

bootstrap(myApp);
_______________________________________________________

// <!-- First add a component decorator. -->
//
// <!--  2. Add a selector -->
//   <!--  Use <myapp></myapp> in html file to call the template-->
//
// <!--  3. Add a template-->
//
// <!-- 4. Add a class to represent the Component -->
//
// <!--  5. We had to bootstrap that class -->
//
// <!--  6. Import bootstrap from "angular2/platform/browser" -->
_______________________________________________________________

import {Component} from "angular2/core";

@Component({
  selector: 'todo',
  template: '<div>I am writing for my todo list!</div>'

});

export class ToDo{}

___________________________

import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core";
import {ToDoInput} from "./todo";

@Component({
  selector: 'myapp',
  directives: [ToDo],
  template: '<div><todo><todo></div>'

});

class myApp{}

bootstrap(myApp);
____________________________________

// <!-- Add an export class to be able to set it up as a template in the editor-->
//
// <!-- Add a selector and a template -->
//
// <!-- Switch to the root component and Import the file -->
//     <!-- add the relative path to the file -->

// <!-- In order to use the new component in the root Component, you have to add it to the array of directives. -->
