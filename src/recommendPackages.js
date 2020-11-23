import * as packageOfferings from './packageOfferings';


export function recommendPackages( atoScore, menuScore, cfcScore){

    const totalScore = atoScore + menuScore + cfcScore;

    var packages = [];

    if(totalScore<=10 ){
        packages.push(packageOfferings.packageCompleteSupport);
    }
    if(atoScore + menuScore <=10){
        packages.push(packageOfferings.packageAtoMenuSupport);
    }
    if(cfcScore + menuScore <=10){
        packages.push(packageOfferings.packageCfcMenuSupport);
    }
    if(cfcScore + atoScore <=10){
        packages.push(packageOfferings.packageAtoCfcSupport);
    }
    if(cfcScore<=10){
        packages.push(packageOfferings.packageCfcSupport);
    }
    if(atoScore<=10){
        packages.push(packageOfferings.packageAtoSupport);
    }
    if(menuScore<=10){
        packages.push(packageOfferings.packageMenuSupport);
    }

    return packages;

}