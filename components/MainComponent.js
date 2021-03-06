import React, { Component } from "react";
import { View } from "react-native";

import { DISHES } from "../shared/dishes";
import Menu from "./MenuComponent";
import Dishdetail from "./DishdetailComponent";
import { SafeAreaView } from "react-native";

class Main extends Component {
 constructor(props) {
  super(props);
  this.state = {
   dishes: DISHES,
   selectedDish: null,
  };
 }

 onDishSelect(dishId) {
  this.setState({ selectedDish: dishId });
 }

 render() {
  return (
   <SafeAreaView>
    <Menu dishes={this.state.dishes} onPress={(dishId) => this.onDishSelect(dishId)} />
    <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
   </SafeAreaView>
  );
 }
}

export default Main;
