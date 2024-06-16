# DiscordBot com OpenAI 🤖
## Descrição 🧾
Este é um bot para Discord desenvolvido com Node.js que utiliza a API do OpenAI para gerar respostas automáticas. O bot responde às mensagens dos usuários de maneira propositalmente rude e grosseira, seguindo uma configuração específica.

## Funcionalidades ⚙️
- Responde a comandos iniciados com !bot.
- Utiliza a API do OpenAI para gerar respostas.
- Configurado para ser intencionalmente grosseiro nas respostas.
  
## Tecnologias Utilizadas 🧠
- Node.js: Ambiente de execução para JavaScript.
- Discord.js: Biblioteca para interagir com a API do Discord.
- OpenAI: API para geração de texto utilizando modelos de linguagem avançados.
- dotenv: Biblioteca para carregar variáveis de ambiente a partir de um arquivo .env.

## Instalação 🛠️
- Baixar o repositório, utilize npm install para poder baixar as dependências nessárias.

## Token Discord :dependabot:
- Acesse <a href="https://discord.com/developers/applications">Discord Developer Portal</a>.
- Clique em "New Application".
- Dê um nome à sua aplicação e clique em "Create".
- Copie o Token e cole em um arquivo .ENV como DISCORD_TOKEN=seu-token-do-discord.
- Como o bot apenas lê e responde mensagens, as permissões podem ser apenas para isso.

## Token OpenAi :dependabot:
-  Acesse <a href="https://platform.openai.com/settings/profile?tab=api-keys">OpenAI Keys</a>.
-  Clique em "Create new secret key".
-  Copie o Token e cole em um arquivo .ENV como OPENAI_KEY=sua-api-key-do-openai.

## Uso :computer:
- Adicione o bot com o link gerado no site de desenvolvedor.
- Inicie a aplicação com o comando "node index.js" no console do projeto.
- Para utilizar o bot, envie uma mensagem no Discord começando com !bot seguida do texto que deseja enviar.

## Instruções adicionais :clipboard:
- A licença gratuíta da OpenAI permite um número limitado de requisições de resposta, tome cuidado pois ela pode acabar e será necessário esperar o mês acabar para ter mais utilização.
- A instrução inicial de como a IA vai se comportar pode ser alterada. Ela se encontra dentro de constante "messages" em "content", esse texto server como sua instrução inicial.
- O modelo utilizado do ChatGPT pode ser alterado também, o que esta no projeto é o 3.5-turbo.
