import commandType from "../types/commandType"

const command: commandType = {
  name: "ping",
  description: "Replies with pong",
  options: [],
  permissions: [
    {
      id: "906585934059946004",
      // @everyone
      type: "ROLE",
      permission: true,
    },
  ],

  execute: async (interaction) => {
    await interaction.reply({
      content: "pong",
      ephemeral: true,
    })
  },
}

export default command
