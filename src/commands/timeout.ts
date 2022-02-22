import { GuildMember } from "discord.js"
import commandType from "../types/commandType"

const command: commandType = {
  name: "timeout",
  description: "Timeout a user",
  options: [
    {
      name: "user",
      description: "User to timeout",
      type: "USER",
      required: true,
    },
    {
      name: "time",
      description: "Timeout length",
      type: "STRING",
      required: true,
      choices: [
        { name: "1 min", value: "1_min" },
        { name: "5 min", value: "1_min" },
        { name: "10 min", value: "10_min" },
        { name: "30 min", value: "30_min" },
        { name: "1 hour", value: "1_hour" },
        { name: "10 hours", value: "10_hour" },
      ],
    },
    {
      name: "reason",
      description: "Reason for timeout",
      type: "STRING",
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
    const user = interaction.options.getUser("user")!,
      time = interaction.options.getString("time")!,
      reason = interaction.options.getString("reason") || undefined

    const timeTable: any = {
      min: 60000,
      hour: 60000 * 60,
      day: 60000 * 60 * 24,
    }

    const duration =
      parseInt(time.split("-")[0]) * timeTable[time.split("_")[1]]

    const member = interaction.guild!.members.cache.get(user.id)!

    if (user.bot) {
      await interaction.reply({
        content: "You can't time out a bot.",
        ephemeral: true,
      })

      return
    }

    if (
      member.roles.highest.rawPosition >
      (interaction.member as GuildMember).roles.highest.rawPosition
    ) {
      await interaction.reply({
        content: "You can't time out someone with a higher rank than you.",
        ephemeral: true,
      })

      return
    }

    await member.timeout(duration, reason)
    await interaction.reply(`Successfully timed out ${user.username}.`)
  },
}

export default command
