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
        //console.log(Math.floor(Math.random() * 1000000000 + 1));
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
        
        console.log(this.aFilters);
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
    },
    
    DeleteFilter: function(InFilterDataPath = false)
    {
        let FilterDataPath = InFilterDataPath || this.FilterData.path;
        console.log(FilterDataPath);
        fs.removeSync(FilterDataPath);

        this.FilterData = false;
        this.contentType = false;
    
        // is false if button was used (reload required)
        if (InFilterDataPath === false)
        {
            this.LoadSettingsFiles();
            appConfig.set(`PathOfExile.ActiveFilter`, this.aFilters[0] || `Default`);
            wzReloadCMS(10);
        }
    },

    GenerateNewFilter: function()
    {
        let FilterDataStore = (this.FilterData) ? this.FilterData.store : {};

        this.CreateNewFilter(`Generated${Math.floor(Math.random() * 1000000000 + 1)}`);

        this.FilterData.store = FilterDataStore;
        this.LoadSettingsFiles();
        wzReloadCMS(10);
    },
    
    RenameFilter: function(InNewName)
    {
        let FilterDataPath = this.FilterData.path;
        let FilterDataStore = this.FilterData.store;
        
        this.CreateNewFilter(InNewName);
        this.FilterData.store = FilterDataStore;
        
        this.DeleteFilter(FilterDataPath);
        
        this.LoadSettingsFiles();

        appConfig.set(`PathOfExile.ActiveFilter`, InNewName);
    
        wzReloadCMS(10);
    },
    
    GenerateSidebarButtons: function()
    {
        let NewFilter = false
            , DeleteFilter = false
        ;
    
    
        NewFilter = {
            "ONCLICK": "_cms.Base.GenerateNewFilter()"
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
