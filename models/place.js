module.exports = function(sequelize, Sequalize) {
  var PlaceSchema = sequelize.define("Place", {
    latitude: Sequalize.STRING,
    longitude: Sequalize.STRING,
    name: Sequalize.STRING,
    image_url: Sequalize.STRING,
  },{
    timestamps: false
  });
  return PlaceSchema;
}
