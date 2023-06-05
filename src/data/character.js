export const testCharacter = {
  "id": 1685993526422,
  "name": "Angron",
  "class": {
      "name": "Fighter",
      "key_ability": [
          "str",
          "dex"
      ],
      "hit_points": 10,
      "proficiencies": {
          "perceptions": "expert",
          "saving_throws": {
              "fort": "expert",
              "ref": "expert",
              "will": "trained"
          },
          "skills": [
              "acrobatics",
              "athletics",
              3
          ],
          "attacks": {
              "simple": "expert",
              "martial": "expert",
              "special": "trained",
              "unarmed": "expert"
          },
          "defense": {
              "light": "trained",
              "medium": "trained",
              "heavy": "trained",
              "unarmored": "trained"
          },
          "class-dc": "trained"
      },
      "features": {
          "level_1": [
              {
                  "name": "Attack of Opportunity",
                  "description": "Ever watchful for weaknesses, you can quickly attack foes that leave an opening in their defenses. You gain the Attack of Opportunity reaction.",
                  "gain": [
                      "AoO"
                  ]
              },
              {
                  "name": "Shield Block",
                  "description": "You gain the Shield Block general feat, a reaction that lets you reduce damage with your shield.",
                  "gain": [
                      "shield-block"
                  ]
              }
          ]
      },
      "feats": {
          "level_1": [
              {
                  "name": "Power Attack",
                  "source": "Class",
                  "rarity": "common",
                  "traits": [
                      "flourish"
                  ],
                  "description": "You unleash a particularly powerful attack that clobbers your foe but leaves you a bit unsteady. Make a melee Strike. This counts as two attacks when calculating your multiple attack penalty. If this Strike hits, you deal an extra die of weapon damage. If you’re at least 10th level, increase this to two extra dice, and if you’re at least 18th level, increase it to three extra dice.",
                  "gain": [
                      "power-attack"
                  ]
              },
              {
                  "name": "Point-Blank Shot",
                  "source": "Class",
                  "rarity": "common",
                  "traits": [
                      "open",
                      "stance"
                  ],
                  "description": "You take aim to pick off nearby enemies quickly. When using a ranged volley weapon while you are in this stance, you don't take the penalty to your attack rolls from the volley trait. When using a ranged weapon that doesn't have the volley trait, you gain a +2 circumstance bonus to damage rolls on attacks against targets within the weapon's first range increment."
              }
          ]
      }
  },
  "ancestry": {
      "name": "Human",
      "hit_points": 8,
      "size": "medium",
      "speed": "25 feet",
      "ability_boosts": [
          "free",
          "free"
      ],
      "languages": [
          "Common",
          "1 + intelligence modifier"
      ],
      "feats": {
          "level_1": [
              {
                  "name": "Natural Ambition",
                  "source": "Ancestry",
                  "rarity": "common",
                  "description": "You were raised to be ambitious and always reach for the stars, leading you to progress quickly in your chosen field. You gain a 1st-level class feat for your class. You must meet the prerequisites, but you can select the feat later in the character creation process in order to determine which prerequisites you meet.",
                  "after-lvl-1": true,
                  "gain": "class-feat"
              },
              {
                  "name": "Natural Skill",
                  "source": "Ancestry",
                  "rarity": "common",
                  "description": "Your ingenuity allows you to learn a wide variety of skills. You gain the trained proficiency rank in two skills of your choice.",
                  "after-lvl-1": true,
                  "gain": "two-skill"
              },
              {
                  "name": "Gloom Seer",
                  "source": "Ancestry",
                  "rarity": "common",
                  "prerequisites": "Nidalese ethnicity",
                  "description": "Gloom holds few terrors for you, and the pall of darkness over Nidal has made you comfortable in dim light. You gain low-light vision.",
                  "after-lvl-1": false,
                  "gain": "low-light-vision"
              }
          ]
      }
  },
  "background": {
      "name": "Acolyte",
      "rarity": "common",
      "description": "You spent your early days in a religious monastery or cloister. You may have traveled out into the world to spread the message of your religion or because you cast away the teachings of your faith, but deep down you’ll always carry within you the lessons you learned. Choose two ability boosts. One must be to Intelligence or Wisdom, and one is a free ability boost. You're trained in the Religion skill, and the Scribing Lore skill. You gain the Student of the Canon skill feat.",
      "ability_boosts": {
          "number": 2,
          "required": [
              "int",
              "wis"
          ]
      },
      "skills": {
          "trained": "religion",
          "lore": "Scribing",
          "feat": "Student of the Canon"
      }
  },
  "ability_scores": [
      0,
      0,
      0,
      0,
      0,
      0
  ],
  "hit_points": 18,
  "feats": [
      {
          "name": "Natural Skill",
          "source": "Ancestry",
          "rarity": "common",
          "description": "Your ingenuity allows you to learn a wide variety of skills. You gain the trained proficiency rank in two skills of your choice.",
          "after-lvl-1": true,
          "gain": "two-skill"
      },
      {
          "name": "Power Attack",
          "source": "Class",
          "rarity": "common",
          "traits": [
              "flourish"
          ],
          "description": "You unleash a particularly powerful attack that clobbers your foe but leaves you a bit unsteady. Make a melee Strike. This counts as two attacks when calculating your multiple attack penalty. If this Strike hits, you deal an extra die of weapon damage. If you’re at least 10th level, increase this to two extra dice, and if you’re at least 18th level, increase it to three extra dice.",
          "gain": [
              "power-attack"
          ]
      }
  ],
  "abilities": [
    {
        "name": "Attack of Opportunity",
        "description": "Ever watchful for weaknesses, you can quickly attack foes that leave an opening in their defenses. You gain the Attack of Opportunity reaction.",
        "gain": [
            "AoO"
        ]
    },
    {
        "name": "Shield Block",
        "description": "You gain the Shield Block general feat, a reaction that lets you reduce damage with your shield.",
        "gain": [
            "shield-block"
        ]
    }
  ]
}