/**
 * Created by WareBare on 3/24/2017.
 */

module.exports = {
    
    tplContent: {
        FormContainer: `<div id="WzForm"><fieldset><legend>{TITLE}</legend>{CONTENTS}</fieldset></div>`
        , TextField: `<label class="Default">{LABEL}<msg class="ErrorMsg">{ERROR_MSG}</msg><input type="text" value="{TEXT}" onChange="{ON_CHANGE_FN};" {SETTINGS} /></label>`
        , TextFieldWithTip: `<label data-wztip='{TOOL_TIP}' data-wztip-position="right" class="Default">{LABEL}<msg class="ErrorMsg">{ERROR_MSG}</msg><input type="text" value="{TEXT}" onChange="{ON_CHANGE_FN};" {SETTINGS} /></label>`
        , CheckBox: `<label class="CheckBox"><input type="checkbox" value="{VALUE}" onClick="{ON_CLICK_FN}" {B_CHECKED} /><span>{LABEL}</span></label>`
        , CheckBoxWithTip: `<label data-wztip='{TOOL_TIP}' data-wztip-position="top" class="CheckBox"><input type="checkbox" value="{VALUE}" onClick="{ON_CLICK_FN}" {B_CHECKED} /><span>{LABEL}</span></label>`
        , CollapsibleContainer: `<details class="DefaultDetails"{B_OPEN}><summary>{TITLE}</summary><div>{CONTENTS}</div></details>`
        //, CollapsibleContainer: `<fieldset class="Collapsible"><legend><span class="CollapsibleBTN" onClick="Super.OnClick_CollapsibleBTN(this);">+</span> {TITLE}</legend><div class="CollapsibleContents" style="display: none;">{CONTENTS}</div></fieldset>`
        , TextArea: `<label class="Default">{LABEL}<textarea onBlur="{ON_CHANGE_FN}">{VALUE}</textarea></label>`
        , TextAreaWithTip: `<label class="Default" data-wztip='{TOOL_TIP}' data-wztip-position="right">{LABEL}<textarea onBlur="{ON_CHANGE_FN}" placeholder="{PLACEHOLDER}">{VALUE}</textarea></label>`
    },
    
    content_: function(){
        let out_ = '';
        
        out_ = '';
        
        return out_;
    },

    sidebar_: function(){
        let Output = ``;
        
        return Output;
    },
    sidebarBtns_: function()
    {
        let outButtons = [];

        // ---

        return outButtons;
    }
    
};
