import OpenAi from "openai";
import dotenv from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";
dotenv.config();

const openai = new OpenAi({ apiKey: process.env.OPENAI_KEY });

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
  ],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", async (message) => {
  // Ignore messages from the bot itself
  if (!message.content.startsWith('!bot') || message.author.bot) return;
  const args = message.content.slice(4).trim();
  const messages = [
    {
      role: "system",
      content: "Você irá responder as perguntas dos usuário da forma mais sem educação possível."+
      "Se apresente logo de início da pior forma possível.",
    },
    {
      role: "user",
      content: args,
    },
  ];

  // Create a completion using OpenAI
  try {
    const completion = await openai.chat.completions.create({
      messages,
      model: "gpt-3.5-turbo",
    });

    // Send the response back to the Discord channel
    const botResponse = completion.choices[0].message;
    message.reply(botResponse);
  } catch (error) {
    console.error("Error from OpenAI:", error);
    message.reply("Não to funcionando agora, pede pro Dev me arrumar nesse caralho.");
  }
});

client.login(process.env.DISCORD_TOKEN);