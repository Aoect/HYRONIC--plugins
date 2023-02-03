var hexflameplaceholder = "luckperms_has_permission_debuff.hexflame";
var hexflamestatus = PlaceholderAPI.static.setPlaceholders(BukkitPlayer, "%" + hexflameplaceholder + "%");
var hexflameplaceholder2 = "luckperms_expiry_time_debuff.hexflame";
var hexflametimerstatus = PlaceholderAPI.static.setPlaceholders(BukkitPlayer, "%" + hexflameplaceholder2 + "%");
var brittleboneplaceholder = "luckperms_has_permission_debuff.brittlebone";
var brittlebonestatus = PlaceholderAPI.static.setPlaceholders(BukkitPlayer, "%" + brittleboneplaceholder + "%");
var brittleboneplaceholder2 = "luckperms_expiry_time_debuff.brittlebone";
var brittlebonetimerstatus = PlaceholderAPI.static.setPlaceholders(BukkitPlayer, "%" + brittleboneplaceholder2 + "%");
var disarmedplaceholder = "luckperms_has_permission_debuff.disarmed";
var disarmedstatus = PlaceholderAPI.static.setPlaceholders(BukkitPlayer, "%" + disarmedplaceholder + "%");
var disarmedplaceholder2 = "luckperms_expiry_time_debuff.disarmed";
var disarmedtimerstatus = PlaceholderAPI.static.setPlaceholders(BukkitPlayer, "%" + disarmedplaceholder2 + "%");

function hasKit(){

  var hexflame = hexflamestatus === "yes" ? "ワ " : "";
  var hexflametimer = hexflamestatus === "yes" ? hexflametimerstatus : "";
  var brittlebone = brittlebonestatus === "yes" ? " ヨ " : "";
  var brittlebonetimer = brittlebonestatus === "yes" ? brittlebonetimerstatus : "";
  var disarmed = disarmedstatus === "yes" ? " リ " : "";
  var disarmedtimer = disarmedstatus === "yes" ? disarmedtimerstatus : "";

  return hexflame + hexflametimer + brittlebone + brittlebonetimer + disarmed + disarmedtimer;

}

hasKit();