import {
  ApplicationCommandDataResolvable,
  ApplicationCommandPermissionData,
  CommandInteraction,
} from "discord.js"

type commandType = ApplicationCommandDataResolvable & {
  execute: (interaction: CommandInteraction) => Promise<void>
  permissions: ApplicationCommandPermissionData[]
}

export default commandType
