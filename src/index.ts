import { Client, CommandInteraction, Intents } from "discord.js"
import "dotenv/config"
import fs from "fs"

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

let commands: Record<
  string,
  (interaction: CommandInteraction) => Promise<void>
> = {}

client.once("ready", async () => {
  console.log("READY")

  const commandManager =
    client.guilds.cache.get("906585934059946004")!.commands!

  // This command confuses me man. Mayb good for deployment
  // but not good for testing.

  // commandManager.set([])

  for (const file of fs.readdirSync(__dirname + "/commands")) {
    const { name, description, options, execute, permissions } =
      require(`./commands/${file}`).default

    const command = await commandManager.create({
      name,
      description,
      options,
      defaultPermission: false,
    })!

    command.permissions.add({ permissions })

    commands[name] = execute
  }
})

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return

  if (
    !(process.env.NODE_ENV === "production") &&
    interaction.channelId !== "944687542261923850"
  ) {
    await interaction.reply("gango is currently under development")

    return
  }

  try {
    await commands[interaction.commandName](interaction)
  } catch (e) {
    await interaction.reply("Error - Contact Biinge#7203")

    console.log(e)
  }
})

client.on("messageCreate", async (interaction) => {
  if (interaction.content.includes("https://twitter.com")) {
    interaction.channel.send("🚨 Twitter User 🚨")
  }
})

client.login(process.env.TOKEN)
