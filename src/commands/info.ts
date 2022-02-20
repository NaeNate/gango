import { MessageEmbed } from "discord.js"
import commandType from "../types/commandType"

const command: commandType = {
  name: "info",
  description: "Basic server info",
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
      embeds: [
        new MessageEmbed()
          .setColor("#0099ff")
          .setTitle("Server Info")
          .setThumbnail(
            "https://yt3.ggpht.com/xPRbOsGO88eS7iaqmM9x10heP_u1c4ldXm38PftafcAXnaTf7zokAJtVZ4mQMhATpTV3HB8l=s176-c-k-c0x00ffffff-no-rj"
          )
          .addField(
            "Members: ",
            interaction.guild!.memberCount.toString(),
            true
          )
          .addField(
            "Boosts: ",
            interaction.guild!.premiumSubscriptionCount!.toString(),
            true
          ),
      ],
    })
  },
}

export default command
