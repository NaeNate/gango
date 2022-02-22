import {
  ApplicationCommandDataResolvable,
  ApplicationCommandPermissionData,
  CommandInteraction,
} from "discord.js"

type commandType = ApplicationCommandDataResolvable & {
  permissions: ApplicationCommandPermissionData[]
  execute: (interaction: CommandInteraction) => Promise<void>
}

export default commandType
