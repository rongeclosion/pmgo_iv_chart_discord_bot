var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
var basestats ={
  "bulbasaur":
  {
    "atk":118.0,
    "def":90.0,
    "hp":118.0,
    "raid":false  },
  "ivysaur":
  {
    "atk":151.0,
    "def":120.0,
    "hp":151.0,
    "raid":false  },
  "venusaur":
  {
    "atk":198.0,
    "def":160.0,
    "hp":198.0,
    "raid":false  },
  "charmander":
  {
    "atk":116.0,
    "def":78.0,
    "hp":96.0,
    "raid":false  },
  "charmeleon":
  {
    "atk":158.0,
    "def":116.0,
    "hp":129.0,
    "raid":false  },
  "charizard":
  {
    "atk":223.0,
    "def":156.0,
    "hp":176.0,
    "raid":false  },
  "squirtle":
  {
    "atk":94.0,
    "def":88.0,
    "hp":122.0,
    "raid":false  },
  "wartortle":
  {
    "atk":126.0,
    "def":118.0,
    "hp":155.0,
    "raid":false  },
  "blastoise":
  {
    "atk":171.0,
    "def":158.0,
    "hp":210.0,
    "raid":false  },
  "caterpie":
  {
    "atk":55.0,
    "def":90.0,
    "hp":62.0,
    "raid":false  },
  "metapod":
  {
    "atk":45.0,
    "def":100.0,
    "hp":94.0,
    "raid":false  },
  "butterfree":
  {
    "atk":167.0,
    "def":120.0,
    "hp":151.0,
    "raid":false  },
  "weedle":
  {
    "atk":63.0,
    "def":80.0,
    "hp":55.0,
    "raid":false  },
  "kakuna":
  {
    "atk":46.0,
    "def":90.0,
    "hp":86.0,
    "raid":false  },
  "beedrill":
  {
    "atk":169.0,
    "def":130.0,
    "hp":150.0,
    "raid":false  },
  "pidgey":
  {
    "atk":85.0,
    "def":80.0,
    "hp":76.0,
    "raid":false  },
  "pidgeotto":
  {
    "atk":117.0,
    "def":126.0,
    "hp":108.0,
    "raid":false  },
  "pidgeot":
  {
    "atk":166.0,
    "def":166.0,
    "hp":157.0,
    "raid":false  },
  "rattata":
  {
    "atk":103.0,
    "def":60.0,
    "hp":70.0,
    "raid":false  },
  "raticate":
  {
    "atk":161.0,
    "def":110.0,
    "hp":144.0,
    "raid":false  },
  "spearow":
  {
    "atk":112.0,
    "def":80.0,
    "hp":61.0,
    "raid":false  },
  "fearow":
  {
    "atk":182.0,
    "def":130.0,
    "hp":135.0,
    "raid":false  },
  "ekans":
  {
    "atk":110.0,
    "def":70.0,
    "hp":102.0,
    "raid":false  },
  "arbok":
  {
    "atk":167.0,
    "def":120.0,
    "hp":158.0,
    "raid":false  },
  "pikachu":
  {
    "atk":112.0,
    "def":70.0,
    "hp":101.0,
    "raid":false  },
  "raichu":
  {
    "atk":193.0,
    "def":120.0,
    "hp":165.0,
    "raid":false  },
  "sandshrew":
  {
    "atk":126.0,
    "def":100.0,
    "hp":145.0,
    "raid":false  },
  "sandslash":
  {
    "atk":182.0,
    "def":150.0,
    "hp":202.0,
    "raid":false  },
  "nidoran_f":
  {
    "atk":86.0,
    "def":110.0,
    "hp":94.0,
    "raid":false  },
  "nidorina":
  {
    "atk":117.0,
    "def":140.0,
    "hp":126.0,
    "raid":false  },
  "nidoqueen":
  {
    "atk":180.0,
    "def":180.0,
    "hp":174.0,
    "raid":false  },
  "nidoran_m":
  {
    "atk":105.0,
    "def":92.0,
    "hp":76.0,
    "raid":false  },
  "nidorino":
  {
    "atk":137.0,
    "def":122.0,
    "hp":112.0,
    "raid":false  },
  "nidoking":
  {
    "atk":204.0,
    "def":162.0,
    "hp":157.0,
    "raid":false  },
  "clefairy":
  {
    "atk":107.0,
    "def":140.0,
    "hp":116.0,
    "raid":false  },
  "clefable":
  {
    "atk":178.0,
    "def":190.0,
    "hp":171.0,
    "raid":false  },
  "vulpix":
  {
    "atk":96.0,
    "def":76.0,
    "hp":122.0,
    "raid":false  },
  "ninetales":
  {
    "atk":169.0,
    "def":146.0,
    "hp":204.0,
    "raid":false  },
  "jigglypuff":
  {
    "atk":80.0,
    "def":230.0,
    "hp":44.0,
    "raid":false  },
  "wigglytuff":
  {
    "atk":156.0,
    "def":280.0,
    "hp":93.0,
    "raid":false  },
  "zubat":
  {
    "atk":83.0,
    "def":80.0,
    "hp":76.0,
    "raid":false  },
  "golbat":
  {
    "atk":161.0,
    "def":150.0,
    "hp":153.0,
    "raid":false  },
  "oddish":
  {
    "atk":131.0,
    "def":90.0,
    "hp":116.0,
    "raid":false  },
  "gloom":
  {
    "atk":153.0,
    "def":120.0,
    "hp":139.0,
    "raid":false  },
  "vileplume":
  {
    "atk":202.0,
    "def":150.0,
    "hp":170.0,
    "raid":false  },
  "paras":
  {
    "atk":121.0,
    "def":70.0,
    "hp":99.0,
    "raid":false  },
  "parasect":
  {
    "atk":165.0,
    "def":120.0,
    "hp":146.0,
    "raid":false  },
  "venonat":
  {
    "atk":100.0,
    "def":120.0,
    "hp":102.0,
    "raid":false  },
  "venomoth":
  {
    "atk":179.0,
    "def":140.0,
    "hp":150.0,
    "raid":false  },
  "diglett":
  {
    "atk":109.0,
    "def":20.0,
    "hp":88.0,
    "raid":false  },
  "dugtrio":
  {
    "atk":167.0,
    "def":70.0,
    "hp":147.0,
    "raid":false  },
  "meowth":
  {
    "atk":92.0,
    "def":80.0,
    "hp":81.0,
    "raid":false  },
  "persian":
  {
    "atk":150.0,
    "def":130.0,
    "hp":139.0,
    "raid":false  },
  "psyduck":
  {
    "atk":122.0,
    "def":100.0,
    "hp":96.0,
    "raid":false  },
  "golduck":
  {
    "atk":191.0,
    "def":160.0,
    "hp":163.0,
    "raid":false  },
  "mankey":
  {
    "atk":148.0,
    "def":80.0,
    "hp":87.0,
    "raid":false  },
  "primeape":
  {
    "atk":207.0,
    "def":130.0,
    "hp":144.0,
    "raid":false  },
  "growlithe":
  {
    "atk":136.0,
    "def":110.0,
    "hp":96.0,
    "raid":false  },
  "arcanine":
  {
    "atk":227.0,
    "def":180.0,
    "hp":166.0,
    "raid":false  },
  "poliwag":
  {
    "atk":101.0,
    "def":80.0,
    "hp":82.0,
    "raid":false  },
  "poliwhirl":
  {
    "atk":130.0,
    "def":130.0,
    "hp":130.0,
    "raid":false  },
  "poliwrath":
  {
    "atk":182.0,
    "def":180.0,
    "hp":187.0,
    "raid":false  },
  "abra":
  {
    "atk":195.0,
    "def":50.0,
    "hp":103.0,
    "raid":false  },
  "kadabra":
  {
    "atk":232.0,
    "def":80.0,
    "hp":138.0,
    "raid":false  },
  "alakazam":
  {
    "atk":271.0,
    "def":110.0,
    "hp":194.0,
    "raid":false  },
  "machop":
  {
    "atk":137.0,
    "def":140.0,
    "hp":88.0,
    "raid":false  },
  "machoke":
  {
    "atk":177.0,
    "def":160.0,
    "hp":130.0,
    "raid":false  },
  "machamp":
  {
    "atk":234.0,
    "def":180.0,
    "hp":162.0,
    "raid":false  },
  "bellsprout":
  {
    "atk":139.0,
    "def":100.0,
    "hp":64.0,
    "raid":false  },
  "weepinbell":
  {
    "atk":172.0,
    "def":130.0,
    "hp":95.0,
    "raid":false  },
  "victreebel":
  {
    "atk":207.0,
    "def":160.0,
    "hp":138.0,
    "raid":false  },
  "tentacool":
  {
    "atk":97.0,
    "def":80.0,
    "hp":182.0,
    "raid":false  },
  "tentacruel":
  {
    "atk":166.0,
    "def":160.0,
    "hp":237.0,
    "raid":false  },
  "geodude":
  {
    "atk":132.0,
    "def":80.0,
    "hp":163.0,
    "raid":false  },
  "graveler":
  {
    "atk":164.0,
    "def":110.0,
    "hp":196.0,
    "raid":false  },
  "golem":
  {
    "atk":211.0,
    "def":160.0,
    "hp":229.0,
    "raid":false  },
  "ponyta":
  {
    "atk":170.0,
    "def":100.0,
    "hp":132.0,
    "raid":false  },
  "rapidash":
  {
    "atk":207.0,
    "def":130.0,
    "hp":167.0,
    "raid":false  },
  "slowpoke":
  {
    "atk":109.0,
    "def":180.0,
    "hp":109.0,
    "raid":false  },
  "slowbro":
  {
    "atk":177.0,
    "def":190.0,
    "hp":194.0,
    "raid":false  },
  "magnemite":
  {
    "atk":165.0,
    "def":50.0,
    "hp":128.0,
    "raid":false  },
  "magneton":
  {
    "atk":223.0,
    "def":100.0,
    "hp":182.0,
    "raid":false  },
  "farfetch'd":
  {
    "atk":124.0,
    "def":104.0,
    "hp":118.0,
    "raid":false  },
  "doduo":
  {
    "atk":158.0,
    "def":70.0,
    "hp":88.0,
    "raid":false  },
  "dodrio":
  {
    "atk":218.0,
    "def":120.0,
    "hp":145.0,
    "raid":false  },
  "seel":
  {
    "atk":85.0,
    "def":130.0,
    "hp":128.0,
    "raid":false  },
  "dewgong":
  {
    "atk":139.0,
    "def":180.0,
    "hp":184.0,
    "raid":false  },
  "grimer":
  {
    "atk":135.0,
    "def":160.0,
    "hp":90.0,
    "raid":false  },
  "muk":
  {
    "atk":190.0,
    "def":210.0,
    "hp":184.0,
    "raid":false  },
  "shellder":
  {
    "atk":116.0,
    "def":60.0,
    "hp":168.0,
    "raid":false  },
  "cloyster":
  {
    "atk":186.0,
    "def":100.0,
    "hp":323.0,
    "raid":false  },
  "gastly":
  {
    "atk":186.0,
    "def":60.0,
    "hp":70.0,
    "raid":false  },
  "haunter":
  {
    "atk":223.0,
    "def":90.0,
    "hp":112.0,
    "raid":false  },
  "gengar":
  {
    "atk":261.0,
    "def":120.0,
    "hp":156.0,
    "raid":false  },
  "onix":
  {
    "atk":85.0,
    "def":70.0,
    "hp":288.0,
    "raid":false  },
  "drowzee":
  {
    "atk":89.0,
    "def":120.0,
    "hp":158.0,
    "raid":false  },
  "hypno":
  {
    "atk":144.0,
    "def":170.0,
    "hp":215.0,
    "raid":false  },
  "krabby":
  {
    "atk":181.0,
    "def":60.0,
    "hp":156.0,
    "raid":false  },
  "kingler":
  {
    "atk":240.0,
    "def":110.0,
    "hp":214.0,
    "raid":false  },
  "voltorb":
  {
    "atk":109.0,
    "def":80.0,
    "hp":114.0,
    "raid":false  },
  "electrode":
  {
    "atk":173.0,
    "def":120.0,
    "hp":179.0,
    "raid":false  },
  "exeggcute":
  {
    "atk":107.0,
    "def":120.0,
    "hp":140.0,
    "raid":false  },
  "exeggutor":
  {
    "atk":233.0,
    "def":190.0,
    "hp":158.0,
    "raid":false  },
  "cubone":
  {
    "atk":90.0,
    "def":100.0,
    "hp":165.0,
    "raid":false  },
  "marowak":
  {
    "atk":144.0,
    "def":120.0,
    "hp":200.0,
    "raid":false  },
  "hitmonlee":
  {
    "atk":224.0,
    "def":100.0,
    "hp":211.0,
    "raid":false  },
  "hitmonchan":
  {
    "atk":193.0,
    "def":100.0,
    "hp":212.0,
    "raid":false  },
  "lickitung":
  {
    "atk":108.0,
    "def":180.0,
    "hp":137.0,
    "raid":false  },
  "koffing":
  {
    "atk":119.0,
    "def":80.0,
    "hp":164.0,
    "raid":false  },
  "weezing":
  {
    "atk":174.0,
    "def":130.0,
    "hp":221.0,
    "raid":false  },
  "rhyhorn":
  {
    "atk":140.0,
    "def":160.0,
    "hp":157.0,
    "raid":false  },
  "rhydon":
  {
    "atk":222.0,
    "def":210.0,
    "hp":206.0,
    "raid":false  },
  "chansey":
  {
    "atk":60.0,
    "def":500.0,
    "hp":176.0,
    "raid":false  },
  "tangela":
  {
    "atk":183.0,
    "def":130.0,
    "hp":205.0,
    "raid":false  },
  "kangaskhan":
  {
    "atk":181.0,
    "def":210.0,
    "hp":165.0,
    "raid":false  },
  "horsea":
  {
    "atk":129.0,
    "def":60.0,
    "hp":125.0,
    "raid":false  },
  "seadra":
  {
    "atk":187.0,
    "def":110.0,
    "hp":182.0,
    "raid":false  },
  "goldeen":
  {
    "atk":123.0,
    "def":90.0,
    "hp":115.0,
    "raid":false  },
  "seaking":
  {
    "atk":175.0,
    "def":160.0,
    "hp":154.0,
    "raid":false  },
  "staryu":
  {
    "atk":137.0,
    "def":60.0,
    "hp":112.0,
    "raid":false  },
  "starmie":
  {
    "atk":210.0,
    "def":120.0,
    "hp":184.0,
    "raid":false  },
  "mr. mime":
  {
    "atk":192.0,
    "def":80.0,
    "hp":233.0,
    "raid":false  },
  "scyther":
  {
    "atk":218.0,
    "def":140.0,
    "hp":170.0,
    "raid":false  },
  "jynx":
  {
    "atk":223.0,
    "def":130.0,
    "hp":182.0,
    "raid":false  },
  "electabuzz":
  {
    "atk":198.0,
    "def":130.0,
    "hp":173.0,
    "raid":false  },
  "magmar":
  {
    "atk":206.0,
    "def":130.0,
    "hp":169.0,
    "raid":false  },
  "pinsir":
  {
    "atk":238.0,
    "def":130.0,
    "hp":197.0,
    "raid":false  },
  "tauros":
  {
    "atk":198.0,
    "def":150.0,
    "hp":197.0,
    "raid":false  },
  "magikarp":
  {
    "atk":29.0,
    "def":40.0,
    "hp":102.0,
    "raid":false  },
  "gyarados":
  {
    "atk":237.0,
    "def":190.0,
    "hp":197.0,
    "raid":false  },
  "lapras":
  {
    "atk":165.0,
    "def":260.0,
    "hp":180.0,
    "raid":false  },
  "ditto":
  {
    "atk":91.0,
    "def":96.0,
    "hp":91.0,
    "raid":false  },
  "eevee":
  {
    "atk":104.0,
    "def":110.0,
    "hp":121.0,
    "raid":false  },
  "vaporeon":
  {
    "atk":205.0,
    "def":260.0,
    "hp":177.0,
    "raid":false  },
  "jolteon":
  {
    "atk":232.0,
    "def":130.0,
    "hp":201.0,
    "raid":false  },
  "flareon":
  {
    "atk":246.0,
    "def":130.0,
    "hp":204.0,
    "raid":false  },
  "porygon":
  {
    "atk":153.0,
    "def":130.0,
    "hp":139.0,
    "raid":false  },
  "omanyte":
  {
    "atk":155.0,
    "def":70.0,
    "hp":174.0,
    "raid":false  },
  "omastar":
  {
    "atk":207.0,
    "def":140.0,
    "hp":227.0,
    "raid":false  },
  "kabuto":
  {
    "atk":148.0,
    "def":60.0,
    "hp":162.0,
    "raid":false  },
  "kabutops":
  {
    "atk":220.0,
    "def":120.0,
    "hp":203.0,
    "raid":false  },
  "aerodactyl":
  {
    "atk":221.0,
    "def":160.0,
    "hp":164.0,
    "raid":false  },
  "snorlax":
  {
    "atk":190.0,
    "def":320.0,
    "hp":190.0,
    "raid":false  },
  "articuno":
  {
    "atk":192.0,
    "def":180.0,
    "hp":249.0,
    "raid":false  },
  "zapdos":
  {
    "atk":253.0,
    "def":180.0,
    "hp":188.0,
    "raid":false  },
  "moltres":
  {
    "atk":251.0,
    "def":180.0,
    "hp":184.0,
    "raid":false  },
  "dratini":
  {
    "atk":119.0,
    "def":82.0,
    "hp":94.0,
    "raid":false  },
  "dragonair":
  {
    "atk":163.0,
    "def":122.0,
    "hp":138.0,
    "raid":false  },
  "dragonite":
  {
    "atk":263.0,
    "def":182.0,
    "hp":201.0,
    "raid":false  },
  "mewtwo":
  {
    "atk":330.0,
    "def":212.0,
    "hp":200.0,
    "raid":false  },
  "mew":
  {
    "atk":210.0,
    "def":200.0,
    "hp":210.0,
    "raid":false  },
  "chikorita":
  {
    "atk":92.0,
    "def":90.0,
    "hp":122.0,
    "raid":false  },
  "bayleef":
  {
    "atk":122.0,
    "def":120.0,
    "hp":155.0,
    "raid":false  },
  "meganium":
  {
    "atk":168.0,
    "def":160.0,
    "hp":202.0,
    "raid":false  },
  "cyndaquil":
  {
    "atk":116.0,
    "def":78.0,
    "hp":96.0,
    "raid":false  },
  "quilava":
  {
    "atk":158.0,
    "def":116.0,
    "hp":129.0,
    "raid":false  },
  "typhlosion":
  {
    "atk":223.0,
    "def":156.0,
    "hp":176.0,
    "raid":false  },
  "totodile":
  {
    "atk":117.0,
    "def":100.0,
    "hp":116.0,
    "raid":false  },
  "croconaw":
  {
    "atk":150.0,
    "def":130.0,
    "hp":151.0,
    "raid":false  },
  "feraligatr":
  {
    "atk":205.0,
    "def":170.0,
    "hp":197.0,
    "raid":false  },
  "sentret":
  {
    "atk":79.0,
    "def":70.0,
    "hp":77.0,
    "raid":false  },
  "furret":
  {
    "atk":148.0,
    "def":170.0,
    "hp":130.0,
    "raid":false  },
  "hoothoot":
  {
    "atk":67.0,
    "def":120.0,
    "hp":101.0,
    "raid":false  },
  "noctowl":
  {
    "atk":145.0,
    "def":200.0,
    "hp":179.0,
    "raid":false  },
  "ledyba":
  {
    "atk":72.0,
    "def":80.0,
    "hp":142.0,
    "raid":false  },
  "ledian":
  {
    "atk":107.0,
    "def":110.0,
    "hp":209.0,
    "raid":false  },
  "spinarak":
  {
    "atk":105.0,
    "def":80.0,
    "hp":73.0,
    "raid":false  },
  "ariados":
  {
    "atk":161.0,
    "def":140.0,
    "hp":128.0,
    "raid":false  },
  "crobat":
  {
    "atk":194.0,
    "def":170.0,
    "hp":178.0,
    "raid":false  },
  "chinchou":
  {
    "atk":106.0,
    "def":150.0,
    "hp":106.0,
    "raid":false  },
  "lanturn":
  {
    "atk":146.0,
    "def":250.0,
    "hp":146.0,
    "raid":false  },
  "pichu":
  {
    "atk":77.0,
    "def":40.0,
    "hp":63.0,
    "raid":false  },
  "cleffa":
  {
    "atk":75.0,
    "def":100.0,
    "hp":91.0,
    "raid":false  },
  "igglybuff":
  {
    "atk":69.0,
    "def":180.0,
    "hp":34.0,
    "raid":false  },
  "togepi":
  {
    "atk":67.0,
    "def":70.0,
    "hp":116.0,
    "raid":false  },
  "togetic":
  {
    "atk":139.0,
    "def":110.0,
    "hp":191.0,
    "raid":false  },
  "natu":
  {
    "atk":134.0,
    "def":80.0,
    "hp":89.0,
    "raid":false  },
  "xatu":
  {
    "atk":192.0,
    "def":130.0,
    "hp":146.0,
    "raid":false  },
  "mareep":
  {
    "atk":114.0,
    "def":110.0,
    "hp":82.0,
    "raid":false  },
  "flaaffy":
  {
    "atk":145.0,
    "def":140.0,
    "hp":112.0,
    "raid":false  },
  "ampharos":
  {
    "atk":211.0,
    "def":180.0,
    "hp":172.0,
    "raid":false  },
  "bellossom":
  {
    "atk":169.0,
    "def":150.0,
    "hp":189.0,
    "raid":false  },
  "marill":
  {
    "atk":37.0,
    "def":140.0,
    "hp":93.0,
    "raid":false  },
  "azumarill":
  {
    "atk":112.0,
    "def":200.0,
    "hp":152.0,
    "raid":false  },
  "sudowoodo":
  {
    "atk":167.0,
    "def":140.0,
    "hp":198.0,
    "raid":false  },
  "politoed":
  {
    "atk":174.0,
    "def":180.0,
    "hp":192.0,
    "raid":false  },
  "hoppip":
  {
    "atk":67.0,
    "def":70.0,
    "hp":101.0,
    "raid":false  },
  "skiploom":
  {
    "atk":91.0,
    "def":110.0,
    "hp":127.0,
    "raid":false  },
  "jumpluff":
  {
    "atk":118.0,
    "def":150.0,
    "hp":197.0,
    "raid":false  },
  "aipom":
  {
    "atk":136.0,
    "def":110.0,
    "hp":112.0,
    "raid":false  },
  "sunkern":
  {
    "atk":55.0,
    "def":60.0,
    "hp":55.0,
    "raid":false  },
  "sunflora":
  {
    "atk":185.0,
    "def":150.0,
    "hp":148.0,
    "raid":false  },
  "yanma":
  {
    "atk":154.0,
    "def":130.0,
    "hp":94.0,
    "raid":false  },
  "wooper":
  {
    "atk":75.0,
    "def":110.0,
    "hp":75.0,
    "raid":false  },
  "quagsire":
  {
    "atk":152.0,
    "def":190.0,
    "hp":152.0,
    "raid":false  },
  "espeon":
  {
    "atk":261.0,
    "def":130.0,
    "hp":194.0,
    "raid":false  },
  "umbreon":
  {
    "atk":126.0,
    "def":190.0,
    "hp":250.0,
    "raid":false  },
  "murkrow":
  {
    "atk":175.0,
    "def":120.0,
    "hp":87.0,
    "raid":false  },
  "slowking":
  {
    "atk":177.0,
    "def":190.0,
    "hp":194.0,
    "raid":false  },
  "misdreavus":
  {
    "atk":167.0,
    "def":120.0,
    "hp":167.0,
    "raid":false  },
  "unown":
  {
    "atk":136.0,
    "def":96.0,
    "hp":91.0,
    "raid":false  },
  "wobbuffet":
  {
    "atk":60.0,
    "def":380.0,
    "hp":106.0,
    "raid":false  },
  "girafarig":
  {
    "atk":182.0,
    "def":140.0,
    "hp":133.0,
    "raid":false  },
  "pineco":
  {
    "atk":108.0,
    "def":100.0,
    "hp":146.0,
    "raid":false  },
  "forretress":
  {
    "atk":161.0,
    "def":150.0,
    "hp":242.0,
    "raid":false  },
  "dunsparce":
  {
    "atk":131.0,
    "def":200.0,
    "hp":131.0,
    "raid":false  },
  "gligar":
  {
    "atk":143.0,
    "def":130.0,
    "hp":204.0,
    "raid":false  },
  "steelix":
  {
    "atk":148.0,
    "def":150.0,
    "hp":333.0,
    "raid":false  },
  "snubbull":
  {
    "atk":137.0,
    "def":120.0,
    "hp":89.0,
    "raid":false  },
  "granbull":
  {
    "atk":212.0,
    "def":180.0,
    "hp":137.0,
    "raid":false  },
  "qwilfish":
  {
    "atk":184.0,
    "def":130.0,
    "hp":148.0,
    "raid":false  },
  "scizor":
  {
    "atk":236.0,
    "def":140.0,
    "hp":191.0,
    "raid":false  },
  "shuckle":
  {
    "atk":17.0,
    "def":40.0,
    "hp":396.0,
    "raid":false  },
  "heracross":
  {
    "atk":234.0,
    "def":160.0,
    "hp":189.0,
    "raid":false  },
  "sneasel":
  {
    "atk":189.0,
    "def":110.0,
    "hp":157.0,
    "raid":false  },
  "teddiursa":
  {
    "atk":142.0,
    "def":120.0,
    "hp":93.0,
    "raid":false  },
  "ursaring":
  {
    "atk":236.0,
    "def":180.0,
    "hp":144.0,
    "raid":false  },
  "slugma":
  {
    "atk":118.0,
    "def":80.0,
    "hp":71.0,
    "raid":false  },
  "magcargo":
  {
    "atk":139.0,
    "def":100.0,
    "hp":209.0,
    "raid":false  },
  "swinub":
  {
    "atk":90.0,
    "def":100.0,
    "hp":74.0,
    "raid":false  },
  "piloswine":
  {
    "atk":181.0,
    "def":200.0,
    "hp":147.0,
    "raid":false  },
  "corsola":
  {
    "atk":118.0,
    "def":110.0,
    "hp":156.0,
    "raid":false  },
  "remoraid":
  {
    "atk":127.0,
    "def":70.0,
    "hp":69.0,
    "raid":false  },
  "octillery":
  {
    "atk":197.0,
    "def":150.0,
    "hp":141.0,
    "raid":false  },
  "delibird":
  {
    "atk":128.0,
    "def":90.0,
    "hp":90.0,
    "raid":false  },
  "mantine":
  {
    "atk":148.0,
    "def":130.0,
    "hp":260.0,
    "raid":false  },
  "skarmory":
  {
    "atk":148.0,
    "def":130.0,
    "hp":260.0,
    "raid":false  },
  "houndour":
  {
    "atk":152.0,
    "def":90.0,
    "hp":93.0,
    "raid":false  },
  "houndoom":
  {
    "atk":224.0,
    "def":150.0,
    "hp":159.0,
    "raid":false  },
  "kingdra":
  {
    "atk":194.0,
    "def":150.0,
    "hp":194.0,
    "raid":false  },
  "phanpy":
  {
    "atk":107.0,
    "def":180.0,
    "hp":107.0,
    "raid":false  },
  "donphan":
  {
    "atk":214.0,
    "def":180.0,
    "hp":214.0,
    "raid":false  },
  "porygon2":
  {
    "atk":198.0,
    "def":170.0,
    "hp":183.0,
    "raid":false  },
  "stantler":
  {
    "atk":192.0,
    "def":146.0,
    "hp":132.0,
    "raid":false  },
  "smeargle":
  {
    "atk":40.0,
    "def":110.0,
    "hp":88.0,
    "raid":false  },
  "tyrogue":
  {
    "atk":64.0,
    "def":70.0,
    "hp":64.0,
    "raid":false  },
  "hitmontop":
  {
    "atk":173.0,
    "def":100.0,
    "hp":214.0,
    "raid":false  },
  "smoochum":
  {
    "atk":153.0,
    "def":90.0,
    "hp":116.0,
    "raid":false  },
  "elekid":
  {
    "atk":135.0,
    "def":90.0,
    "hp":110.0,
    "raid":false  },
  "magby":
  {
    "atk":151.0,
    "def":90.0,
    "hp":108.0,
    "raid":false  },
  "miltank":
  {
    "atk":157.0,
    "def":190.0,
    "hp":211.0,
    "raid":false  },
  "blissey":
  {
    "atk":129.0,
    "def":510.0,
    "hp":229.0,
    "raid":false  },
  "raikou":
  {
    "atk":241.0,
    "def":180.0,
    "hp":210.0,
    "raid":false  },
  "entei":
  {
    "atk":235.0,
    "def":230.0,
    "hp":176.0,
    "raid":false  },
  "suicune":
  {
    "atk":180.0,
    "def":200.0,
    "hp":235.0,
    "raid":false  },
  "larvitar":
  {
    "atk":115.0,
    "def":100.0,
    "hp":93.0,
    "raid":false  },
  "pupitar":
  {
    "atk":155.0,
    "def":140.0,
    "hp":133.0,
    "raid":false  },
  "tyranitar":
  {
    "atk":251.0,
    "def":200.0,
    "hp":212.0,
    "raid":false  },
  "lugia":
  {
    "atk":193.0,
    "def":212.0,
    "hp":323.0,
    "raid":false  },
  "ho-oh":
  {
    "atk":263.0,
    "def":212.0,
    "hp":301.0,
    "raid":false  },
  "celebi":
  {
    "atk":210.0,
    "def":200.0,
    "hp":210.0,
    "raid":false  },
  "treecko":
  {
    "atk":124.0,
    "def":80.0,
    "hp":104.0,
    "raid":false  },
  "grovyle":
  {
    "atk":172.0,
    "def":100.0,
    "hp":130.0,
    "raid":false  },
  "sceptile":
  {
    "atk":223.0,
    "def":140.0,
    "hp":180.0,
    "raid":false  },
  "torchic":
  {
    "atk":130.0,
    "def":90.0,
    "hp":92.0,
    "raid":false  },
  "combusken":
  {
    "atk":163.0,
    "def":120.0,
    "hp":115.0,
    "raid":false  },
  "blaziken":
  {
    "atk":240.0,
    "def":160.0,
    "hp":141.0,
    "raid":false  },
  "mudkip":
  {
    "atk":126.0,
    "def":100.0,
    "hp":93.0,
    "raid":false  },
  "marshtomp":
  {
    "atk":156.0,
    "def":140.0,
    "hp":133.0,
    "raid":false  },
  "swampert":
  {
    "atk":208.0,
    "def":200.0,
    "hp":175.0,
    "raid":false  },
  "poochyena":
  {
    "atk":96.0,
    "def":70.0,
    "hp":63.0,
    "raid":false  },
  "mightyena":
  {
    "atk":171.0,
    "def":140.0,
    "hp":137.0,
    "raid":false  },
  "zigzagoon":
  {
    "atk":58.0,
    "def":76.0,
    "hp":80.0,
    "raid":false  },
  "linoone":
  {
    "atk":142.0,
    "def":156.0,
    "hp":128.0,
    "raid":false  },
  "wurmple":
  {
    "atk":75.0,
    "def":90.0,
    "hp":61.0,
    "raid":false  },
  "silcoon":
  {
    "atk":60.0,
    "def":100.0,
    "hp":91.0,
    "raid":false  },
  "beautifly":
  {
    "atk":189.0,
    "def":120.0,
    "hp":98.0,
    "raid":false  },
  "cascoon":
  {
    "atk":60.0,
    "def":100.0,
    "hp":91.0,
    "raid":false  },
  "dustox":
  {
    "atk":98.0,
    "def":120.0,
    "hp":172.0,
    "raid":false  },
  "lotad":
  {
    "atk":71.0,
    "def":80.0,
    "hp":86.0,
    "raid":false  },
  "lombre":
  {
    "atk":112.0,
    "def":120.0,
    "hp":128.0,
    "raid":false  },
  "ludicolo":
  {
    "atk":173.0,
    "def":160.0,
    "hp":191.0,
    "raid":false  },
  "seedot":
  {
    "atk":71.0,
    "def":80.0,
    "hp":86.0,
    "raid":false  },
  "nuzleaf":
  {
    "atk":134.0,
    "def":140.0,
    "hp":78.0,
    "raid":false  },
  "shiftry":
  {
    "atk":200.0,
    "def":180.0,
    "hp":121.0,
    "raid":false  },
  "taillow":
  {
    "atk":106.0,
    "def":80.0,
    "hp":61.0,
    "raid":false  },
  "swellow":
  {
    "atk":185.0,
    "def":120.0,
    "hp":130.0,
    "raid":false  },
  "wingull":
  {
    "atk":106.0,
    "def":80.0,
    "hp":61.0,
    "raid":false  },
  "pelipper":
  {
    "atk":175.0,
    "def":120.0,
    "hp":189.0,
    "raid":false  },
  "ralts":
  {
    "atk":79.0,
    "def":56.0,
    "hp":63.0,
    "raid":false  },
  "kirlia":
  {
    "atk":117.0,
    "def":76.0,
    "hp":100.0,
    "raid":false  },
  "gardevoir":
  {
    "atk":237.0,
    "def":136.0,
    "hp":220.0,
    "raid":false  },
  "surskit":
  {
    "atk":93.0,
    "def":80.0,
    "hp":97.0,
    "raid":false  },
  "masquerain":
  {
    "atk":192.0,
    "def":140.0,
    "hp":161.0,
    "raid":false  },
  "shroomish":
  {
    "atk":74.0,
    "def":120.0,
    "hp":110.0,
    "raid":false  },
  "breloom":
  {
    "atk":241.0,
    "def":120.0,
    "hp":153.0,
    "raid":false  },
  "slakoth":
  {
    "atk":104.0,
    "def":120.0,
    "hp":104.0,
    "raid":false  },
  "vigoroth":
  {
    "atk":159.0,
    "def":160.0,
    "hp":159.0,
    "raid":false  },
  "slaking":
  {
    "atk":290.0,
    "def":273.0,
    "hp":183.0,
    "raid":false  },
  "nincada":
  {
    "atk":80.0,
    "def":62.0,
    "hp":153.0,
    "raid":false  },
  "ninjask":
  {
    "atk":199.0,
    "def":122.0,
    "hp":116.0,
    "raid":false  },
  "shedinja":
  {
    "atk":153.0,
    "def":2.0,
    "hp":80.0,
    "raid":false  },
  "whismur":
  {
    "atk":92.0,
    "def":128.0,
    "hp":42.0,
    "raid":false  },
  "loudred":
  {
    "atk":134.0,
    "def":168.0,
    "hp":81.0,
    "raid":false  },
  "exploud":
  {
    "atk":179.0,
    "def":208.0,
    "hp":142.0,
    "raid":false  },
  "makuhita":
  {
    "atk":99.0,
    "def":144.0,
    "hp":54.0,
    "raid":false  },
  "hariyama":
  {
    "atk":209.0,
    "def":288.0,
    "hp":114.0,
    "raid":false  },
  "azurill":
  {
    "atk":36.0,
    "def":100.0,
    "hp":71.0,
    "raid":false  },
  "nosepass":
  {
    "atk":82.0,
    "def":60.0,
    "hp":236.0,
    "raid":false  },
  "skitty":
  {
    "atk":84.0,
    "def":100.0,
    "hp":84.0,
    "raid":false  },
  "delcatty":
  {
    "atk":132.0,
    "def":140.0,
    "hp":132.0,
    "raid":false  },
  "sableye":
  {
    "atk":141.0,
    "def":100.0,
    "hp":141.0,
    "raid":false  },
  "mawile":
  {
    "atk":155.0,
    "def":100.0,
    "hp":155.0,
    "raid":false  },
  "aron":
  {
    "atk":121.0,
    "def":100.0,
    "hp":168.0,
    "raid":false  },
  "lairon":
  {
    "atk":158.0,
    "def":120.0,
    "hp":240.0,
    "raid":false  },
  "aggron":
  {
    "atk":198.0,
    "def":140.0,
    "hp":314.0,
    "raid":false  },
  "meditite":
  {
    "atk":78.0,
    "def":60.0,
    "hp":107.0,
    "raid":false  },
  "medicham":
  {
    "atk":121.0,
    "def":120.0,
    "hp":152.0,
    "raid":false  },
  "electrike":
  {
    "atk":123.0,
    "def":80.0,
    "hp":78.0,
    "raid":false  },
  "manectric":
  {
    "atk":215.0,
    "def":140.0,
    "hp":127.0,
    "raid":false  },
  "plusle":
  {
    "atk":167.0,
    "def":120.0,
    "hp":147.0,
    "raid":false  },
  "minun":
  {
    "atk":147.0,
    "def":120.0,
    "hp":167.0,
    "raid":false  },
  "volbeat":
  {
    "atk":143.0,
    "def":130.0,
    "hp":171.0,
    "raid":false  },
  "illumise":
  {
    "atk":143.0,
    "def":130.0,
    "hp":171.0,
    "raid":false  },
  "roselia":
  {
    "atk":186.0,
    "def":100.0,
    "hp":148.0,
    "raid":false  },
  "gulpin":
  {
    "atk":80.0,
    "def":140.0,
    "hp":99.0,
    "raid":false  },
  "swalot":
  {
    "atk":140.0,
    "def":200.0,
    "hp":159.0,
    "raid":false  },
  "carvanha":
  {
    "atk":171.0,
    "def":90.0,
    "hp":39.0,
    "raid":false  },
  "sharpedo":
  {
    "atk":243.0,
    "def":140.0,
    "hp":83.0,
    "raid":false  },
  "wailmer":
  {
    "atk":136.0,
    "def":260.0,
    "hp":68.0,
    "raid":false  },
  "wailord":
  {
    "atk":175.0,
    "def":340.0,
    "hp":87.0,
    "raid":false  },
  "numel":
  {
    "atk":119.0,
    "def":120.0,
    "hp":82.0,
    "raid":false  },
  "camerupt":
  {
    "atk":194.0,
    "def":140.0,
    "hp":139.0,
    "raid":false  },
  "torkoal":
  {
    "atk":151.0,
    "def":140.0,
    "hp":234.0,
    "raid":false  },
  "spoink":
  {
    "atk":125.0,
    "def":120.0,
    "hp":145.0,
    "raid":false  },
  "grumpig":
  {
    "atk":171.0,
    "def":160.0,
    "hp":211.0,
    "raid":false  },
  "spinda":
  {
    "atk":116.0,
    "def":120.0,
    "hp":116.0,
    "raid":false  },
  "trapinch":
  {
    "atk":162.0,
    "def":90.0,
    "hp":78.0,
    "raid":false  },
  "vibrava":
  {
    "atk":134.0,
    "def":100.0,
    "hp":99.0,
    "raid":false  },
  "flygon":
  {
    "atk":205.0,
    "def":160.0,
    "hp":168.0,
    "raid":false  },
  "cacnea":
  {
    "atk":156.0,
    "def":100.0,
    "hp":74.0,
    "raid":false  },
  "cacturne":
  {
    "atk":221.0,
    "def":140.0,
    "hp":115.0,
    "raid":false  },
  "swablu":
  {
    "atk":76.0,
    "def":90.0,
    "hp":139.0,
    "raid":false  },
  "altaria":
  {
    "atk":141.0,
    "def":150.0,
    "hp":208.0,
    "raid":false  },
  "zangoose":
  {
    "atk":222.0,
    "def":146.0,
    "hp":124.0,
    "raid":false  },
  "seviper":
  {
    "atk":196.0,
    "def":146.0,
    "hp":118.0,
    "raid":false  },
  "lunatone":
  {
    "atk":178.0,
    "def":180.0,
    "hp":163.0,
    "raid":false  },
  "solrock":
  {
    "atk":178.0,
    "def":180.0,
    "hp":163.0,
    "raid":false  },
  "barboach":
  {
    "atk":93.0,
    "def":100.0,
    "hp":83.0,
    "raid":false  },
  "whiscash":
  {
    "atk":151.0,
    "def":220.0,
    "hp":142.0,
    "raid":false  },
  "corphish":
  {
    "atk":141.0,
    "def":86.0,
    "hp":113.0,
    "raid":false  },
  "crawdaunt":
  {
    "atk":224.0,
    "def":126.0,
    "hp":156.0,
    "raid":false  },
  "baltoy":
  {
    "atk":77.0,
    "def":80.0,
    "hp":131.0,
    "raid":false  },
  "claydol":
  {
    "atk":140.0,
    "def":120.0,
    "hp":236.0,
    "raid":false  },
  "lileep":
  {
    "atk":105.0,
    "def":132.0,
    "hp":154.0,
    "raid":false  },
  "cradily":
  {
    "atk":152.0,
    "def":172.0,
    "hp":198.0,
    "raid":false  },
  "anorith":
  {
    "atk":176.0,
    "def":90.0,
    "hp":100.0,
    "raid":false  },
  "armaldo":
  {
    "atk":222.0,
    "def":150.0,
    "hp":183.0,
    "raid":false  },
  "feebas":
  {
    "atk":29.0,
    "def":40.0,
    "hp":102.0,
    "raid":false  },
  "milotic":
  {
    "atk":192.0,
    "def":190.0,
    "hp":242.0,
    "raid":false  },
  "castform":
  {
    "atk":139.0,
    "def":140.0,
    "hp":139.0,
    "raid":false  },
  "kecleon":
  {
    "atk":161.0,
    "def":120.0,
    "hp":212.0,
    "raid":false  },
  "shuppet":
  {
    "atk":138.0,
    "def":88.0,
    "hp":66.0,
    "raid":false  },
  "banette":
  {
    "atk":218.0,
    "def":128.0,
    "hp":127.0,
    "raid":false  },
  "duskull":
  {
    "atk":70.0,
    "def":40.0,
    "hp":162.0,
    "raid":false  },
  "dusclops":
  {
    "atk":124.0,
    "def":80.0,
    "hp":234.0,
    "raid":false  },
  "tropius":
  {
    "atk":136.0,
    "def":198.0,
    "hp":165.0,
    "raid":false  },
  "chimecho":
  {
    "atk":175.0,
    "def":150.0,
    "hp":174.0,
    "raid":false  },
  "absol":
  {
    "atk":246.0,
    "def":130.0,
    "hp":120.0,
    "raid":false  },
  "wynaut":
  {
    "atk":41.0,
    "def":190.0,
    "hp":86.0,
    "raid":false  },
  "snorunt":
  {
    "atk":95.0,
    "def":100.0,
    "hp":95.0,
    "raid":false  },
  "glalie":
  {
    "atk":162.0,
    "def":160.0,
    "hp":162.0,
    "raid":false  },
  "spheal":
  {
    "atk":95.0,
    "def":140.0,
    "hp":90.0,
    "raid":false  },
  "sealeo":
  {
    "atk":137.0,
    "def":180.0,
    "hp":132.0,
    "raid":false  },
  "walrein":
  {
    "atk":182.0,
    "def":220.0,
    "hp":176.0,
    "raid":false  },
  "clamperl":
  {
    "atk":133.0,
    "def":70.0,
    "hp":149.0,
    "raid":false  },
  "huntail":
  {
    "atk":197.0,
    "def":110.0,
    "hp":194.0,
    "raid":false  },
  "gorebyss":
  {
    "atk":211.0,
    "def":110.0,
    "hp":194.0,
    "raid":false  },
  "relicanth":
  {
    "atk":162.0,
    "def":200.0,
    "hp":234.0,
    "raid":false  },
  "luvdisc":
  {
    "atk":81.0,
    "def":86.0,
    "hp":134.0,
    "raid":false  },
  "bagon":
  {
    "atk":134.0,
    "def":90.0,
    "hp":107.0,
    "raid":false  },
  "shelgon":
  {
    "atk":172.0,
    "def":130.0,
    "hp":179.0,
    "raid":false  },
  "salamence":
  {
    "atk":277.0,
    "def":190.0,
    "hp":168.0,
    "raid":false  },
  "beldum":
  {
    "atk":96.0,
    "def":80.0,
    "hp":141.0,
    "raid":false  },
  "metang":
  {
    "atk":138.0,
    "def":120.0,
    "hp":185.0,
    "raid":false  },
  "metagross":
  {
    "atk":257.0,
    "def":160.0,
    "hp":248.0,
    "raid":false  },
  "regirock":
  {
    "atk":179.0,
    "def":160.0,
    "hp":356.0,
    "raid":false  },
  "regice":
  {
    "atk":179.0,
    "def":160.0,
    "hp":356.0,
    "raid":false  },
  "registeel":
  {
    "atk":143.0,
    "def":160.0,
    "hp":285.0,
    "raid":false  },
  "latias":
  {
    "atk":228.0,
    "def":160.0,
    "hp":268.0,
    "raid":false  },
  "latios":
  {
    "atk":268.0,
    "def":160.0,
    "hp":228.0,
    "raid":false  },
  "kyogre":
  {
    "atk":297.0,
    "def":200.0,
    "hp":276.0,
    "raid":false  },
  "groudon":
  {
    "atk":297.0,
    "def":200.0,
    "hp":276.0,
    "raid":false  },
  "rayquaza":
  {
    "atk":312.0,
    "def":210.0,
    "hp":187.0,
    "raid":false  },
  "jirachi":
  {
    "atk":210.0,
    "def":200.0,
    "hp":210.0,
    "raid":false  },
  "deoxys":
  {
    "atk":345.0,
    "def":100.0,
    "hp":115.0,
    "raid":false  }
};
var cpm = {
	1:0.094,
2:0.16639787,
3:0.21573247,
4:0.25572005,
5:0.29024988,
6:0.3210876,
7:0.34921268,
8:0.37523559,
9:0.39956728,
10:0.42250001,
11:0.44310755,
12:0.46279839,
13:0.48168495,
14:0.49985844,
15:0.51739395,
16:0.53435433,
17:0.55079269,
18:0.56675452,
19:0.58227891,
20:0.59740001,
21:0.61215729,
22:0.62656713,
23:0.64065295,
24:0.65443563,
25:0.667934,
26:0.68116492,
27:0.69414365,
28:0.70688421,
29:0.71939909,
30:0.7317,
31:0.73776948,
32:0.74378943,
33:0.74976104,
34:0.75568551,
35:0.76156384,
36:0.76739717,
37:0.7731865,
38:0.77893275,
39:0.78463697,
40:0.79030001
};
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
		name=message.substring(1);
        if(typeof(basestats[name])!="undefined"){
			var ivs = [];
			for(i=1;i<=30;i++){
				var atk = basestats[name]["atk"];
				var def = basestats[name]["def"];
				var hp = basestats[name]["hp"]
				ivs.push(parseInt((atk+15)*Math.sqrt(def+15)*Math.sqrt(hp+15)*Math.pow(cpm[i],2)*0.1))
			}
			ivs.push("weather boosted:");
			for(i=31;i<=35;i++){
				var atk = basestats[name]["atk"];
				var def = basestats[name]["def"];
				var hp = basestats[name]["hp"]
				ivs.push(parseInt((atk+15)*Math.sqrt(def+15)*Math.sqrt(hp+15)*Math.pow(cpm[i],2)*0.1))
			}
			bot.sendMessage({
                    to: channelID,
                    message: ivs.join()
                });
		}else{
			bot.sendMessage({
                    to: channelID,
                    message: name + " not found"
                });
		}
	}
});