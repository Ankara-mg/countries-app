export function findCountryData(countryData, populationArray, flagArray){
    
    const populationData = populationArray.data.find( pop => {
        return pop.country === countryData.commonName
    })

    const flagData = flagArray.data.find ( flag => {
        return flag.iso2 === countryData.countryCode
    })

    return {
        ...countryData,
        population: populationData?.populationCounts || [],
        flag: flagData?.flag
    }
};