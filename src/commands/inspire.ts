import commandType from "../types/commandType"

const command: commandType = {
  name: "inspire",
  description: "Your daily inspiration",
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
    const inspirations = [
      "do your school work or else you will fail and never be successful",
      "Life is like a box of chocolates\nOr a Glock holdin' thirty of hollow tips (ooh)",
      "every 60 seconds, a minute passes in africal",
      "If you think you are too small to make a difference, try sleeping with a mosquito.\n- Dalai Lama.",
      "01100110 01100001 01110010 01110100",
      "people younger than you have won medals in the olympics",
      "Time flies by in the yellow and green\nstick around and you'll see what I mean",
    ]

    await interaction.reply({
      content: inspirations[Math.floor(Math.random() * inspirations.length)],
    })
  },
}

export default command
