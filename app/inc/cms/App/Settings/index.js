/**
 * Created by WareBare on 3/24/2017.
 */

module.exports = {
    Forms:{},
    tplContent: {},

    Init: function ()
    {
        /// ---
    },

    /*
    OnSubmitForm_GdPath: function(el){
        appConfig.set(`GrimDawn.Paths.Game`, el.value.replace(/\\/g, `/`));

        Super.Init();

        wzReloadCMS(10);
    },
    */
    
    OnSubmitForm_bMinimizeToTray: function (el)
    {
        appConfig.set(`ProgramOptions.bMinimizeToTray`, el.checked);

        wzReloadCMS(10);
    },
    OnSubmitForm_bCloseToTray: function (el)
    {
        appConfig.set(`ProgramOptions.bCloseToTray`, el.checked);

        wzReloadCMS(10);
    },

    /*
    MakeContent_PoE: function ()
    {
        let outStr = ``;
        let tempFormItemOutput = ``;
        
        tempFormItemOutput += Super.tplContent.TextFieldWithTip.wzReplace({
            TEXT: appConfig.get(`GrimDawn.Paths.Game`) || ``
            , ON_CHANGE_FN: `_cms.OnSubmitForm_GdPath(this)`
            , LABEL: `Grim Dawn Directory - Path`
            , SETTINGS: ` style="width: 650px;"`
            , TOOL_TIP: `<ul><li>Required</li><li>Primary save location for created files.</li><li>Uses ArchiveTool.exe (from Crate Ent.) to extract the required text files.</li><li>Example: C:/Program Files (x86)/Steam/steamapps/common/Grim Dawn</li></ul>`
            , ERROR_MSG: (bPathCorrect) ? `` : ( (Super.GetGrimDawnPath() === false) ? `Enter a path (or use "Predict Settings")` : `Path must be wrong!` )
        });

        outStr += Super.tplContent.FormContainer.wzReplace({
            TITLE: `PoE Options`
            , CONTENTS: `${tempFormItemOutput}`
        });

        return outStr;
    },
    */

    MakeContent_Default: function ()
    {
        let outStr = ``;
        let tempFormItemOutput = ``;

        if (typeof appConfig.get(`ProgramOptions.bMinimizeToTray`) === `undefined`) 
        {
            appConfig.set(`ProgramOptions.bMinimizeToTray`, false);
        }
        tempFormItemOutput += Super.tplContent.CheckBoxWithTip.wzReplace({
            ON_CLICK_FN: `_cms.OnSubmitForm_bMinimizeToTray(this)`
            , LABEL: `Minimize to tray`
            , TOOL_TIP: `<ul><li>Tool will be minimized to System-Tray when minimized (rather than to the taskbar).</li><li>Click the icon in the System-Tray to open Tool again.</li><li>Right-Click the icon in the System-Tray brings up a context-menu.</li></ul>`
            , B_CHECKED: (appConfig.get(`ProgramOptions.bMinimizeToTray`)) ? ` CHECKED` : ``
        });

        if (typeof appConfig.get(`ProgramOptions.bCloseToTray`) === `undefined`) 
        {
            appConfig.set(`ProgramOptions.bCloseToTray`, true);
        }
        tempFormItemOutput += Super.tplContent.CheckBoxWithTip.wzReplace({
            ON_CLICK_FN: `_cms.OnSubmitForm_bCloseToTray(this)`
            , LABEL: `Close to tray`
            , TOOL_TIP: `<ul><li>Tool will be minimized to System-Tray when closed (rather than closing the Tool entirely).</li><li>Click the icon in the System-Tray to open Rainbow Tool again.</li><li>Right-Click the icon in the System-Tray brings up a context-menu.</li></ul>`
            , B_CHECKED: (appConfig.get(`ProgramOptions.bCloseToTray`)) ? ` CHECKED` : ``
        });

        outStr += Super.tplContent.FormContainer.wzReplace({
            TITLE: `Tray Options`
            , CONTENTS: `${tempFormItemOutput}`
        });

        return outStr;
    },
    
    content_: function(InContentType){
        this.contentType = InContentType || this.contentType || `Default`;
        
        let Output = ``;

        //Output += this.MakeContent_PoE();
        
        Output += this.MakeContent_Default();
        
        return Output;
    },
    
    sidebarBtns_: function(){
        let outButtons = Super.sidebarBtns_();

        // ---

        return outButtons;
    },
    sidebarList_: function(){
        let outButtons = {};

        // ---

        return outButtons;
    }
    
};
