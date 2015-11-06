// --------------- getgetRelationship(x,y) ----------------------
function validate(x, y) {
    var errorParams = [];
    if(isNaN(x)){
        errorParams.push(x);
    }
    if(isNaN(y)){
        errorParams.push(y);
    }
    return errorParams;
}

function getErrorString(errorParams){
    var multipleErrors = errorParams.length > 1;
    var errorStr = "Can't compare relationships because " + errorParams[0];
    if(multipleErrors) {
        errorStr += " and " + errorParams[1] + " are not numbers.";
    } else {
        errorStr += " is not a number.";
    }
    return errorStr;
}

function getComaprisonSign(x, y) {
    if(x > y) {
        return ">";
    } else if(x < y) {
        return "<";
    } else {
        return "=";
    }
}

function getRelationship(x, y) {
    var errorParams = validate(x, y);
    if(errorParams.length > 0) {
        return getErrorString(errorParams);
    }
    
    return getComaprisonSign(x, y);
}

// --------------- alphabetizer(_names) ----------------------
function converter(rawName){
    return rawName.split(" ").reverse().join(", ");
}

function alphabetizer(_names) {
    var converter = function(rawName){
        return rawName.split(" ").reverse().join(", ");
    };
    return _names.map(converter).sort();
}

// ---------------- Google PSI -----------------//
// Iterate through the localizedRuleNames in ruleResults and 
// return an array of their strings.
function ruleList(results) {
    var ruleNames = [];
    var ruleResults = results.formattedResults.ruleResults;
    for(var rule in ruleResults) {
        ruleNames.push(ruleResults[rule].localizedRuleName);
    }
    return ruleNames;
}

// Iterate through pageStats in the psiResults object and 
// return the total number of bytes to load the website.
function totalBytes(results) {
    var total = 0;
    var pageStats = results.pageStats;
    for(var key in pageStats) {
        if(key.endsWith('Bytes')) {
            total += parseInt(pageStats[key], 10);
        }
    }
    return total;
}



