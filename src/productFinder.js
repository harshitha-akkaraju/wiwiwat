// Source in data
import { data } from './priceData';

// getClosestItem takes in a value of an item and the unit the item is in, and outputs
// an item and quantity of that item that approximates the value of the input item.
export function getClosestItem(inputItemValue, inputItemUnit, inputItemWeight) {
    if (inputItemValue === 0 || inputItemWeight === 0) { return ""; }
    
    // Convert weight to lbs for us metric avoidant Americans
    let itemWeightInPounds = inputItemWeight;
    if (inputItemUnit === "oz") {
        itemWeightInPounds = itemWeightInPounds * 16;
    } else if (inputItemUnit === "g") {
        itemWeightInPounds = itemWeightInPounds * 453.592;
    } else if (inputItemUnit === "kg") {
        itemWeightInPounds = inputItemValue * 2.20462;
    }
    
    let quantities = [];
    data.forEach(prod => {
        let weight = inputItemValue / prod.price;

        quantities.push({
            itemName: prod.itemName,
            weight: weight,
            units: "lb",
            distFromWholeNum: itemWeightInPounds - weight,
            photoURL: prod.photoURL
        })
    });  

    // Sort by quantity, return
    quantities.sort(function(o1, o2) {
        return o1.distFromWholeNum - o2.distFromWholeNum;
    })
    
    return quantities;
}