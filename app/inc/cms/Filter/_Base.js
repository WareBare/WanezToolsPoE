/**
 * Created by WareBare on 3/24/2017.
 */

module.exports = {
    tplContent: {},
    
    FilterSettings: new eConfig({name: `filter-settings`}),
    FilterData: false,
    aFilters: [],
    SettingsPath: false,
    


    Init: function()
    {
        // ---
        if(!this.SettingsPath){
            this.SettingsPath = this.FilterSettings.path.replace(/\\/g,`/`).replace(`/filter-settings.json`, ``);
            
        }
        this.LoadSettingsFiles();
    },
    OnLoad: function()
    {
        // ---
    },



    LoadSettingsFiles: function()
    {
        let PotentialSettingsFiles = wzIO.dir_get_contentsSync(this.SettingsPath, true);
    
        this.aFilters = [];
        //Log(PotentialSettingsFiles);
        for(let kPotentialSettingsFile in PotentialSettingsFiles){
            if(kPotentialSettingsFile.startsWith(`filterData-`) && kPotentialSettingsFile.endsWith(`.json`)){
                //Log(kPotentialSettingsFile);
                this.aFilters.push(kPotentialSettingsFile.replace(`.json`, ``).replace(`filterData-`, ``));
            }
            
        }
        
    },
    
    LoadFilters: function()
    {
        //wzIO.dir_get_contentsSync(this.SettingsPath, true);
    
        let mFiles = wzIO.dir_get_contentsSync(this.FilterSettings.get(`Path`), true),
            mFilterFiles = {};
    
        for(let kFileName in mFiles){
            if(kFileName.endsWith(`.filter`)){
                mFilterFiles[kFileName] = mFiles[kFileName];
            }
        }
        
        console.log(mFilterFiles);
    },
    
    ini: function(){
        this.Init();
    },
    
    LoadContent: function(InContentType)
    {
        this.contentType = InContentType || (this.aFilters[0] || ``);
    
        if(this.contentType !== ``) this.FilterData = new eConfig({name: `filterData-${this.contentType}`});
        
        return this.contentType;
    },
    
    CreateNewFilter: function(InFilterName = `NoName`)
    {
        this.FilterData = new eConfig({name: `filterData-${InFilterName}`});
        
        if(InFilterName === `NoName`) wzReloadCMS(10); // is `NoName` if button was used (reload required)
    },
    
    DeleteFilter: function(InFilterDataPath = false)
    {
        let FilterDataPath = InFilterDataPath || this.FilterData.path;
        this.FilterData = false;
        this.contentType = false;
        fs.removeSync(FilterDataPath);
    
        if(InFilterDataPath === false) wzReloadCMS(10); // is false if button was used (reload required)
    },
    
    RenameFilter: function(InNewName)
    {
        let FilterDataPath = this.FilterData.path;
        let FilterDataStore = this.FilterData.store;
        
        this.CreateNewFilter(InNewName);
        this.FilterData.store = FilterDataStore;
        
        this.DeleteFilter(FilterDataPath);
        
    
        wzReloadCMS(10);
    },
    
    GenerateSidebarButtons: function()
    {
        let NewFilter = false
            , DeleteFilter = false
        ;
    
    
        NewFilter = {
            "ONCLICK": "_cms.Base.CreateNewFilter()"
            , "TEXT": "New Filter"
        };
        if(this.FilterData){
            DeleteFilter = {
                "ONCLICK": "_cms.Base.DeleteFilter()"
                , "TEXT": "Delete Filter"
            };
        }
        
        return [
            NewFilter,
            DeleteFilter
        ];
    },
    
    GenerateSidebarList: function()
    {
        let mList = {};
    
        this.aFilters.forEach(function(value){
            //Log(value);
            mList[value] = [];
        });
        
        return mList;
    },
    
    content_: function()
    {
        let out_ = '';
        
        out_ = '';
        
        return out_;
    },
    sidebar_: function()
    {
        
        let out_ = '';
        
        return out_;
    }
    
};
