import { TextChannel } from "discord.js"
import commandType from "../types/commandType"

const command: commandType = {
  name: "cls",
  description: "Delete a channels messages.",
  options: [
    {
      name: "amount",
      description: "Amount of messages to delete",
      type: "NUMBER",
      required: false,
    },
  ],
  permissions: [
    {
      id: "908324000831266816",
      type: "ROLE",
      permission: true,
    },
  ],

  execute: async (interaction) => {
    const amount = interaction.options.getNumber("amount") || 20
    const channel = interaction.channel as TextChannel

    const deletedAmount = (await channel.bulkDelete(amount!, true)).size

    await interaction.reply({
      content: `Deleted ${deletedAmount} message${amount === 1 ? "" : "s"}`,
      ephemeral: true,
    })
  },
}

export default command
