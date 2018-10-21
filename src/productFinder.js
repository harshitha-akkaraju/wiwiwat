// Source in data
import React from 'react';
import { data } from './priceData';

// getClosestItem takes in a value of an item and the unit the item is in, and outputs
// an item and quantity of that item that approximates the value of the input item.
function getClosestItem(inputItemValue, inputItemUnit, inputItemWeight) {
    if (inputItemValue == 0 || inputItemWeight == 0) { return ""; }
    
    // Convert weight to lbs for us metric avoidant Americans
    let perPoundValue = 0;
    let itemWeightInPounds = inputItemWeight;
    if (inputItemUnit === "oz") {
        perPoundValue = inputItemValue * 16;
        itemWeightInPounds = itemWeightInPounds * 16;
    } else if (inputItemUnit === "g") {
        perPoundValue = inputItemValue * 453.592;
        itemWeightInPounds = itemWeightInPounds * 453.592;
    } else if (inputItemUnit === "kg") {
        perPoundValue = inputItemValue * 2.20462;
        itemWeightInPounds = inputItemValue * 2.20462;
    } else if (inputItemUnit == "lb") {
        perPoundValue = inputItemValue;
    }
    
    let quantities = [];
    data.forEach( prod => {
        if (prod.unit == "each") {
            // If approximately a number of items with quantity "each"
            if (inputItemValue % prod.price < .2) {
                quantities.push({
                    itemName: prod.item, 
                    quantity: Math.round(inputItemValue / prod.price, 1), 
                    unit: "each",
                    distFromWholeNum: 0
                }); }
            } else {
                // Find amount of this item that the input item is equivalent in value to
                quantities.push({
                    itemName: prod.item,
                    quantity: Math.round(inputItemWeight / prod.price, 2),
                    units: "lb",
                    distFromWholeNum: inputItemWeight % prod.price
                })
            }
        });  
        // Sort by quantity, return
        quantities.sort(function(o1, o2) {
            return o1.distFromWholeNum - o2.distFromWholeNum;
        })
        
        return quantities;
    }