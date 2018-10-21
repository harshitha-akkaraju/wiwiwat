// getClosestItem takes in a value of an item and the unit the item is in, and outputs
// an item and quantity of that item that approximates the value of the input item.
function getClosestItem(inputItemValue, inputItemUnit, inputItemWeight) {
    if (inputItemValue == 0) { return ""; }

    // Convert weight to lbs for us metric avoidant Americans
    let perPoundValue = 0;
    let itemWeightInPounds = inputItemWeight;
    if (inputItemUnit === "oz") {
        perPoundValue = inputItemValue * 16;
        itemWeightInPounds = itemWeightInPounds * 16;
    } else if (inputItemUnit === "g") {
        perPoundValue = inputItemValue * 453.592;
    } else if (inputItemUnit === "kg") {
        perPoundValue = inputItemValue * 2.20462;
    } else if (inputItemUnit == "lb") {
        perPoundValue = inputItemValue;
    }

    let output = {
        itemName: "",
        value: 0,
        unit: ""
    };

    // 
}