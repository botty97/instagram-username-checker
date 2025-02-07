const axios = require("axios");
const cron = require("node-cron");

const usernames = [
  "abyss",
  "afterglow",
  "amity",
  "auric",
  "beckon",
  "celestial",
  "chroma",
  "cipher",
  "dusk",
  "elixir",
  "ember",
  "ethereal",
  "fathom",
  "flicker",
  "flux",
  "fable",
  "glint",
  "gloom",
  "halcyon",
  "haven",
  "hush",
  "infinity",
  "juniper",
  "kinetic",
  "lucid",
  "lunar",
  "mirage",
  "motif",
  "mystic",
  "nebula",
  "nocturne",
  "notion",
  "nova",
  "oblivion",
  "obsidian",
  "omen",
  "onyx",
  "oracle",
  "paradigm",
  "paramount",
  "phantom",
  "prism",
  "quiver",
  "rapture",
  "relic",
  "resonance",
  "reverie",
  "ripple",
  "sanctuary",
  "silhouette",
  "solace",
  "sonnet",
  "spectrum",
  "spellbound",
  "stasis",
  "sublime",
  "summit",
  "synthesis",
  "tempest",
  "threnody",
  "tremor",
  "twilight",
  "umbra",
  "undying",
  "vanguard",
  "vanta",
  "vast",
  "velvet",
  "venture",
  "veritas",
  "vertex",
  "vigil",
  "visage",
  "void",
  "vortex",
  "wander",
  "wraith",
  "zeal",
  "aeon",
  "arq",
  "axiom",
  "bael",
  "cael",
  "daze",
  "dray",
  "eon",
  "evo",
  "fae",
  "flux",
  "io",
  "lux",
  "nix",
  "nyx",
  "oryx",
  "riven",
  "rune",
  "sage",
  "sola",
  "syx",
  "zyne",
];

const checkUsername = async (username) => {
  try {
    const url = `https://www.instagram.com/${username}`;
    const response = await axios.get(url);

    if (response.status === 200) {
      console.log(`${username} is taken.`);
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.log(`${username} is available!`);
    } else {
      console.error(`error checking ${username}`, error.message);
    }
  }
};

cron.schedule("*/1 * * * *", () => {
  console.log("checking usernames");
  usernames.forEach(checkUsername);
});
