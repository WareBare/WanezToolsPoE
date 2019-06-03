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
    


    Init: function(){
        // ---
    },
    OnLoad: function(){
        // ---
    },


    
    Content_Main: function()
    {
        let Output = ``;
        
        
        return Output;
    },
    
    content_: function(InContentType){
        
        
        //this.Base.contentType = InContentType || `Default`;
        this.contentType = this.Base.LoadContent(InContentType);
        let Output = ``;
        
        if(!this.Base.FilterSettings.has(`Path`)){
            Output = `Use F6 to open the Settings window (or the gear icon in the top right corner) and set a path for PoE Filters.`;
        }else{
            Output = `You can create a new Filter with the buttons on the right.`;
            if(this.contentType !== ``){
                Output = this.Content_Main(this.SearchTerm);
            }
        }
        
        
        return Output;
    },
    
    sidebarBtns_: function(){
        let TestBtn = false;
        
        
        TestBtn = {
            "ONCLICK": "_cms.Base.LoadFilters()",
            "TEXT": "Add Group"
        };
        
        let Output = [];
        Output.push(TestBtn);
        
        return Output;
    },
    sidebarList_: function(){
        return this.Base.GenerateSidebarList();
    }
    
};
