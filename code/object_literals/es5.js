// ES5
function regionService() {
  function getRegion(name) {
    var region = {
      name: "Sydney",
      data: {
        population: 100
      }
    };
    var transform = {};
    transform[region.name] = region.data;
    return transform;
  }
  function getAllRegions() {
    var regions = [];
    return regions;
  }
  return {
    getRegion: getRegion,
    getAllRegions: getAllRegions,
    getRandomRegion: function () {
      return Math.floor(Math.random() * 6) + 1
    }
  }
}
var regionService = regionService();
console.log(regionService.getRegion());
console.log(regionService.getAllRegions());
console.log(regionService.getRandomRegion());
