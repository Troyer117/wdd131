const cards = [
  {
    id: 1,
    name: "Cyber Dragon",
    image: "../images/cyber_dragon.webp",
    type: "MONSTER",
    subtype: ["EFFECT"],
    monsterType: "MACHINE",
    level: 5,
    attribute: "LIGHT",
    atk: 2100,
    def: 1600,
    description: "If only your opponent controls a monster, you can Special Summon this card (from your hand)."
  },
  {
    id: 2,
    name: "Blue-Eyes White Dragon",
    image: "../images/blue-eyes_white_dragon.webp",
    type: "MONSTER",
    subtype: ["NORMAL"],
    monsterType: "DRAGON",
    level: 8,
    attribute: "LIGHT",
    atk: 3000,
    def: 2500,
    description: "This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale."
  },
  {
    id: 3,
    name: "Mirror Force",
    image: "../images/mirror_force.webp",
    type: "TRAP",
    trapType: "NORMAL",
    description: "When an opponent's monster declares an attack: Destroy all your opponent's Attack Position monsters."
  },
  {
  id: 4,
  name: "Dark Magician",
  image: "../images/dark_magician.webp",
  type: "MONSTER",
  subtype: ["NORMAL"],
  monsterType: "SPELLCASTER",
  level: 7,
  attribute: "DARK",
  atk: 2500,
  def: 2100,
  description: "The ultimate wizard in terms of attack and defense."
  },
  {
    id: 5,
    name: "Decode Talker",
    image: "../images/decode_talker.webp",
    type: "MONSTER",
    subtype: ["LINK"],
    monsterType: "CYBERSE",
    linkRating: 3,
    attribute: "DARK",
    atk: 2300,
    description: "[2+ Effect Monsters] Gains 500 ATK for each monster it points to. When your opponent activates a card or effect that targets a card you control, you can tribute 1 monster this card points to; negate the activation."
  },
  {
  id: 6,
  name: "Cycroid",
  image: "../images/cycroid.webp",
  type: "MONSTER",
  subtype: ["NORMAL"],
  monsterType: "MACHINE",
  level: 3,
  attribute: "EARTH",
  atk: 800,
  def: 1000,
  description: "The most lovable and friendly of all the Vehicroids. It can arm itself with training wheels."
  },
  {
  id: 7,
  name: "Aeropixthree",
  image: "../images/aeropixthree.webp",
  type: "MONSTER",
  subtype: ["EFFECT", "TUNER"],
  monsterType: "FAIRY",
  level: 1,
  attribute: "WIND",
  atk: 200,
  def: 200,
  description: "Once per turn (Quick Effect): You can target 1 face-up monster your opponent controls in this card's column; move this card you control to another of your Main Monster Zones, and if you do, move that opponent's monster to their Main Monster Zone in this card's column, then place 1 Burnup Counter on it. (Monsters with Burnup Counters lose 200 ATK/DEF for each Burnup Counter on it.)"
  },
  {
  id: 8,
  name: "Ambulance Rescueroid",
  image: "../images/ambulance_rescueroid.webp",
  type: "MONSTER",
  subtype: ["FUSION"],
  monsterType: "MACHINE",
  level: 6,
  attribute: "FIRE",
  atk: 2300,
  def: 1800,
  description: "[\"Rescueroid\" + \"Ambulanceroid\"] Must be Fusion Summoned. Once per turn, when a monster you control is destroyed by battle and sent to the GY: You can Special Summon that monster in Defense Position."
  },
  {
  id: 9,
  name: "Ambulanceroid",
  image: "../images/ambulanceroid.webp",
  type: "MONSTER",
  subtype: ["EFFECT"],
  monsterType: "MACHINE",
  level: 3,
  attribute: "EARTH",
  atk: 300,
  def: 1200,
  description: "When a \"roid\" monster(s) is added from your GY to your hand (except during the Damage Step): You can Special Summon it."
  },
  {
  id: 10,
  name: "Banisher of the Radiance",
  image: "../images/banisher_of_the_radiance.webp",
  type: "MONSTER",
  subtype: ["EFFECT"],
  monsterType: "FAIRY",
  level: 3,
  attribute: "LIGHT",
  atk: 1600,
  def: 0,
  description: "Any card sent to the GY is banished instead."
  },
  {
  id: 11,
  name: "Weapon Change",
  image: "../images/weapon_change.webp",
  type: "SPELL",
  spellType: "CONTINUOUS",
  description: "Once during each of your Standby Phases: You can pay 700 LP, then target 1 Warrior or Machine monster you control; switch the current ATK and DEF of that target until the end of your opponent's next turn."
  },
  {
  id: 12,
  name: "Vennu, Bright Bird of Divinity",
  image: "../images/vennu,bright_bird_of_divinity.webp",
  type: "MONSTER",
  subtype: ["RITUAL", "EFFECT"],
  monsterType: "FAIRY",
  level: 8,
  attribute: "LIGHT",
  atk: 2800,
  def: 2000,
  description: "You can Ritual Summon this card with \"Primal Cry\". Once per turn: You can reveal 1 monster in your hand, then target 1 face‑up monster on the field; that target’s Level becomes equal to the Level the revealed monster had, until the end of this turn. Once per turn, if another monster is Tributed from your hand or field (except during the Damage Step): You can target 1 monster in your Graveyard; add it to your hand."
  },
  {
  id: 13,
  name: "Vehicroid Connection Zone",
  image: "../images/vehicroid_connection_zone.webp",
  type: "SPELL",
  spellType: "NORMAL",
  description: "Fusion Summon 1 \"Vehicroid\" Fusion Monster from your Extra Deck, using monsters from your hand or field as Fusion Material, and if you do, it cannot be destroyed by card effects, and its effects cannot be negated."
  },
  {
  id: 14,
  name: "The Earth – Hex‑Sealed Fusion",
  image: "../images/the_earth-hex-sealed_fusion.webp",
  type: "MONSTER",
  subtype: ["EFFECT"],
  monsterType: "ROCK",
  level: 3,
  attribute: "EARTH",
  atk: 1000,
  def: 1600,
  description: "You can substitute this card for any 1 Fusion-Material Monster. When you do this, the other Fusion-Material Monster(s) must be the correct one(s). Tribute Fusion-Material Monsters on the field, including this card, to Special Summon 1 EARTH Fusion Monster from your Fusion Deck."
  },
  {
  id: 15,
  name: "The Blazing Mars",
  image: "../images/the_blazing_mars.webp",
  type: "MONSTER",
  subtype: ["EFFECT"],
  monsterType: "PYRO",
  level: 8,
  attribute: "FIRE",
  atk: 2600,
  def: 2200,
  description: "While this card is in your hand or GY: You can banish 3 other monsters from your GY; Special Summon this card, also you cannot Special Summon other monsters for the rest of this turn. During your Main Phase 1: You can send all other monsters you control to the GY; inflict 500 damage to your opponent for each monster sent to the GY. You can only use each effect of \"The Blazing Mars\" once per turn."
  },
  {
  id: 16,
  name: "Supercharge",
  image: "../images/supercharge.webp",
  type: "TRAP",
  trapType: "NORMAL",
  description: "If an opponent's monster declares an attack while all monsters you control are Machine “roid” monsters (min. 1): Draw 2 cards."
  },
  {
  id: 17,
  name: "Slifer the Sky Dragon",
  image: "../images/slifer_the_sky_dragon.webp",
  type: "MONSTER",
  subtype: ["EFFECT"],
  monsterType: "DIVINE-BEAST",
  level: 10,
  attribute: "DIVINE",
  atk: null,
  def: null,
  description: "Requires 3 Tributes to Normal Summon (cannot be Normal Set). This card's Normal Summon cannot be negated. When Normal Summoned, cards and effects cannot be activated. Once per turn, during the End Phase, if this card was Special Summoned: Send it to the GY. Gains 1000 ATK/DEF for each card in your hand. If a monster(s) is Normal or Special Summoned to your opponent's field in Attack Position: That monster(s) loses 2000 ATK, then if its ATK has been reduced to 0 as a result, destroy it."
  },
  {
  id: 18,
  name: "D.D. Crow",
  image: "../images/d.d.crow.webp",
  type: "MONSTER",
  subtype: ["EFFECT"],
  monsterType: "WINGED-BEAST",
  level: 1,
  attribute: "DARK",
  atk: 100,
  def: 100,
  description: "(Quick Effect): You can discard this card to the GY, then target 1 card in your opponent's GY; banish that target."
  },
  {
  id: 19,
  name: "Red‑Eyes Black Dragon",
  image: "../images/red-eyes_black_dragon.webp",
  type: "MONSTER",
  subtype: ["NORMAL"],
  monsterType: "DRAGON",
  level: 7,
  attribute: "DARK",
  atk: 2400,
  def: 2000,
  description: "A ferocious dragon with a deadly attack."
  },
  {
  id: 20,
  name: "Obelisk the Tormentor",
  image: "../images/obelisk_the_tormentor.webp",
  type: "MONSTER",
  subtype: ["EFFECT"],
  monsterType: "DIVINE-BEAST",
  level: 10,
  attribute: "DIVINE",
  atk: 4000,
  def: 4000,
  description: "Requires 3 Tributes to Normal Summon (cannot be Normal Set). This card's Normal Summon cannot be negated. When Normal Summoned, cards and effects cannot be activated. Neither player can target this card with card effects. Once per turn, during the End Phase, if this card was Special Summoned: Send it to the GY. You can Tribute 2 monsters; destroy all monsters your opponent controls. This card cannot declare an attack the turn this effect is activated."
  },
  {
  id: 21,
  name: "Obsidian Dragon",
  image: "../images/obsidian_dragon.webp",
  type: "MONSTER",
  subtype: ["EFFECT"],
  monsterType: "ROCK",
  level: 4,
  attribute: "DARK",
  atk: 800,
  def: 2100,
  description: "Negate any Spell/Trap effects that target exactly 1 DARK monster you control (and no other cards), and if you do, destroy them."
  },
  {
  id: 22,
  name: "Gagagaga Magician",
  image: "../images/gagagaga_magician_xyz.webp",
  type: "MONSTER",
  subtype: ["XYZ", "EFFECT"],
  monsterType: "SPELLCASTER",
  rank: 4,
  attribute: "DARK",
  atk: 2500,
  def: 2000,
  description: `[2 Level 4 monsters] You can detach 1 material from this card, then target 1 Xyz Monster in your GY, except "Gagagaga Magician"; Special Summon it, but negate its effects. You can only use this effect of "Gagagaga Magician" once per turn. A "Utopic Future" Xyz Monster that has this card as material gains this effect.  
  ● During your Main Phase: You can detach 2 materials from this card, then target 1 Xyz Monster you control; until the end of this turn, change its ATK to 4000, also negate its effects.`
  },
  {
  id: 23,
  name: "Divine Arsenal AA-Zeus - Sky Thunder",
  image: "../images/divine_arsenal_aa-zeus-sky_thunder.webp",
  type: "MONSTER",
  subtype: ["XYZ", "EFFECT"],
  monsterType: "MACHINE",
  rank: 12,
  attribute: "LIGHT",
  atk: 4000,
  def: 0,
  description: `[2 Level 12 monsters] Once per turn, if an Xyz Monster battled this turn, you can also Xyz Summon "Divine Arsenal AA-Zeus - Sky Thunder" by using 1 Xyz monster you control as material. 
  (Transfer its materials to this card.) (Quick Effect): You can detach 2 materials from this card; send all other cards from the field to the GY. Once per turn, 
  if another card(s) you control is destroyed by battle or an opponent's card effect: You can attach 1 card from your hand, Deck, or Extra Deck to this card as material.`
  },
  {
  id: 24,
  name: "Odd-Eyes Pendulum Dragon",
  image: "../images/odd-eyes_pendulum_dragon.webp",
  type: "MONSTER",
  subtype: ["PENDULUM", "EFFECT"],
  monsterType: "DRAGON",
  level: 7,
  attribute: "DARK",
  atk: 2500,
  def: 2000,
  description: `Pendulum Scale: 4  
  Pendulum Effect: You can reduce the battle damage you take from an attack involving a Pendulum Monster you control to 0. During your End Phase: You can destroy this card, and if you do, add 1 Pendulum Monster with 1500 or less ATK from your Deck to your hand. You can only use each Pendulum Effect of "Odd-Eyes Pendulum Dragon" once per turn.  
  Monster Effect: If this card battles an opponent's monster, any battle damage this card inflicts to your opponent is doubled.`
  },
  {
  id: 25,
  name: "Abyss Soldier",
  image: "../images/abyss_soldier.webp",
  type: "MONSTER",
  subtype: ["EFFECT"],
  monsterType: "AQUA",
  level: 4,
  attribute: "WATER",
  atk: 1800,
  def: 1300,
  description: "Once per turn: You can discard 1 WATER monster to the Graveyard to target 1 card on the field; return it to the hand."
  },
  {
  id: 26,
  name: "Bayonater, the Baneful Barrel",
  image: "../images/bayonater,the_baneful_barrel.webp",
  type: "MONSTER",
  subtype: ["EFFECT"],
  monsterType: "ZOMBIE",
  level: 1,
  attribute: "DARK",
  atk: 500,
  def: 0,
  description: "Once per turn: You can target 1 face‑up monster your opponent controls; it loses 1000 ATK for each monster your opponent controls."
  },
  {
  id: 27,
  name: "Black Stego",
  image: "../images/black_stego.webp",
  type: "MONSTER",
  subtype: ["EFFECT"],
  monsterType: "DINOSAUR",
  level: 4,
  attribute: "EARTH",
  atk: 1200,
  def: 2000,
  description: "If this Attack Position card is targeted for an attack: Change this card to Defense Position."
  },
  {
  id: 28,
  name: "Celestial Transformation",
  image: "../images/celestial_transformation.webp",
  type: "SPELL",
  spellType: "QUICK-PLAY",
  description: "Special Summon 1 Fairy monster from your hand. That monster’s ATK is halved, also it is destroyed during the End Phase."
  },
  {
  id: 29,
  name: "Dragon Dowser",
  image: "../images/dragon_dowser.webp",
  type: "MONSTER",
  subtype: ["EFFECT"],
  monsterType: "WYRM",
  level: 4,
  attribute: "EARTH",
  atk: 1500,
  def: 1500,
  description: "When this card is destroyed by battle and sent to the Graveyard, or when this card you control is destroyed by an opponent's card effect and sent to your Graveyard: You can Special Summon 1 EARTH Pendulum Monster from your Deck in Defense Position, but destroy it during the End Phase. You can only use this effect of \"Dragon Dowser\" once per turn."
  },
  {
  id: 30,
  name: "Emergeroid Call",
  image: "../images/emergeroid_call.webp",
  type: "TRAP",
  trapType: "CONTINUOUS",
  description: "When a Spell/Trap Card, or monster effect, is activated while you control a \"roid\" Fusion Monster: Negate the activation, then send all cards with the same name as that card from the activating player's Deck and Extra Deck to the GY. You can banish this card from the GY, then target 1 \"roid\" monster in your GY; add it to your hand. You can only use this effect of \"Emergeroid Call\" once per turn."
  },
  {
  id: 31,
  name: "Evil HERO Malicious Edge",
  image: "../images/evil_hero_malicious_edge.webp",
  type: "MONSTER",
  subtype: ["EFFECT"],
  monsterType: "FIEND",
  level: 7,
  attribute: "EARTH",
  atk: 2600,
  def: 1800,
  description: "If your opponent controls a monster, you can Tribute Summon this card face-up with 1 Tribute. If this card attacks a Defense Position monster, inflict piercing battle damage."
  },
  {
  id: 32,
  name: "Future Samurai",
  image: "../images/future_samurai.webp",
  type: "MONSTER",
  subtype: ["EFFECT", "GEMINI"],
  monsterType: "WARRIOR",
  level: 4,
  attribute: "EARTH",
  atk: 1700,
  def: 1000,
  description: "This card is treated as a Normal Monster while face-up on the field or in the Graveyard. While this card is face-up on the field, you can Normal Summon it to have it be treated as an Effect Monster with this effect: • Once per turn, you can remove from play 1 monster from your Graveyard to destroy 1 face-up monster."
  },
  {
  id: 33,
  name: "Homunculus the Alchemic Being",
  image: "../images/homunculus_the_alchemic_being.webp",
  type: "MONSTER",
  subtype: ["EFFECT"],
  monsterType: "PLANT",
  level: 4,
  attribute: "LIGHT",
  atk: 1800,
  def: 1600,
  description: "Once per turn, you can change the attribute of this card."
  },
  {
  id: 34,
  name: "Imairuka",
  image: "../images/imairuka.webp",
  type: "MONSTER",
  subtype: ["EFFECT"],
  monsterType: "SEA SERPENT",
  level: 2,
  attribute: "WATER",
  atk: 1000,
  def: 1000,
  description: "When this card on the field is destroyed by your opponent's card (either by battle or by card effect) and sent to the Graveyard: Send the top card of your Deck to the Graveyard, then, if it was a WATER monster, draw 1 card."
  },
  {
  id: 35,
  name: "Kinka-byo",
  image: "../images/kinka-byo.webp",
  type: "MONSTER",
  subtype: ["SPIRIT", "EFFECT"],
  monsterType: "BEAST",
  level: 1,
  attribute: "DARK",
  atk: 400,
  def: 200,
  description: "Cannot be Special Summoned. When this card is Normal Summoned or flipped face-up: You can target 1 Level 1 monster in your GY; Special Summon that target, but banish it when this card leaves the field. Once per turn, during the End Phase, if this card was Normal Summoned or flipped face-up this turn: Return it to the hand."
  },
  {
  id: 36,
  name: "Man-Eater Bug",
  image: "../images/man-eater_bug.webp",
  type: "MONSTER",
  subtype: ["FLIP", "EFFECT"],
  monsterType: "INSECT",
  level: 2,
  attribute: "EARTH",
  atk: 450,
  def: 600,
  description: "FLIP: Target 1 monster on the field; destroy it."
  },
  {
  id: 37,
  name: "Mannadium Prime-Heart",
  image: "../images/mannadium_prime-heart.webp",
  type: "MONSTER",
  subtype: ["SYNCHRO", "EFFECT"],
  monsterType: "WARRIOR",
  level: 12,
  attribute: "LIGHT",
  atk: 3000,
  def: 3000,
  description: "[1+ Tuners + 1 LIGHT monster] This card can attack a number of times each Battle Phase, up to the number of Tuners used for its Synchro Summon. If this card was Synchro Summoned using a \"Mannadium\" Tuner as material, your opponent cannot target it with card effects. If this face-up Synchro Summoned card in its owner's control leaves the field because of an opponent's card: You can Special Summon 1 of your monsters with 1500 ATK/2100 DEF, or your \"Visas Starfrost\", that is banished or in your GY."
  },
  {
  id: 38,
  name: "Metabo-Shark",
  image: "../images/metabo-shark.webp",
  type: "MONSTER",
  subtype: ["EFFECT"],
  monsterType: "FISH",
  level: 4,
  attribute: "WATER",
  atk: 1800,
  def: 500,
  description: "When this card is Normal Summoned: You can target 2 Fish-Type monsters in your Graveyard; shuffle those targets into your Deck."
  },
  {
  id: 39,
  name: "Psychic Ace",
  image: "../images/psychic_ace.webp",
  type: "MONSTER",
  subtype: ["EFFECT"],
  monsterType: "PSYCHIC",
  level: 2,
  attribute: "DARK",
  atk: 1000,
  def: 0,
  description: "If this card in the Monster Zone is Tributed: You can target 1 card on the field; destroy it."
  },
  {
  id: 40,
  name: "Shogi Lance",
  image: "../images/shogi_lance.webp",
  type: "MONSTER",
  subtype: ["EFFECT"],
  monsterType: "BEAST-WARRIOR",
  level: 3,
  attribute: "EARTH",
  atk: 500,
  def: 500,
  description: "Once per turn: You can target 1 other Level 3 Beast-Warrior-Type monster you control; the Levels of that monster and this card become the combined Levels of those monsters."
  },
  {
  id: 41,
  name: "Sishunder",
  image: "../images/sishunder.webp",
  type: "MONSTER",
  subtype: ["EFFECT"],
  monsterType: "THUNDER",
  level: 4,
  attribute: "LIGHT",
  atk: 900,
  def: 400,
  description: "When this card is Normal Summoned: You can target 1 Level 4 LIGHT Thunder-Type monster with 1600 or less ATK in your Graveyard, except \"Sishunder\"; banish that target. During the End Phase of this turn, add that card to your hand."
  },
  {
    id: 42,
    name: "Skreech",
    image: "../images/skreech.webp",
    type: "MONSTER",
    subtype: ["EFFECT"],
    monsterType: "REPTILE",
    level: 4,
    attribute: "WATER",
    atk: 1500,
    def: 400,
    description: "If this card is destroyed by battle: Send 2 WATER monsters from your Deck to the Graveyard."
  },
  {
  id: 43,
  name: "Sprite's Blessing",
  image: "../images/sprites_blessing.webp",
  type: "SPELL",
  spellType: "RITUAL",
  description: "This card can be used to Ritual Summon any LIGHT Ritual Monster. You must also Tribute monsters from your hand or field whose total Levels exactly equal the Level of the Ritual Monster you Ritual Summon."
  },
  {
  id: 44,
  name: "Supervise",
  image: "../images/supervise.webp",
  type: "SPELL",
  spellType: "EQUIP",
  description: "Equip only to a Gemini monster. It becomes an Effect Monster, and gains its effect(s). When face-up card on the field is sent to the Graveyard: select and Special Summon 1 Normal Monster from your Graveyard."
  },
  {
  id: 45,
  name: "Synthetic Seraphim",
  image: "../images/synthetic_seraphim.webp",
  type: "TRAP",
  trapType: "CONTINUOUS",
  description: "Each time a Counter Trap Card is activated, immediately after it resolves, Special Summon 1 \"Synthetic Seraphim Token\" (Fairy/LIGHT/Level 1/ATK 300/DEF 300)."
  },
  {
  id: 46,
  name: "The Sanctuary in the Sky",
  image: "../images/the_sanctuary_in_the_sky.webp",
  type: "SPELL",
  spellType: "FIELD",
  description: "Battle damage to the controller of a Fairy monster from a battle involving that monster becomes 0."
  },
  {
  id: 47,
  name: "W-Wing Catapult",
  image: "../images/w-wing_catapult.webp",
  type: "MONSTER",
  subtype: ["UNION", "EFFECT"],
  monsterType: "MACHINE",
  level: 4,
  attribute: "LIGHT",
  atk: 1300,
  def: 1500,
  description: "Once per turn, you can either: Target 1 \"V-Tiger Jet\" you control; equip this card to that target, OR: Unequip this card and Special Summon it. If the equipped monster would be destroyed by battle or card effect, destroy this card instead. The equipped monster gains 400 ATK/DEF."
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("search-form");
  const filterMenu = document.querySelector(".filter-menu");
  const toggleMainBtn = document.querySelector(".toggle-main");
  const toggleBtns = document.querySelectorAll(".toggle-btn");
  const clearFiltersBtn = document.getElementById("clear-filters");
  const ariaLiveRegion = document.getElementById("aria-live-region");

  const selectors = {
    type: filterMenu.querySelectorAll('div[data-category="type"] input[type="checkbox"]'),
    attribute: filterMenu.querySelectorAll('div[data-category="attribute"] input[type="checkbox"]'),
    monsterType: filterMenu.querySelectorAll('div[data-category="monsterType"] input[type="checkbox"]'),
    subtype: filterMenu.querySelectorAll('div[data-category="subtype"] input[type="checkbox"]'),
    spellType: filterMenu.querySelectorAll('div[data-category="spellType"] input[type="checkbox"]'),
    trapType: filterMenu.querySelectorAll('div[data-category="trapType"] input[type="checkbox"]'),
    exactMatch: filterMenu.querySelector('input[name="exactMatch"]')
  };

  const rangeInputs = {
    levelMin: document.getElementById("level-min"),
    levelMax: document.getElementById("level-max"),
    linkMin: document.getElementById("link-min"),
    linkMax: document.getElementById("link-max"),
    atkMin: document.getElementById("atk-min"),
    atkMax: document.getElementById("atk-max"),
    defMin: document.getElementById("def-min"),
    defMax: document.getElementById("def-max"),
  };

  toggleMainBtn.addEventListener("click", e => {
    e.stopPropagation();
    const expanded = toggleMainBtn.getAttribute("aria-expanded") === "true";
    toggleMainBtn.setAttribute("aria-expanded", !expanded);
    filterMenu.classList.toggle("hidden");
  });

  toggleBtns.forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      const options = btn.nextElementSibling;
      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", !expanded);
      options.classList.toggle("hidden");
    });
    btn.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        btn.click();
      }
    });
  });

  document.addEventListener("click", e => {
    if (!filterMenu.contains(e.target) && !toggleMainBtn.contains(e.target)) {
      filterMenu.classList.add("hidden");
      toggleMainBtn.setAttribute("aria-expanded", "false");
    }
  });

  function toggleCategory(div, show) {
    if (!div) return;
    div.style.display = show ? "" : "none";
    Array.from(div.querySelectorAll('input')).forEach(input => {
      input.disabled = !show;
      if (!show) {
        if (input.type === "checkbox" || input.type === "radio") input.checked = false;
        else input.value = "";
      }
    });
  }

  function updateFilterVisibilityByType() {
    const selectedTypes = Array.from(selectors.type).filter(cb => cb.checked).map(cb => cb.value);

    const categories = {
      attribute: filterMenu.querySelector('div.filter-category[data-category="attribute"]'),
      monsterType: filterMenu.querySelector('div.filter-category[data-category="monsterType"]'),
      subtype: filterMenu.querySelector('div.filter-category[data-category="subtype"]'),
      spellType: filterMenu.querySelector('div.filter-category[data-category="spellType"]'),
      trapType: filterMenu.querySelector('div.filter-category[data-category="trapType"]'),
      level: filterMenu.querySelector('div.filter-category[data-category="level"]'),
      atk: filterMenu.querySelector('div.filter-category[data-category="atk"]'),
      def: filterMenu.querySelector('div.filter-category[data-category="def"]'),
    };

    if (selectedTypes.length === 0) {
      Object.values(categories).forEach(div => toggleCategory(div, true));
    } else {
      const isMonster = selectedTypes.includes("MONSTER");
      const isSpell = selectedTypes.includes("SPELL");
      const isTrap = selectedTypes.includes("TRAP");

      toggleCategory(categories.attribute, isMonster);
      toggleCategory(categories.monsterType, isMonster);
      toggleCategory(categories.subtype, isMonster);
      toggleCategory(categories.spellType, isSpell);
      toggleCategory(categories.trapType, isTrap);
      toggleCategory(categories.level, isMonster);
      toggleCategory(categories.atk, isMonster);
      toggleCategory(categories.def, isMonster);
    }
  }

  function getCheckedValues(checkboxes) {
    return Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.value);
  }

  function parseRange(input, fallback) {
    const val = parseInt(input.value, 10);
    return isNaN(val) ? fallback : val;
  }

  function filterAndDisplay() {
    const searchText = form.querySelector('input[name="searchText"]').value.trim().toLowerCase();
    const exactMatchChecked = selectors.exactMatch.checked;

    const selectedTypes = getCheckedValues(selectors.type);
    const selectedAttributes = getCheckedValues(selectors.attribute);
    const selectedMonsterTypes = getCheckedValues(selectors.monsterType);
    const selectedSubtypes = getCheckedValues(selectors.subtype);
    const selectedSpellTypes = getCheckedValues(selectors.spellType);
    const selectedTrapTypes = getCheckedValues(selectors.trapType);

    const levelMin = parseRange(rangeInputs.levelMin, 1);
    const levelMax = parseRange(rangeInputs.levelMax, 12);
    const linkMin = parseRange(rangeInputs.linkMin, 1);
    const linkMax = parseRange(rangeInputs.linkMax, 5);
    const atkMin = parseRange(rangeInputs.atkMin, 0);
    const atkMax = parseRange(rangeInputs.atkMax, 5000);
    const defMin = parseRange(rangeInputs.defMin, 0);
    const defMax = parseRange(rangeInputs.defMax, 3000);

    const resultsSection = document.querySelector(".card-results");
    resultsSection.classList.remove("hidden");
    resultsSection.innerHTML = "";

    const matchValue = (value) => {
      if (value === undefined || value === null) return false;
      value = value.toString().toLowerCase();
      return exactMatchChecked ? value === searchText : value.includes(searchText);
    };

    const matchedCards = cards.filter(card => {
      if (selectedTypes.length && !selectedTypes.includes(card.type)) return false;
      if (selectedAttributes.length && (!card.attribute || !selectedAttributes.includes(card.attribute))) return false;
      if (selectedMonsterTypes.length && (!card.monsterType || !selectedMonsterTypes.includes(card.monsterType))) return false;
      if (selectedSubtypes.length && (!card.subtype || !card.subtype.some(s => selectedSubtypes.includes(s)))) return false;
      if (selectedSpellTypes.length && (!card.spellType || !selectedSpellTypes.includes(card.spellType))) return false;
      if (selectedTrapTypes.length && (!card.trapType || !selectedTrapTypes.includes(card.trapType))) return false;
      if (card.level !== undefined && (card.level < levelMin || card.level > levelMax)) return false;
      if (card.rank !== undefined && (card.rank < levelMin || card.rank > levelMax)) return false;
      if (card.linkRating !== undefined && (card.linkRating < linkMin || card.linkRating > linkMax)) return false;
      if (card.atk !== undefined && (card.atk < atkMin || card.atk > atkMax)) return false;
      if (card.def !== undefined && (card.def < defMin || card.def > defMax)) return false;

      return (
        matchValue(card.name) ||
        matchValue(card.type) ||
        matchValue(card.attribute) ||
        matchValue(card.monsterType) ||
        matchValue(card.spellType) ||
        matchValue(card.trapType) ||
        matchValue(card.description) ||
        (card.subtype && card.subtype.some(s => matchValue(s))) ||
        (card.level !== undefined && matchValue(card.level)) ||
        (card.rank !== undefined && matchValue(card.rank)) ||
        (card.linkRating !== undefined && matchValue(card.linkRating)) ||
        (card.atk !== undefined && matchValue(card.atk)) ||
        (card.def !== undefined && matchValue(card.def))
      );
    });

    if (!matchedCards.length) {
      resultsSection.style.cssText = "display:flex;justify-content:center;align-items:center;height:300px;";
      resultsSection.innerHTML = `<p style="font-size: 2rem; text-align: center;">No cards found matching your search.</p>`;
      return;
    }

    resultsSection.style.cssText = "";

    matchedCards.forEach(card => {
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card");

      let html = `<h3>${card.name}</h3><img src="${card.image}" alt="${card.name}" loading="lazy" width="200" height="200">`;

      if (card.type) {
        html += `<p><strong>Type:</strong> ${card.type}`;
        if (card.subtype) {
          html += ` | <strong>Subtype:</strong> ${card.subtype.join(", ")}`;
        }
        html += `</p>`;
      }

      if (card.monsterType) html += `<p><strong>Monster Type:</strong> ${card.monsterType}</p>`;
      if (card.level !== undefined) html += `<p><strong>Level:</strong> ${card.level} | <strong>Attribute:</strong> ${card.attribute}</p>`;
      if (card.rank !== undefined) html += `<p><strong>Rank:</strong> ${card.rank} | <strong>Attribute:</strong> ${card.attribute}</p>`;
      if (card.linkRating !== undefined) html += `<p><strong>Link Rating:</strong> ${card.linkRating} | <strong>Attribute:</strong> ${card.attribute}</p>`;
      if (card.atk !== undefined && card.def !== undefined) html += `<p><strong>ATK:</strong> ${card.atk} | <strong>DEF:</strong> ${card.def}</p>`;
      else if (card.atk !== undefined && card.linkRating !== undefined) html += `<p><strong>ATK:</strong> ${card.atk}</p>`;

      if (card.spellType) {
        const spellTypeText = Array.isArray(card.spellType) ? card.spellType.join(", ") : card.spellType;
        html += `<p><strong>Spell Type:</strong> ${spellTypeText}</p>`;
      }

      if (card.trapType) {
        const trapTypeText = Array.isArray(card.trapType) ? card.trapType.join(", ") : card.trapType;
        html += `<p><strong>Trap Type:</strong> ${trapTypeText}</p>`;
      }

      if (card.description) html += `<p>${card.description}</p>`;

      html += `<button class="save-btn">Save ✔</button>`;
      cardDiv.innerHTML = html;

      let savedCards = JSON.parse(localStorage.getItem("savedCards") || "[]");
      const isSaved = savedCards.some(saved => saved.id === card.id);
      const saveBtn = cardDiv.querySelector(".save-btn");

      if (isSaved) {
        saveBtn.textContent = "Saved ✔";
        saveBtn.style.backgroundColor = "#D04735";
      } else {
        saveBtn.style.backgroundColor = "#80355B";
      }

      saveBtn.addEventListener("click", () => {
        savedCards = JSON.parse(localStorage.getItem("savedCards") || "[]");
        const index = savedCards.findIndex(saved => saved.id === card.id);
        if (index === -1) {
          savedCards.push(card);
          saveBtn.textContent = "Saved ✔";
          saveBtn.style.backgroundColor = "#D04735";
          ariaLiveRegion.textContent = `${card.name} saved to your library.`;
        } else {
          savedCards.splice(index, 1);
          saveBtn.textContent = "Save ✔";
          saveBtn.style.backgroundColor = "#80355B";
          ariaLiveRegion.textContent = `${card.name} removed from your library.`;
        }
        localStorage.setItem("savedCards", JSON.stringify(savedCards));
      });

      resultsSection.appendChild(cardDiv);
    });
  }

  form.addEventListener("submit", e => {
    e.preventDefault();
    filterAndDisplay();
  });

  [...selectors.type, ...selectors.attribute, ...selectors.monsterType, ...selectors.subtype, ...selectors.spellType, ...selectors.trapType,
    ...Object.values(rangeInputs), selectors.exactMatch].forEach(input => {
    input.addEventListener("change", () => {
      updateFilterVisibilityByType();
      filterAndDisplay();
    });
  });

  clearFiltersBtn.addEventListener("click", () => {
    [...selectors.type, ...selectors.attribute, ...selectors.monsterType, ...selectors.subtype, ...selectors.spellType, ...selectors.trapType].forEach(cb => cb.checked = false);
    rangeInputs.levelMin.value = 1;
    rangeInputs.levelMax.value = 12;
    rangeInputs.linkMin.value = 1;
    rangeInputs.linkMax.value = 5;
    rangeInputs.atkMin.value = 0;
    rangeInputs.atkMax.value = 5000;
    rangeInputs.defMin.value = 0;
    rangeInputs.defMax.value = 3000;
    selectors.exactMatch.checked = false;
    form.querySelector('input[name="searchText"]').value = "";
    document.querySelector(".card-results").innerHTML = '';
    updateFilterVisibilityByType();
  });

  updateFilterVisibilityByType();
});