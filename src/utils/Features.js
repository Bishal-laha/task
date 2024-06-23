import data from "../constant/Manufac _ India Agro Dataset.json";

//This FINDTABLE & INTERNAL functions are to organize whole data to an object that consists result of Table 1
export const findTable = ()=>{
    let yearData = {};
    let check = "1950";
    let finalMinCrop = [];
    data.forEach(item => {
        let parts = item.Year.split(', ');
        let year = parseInt(parts[1]);
        if(parseInt(check) === year){
            internal(item,finalMinCrop,yearData,year);
        }else{
            check = year;
            finalMinCrop=[];
            internal(item,finalMinCrop,yearData,year);
        }
    });    
    let ans = Object.entries(yearData).map(([key, value]) => ({id: key,...value}));
    return ans;
}

const internal = (item,finalMinCrop,yearData,year)=>{
    let crop = item["Crop Name"];
    let production = item["Crop Production (UOM:t(Tonnes))"];  
    if (production === null || isNaN(production) || production === "")
        production = 0;
    production = parseFloat(production);
    if (!yearData[year]) {
        yearData[year] = {
            maxProduction: production,
            minProduction: production
        };
    } else {
        if(yearData[year].maxProduction <= production){
            yearData[year].maxProduction = production;
            yearData[year].maxCrop = crop;
        }
        if(yearData[year].minProduction >= production){
            yearData[year].minProduction = production;
            finalMinCrop.push(crop);
            yearData[year].minCrop = finalMinCrop;
        }
    }
}

//This FINDAVG functions are to organize whole data to an object that consists result of Table 2
export const findAvg = ()=>{
    let cropData = {};
    data.forEach(item => {
        let crop = item["Crop Name"];
        let cropArea = item["Area Under Cultivation (UOM:Ha(Hectares))"];
        let cropYield = item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"];
        if (!cropData[crop]) {
            cropData[crop] = {
                totalArea: 0,
                totalYield: 0
            };
        }
        if (cropArea === null || isNaN(cropArea) || cropArea === "")
            cropArea = 0;
        cropArea = parseFloat(cropArea);
        cropData[crop].totalArea += cropArea;
        if (cropYield === null || isNaN(cropYield) || cropYield === "")
            cropYield = 0;
        cropYield = parseInt(cropYield);
        cropData[crop].totalYield += cropYield;
    })
    let ans = Object.entries(cropData).map(([key, value]) => ({id: key,...value}));
    return ans;
}