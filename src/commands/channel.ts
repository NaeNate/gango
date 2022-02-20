import axios from "axios"
import { MessageEmbed } from "discord.js"
import "dotenv/config"
import commandType from "../types/commandType"

const command: commandType = {
  name: "channel",
  description: "MangoDev's channel statistics",
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
    await interaction.deferReply()

    axios
      .get(
        `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCWYttqm62MtNpZU6k7mzeDQ&key=${process.env.YT_API_KEY}`
      )
      .then(async (res) => {
        const { subscriberCount, viewCount } = res.data.items[0].statistics

        await interaction.editReply({
          embeds: [
            new MessageEmbed()
              .setColor("#0099ff")
              .setTitle("MangoDev")
              .setThumbnail(
                "https://yt3.ggpht.com/xPRbOsGO88eS7iaqmM9x10heP_u1c4ldXm38PftafcAXnaTf7zokAJtVZ4mQMhATpTV3HB8l=s176-c-k-c0x00ffffff-no-rj"
              )
              .addField("Subscribers: ", subscriberCount, true)
              .addField("Views: ", viewCount, true),
          ],
        })
      })
  },
}

export default command
