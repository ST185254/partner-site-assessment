export const packageCompleteSupport = {
    id: "ATOCFCMenu",
    name: "Complete PS package",
    description: "PS will handle the complete operation from start to end",
    price: "High"
}

export const packageCfcSupport = {
    id: "CFC",
    name: "CFC package",
    description: "PS will handle the all the operations related to CFC from start to end",
    price: "Low"
}

export const packageMenuSupport = {
    id: "Menu",
    name: "Menu package",
    description: "PS will handle the all the operations related to Menu from start to end",
    price: "Low"
}


export const packageAtoSupport = {
    id: "ATO",
    name: "ATO package",
    description: "PS will handle the all the operations related to ATO from start to end",
    price: "Low"
}

export const packageCfcMenuSupport = {
    id: "CFCMenu",
    name: " CFC and Menu package",
    description: "PS will handle the all the operations related to CFC and Menu from start to end",
    price: "Medium"
}


export const packageAtoMenuSupport = {
    id: "ATOMenu",
    name: " ATO and Menu package",
    description: "PS will handle the all the operations related to ATO and Menu from start to end",
    price: "Medium"
}

export const packageAtoCfcSupport = {
    id: "ATOCFC",
    name: " ATO and CFC package",
    description: "PS will handle the all the operations related to ATO and CFC from start to end",
    price: "Medium"
}

export const allPackages = [ packageCompleteSupport, packageCfcSupport, packageMenuSupport,  packageAtoSupport,  packageAtoCfcSupport, packageAtoMenuSupport, packageCfcMenuSupport];

export function getPackage(id){
    return allPackages.filter(pack =>{
        return pack.id === id;
    });
}