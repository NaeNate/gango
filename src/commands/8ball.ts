import commandType from "../types/commandType"

const command: commandType = {
  name: "8ball",
  description: "🎱",
  options: [
    {
      name: "question",
      description:
        "The question you want the answered (is that how u spell answered? lmk)",
      type: "STRING",
      required: false,
    },
  ],
  permissions: [
    {
      id: "906585934059946004",
      // @everyone
      type: "ROLE",
      permission: true,
    },
  ],

  execute: async (interaction) => {
    const question = interaction.options.getString("question")!

    const answers = [
      "No. Just no.",
      "Hmm... 🤷‍♂",
      "Probably",
      "For sure",
      "Not likely",
      "Let's not talk about that.",
      "I couldn't say",
      "yes",
    ]

    await interaction.reply({
      content: `You asked: ${question}\n${
        answers[Math.floor(Math.random() * answers.length)]
      }`,
    })
  },
}

export default command
