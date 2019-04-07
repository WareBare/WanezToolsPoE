/**
 * Created by Ware on 05/31/2018.
 *
 * @author Ware (Daniel Kamp)
 * @license MIT
 * @website https://github.com/WareBare
 *
 */

module.exports = {
    Forms:{},
    tplContent: {},
    
    //FilterConfig: new eConfig({name: `filter-settings`}),
    
    
    content_: function(InContentType){
    
        /*
        // Set content type/filter name
        if(this.contentType && InContentType && this.contentType !== InContentType && this.contentType !== `undefined` && InContentType !== `undefined`) {
            this.FilterConfig.set(`${this.contentType}.Settings.bIsActive`, false);
            this.FilterConfig.set(`${InContentType}.Settings.bIsActive`, true);
        }
        
        if(this.FilterConfig.has(`Default`)){
            for(let kFilterName in this.FilterConfig.store){
                if(this.FilterConfig.get(`${kFilterName}.Settings.bIsActive`)){
                    this.contentType = kFilterName;
                }
            }
        }else{
            this.FilterConfig.set(`Default`, {Settings: {
                bIsActive: true
            }});
        }
        */
        this.contentType = this.contentType || `Default`;
    
        
        // declare var
        /*
        let out_ = ``;
        
        out_ += marked(markdown_toc(fs.readFileSync(`${dirBase}/docs/news.md`, 'utf8')).content + fs.readFileSync(`${dirBase}/docs/news.md`, 'utf8'));
        
        return `<div id="md_changelog" class="md">${out_}</div>`;
        */
        return UseMarkdownParsing(`news`, `News`);
    },
    
    
    
    sidebarBtns_: function(){
        let ResetConfig = false;
        
        /*
        ResetConfig = {
            "ONCLICK": "_cms.ResetConfig()",
            "TEXT": "Reset Config"
        };
        */
        
        return [
            ResetConfig
        ];
    },
    sidebarList_: function(){
        let mList = {};
        
        /*
        for(let kContenType in this.FilterConfig.store){
            mList[kContenType] = [];
        }
        */
        
        return mList;
    }
    
};
