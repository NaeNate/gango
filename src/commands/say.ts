import { TextChannel } from "discord.js"
import commandType from "../types/commandType"

const command: commandType = {
  name: "say",
  description: "make the bot say stuff",
  options: [
    {
      name: "phrase",
      description: "The phrase you want repeated",
      type: "STRING",
      required: true,
    },
  ],
  permissions: [
    {
      id: "908324000831266816",
      // admin
      type: "ROLE",
      permission: true,
    },
  ],

  execute: async (interaction) => {
    const phrase = interaction.options.getString("phrase")!

    const loungeChannel = (await interaction.guild?.channels.fetch(
      "906585934059946007"
    )) as TextChannel

    await loungeChannel.send(phrase)

    await interaction.reply({
      content: "👍",
    })
  },
}

export default command
