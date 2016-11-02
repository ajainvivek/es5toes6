// ES6
function regionService() {
  function getRegion(name) {
    var region = {
      name: "Sydney",
      data: {
        population: 100
      }
    };
    return {
      [region.name] : region.data
    };
  }
  function getAllRegions() {
    var regions = [];
    return regions;
  }
  return {
    getRegion,
    getAllRegions,
    getRandomRegion() {
      return Math.floor(Math.random() * 100) + 1
    }
  }
}
var regionService = regionService();
console.log(regionService.getRegion());
console.log(regionService.getAllRegions());
console.log(regionService.getRandomRegion());
