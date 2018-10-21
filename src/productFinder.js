// Source in data
import { data } from './priceData';

// getClosestItem takes in a value of an item and the unit the item is in, and outputs
// an item and quantity of that item that approximates the value of the input item.
export function getClosestItem(inputItemValue, inputItemUnit, inputItemWeight) {
    if (inputItemValue === 0 || inputItemWeight === 0) { return ""; }
    
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
    } else if (inputItemUnit === "lb") {
        perPoundValue = inputItemValue;
    }
    
    let quantities = [];
    data.forEach(prod => {
        // Find amount of this item that the input item is equivalent in value to
        quantities.push({
            itemName: prod.itemName,
            quantity: inputItemWeight / prod.price,
            units: "lb",
            distFromWholeNum: (inputItemWeight % prod.price) - 1,
            photoURL: prod.photoURL
        })
    });  
    // Sort by quantity, return
    quantities.sort(function(o1, o2) {
        return o1.distFromWholeNum - o2.distFromWholeNum;
    })
    
    return quantities;
}