function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {

    // I pass in a number of travel blocks (blockRange) allowed, then I compare the difference of end - start and create my conditions based on that.

    // If diff is > 0 then its within range but if the diff is less than 0, a negative number (distanceToTravel > blockRange) then it is out of range. 


    let start = parseInt(startBlock)
    let end = parseInt(endBlock)
    let distanceToTravel = Math.abs(end - start)
    let diff = blockRange - distanceToTravel

    if(diff > 0) {
      return `within range by ${diff}`
    } else {
      return `${Math.abs(diff)} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage) {
  return function(fare) {
    return fare * percentage
  }
}

function createDriver() {
  let driverId = 0

  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}
