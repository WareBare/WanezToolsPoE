/**
 * Created by Ware on 5/31/2018.
 *
 * @author Ware (Daniel Kamp)
 * @license MIT
 * @website https://github.com/WareBare
 *
 */

module.exports = {
    
    title: `Settings :: Grim Dawn`,
    
    forms: {
        filter_settings:false
    },
    submitForm: function($el){
        console.log(`custom submit: ${$el.value}`);
    },
    
    content_: function(){
        let out_ = `Filter - Settings`;
        
        this.forms.filter_settings = new WZ.Core.cForm({
            id: 'filter_settings',
            title: `Filter`,
            isWnd: `Settings`,
            onChange: {
                /*custom: `submitForm(this)`*/
            },
            items: {
                'Directories': {
                    'filter-settings::Path': {
                        label: `Path`,
                        type: `textLargeX`,
                        isRequired: true
                    }
                }/*,
                'Mods': {
                    'settings-app::GrimDawn.Paths.Mods': {
                        label: `Mods (Folder, separate folders with new line)`,
                        type: `listArea`
                    },
                    'settings-app::GrimDawn.activeMod': {
                        label: `Active Mod`,
                        type: `comboBox`,
                        data: appConfig.get(`GrimDawn.Paths.Mods`) || []
                    }
                }*/
            }
        });
        out_ = this.forms.filter_settings.create();
        
        //console.log(wzWND('Settings').__getContent().contentType);
        
        return out_;
    }
    
};
