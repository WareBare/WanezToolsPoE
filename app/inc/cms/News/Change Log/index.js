/**
 * Created by Ware on 05/31/2018.
 *
 * @author Ware (Daniel Kamp)
 * @license MIT
 * @website https://github.com/WareBare
 *
 */

module.exports = {
    tplContent: {},
    
    

    content_: function($contentType){
        let url = `https://api.github.com/repos/WareBare/WanezToolsPoE/releases`;
        
        // <span class=\"Link\" title=\"Opens link in Browser on click.\" onclick=\"require('electron').shell.openExternal(`https://discord.gg/ru6eU2p`)\">https://discord.gg/ru6eU2p</span>
        
        fetchUrl(`${url}`, function(err, meta, InBody){
            if(err){ console.error(err); return false; }
            //Log(InBody.toString());
            let releasesData = JSON.parse(InBody.toString())
                , contentMD = ``;
            for(let i = 0; i < releasesData.length; i++){
                contentMD += `\r\n---\r\n# ${releasesData[i].name}\r\n${releasesData[i].body}\r\n`;
            }
            document.getElementById(`md_changelog`).innerHTML = marked(
                `# Change Log\r\n` +
                `---` +
                `\r\n` +
                `*Change Log Archive, same as on the /releases/ page on GitHub*\r\n` +
                `\r\n` +
                `\r\n` +
                `---` +
                `\r\n` +
                `# Table of Contents\r\n` +
                markdown_toc(contentMD).content
            );
            document.getElementById(`md_changelog`).innerHTML += SanitizeLinks(marked(contentMD));
        });
        
        return `<div id="md_changelog" class="md">Loading...</div>`;
    },
    
    sidebarBtns_: function(){
        return [];
    },
    sidebarList_: function(){
        return {}
    }
    
};
