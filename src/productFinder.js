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
    
    let output = {
        itemName: "",
        quantity: 0,
        unit: ""
    };
    
    let quantities = [];
    
    for (var i = 0; i < jsonFile.length; i++) {
        if (jsonFile[i].unit == "each") {
            if (inputItemValue % jsonFile[i].price < .2) {
                quantities.push({itemName: jsonFile[i].item, 
                    quantity: jsonFile[i].quantity, 
                    unit: jsonFile[i].units});
                }
            } else {
                
            }
        }
        
        
    }
    
    function weightValToPound(value, weight, unit) {
        s
    }