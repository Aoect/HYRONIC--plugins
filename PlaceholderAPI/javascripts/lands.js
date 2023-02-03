var lands = PlaceholderAPI.static.setPlaceholders(BukkitPlayer, "%landlord_max_claim_permission%")

function hasKit(){

  if (lands == "2147483647") {
    return "∞"
  }

  return PlaceholderAPI.static.setPlaceholders(BukkitPlayer, "%landlord_max_claim_permission%")
}

hasKit();