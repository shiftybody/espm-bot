const { ChatInputCommandInteraction} = require("discord.js");
module.exports = {
    name: "interactionsCreate",

    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    execute(interaction, client){
        if(!interaction.isChatInputCommand()) return;
        
        const command = client.commands.get(interaction.commandName);
        if(!command) return interaction.reply({
            content: "This command is outdated",
            ephemeral: true
        });

        if(command.developer && interaction.user.id != "454034757307858944"){
            return interaction.reply({
                content: "This command is a developer command",
                ephemeral: true
            })
        }

        command.execute(interaction, client);
    }
}