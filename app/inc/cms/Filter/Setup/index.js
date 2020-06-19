/**
 * Created by Ware on 05/31/2018.
 *
 * @author Ware (Daniel Kamp)
 * @license MIT
 * @website https://github.com/WareBare
 *
 */


const VERSION_TOOL = `0.1.1 (ALPHA)`;
const VERSION_POE = `3.10.1b (Delirium)`;
const DATETIME_TOOL = `2020-03-31`;

module.exports = {
    Forms:{},
    tplContent: {},
    
    ActiveData: {},
    
    SearchTerm: ``,
    
    StaticFilterClasses: {
        BaseItemClasses: {
            'Weapons': [
                `Bows`
                , `Claws`
                , `Daggers`
                , `One Hand Axes`
                , `One Hand Maces`
                , `One Hand Swords`
                , `Thrusting One Hand Swords`
                , `Staves`
                , `Wands`
                , `Two Hand Swords`
                , `Two Hand Axes`
                , `Two Hand Maces`
                , `Sceptres`
                , `Unarmed`
            ],
            'Armour': [
                `Gloves`
                , `Boots`
                , `Body Armours`
                , `Helmets`
                , `Shields`
            ],
            'Accessories': [
                , `Rings`
                , `Amulets`
                , `Belts`
                , `Quivers`
            ],
            'Flasks': [
                `Life Flasks`
                , `Mana Flasks`
                , `Hybrid Flasks`
                , `Utility Flasks`
                , `Critical Utility Flasks`
            ],
            'Misc': [
                `Jewel`
                , `Abyss Jewel`
                , `Currency`
                , `Stackable Currency`
                , `Active Skill Gems`
                , `Support Skill Gems`
                , `Quest Items`
                , `Maps`
                , `Map Fragments`
                , `Fishing Rods`
                , `Hideout Doodads`
                , `Microtransactions`
                , `Divination Card`
                , `Labyrinth Item`
                , `Labyrinth Trinket`
                , `Labyrinth Map Item`
                , `Misc Map Items`
                , `Leaguestones`
                , `Pantheon Soul`
                , `Piece`
                , `Incursion Item`
            ]
        }
    },
    StaticItemDataByClass: {
        HasExplicitMod: {
            'Useful Core Affixes': [
                `Tyrannical`
            ],
            'League: Incursion': [
                `Tacati's`
                , `Citaqualotl's`
                , `Matatl's`
                , `Topotante's`
                , `Xopec's`
                , `Guatelitzi's`
                , `of Tacati`
                , `of Citaqualotl`
                , `of Matatl`
                , `of Puhuarte`
                , `of Guatelitzi`
            ]
        },
        Currency: {
            'Regular': [
                `Mirror of Kalandra`
                , `Eternal Orb`
                , `Exalted Orb`
                , `Ancient Orb`
                , `Divine Orb`
                , `Gemcutter's Prism`
                , `Orb of Annulment`
                , `Vaal Orb`
                , `Orb of Regret`
                , `Engineer's Orb`
                , `Regal Orb`
                , `Orb of Fusing`
                , `Orb of Scouring`
                , `Orb of Alchemy`
                , `Blessed Orb`
                , `Orb of Binding`
                , `Silver Coin`
                , `Jeweller's Orb`
                , `Orb of Chance`
                , `Orb of Alteration`
                , `Chromatic Orb`
                , `Scroll of Wisdom`
                , `Portal Scroll`
                , `Armourer's Scrap`
                , `Blacksmith's Whetstone`
                , `Glassblower's Bauble`
                , `Orb of Transmutation`
                , `Orb of Augmentation`
                , `Perandus Coin`
            ],
            'Shards': [
                `Mirror Shard`
                , `Exalted Shard`
                , `Annulment Shard`
            ],
            'League: Breach': [
                `Blessing of Chayula`
                , `Blessing of Uul-Netol`
                , `Blessing of Esh`
                , `Blessing of Xoph`
                , `Blessing of Tul`
                , `Splinter of Chayula`
                , `Splinter of Uul-Netol`
                , `Splinter of Xoph`
                , `Splinter of Esh`
                , `Splinter of Tul`
            ],
            'Map': [
                `Master Cartographer's Sextant`
                , `Journeyman Cartographer's Sextant`
                , `Apprentice Cartographer's Sextant`
                , `Harbinger's Orb`
                , `Orb of Horizons`
                , `Cartographer's Chisel`
            ]
        },
        Card: {
        
        },
        Flask: {
        
        },
        Gem: {
        
        },
        Map: {
            'Atziri': [
                `Sacrifice at Dusk`
                , `Sacrifice at Midnight`
                , `Sacrifice at Dawn`
                , `Sacrifice at Noon`
                , `Mortal Grief`
                , `Mortal Rage`
                , `Mortal Hope`
                , `Mortal Ignorance`
            ],
            'Shaper': [
                `Fragment of the Chimera`
                , `Fragment of the Phoenix`
                , `Fragment of the Minotaur`
                , `Fragment of the Hydra`
            ],
            'Prophecy': [
                `Volkuur's Key`
                , `Inya's Key`
                , `Yriel's Key`
                , `Eber's Key`
            ],
            'Misc': [
                `Offering to the Goddess`
                , `Divine Vessel`
                , `Ancient Reliquary Key`
            ]
        }
    },
    
    CheckValues: {
        RecipesSocketsCount: {
            Class: `Recipe`
            , Settings: [
                {
                    Classification: `T12`
                    , Code: {
                    LinkedSockets: `6`
                    , PlayAlertSound: `3 300`
                }
                }
                , {
                    Classification: `T10`
                    , Code: {
                        Sockets: `6`
                        , PlayAlertSound: `6 300`
                    }
                }
            ]
            , Code: {
                DisableDropSound: ``
            }
            , CurrentValue: [true, true]
        }
        , RecipesSocketsRGB: {
            Class: `Recipe`
            , Settings: [
                {ToolIgnore: true}
                , {
                    Classification: `T4`
                    , Code: [
                        {
                            SocketGroup: `RGB`
                            , Height: `<= 2`
                            , Width: `<= 2`
                        }
                        , {
                            SocketGroup: `RGB`
                            , Height: `<= 3`
                            , Width: `<= 1`
                        }
                    ]
                }
                , {
                    Classification: `T4`
                    , Code: {
                        SocketGroup: `RGB`
                        , LinkedSockets: `< 5`
                    }
                }
            ]
            , Code: {
                DisableDropSound: ``
                , SetFontSize: `25`
            }
            , CurrentValue: 1
        }
        , RecipesGem: {
            Class: `Gems`
            , Settings: [
                {
                    Classification: `T12`
                    , Code: {
                        Quality: `>= 20`
                        , GemLevel: `< 20`
                    }
                }
                , {
                    Classification: `T8`
                    , Code: {
                        Quality: `>= 14`
                        , GemLevel: `< 20`
                    }
                }
                , {
                    Classification: `T6`
                    , Code: {
                        Quality: `>= 10`
                        , GemLevel: `< 20`
                    }
                }
                , {
                    Classification: `T4`
                    , Code: {
                        Quality: `>= 8`
                        , GemLevel: `< 20`
                    }
                }
                , {
                    Classification: `T3`
                    , Code: {
                        Quality: `>= 5`
                        , GemLevel: `< 20`
                    }
                }
                , {
                    Classification: `T2`
                    , Code: {
                        BaseType: `Vaal`
                    }
                }
                , {
                    Classification: `T1`
                    , Code: {
                        Quality: `0`
                        , GemLevel: `< 20`
                    }
                }
            ]
            , Code: {
            
            }
            , CurrentValue: [true, true, false, false, false, true, false]
        }
        , MiscGem: {
            Class: `Gems`
            , Settings: [
                {}
                , {
                    Classification: `T12`
                    , Code: {
                        GemLevel: `>= 20`
                    }
                }
            ]
            , Code: {
            
            }
            , CurrentValue: 1
        }
        , MiscFlasks: {
            Class: `Flask`
            , CurrentValue: 1
        }
        , MiscCurrencyStacks: {
            Class: `Currency`
            , Settings: [
                {}
                , {
                    Classification: `T4`
                    , Code: {
                        StackSize: `>= 10`
                    }
                }
            ]
            , Code: {
            
            }
            , CurrentValue: 1
        }
        , MiscUniques: {
            Class: `Equipment`
            , Settings: [
                {}
                , {
                    Classification: `T8`
                    , Code: {
                        Rarity: `Unique`
                        , PlayAlertSound: `3 300`
                    }
                }
            ]
            , Code: {
            
            }
            , CurrentValue: 1
        }
        , MiscSocketsCount: {
            Class: `Recipe`
            , Settings: [
                {
                    Classification: `T8`
                    , Code: {
                        LinkedSockets: `5`
                    }
                }
                , {
                    Classification: `T4`
                    , Code: {
                        ItemLevel: `<= 60`
                        , LinkedSockets: `4`
                        , Height: `<= 3`
                        , Width: `<= 2`
                    }
                }
            ]
            , Code: {
                DisableDropSound: ``
            }
            , CurrentValue: [true, true]
        }
        , LeagueLegion: {
            Class: `Incubator`
            , Settings: [
                {}
                , {
                    Classification: `League`
                    , Code: {
                    
                    }
                }
            ]
            , Code: {
                BaseType: `"Incubator"`
            }
            , CurrentValue: 1
        }
        , LeagueEssence2: {
            Class: `LeagueRanked`
            , Settings: [
                {
                    Classification: `LeagueS`
                    , Code: {
                        BaseType: `"Essence of Delirium" "Essence of Horror" "Essence of Hysteria" "Essence of Insanity"`
                    }
                }
                , {
                    Classification: `LeagueA`
                    , Code: {
                        BaseType: `"Remnant of Corruption"`
                    }
                }
                , {
                    Classification: `LeagueB`
                    , Code: {
                        BaseType: `"Deafening Essence" "Shrieking Essence" "Screaming Essence"`
                    }
                }
                , {
                    Classification: `LeagueC`
                    , Code: {
                        BaseType: `"Wailing Essence" "Weeping Essence"`
                    }
                }
                , {
                    Classification: `LeagueD`
                    , Code: {
                        BaseType: `"Muttering Essence" "Whispering Essence"`
                    }
                }
            ]
            , Code: {
                //BaseType: `"Essence"`
                Class: `Currency`
            }
            , CurrentValue: [true, true, true, false, false]
        }
        , LeagueTalisman: {
            Class: `Amulet`
            , Settings: [
                {}
                , {
                    Classification: `League`
                    , Code: {
                    
                    }
                }
            ]
            , Code: {
                BaseType: `"Talisman"`
            }
            , CurrentValue: 1
        }
        , LeagueMetamorph: {
            Class: `Metamorph Sample`
            , Settings: [
                {}
                , {
                    Classification: `League`
                    , Code: {
                    
                    }
                }
            ]
            , Code: {
                //BaseType: `"Metamorph Sample"`
            }
            , CurrentValue: 1
        }
        , LeagueHarvest: {
            Class: `Harvest Seed`
            , Settings: [
                {}
                , {
                    Classification: `League`
                    , Code: {
                    
                    }
                }
            ]
            , Code: {
                //BaseType: `"Metamorph Sample"`
            }
            , CurrentValue: 1
        }
        , LeagueHarvest2: {
            Class: `HarvestInfrastructure`
            , Settings: [
                {}
                , {
                    Classification: `League`
                    , Code: {
                    
                    }
                }
            ]
            , Code: {
                //BaseType: `"Metamorph Sample"`
            }
            , CurrentValue: 1
        }
        , MapFragments: {
            Class: `Map Fragments`
            , Settings: [
                {}
                , {
                    Classification: `MapFragments`
                    , Code: {
                    
                    }
                }
            ]
            , Code: {
                //BaseType: `"Metamorph Sample"`
            }
            , CurrentValue: 1
        }
        , MiscGeneral: {
            Class: `League`
            , Settings: [
                {}
                , {
                    Classification: `League`
                    , Code: [
                        {
                            BaseType: `"Treasure Key"`
                        }
                    ]
                }
            ]
            , Code: {
            
            }
            , CurrentValue: 1
        }
        , LeagueIncursion: {
            Class: `Incursion Item`
            , Settings: [
                {}
                , {
                    Classification: `League`
                    , Code: {
                    
                    }
                }
            ]
            , Code: {
                PlayAlertSound: `8 300`
                , SetFontSize: `45`
            }
            , CurrentValue: 1
        }
        , LeagueBreach: {
            Class: `League`
            , Settings: [
                {}
                , {
                    Classification: `League`
                    , Code: {
                        BaseType: `"Blessing" "Breachstone" "Emblem"`
                    }
                }
            ]
            , Code: {
                PlayAlertSound: `8 300`
                , SetFontSize: `45`
            }
            , CurrentValue: 1
        }
        , MiscLevelingGear: {
            Class: `Equipment`
            , Settings: [
                {ToolIgnore: true}
                , {
                    Classification: `Leveling`
                    , Code: [
                        {
                            Rarity: `Normal`
                            , DropLevel: [`> 20`, `< 35`]
                            , ItemLevel: [`> 20`, `< 40`]
                        }
                        , {
                            Rarity: `Rare`
                            , DropLevel: [`> 20`, `< 35`]
                            , ItemLevel: [`> 20`, `< 40`]
                        }
                        , {
                            Rarity: `Rare`
                            , DropLevel: [`> 30`, `< 45`]
                            , ItemLevel: [`> 30`, `< 50`]
                        }
                        , {
                            Rarity: `Rare`
                            , DropLevel: [`> 40`, `< 55`]
                            , ItemLevel: [`> 40`, `< 60`]
                        }
                        , {
                            Rarity: `Rare`
                            , DropLevel: [`> 50`, `< 68`]
                            , ItemLevel: [`> 50`, `< 68`]
                        }
                        , {
                            Rarity: `>= Magic`
                            , Height: `<= 1`
                            , Width: `<= 1`
                            , ItemLevel: `< 30`
                        }
                    ]
                }
            ]
            , Code: {
            
            }
            , CurrentValue: 1
        }
        , MiscEnchantment: {
            Class: `Equipment`
            , Settings: [
                {}
                , {
                    Classification: `League`
                    , Code: [
                        {
                            AnyEnchantment: `true`
                        }
                        , {
                            HasExplicitMod: `"Subterranean" "Tacati's" "Citaqualotl's" "Matatl's" "Topotante's" "Xopec's" "Guatelitzi's"`
                        }
                        , {
                            HasExplicitMod: `"of the Underground" "of Weaponcraft" "of Spellcraft" "of Crafting" "of Tacati" "of Citaqualotl" "of Matatl" "of Puhuarte" "of Guatelitzi" "of Farrul"`
                        }
                        , {
                            HasExplicitMod: `"Veiled" "Leo's Veiled" "Catarina's Veiled" "Elreon's Veiled" "Vorici's Veiled" "Haku's Veiled" "Tora's Veiled" "Vagan's Veiled" "Guff's Veiled" "It That Fled's Veiled" "Gravicius' Veiled" "Korell's Veiled" "Rin's Veiled"`
                        }
                        , {
                            HasExplicitMod: `"of the Veil" "of Janus' Veil" "of Hillock's Veil" "of Jorgin's Veil" "of Cameria's Veil" "of Aisling's Veil" "of Riker's Veil"`
                        }
                    ]
                }
            ]
            , Code: {
            
            }
            , CurrentValue: 1
        }
        , BaseShaper: {
            Class: `Equipment`
            , Settings: [
                {}
                , {
                    Classification: `T6`
                    , Code: {
                        ShaperItem: `True`
                    }
                }
            ]
            , Code: {
                DisableDropSound: ``
                , Rarity: `<= Rare`
            }
            , CurrentValue: 1
        }
        , BaseElder: {
            Class: `Equipment`
            , Settings: [
                {}
                , {
                    Classification: `T6`
                    , Code: {
                        ElderItem: `True`
                    }
                }
            ]
            , Code: {
                DisableDropSound: ``
                , Rarity: `<= Rare`
            }
            , CurrentValue: 1
        }
        , BaseInfluenced: {
            Class: `Equipment`
            , Settings: [
                {}
                , {
                    Classification: `T6`
                    , Code: {
                        HasInfluence: `Shaper Elder Crusader Redeemer Hunter Warlord`
                    }
                }
            ]
            , Code: {
                DisableDropSound: ``
                , Rarity: `<= Rare`
            }
            , CurrentValue: 1
        }
        , BaseSynthesis: {
            Class: `Equipment`
            , Settings: [
                {}
                , {
                    Classification: `Custom`
                    , Code: [
                        {
                            FracturedItem: `True`
                            , Class: `"Jewel" "Bows" "Rings" "Amulets" "Belts"`
                            , MinimapIcon: `0 White Star`
                            , PlayEffect: `White`
                        }
                        , {
                            FracturedItem: `True`
                            , BaseType: `"Hubris Circlet" "Vaal Regalia" "Sorcerer Boots" "Sorcerer Gloves" "Titanium Spirit Shield"`
                            , MinimapIcon: `0 White Star`
                            , PlayEffect: `White`
                        }
                        , {
                            FracturedItem: `True`
                            , SetFontSize: `22`
                        }
                        , {
                            SynthesisedItem: `True`
                            , PlayAlertSound: `6 300`
                        }
                    ]
                }
            ]
            , Code: {
                DisableDropSound: ``
                , Rarity: `<= Rare`
            }
            , CurrentValue: 1
        }
        , BaseJewels: {
            Class: `Jewel`
            , Settings: [
                {}
                , {
                    Classification: `T2`
                    , Code: [
                        {
                            Rarity: `Rare`
                            , SetFontSize: `45`
                        }
                        , {
                            Rarity: `<= Magic`
                            , SetFontSize: `25`
                        }
                    ]
                }
            ]
            , Code: {
            
            }
            , CurrentValue: 1
        }
        , ClusterJewels: {
            Class: `ClusterJewel`
            , Settings: [
                {}
                , {
                    Classification: `League`
                    , Code: [
                        {
                            Rarity: `Rare`
                            , SetFontSize: `45`
                        }
                        , {
                            Rarity: `<= Magic`
                            , SetFontSize: `35`
                        }
                    ]
                }
            ]
            , Code: {
                BaseType: `"Cluster Jewel" "Eye Jewel"`
            }
            , CurrentValue: 1
        }
        , RecipesChaos: {
            Class: `Recipe`
            , Settings: [
                {}
                , {
                    Classification: `T6`
                    , Code: [
                        {
                            Class: `"Rings" "Amulets"`
                            , ItemLevel: [`>= 60`, `< 78`]
                        }
                        , {
                            Class: `"Belts"`
                            , BaseType: `"Leather Belt" "Heavy Belt" "Rustic Sash" "Cloth Belt"`
                            , ItemLevel: [`>= 60`, `< 78`]
                        }
                        , {
                            Class: `"Bows"`
                            , BaseType: `"Thicket Bow" "Grove Bow" "Short Bow" "Crude Bow"`
                            , ItemLevel: [`>= 60`, `< 78`]
                        }
                        , {
                            Class: `"Swords" "Daggers" "Maces" "Wands"`
                            , ItemLevel: [`>= 60`, `< 78`]
                            , Height: `<= 3`
                            , Width: `<= 1`
                        }
                        , {
                            Class: `"Body Armour"`
                            , ItemLevel: [`>= 60`, `< 78`]
                            , DropLevel: `>= 68`
                        }
                        , {
                            Class: `"Boots"`
                            , ItemLevel: [`>= 60`, `< 78`]
                            , DropLevel: `>= 58`
                        }
                        , {
                            Class: `"Helmets"`
                            , ItemLevel: [`>= 60`, `< 78`]
                            , DropLevel: `>= 58`
                        }
                        , {
                            Class: `"Gloves"`
                            , ItemLevel: [`>= 60`, `< 78`]
                            , DropLevel: `>= 56`
                        }
                        , {
                            Class: `"Belts"`
                            , SetFontSize: `25`
                        }
                        , {
                            Class: `"Rings" "Amulets"`
                            , SetFontSize: `25`
                        }
                    ]
                }
            ]
            , Code: {
                Rarity: `Rare`
                , Identified: `False`
            }
            , CurrentValue: 1
        }
    },
    


    Init: function(){
        // ---
    },
    OnLoad: function(){
        // ---
    },



    //FilterConfig: new eConfig({name: `filter-settings`}),
    GenerateFormData_Main: function(InGroupType, InData, InDataString)
    {
        let Out = {};
        switch(InGroupType)
        {
            case `Currency`:
                Out = this.GenerateFormData_Currency(InData, InDataString);
                break;
            default:
                //Out = `An Error Occurred!`;
                Log(`An Error Occurred!`);
                break;
        }
        
        return Out;
    },
    GenerateFormData_Currency: function(InData, InDataString)
    {
        let Out = {};
        
        Out[`${InDataString}::`] = {
        label: `Filter Name`,
            type: `textLarge`,
            isRequired: true,
            value: this.contentType
        };
        
        return Out;
    },
    
    SubmitForm_FilterSettings: function(InEl)
    {
        if(InEl.name === `FilterName`){
            this.Base.RenameFilter(InEl.value);
        }
    },
    SubmitForm_Data: function(InEl)
    {
        Log(`Name: ${InEl.name} - Value: ${InEl.value}`);
    },
    
    OnDropListItem: function(e){
        e.preventDefault();
        
        try{
            // Definitions
            let SourceKey = e.dataTransfer.getData(`ListKey`)
                , TargetKey = e.target.getAttribute(`wz-listKey`)
                , ActionData = e.dataTransfer.getData(`ActionData`)
                , ListData = this.Base.FilterData.get(`SetupData.ListGroups`);
            
            // Logic
            if(TargetKey){
                ListData[ActionData] = TargetKey;
            }else{
                delete ListData[ActionData];
            }
            this.Base.FilterData.set(`SetupData.ListGroups`, ListData);
            
            // Reload Content.
            wzReloadCMS(10);
        }catch(err){Log(err);}
    },
    OnClickCheckBox: function(InElement){
        //Log(`Name: ${InElement.name} --- Value: ${InElement.checked}`);
        
        if(!this.Base.FilterData) return false;
        if(!this.Base.FilterData.has(`SetupData.CheckValues`)){
            this.Base.FilterData.set(`SetupData.CheckValues`, {});
        }
        
        let ElementParts = InElement.name.split(`::`)
            , FilterCheckValues = this.Base.FilterData.get(`SetupData.CheckValues`);
        //Log(ElementParts);
        FilterCheckValues[ElementParts[0]] = FilterCheckValues[ElementParts[0]] || this.CheckValues[ElementParts[0]].CurrentValue;
        FilterCheckValues[ElementParts[0]][ElementParts[1]] = InElement.checked;
        this.Base.FilterData.set(`SetupData.CheckValues`, FilterCheckValues);
    
        wzReloadCMS(10);
    },
    OnClickRadioButton: function(InElement){
        if(!this.Base.FilterData) return false;
        if(!this.Base.FilterData.has(`SetupData.CheckValues`)){
            this.Base.FilterData.set(`SetupData.CheckValues`, {});
        }
    
        let ElementParts = InElement.name.split(`::`)
            , FilterCheckValues = this.Base.FilterData.get(`SetupData.CheckValues`);
    
        
        FilterCheckValues[InElement.name] = FilterCheckValues[InElement.name] || this.CheckValues[InElement.name].CurrentValue;
        FilterCheckValues[InElement.name] = (InElement.checked) ? InElement.value : FilterCheckValues[InElement.name];
        this.Base.FilterData.set(`SetupData.CheckValues`, FilterCheckValues);
        
    
        wzReloadCMS(10);
    },
    
    /**
     *
     * @param InFieldName
     * @param InOptions
     * @param InDefaults
     * @return {string}
     * @constructor
     */
    SelectionForm_CheckBox: function(InFieldName, InElementName, InOptions, InDefaults){
        let Output = ``, OptionsOutput = ``
            , FieldTMP = `<fieldset class="CheckValue"><legend>{FIELD_NAME}</legend>{FIELD_OPTIONS}</fieldset>`
            , OptionTMP = `<label class="CheckBox"><input name="{OPTION_NAME}" type="checkbox"{IS_CHECKED} onclick="_cms.OnClickCheckBox(this);" /><span>{OPTION_TEXT}</span></label>`;
        
        for(let OptionIndex in InOptions){
            OptionsOutput += OptionTMP.wzReplace({
                IS_CHECKED: (InDefaults[OptionIndex]) ? ` CHECKED` : ``
                , OPTION_TEXT: InOptions[OptionIndex]
                , OPTION_NAME: `${InElementName}::${OptionIndex}`
            });
        }
        
        Output += FieldTMP.wzReplace({
            FIELD_NAME: InFieldName
            , FIELD_OPTIONS: OptionsOutput
        });
        
        return Output;
    },
    SelectionForm_RadioButton: function(InFieldName, InElementName, InOptions, InDefault = 0){
        let Output = ``, OptionsOutput = ``
            , FieldTMP = `<fieldset class="CheckValue"><legend>{FIELD_NAME}</legend>{FIELD_OPTIONS}</fieldset>`
            , OptionTMP = `<label class="CheckBox"><input name="{OPTION_NAME}" type="radio"{IS_CHECKED} onclick="_cms.OnClickRadioButton(this);" value="{OPTION_VALUE}"><span>{OPTION_TEXT}</span></label>`;
    
        for(let OptionIndex in InOptions){
            OptionsOutput += OptionTMP.wzReplace({
                IS_CHECKED: (parseInt(OptionIndex) === parseInt(InDefault)) ? ` CHECKED` : ``
                , OPTION_TEXT: InOptions[OptionIndex]
                , OPTION_NAME: `${InElementName}`
                , OPTION_VALUE: `${OptionIndex}`
            });
            //Log(OptionIndex);
            //Log(`${InDefault}`);
        }
        
        Output += FieldTMP.wzReplace({
            FIELD_NAME: InFieldName
            , FIELD_OPTIONS: OptionsOutput
        });
        
        return Output;
    },
    
    /**
     *
     * @param InOpt
     * - LegendName (STR)
     * - Items (ARRAY with Object -> FieldName (STR), bCheckBox (TRUE: CheckBox, FALSE: RadioButton), Fields (ARRAY), Default (INT -> Array Index) || bChecked (ARRAY:Boolean -> TRUE: checked box, FALSE: unchecked Box))
     * @return {string}
     * @constructor
     */
    SelectionForm_Create: function(InOpt){
        let Output = ``, ItemsOutput = ``, ItemData
            , ContainerTMP = `<div class="DragDropList"><fieldset><legend>{LEGEND_NAME}</legend>{CONTENTS}</fieldset></div>`;
    
        let FilterData = this.Base.FilterData.get(`SetupData.CheckValues`);
        
        for(let ItemIndex in InOpt.Items){
            ItemData = InOpt.Items[ItemIndex];
            if(ItemsOutput !== `` && ItemData.bUseBreak) ItemsOutput += `<br />`;
            if(ItemData.bCheckBox){
                /// Is CheckBox
                ItemsOutput += this.SelectionForm_CheckBox(ItemData.FieldName, ItemData.ElementName, ItemData.Fields, (FilterData[ItemData.ElementName]) ? FilterData[ItemData.ElementName] : this.CheckValues[ItemData.ElementName].CurrentValue);
            }else{
                /// Is RadioButton
                ItemsOutput += this.SelectionForm_RadioButton(ItemData.FieldName, ItemData.ElementName, ItemData.Fields, (FilterData[ItemData.ElementName]) ? FilterData[ItemData.ElementName] : this.CheckValues[ItemData.ElementName].CurrentValue);
            }
        }
        
        Output += ContainerTMP.wzReplace({
            LEGEND_NAME: InOpt.LegendName
            , CONTENTS: ItemsOutput
        });
        
        return Output;
    },
    
    Content_CreateSectionMisc: function(){
        let Output = ``;
    
        Output += this.SelectionForm_Create({
            LegendName: `Recipes`
            , Items: [
                , {
                    FieldName: `Sockets (Number/Links)`
                    , ElementName: `RecipesSocketsCount`
                    , bCheckBox: true
                    , Fields: [`6 Links`, `6 Sockets`]
                }
                , {
                    FieldName: `Sockets (RGB)`
                    , ElementName: `RecipesSocketsRGB`
                    , bCheckBox: false
                    , Fields: [`Hide All RGB`, `RGB (small space)`, `RGB (All)`]
                }
                , {
                    FieldName: `Show Gems`
                    , ElementName: `RecipesGem`
                    , bCheckBox: true
                    , bUseBreak: true
                    , Fields: [`20%`, `14%+`, `10%+`, `8%+`, `5%+`, `Vaal Gems`, `Any Gem`]
                }
                , {
                    FieldName: `Chaos Recipe`
                    , ElementName: `RecipesChaos`
                    , bCheckBox: false
                    , bUseBreak: true
                    , Fields: [`Hide`, `Show`]
                }
            ]
        });
        
        Output += this.SelectionForm_Create({
            LegendName: `Misc`
            , Items: [
                {
                    FieldName: `Flasks (Leveling)`
                    , ElementName: `MiscFlasks`
                    , bCheckBox: false
                    , Fields: [`Hide`, `Show`]
                }
                , {
                    FieldName: `Leveling Equipment`
                    , ElementName: `MiscLevelingGear`
                    , bCheckBox: false
                    , Fields: [`Hide`, `Show`]
                }
                , {
                    FieldName: `Sockets (Number/Links)`
                    , ElementName: `MiscSocketsCount`
                    , bCheckBox: true
                    , Fields: [`5 Links`, `4 Links (< iLvl 61)`]
                }
            ]
        });
    
        Output += this.SelectionForm_Create({
            LegendName: `League Specific Items`
            , Items: [
                /*{
                    FieldName: `Essences`
                    , ElementName: `LeagueEssence`
                    , bCheckBox: false
                    , Fields: [`Hide`, `Show`]
                }
                , */{
                    FieldName: `Essences`
                    , ElementName: `LeagueEssence2`
                    , bCheckBox: true
                    , bUseBreak: true
                    , Fields: [`Specials`, `Remnant of Corruption`, `T5-T7`, `T3 & T4`, `T1 & T2`]
                }
                , {
                    FieldName: `Talisman`
                    , ElementName: `LeagueTalisman`
                    , bCheckBox: false
                    , bUseBreak: true
                    , Fields: [`Hide`, `Show`]
                }
            ]
        });
        
        return Output;
    },
    
    Content_Main: function(InSearchTerm = ``)
    {
        let SearchTerm = InSearchTerm; // just making a new var in case args change later, which they likely will
        
        if(!this.Base.FilterData.has(`SetupData`)){
            this.Base.FilterData.set(`SetupData`,{});
        }
        if(!this.Base.FilterData.has(`SetupData.ListGroups`)){
            this.Base.FilterData.set(`SetupData.ListGroups`,{});
        }
        if(!this.Base.FilterData.has(`SetupData.CheckValues`)){
            this.Base.FilterData.set(`SetupData.CheckValues`, {});
        }
        this.ActiveData = {};
        
        //Log(this.Base.FilterData.get(`Data`));
        let FilterData = this.Base.FilterData;
        let Out = ``;
    
        this.Forms.filter_settings = new WZ.Core.cForm({
            id: 'filter_settings',
            title: `Filter`,
            useContent: true,
            //isWnd: `Settings`,
            onChange: {
                custom: `SubmitForm_FilterSettings(this)`
            },
            items: {
                'General': {
                    'FilterName': {
                        label: `Filter Name`,
                        type: `textLarge`,
                        isRequired: true,
                        value: this.contentType
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
        Out += this.Forms.filter_settings.create();
    
        /*
        Out += new WZ.Core.cDragDropList().create_();
        
        Out += new WZ.Core.cDragDropList({
            LegendName: `Currency`
            , OnDrop: `OnDropTest`
            , Lists: [
                {
                    Name: `Hidden`
                    , Items: [{
                        Text: `Hidden Test`
                        , ActionData: `Currency.Regular.1`
                    }]
                }
                , {
                    Name: `T1`
                }
                , {
                    Name: `T2`
                }
                , {
                    Name: `T3`
                }
            ]
        }).create_();
        */
    
        let Lists;
        let ListItems;
        let ActionDataStr;
        let CategoryData;
        let GroupData;
        let ActiveDataGroup;
        let SpecifiedItems;
        
        Out += this.Content_CreateSectionMisc(FilterData);
        
        for(let CategoryName in appData.poe_filter){
            CategoryData = appData.poe_filter[CategoryName];
    
            this.ActiveData[CategoryName] = this.ActiveData[CategoryName] || {};
            
            // Empty() Array
            Lists = [];
            SpecifiedItems = [];
            
            if(appData.poe_filter[CategoryName].Groups){
                // Item Groups using DragDropList
                for(let GroupName in appData.poe_filter[CategoryName].Groups){
                    GroupData = CategoryData.Groups[GroupName];
        
                    this.ActiveData[CategoryName][GroupName] = this.ActiveData[CategoryName][GroupName] || [];
    
                    if(GroupData.Items){
                        for(let ItemIndex in GroupData.Items){
                            //GroupData.Items[ItemIndex]
                            ActionDataStr = `${CategoryName}::${GroupData.Items[ItemIndex]}`;
                            if(!FilterData.has(`SetupData.ListGroups.${ActionDataStr}`)){
                                this.ActiveData[CategoryName][GroupName].push(ActionDataStr);
                            }else{
                                this.ActiveData[CategoryName][FilterData.get(`SetupData.ListGroups.${ActionDataStr}`)] = this.ActiveData[CategoryName][FilterData.get(`SetupData.ListGroups.${ActionDataStr}`)] || [];
                                this.ActiveData[CategoryName][FilterData.get(`SetupData.ListGroups.${ActionDataStr}`)].push(ActionDataStr);
                            }
                            // Add Specified item, Items not in this array will be added to their DefaultGroup
                            SpecifiedItems.push(GroupData.Items[ItemIndex]);
                        }
            
                    }
        
                }
                let SpecifiedItemName;
                for(let ItemIndex in appData.poe_items[CategoryData.ItemGroup][CategoryData.ItemType]){
                    SpecifiedItemName = appData.poe_items[CategoryData.ItemGroup][CategoryData.ItemType][ItemIndex];
                    
                    if(!SpecifiedItems.includes(parseInt(ItemIndex))){
                        //Log(`Not Found: ${SpecifiedItemName} - ID: ${ItemIndex}`);
                        
                        if(FilterData.has(`SetupData.ListGroups.${CategoryName}::${ItemIndex}`)){
                            this.ActiveData[CategoryName][FilterData.get(`SetupData.ListGroups.${CategoryName}::${ItemIndex}`)] = this.ActiveData[CategoryName][FilterData.get(`SetupData.ListGroups.${CategoryName}::${ItemIndex}`)] || [];
                            this.ActiveData[CategoryName][FilterData.get(`SetupData.ListGroups.${CategoryName}::${ItemIndex}`)].push(`${CategoryName}::${ItemIndex}`);
                        }else{
                            this.ActiveData[CategoryName][CategoryData.DefaultGroup] = this.ActiveData[CategoryName][CategoryData.DefaultGroup] || [];
                            this.ActiveData[CategoryName][CategoryData.DefaultGroup].push(`${CategoryName}::${ItemIndex}`);
                        }
                    }else{
                        //Log(SpecifiedItemName);
                    }
                }
                let ItemDataParts;
                let ItemName;
                for(let ActiveDataGroupName in this.ActiveData[CategoryName]){
        
                    ActiveDataGroup = this.ActiveData[CategoryName][ActiveDataGroupName];
        
                    // Empty() Array
                    ListItems = [];
        
                    ActiveDataGroup.forEach(function(ItemData, ItemIndex){
                        ItemDataParts = ItemData.split(`::`);
                        // ItemId: ItemDataParts[1]
    
                        ItemName = appData.poe_items[CategoryData.ItemGroup][CategoryData.ItemType][ItemDataParts[1]];
                        if(SearchTerm !== `` && !ItemName.toLowerCase().includes(SearchTerm.toLowerCase())){
                        
                        }else{
                            ListItems.push({
                                //Text: appData.poe_items[appData.poe_filter[ItemDataParts[0]].ItemGroup][appData.poe_filter[ItemDataParts[0]].ItemType][ItemDataParts[1]]
                                Text: ItemName
                                , ActionData: ItemData
                            });
                        }
                        
                    });
        
                    //Log(CategoryData.Groups[ActiveDataGroupName]);
                    // Add to List Array, later used inside the class to display output.
                    Lists.push({
                        //Name: (CategoryData.Groups[ActiveDataGroupName][`DisplayName`]) ? CategoryData.Groups[ActiveDataGroupName][`DisplayName`] + ` (${ActiveDataGroupName})` : ActiveDataGroupName
                        Name: ActiveDataGroupName
                        , bUseBreak: (ActiveDataGroupName === `T1`)
                        , Items: ListItems
                    });
                }
    
                // Final output instantiating the class and using args for contents.
                Out += new WZ.Core.cDragDropList({
                    LegendName: CategoryName
                    , OnDrop: `OnDropListItem`
                    , Lists: Lists
                    , SearchTerm: SearchTerm
                }).create_();
            }else{
                Log(`ToDo`);
            }
            
            
        }
        
        
        return `<div id="PoeFilter">${Out}</div>`;
    },
    
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

        if (typeof appConfig.get(`PathOfExile.ActiveFilter`) === `undefined`)
        {
            appConfig.set(`PathOfExile.ActiveFilter`, InContentType || `Default`);
        }
        if (typeof InContentType !== `undefined`) 
        {
            appConfig.set(`PathOfExile.ActiveFilter`, InContentType);
        }

        //this.Base.contentType = InContentType || `Default`;
        //this.contentType = this.Base.LoadContent(InContentType);
        this.contentType = this.Base.LoadContent(appConfig.get(`PathOfExile.ActiveFilter`));
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
    
    PrintColorAndMapIcon: function(InGroupName, InClassification, InCode = {}, InBaseTypes = []){
        let ColorScheme = {
                Unspecified: {
                    Alpha: `255`
                    , MiniMapSize: `1`
                    , MiniMapColor: `Green`
                    , Code: {
                        //SetTextColor: `125 225 125 {ALPHA}`
                        SetBackgroundColor: `0 37 0 {ALPHA}`
                    }
                }
                , Unspecified2: {
                    Alpha: `255`
                    , MiniMapSize: `1`
                    , MiniMapColor: `Green`
                    , Code: {
                        //SetTextColor: `125 225 125 {ALPHA}`
                        SetBackgroundColor: `0 37 0 {ALPHA}`
                    }
                }
                , T1: {
                    Alpha: `155`
                    , Code: {
                        SetFontSize: `25`
                        , SetBackgroundColor: `74 37 74 {ALPHA}`
                        //, SetTextColor: `225 225 225 {ALPHA}`
                    }
                }
                , T2: {
                    Alpha: `255`
                    , Code: {
                        SetFontSize: `25`
                        , SetBackgroundColor: `74 37 74 {ALPHA}`
                        //, SetTextColor: `225 125 225 {ALPHA}`
                    }
                }
                , T3: {
                    Alpha: `255`
                    , MiniMapSize: `2`
                    , MiniMapColor: `White`
                    , Code: {
                        SetBackgroundColor: `74 74 74 {ALPHA}`
                        //SetTextColor: `225 225 225 {ALPHA}`
                    }
                }
                , T4: {
                    Alpha: `255`
                    , MiniMapSize: `1`
                    , MiniMapColor: `White`
                    , Code: {
                        SetBackgroundColor: `74 74 74 {ALPHA}`
                        //SetTextColor: `225 225 225 {ALPHA}`
                    }
                }
                , T5: {
                    Alpha: `255`
                    , MiniMapSize: `2`
                    , MiniMapColor: `Yellow`
                    , Code: {
                        SetBackgroundColor: `74 74 37 {ALPHA}`
                        //SetTextColor: `225 225 25 {ALPHA}`
                    }
                }
                , T6: {
                    Alpha: `255`
                    , MiniMapSize: `1`
                    , MiniMapColor: `Yellow`
                    , Code: {
                        SetFontSize: `45`
                        , SetBackgroundColor: `74 74 37 {ALPHA}`
                        //, SetTextColor: `225 225 25 {ALPHA}`
                    }
                }
                , T7: {
                    Alpha: `255`
                    , MiniMapSize: `2`
                    , MiniMapColor: `Brown`
                    , Code: {
                        SetBackgroundColor: `74 37 0 {ALPHA}`
                        //SetTextColor: `225 125 25 {ALPHA}`
                    }
                }
                , T8: {
                    Alpha: `255`
                    , MiniMapSize: `1`
                    , MiniMapColor: `Brown`
                    , Code: {
                        SetFontSize: `45`
                        , SetBackgroundColor: `74 37 0 {ALPHA}`
                        //, SetTextColor: `225 125 25 {ALPHA}`
                    }
                }
                , T9: {
                    Alpha: `255`
                    , MiniMapSize: `1`
                    , MiniMapColor: `Red`
                    , Code: {
                        SetFontSize: `45`
                        , SetBackgroundColor: `74 0 0 {ALPHA}`
                        //, SetTextColor: `225 75 75 {ALPHA}`
                    }
                }
                , T10: {
                    Alpha: `255`
                    , MiniMapSize: `0`
                    , MiniMapColor: `Red`
                    , Code: {
                        SetFontSize: `45`
                        , SetBackgroundColor: `74 0 0 {ALPHA}`
                        //, SetTextColor: `225 75 75 {ALPHA}`
                    }
                }
                , T11: {
                    Alpha: `255`
                    , MiniMapSize: `1`
                    , MiniMapColor: `Blue`
                    , Code: {
                        SetFontSize: `45`
                        , SetBackgroundColor: `37 37 74 {ALPHA}`
                        //, SetTextColor: `125 125 125 {ALPHA}`
                    }
                }
                , T12: {
                    Alpha: `255`
                    , MiniMapSize: `0`
                    , MiniMapColor: `Blue`
                    , Code: {
                        SetFontSize: `45`
                        , SetBackgroundColor: `37 37 74 {ALPHA}`
                        //, SetTextColor: `125 125 225 {ALPHA}`
                    }
                }
                , FlaskLife: {
                    Alpha: `255`
                    , Code: {
                        SetBackgroundColor: `74 37 37 {ALPHA}`
                    }
                }
                , FlaskMana: {
                    Alpha: `255`
                    , Code: {
                        SetBackgroundColor: `0 37 74 {ALPHA}`
                    }
                }
                , FlaskUtility: {
                    Alpha: `255`
                    , Code: {
                        SetBackgroundColor: `0 74 37 {ALPHA}`
                    }
                }
                , League: {
                    Alpha: `255`
                    , MiniMapSize: `1`
                    , MiniMapColor: `Purple`
                    , Code: {
                        //SetTextColor: `0 74 37 {ALPHA}`
                    }
                }
                , LeagueS: {
                    Alpha: `255`
                    , MiniMapSize: `0`
                    , MiniMapColor: `Blue`
                    , Code: {
                        SetFontSize: `45`
                        , SetBackgroundColor: `37 37 74 {ALPHA}`
                        //SetTextColor: `0 74 37 {ALPHA}`
                    }
                }
                , LeagueA: {
                    Alpha: `255`
                    , MiniMapSize: `0`
                    , MiniMapColor: `Red`
                    , Code: {
                        SetFontSize: `45`
                        , SetBackgroundColor: `74 0 0 {ALPHA}`
                        //SetTextColor: `0 74 37 {ALPHA}`
                    }
                }
                , LeagueB: {
                    Alpha: `255`
                    , MiniMapSize: `1`
                    , MiniMapColor: `Brown`
                    , Code: {
                        SetBackgroundColor: `74 37 0 {ALPHA}`
                        //SetTextColor: `0 74 37 {ALPHA}`
                    }
                }
                , LeagueC: {
                    Alpha: `255`
                    , MiniMapSize: `2`
                    , MiniMapColor: `Yellow`
                    , Code: {
                        SetBackgroundColor: `74 74 37 {ALPHA}`
                        //SetTextColor: `0 74 37 {ALPHA}`
                    }
                }
                , LeagueD: {
                    Alpha: `255`
                    , MiniMapSize: `2`
                    , MiniMapColor: `White`
                    , Code: {
                        SetFontSize: `25`
                        , SetBackgroundColor: `74 74 74 {ALPHA}`
                        //SetTextColor: `0 74 37 {ALPHA}`
                    }
                }
                , MapFragments: {
                    Alpha: `255`
                    , MiniMapSize: `1`
                    , MiniMapColor: `Green`
                    , Code: {
                        //SetTextColor: `0 74 37 {ALPHA}`
                    }
                }
                , Leveling: {
                    Alpha: `255`
                    , Code: {
                        SetBackgroundColor: `0 0 37 {ALPHA}`
                    }
                }
                , ClusterJewel: {
                    Alpha: `255`
                    , MiniMapSize: `0`
                    , MiniMapColor: `Grey`
                    , Code: {
                        //SetTextColor: `200 200 200 {ALPHA}`
                    }
                }
                , Custom: {
                    Alpha: `255`
                    , Code: {
                    
                    }
                }
            }
            , MiniMapIcons = {
                Currency: `Diamond`
                , Incubator: `UpsideDownHouse`
                , 'Metamorph Sample': `UpsideDownHouse`
                , Card: `Square`
                , Map: `Triangle`
                , Fragments: `Triangle`
                , MapFragments: `Triangle`
                , Equipment: `Star` // not a real class, it will be excluded
                , Recipe: `Hexagon` // not a real class, it will be excluded
                , Armor: `Star`
                , Weapon: `Star`
                , Amulet: `Star`
                , Ring: `Star`
                , Belt: `Star`
                , 'Off-hand': `Star`
                , Gems: `Circle`
                , Jewel: `Circle`
                , ClusterJewel: `UpsideDownHouse`
                , League:  `UpsideDownHouse`
                , LeagueRanked:  `UpsideDownHouse`
                , LeagueS:  `UpsideDownHouse`
                , LeagueA:  `UpsideDownHouse`
                , LeagueB:  `UpsideDownHouse`
                , LeagueC:  `UpsideDownHouse`
                , LeagueD:  `UpsideDownHouse`
                , 'Incursion Item': `UpsideDownHouse`
            }
            , ColorPerType = {
                Currency: {
                    //SetBackgroundColor: `37 0 37 {ALPHA}`
                    SetTextColor: `125 225 225 {ALPHA}`
                    , SetBorderColor: `225 125 225 {ALPHA}`
                }
                , Incubator: {
                    //SetBackgroundColor: `37 0 37 {ALPHA}`
                    SetTextColor: `125 225 225 {ALPHA}`
                    , SetBorderColor: `225 125 225 {ALPHA}`
                }
                , 'Metamorph Sample': {
                    //SetBackgroundColor: `37 0 37 {ALPHA}`
                    SetFontSize: `45`
                    , SetBackgroundColor: `37 0 37 {ALPHA}`
                    , SetTextColor: `187 187 224 {ALPHA}`
                    , SetBorderColor: `225 125 225 {ALPHA}`
                }
                , Card: {
                    //SetBackgroundColor: `37 37 37 {ALPHA}`
                    SetBorderColor: `125 125 225 {ALPHA}`
                }
                , MapFragments: {
                    //SetBackgroundColor: `54 17 17 {ALPHA}`
                    SetBorderColor: `225 125 125 {ALPHA}`
                }
                , Map: {
                    //SetBackgroundColor: `54 17 17 {ALPHA}`
                    SetBorderColor: `225 125 125 {ALPHA}`
                }
                , Flask: {
                    SetBorderColor: `205 205 205 {ALPHA}`
                }
                , Recipe: {
                    SetBackgroundColor: `37 0 37 {ALPHA}`
                    , SetBorderColor: `125 225 225 {ALPHA}`
                }
                , Equipment: {
                    SetBackgroundColor: `0 0 37 {ALPHA}`
                    , SetBorderColor: `55 155 255 {ALPHA}`
                }
                , Gems: {
                    SetBackgroundColor: `0 37 37 {ALPHA}`
                    , SetBorderColor: `55 255 155 {ALPHA}`
                }
                , Jewel: {
                    SetBackgroundColor: `0 37 37 {ALPHA}`
                    , SetBorderColor: `55 255 155 {ALPHA}`
                }
                , ClusterJewel: {
                    SetBackgroundColor: `0 37 37 {ALPHA}`
                    , SetBorderColor: `75 75 75 {ALPHA}`
                }
                , League: {
                    SetBackgroundColor: `0 74 37 {ALPHA}`
                    , SetBorderColor: `55 255 155 {ALPHA}`
                }
                , LeagueRanked: {
                    //SetBackgroundColor: `0 74 37 {ALPHA}`
                    SetBorderColor: `55 255 155 {ALPHA}`
                }
                , LeagueS: {
                    SetBackgroundColor: `0 74 37 {ALPHA}`
                    , SetBorderColor: `55 255 155 {ALPHA}`
                }
                , LeagueA: {
                    SetBackgroundColor: `0 74 37 {ALPHA}`
                    , SetBorderColor: `55 255 155 {ALPHA}`
                }
                , LeagueB: {
                    SetBackgroundColor: `0 74 37 {ALPHA}`
                    , SetBorderColor: `55 255 155 {ALPHA}`
                }
                , LeagueC: {
                    SetBackgroundColor: `0 74 37 {ALPHA}`
                    , SetBorderColor: `55 255 155 {ALPHA}`
                }
                , LeagueD: {
                    SetBackgroundColor: `0 74 37 {ALPHA}`
                    , SetBorderColor: `55 255 155 {ALPHA}`
                }
                , Amulet: {
                    SetBackgroundColor: `0 74 37 {ALPHA}`
                    , SetBorderColor: `55 255 155 {ALPHA}`
                }
                , 'Incursion Item': {
                    SetBackgroundColor: `37 0 37 {ALPHA}`
                    , SetBorderColor: `225 125 225 {ALPHA}`
                }
            }
            , KeywordOrder = [
                `LinkedSockets`, `Sockets`, `StackSize`, `GemLevel`, `Quality`, `Identified`, `SocketGroup`, `Height`, `Width`, `ElderItem`, `ShaperItem`, `HasInfluence`, `FracturedItem`, `SynthesisedItem`, `ShapedMap`, `BlightedMap`, `MapTier`, `DropLevel`, `Class`, `BaseType`, `Rarity`, `HasExplicitMod`, `AnyEnchantment`, `ItemLevel`
                , `SetFontSize`, `SetTextColor`, `SetBackgroundColor`, `SetBorderColor`, `DisableDropSound`, `PlayAlertSound`, `MinimapIcon`, `PlayEffect`
            ];
        
        let Output = ``;
    
        if(InClassification === `Hidden`){
            Output += `\n`;
            Output += `Hide\n`;
        }else{
            Output += `\n`;
            Output += `Show\n`;
        }
        
        let BaseCode = {};
    
        if(InGroupName === `Default Equipment`) {
            BaseCode[`Rarity`] = `<= Rare`;
            InGroupName = `Equipment`;
        }
        
        if(InGroupName !== `Equipment` && InGroupName !== `Recipe` && InGroupName !== `League`){
            BaseCode[`Class`] = `"${InGroupName}"`;
        }
        if(InGroupName === `ClusterJewel`){
            BaseCode[`Class`] = `"Jewel"`;
        }
        if(InBaseTypes.length){
            BaseCode[`BaseType`] = `{BASE_TYPE}`;
        }
        if(InClassification !== `Hidden`){
            if (ColorScheme[InClassification] && ColorScheme[InClassification][`Code`]) {
                for(let Keyword in ColorScheme[InClassification][`Code`]){
                    BaseCode[Keyword] = ColorScheme[InClassification][`Code`][Keyword].wzReplace({ALPHA: ColorScheme[InClassification][`Alpha`]});
                }
            }
            
            if (ColorScheme[InClassification] && ColorScheme[InClassification][`Alpha`]) {
                for(let Keyword in ColorPerType[InGroupName]){
                    BaseCode[Keyword] = ColorPerType[InGroupName][Keyword].wzReplace({ALPHA: ColorScheme[InClassification][`Alpha`]});
                }
            }
            
    
            if(ColorScheme[InClassification] && ColorScheme[InClassification].MiniMapSize && ColorScheme[InClassification].MiniMapColor && MiniMapIcons[InGroupName]){
                BaseCode[`MinimapIcon`] = `${ColorScheme[InClassification].MiniMapSize} ${ColorScheme[InClassification].MiniMapColor} ${MiniMapIcons[InGroupName]}`;
                BaseCode[`PlayEffect`] = `${ColorScheme[InClassification].MiniMapColor}`;
            }
        }
        let FinalCode = Object.assign(BaseCode, InCode);
    
        for(let KeywordIndex in KeywordOrder){
            let KeywordName = KeywordOrder[KeywordIndex];
    
            if(FinalCode[KeywordName]){
                if(Array.isArray(FinalCode[KeywordName])){
                    for(let KeywordValueIndex in FinalCode[KeywordName]){
                        Output += `    ${KeywordName} ${FinalCode[KeywordName][KeywordValueIndex]}\n`;
                    }
                }else{
                    Output += `    ${KeywordName} ${FinalCode[KeywordName]}\n`;
                }
                
            }else if(InCode[KeywordName] === ``){
                Output += `    ${KeywordName}\n`;
            }
        }
        
        let BaseTypes = ``;
        if(InBaseTypes.length){
            for(let BaseTypeIndex in InBaseTypes){
                if(BaseTypes !== ``) BaseTypes += ` `;
                BaseTypes += `"${InBaseTypes[BaseTypeIndex]}"`;
            }
        }
        
        return Output.wzReplace({BASE_TYPE: BaseTypes});
    },
    
    Print_TopComment: function(){
        let Output = ``;
    
        Output += `# -------------------------------------------------------------------------------\n`;
        Output += `# ${this.Base.contentType}.FILTER\n`;
        Output += `# @Created ${moment().format('MMMM Do YYYY, h:mm:ss a')}\n`;
        Output += `# -------------------------------------------------------------------------------\n`;
        Output += `# Generated Filter File\n`;
        Output += `# -------------------------------------------------------------------------------\n`;
        Output += `# Tool Information\n`;
        Output += `# *****************\n`;
        Output += `# @Link https://github.com/WareBare/WanezToolsPoE\n`;
        Output += `# @Author WareBare\n`;
        Output += `# @Version ${VERSION_TOOL}\n`;
        Output += `# @VersionPoE ${VERSION_POE}\n`;
        Output += `# @Date ${DATETIME_TOOL}\n`;
        Output += `# -------------------------------------------------------------------------------\n\n`;
        
        return Output;
    },
    
    Print_Map: function(){
        let Output = ``, Groups = {
            T8: {
                Rarity: `Unique`
            }
            , Unspecified: {
                ShapedMap: `True`
            }
            , Unspecified2: {
                BlightedMap: `True`
            }
            , T12: {
                MapTier: `>= 16`
            }
            , T10: {
                MapTier: `>= 11`
            }
            , T6: {
                MapTier: `>= 6`
            }
            , T4: {
                MapTier: `>= 1`
            }
        };
    
        let MapCode;
        for(let MapClassification in Groups){
            MapCode = Groups[MapClassification];
            MapCode[`PlayAlertSound`] = `6 300`;
            MapCode[`DisableDropSound`] = ``;
            MapCode[`SetFontSize`] = `45`;
            Output += this.PrintColorAndMapIcon(`Map`, MapClassification, MapCode);
        }
        
        return Output;
    },
    
    Print_Flasks: function(){
        let Output = ``, Groups = FlasksGroups = [
            {
                Small: {
                    ItemLevel: `<= 4`
                }
                , Medium: {
                ItemLevel: `<= 7`
            }
                , Large: {
                ItemLevel: `<= 13`
            }
                , Greater: {
                ItemLevel: `<= 19`
            }
                , Grand: {
                ItemLevel: `<= 24`
            }
                , Giant: {
                ItemLevel: `<= 29`
            }
                , Colossal: {
                ItemLevel: `<= 35`
            }
                , Sacred: {
                ItemLevel: `<= 41`
            }
                , Hallowed: {
                ItemLevel: `<= 59`
            }
                , Sanctified: {
                ItemLevel: `<= 64`
            }
                , Divine: {
                ItemLevel: `<= 75`
            }
                , Eternal: {
                ItemLevel: `<= 75`
            }
            }
            , {
                BaseTypes: ["Granite", "Jade", "Topaz", "Ruby", "Sapphire", "Quicksilver", "Basalt", "Aquamarine", "Stibnite", "Sulphur", "Silver", "Bismuth", "Diamond", "Quartz"]
                , Code: {
                    ItemLevel: `<= 75`
                }
            }
        ];
    
        for(let FlaskSizeName in Groups[0]){
            Output += this.PrintColorAndMapIcon(`Flask`, `FlaskLife`, Object.assign({Rarity: `<= Magic`}, Groups[0][FlaskSizeName]), [`${FlaskSizeName} Life Flask`]);
            Output += this.PrintColorAndMapIcon(`Flask`, `FlaskMana`, Object.assign({Rarity: `<= Magic`}, Groups[0][FlaskSizeName]), [`${FlaskSizeName} Mana Flask`]);
        }
        Output += this.PrintColorAndMapIcon(`Flask`, `FlaskUtility`, Object.assign(Groups[1].Code, {Rarity: `<= Magic`}), Groups[1].BaseTypes);
        
        return Output;
    },
    
    Print_CheckValue: function(InCheckValue){
        if(!this.Base.FilterData.has(`SetupData.CheckValues`)) return ``;
        let Output = ``
            , SavedCheckValues = this.Base.FilterData.get(`SetupData.CheckValues.${InCheckValue}`) || this.CheckValues[InCheckValue].CurrentValue
            , UsableCheckValues = (Array.isArray(SavedCheckValues)) ? SavedCheckValues : []
            , CheckValueGlobalCode = this.CheckValues[InCheckValue].Code || {}
            , CheckValueCode
            , CheckValueSettings;
        
        if(!Array.isArray(SavedCheckValues)) UsableCheckValues[parseInt(SavedCheckValues)] = true;
        //Log(UsableCheckValues);
        for(let CheckValueIndex in UsableCheckValues){
            if(UsableCheckValues[CheckValueIndex]){
                CheckValueSettings = (this.CheckValues[InCheckValue].Settings) ? this.CheckValues[InCheckValue].Settings[CheckValueIndex] : {Classification: `T1`, Code: {}};
                // check if 'ToolIgnore: true' inside Settings, if not use Code and Classification.
                if(CheckValueSettings && !CheckValueSettings.ToolIgnore){
                    // Code will be looped for multiple settings (ie RGB for small items has different sizes that require different blocks)
                    CheckValueCode = (Array.isArray(CheckValueSettings.Code)) ? CheckValueSettings.Code : [CheckValueSettings.Code];
    
                    for(let CodeIndex in CheckValueCode){
                        Output += this.PrintColorAndMapIcon(this.CheckValues[InCheckValue].Class, CheckValueSettings.Classification, Object.assign(CheckValueCode[CodeIndex] || {}, CheckValueGlobalCode));
                    }
                }
            }
        }
        
        return Output;
    },
    
    Print_Group: function(InSectionName){
        let Output = ``, BaseTypes, SectionData = this.ActiveData[InSectionName]
            , FilterData = appData.poe_filter[InSectionName]
            , ItemGroup = FilterData.ItemGroup
            , ItemType = FilterData.ItemType;
        
        for(let GroupName in SectionData){
            let GroupData = SectionData[GroupName]
                , ItemSettings = FilterData.Groups[GroupName].Settings;
            
            BaseTypes = [];
            
            
            //Log(appData.poe_filter[InSectionName].Groups[GroupName].Settings);
            // Loop through each item inside a Section Group.
            for(let ItemIndex in GroupData){
                let ItemData = GroupData[ItemIndex].split(`::`)
                    , ItemBaseType = appData.poe_items[ItemGroup][ItemType][ItemData[1]];
    
                //Log(FilterData.Groups[GroupName].Settings);
                if(GroupName !== FilterData.DefaultGroup){
                    // Adds BaseType to Section Group.
                    BaseTypes.push(ItemBaseType);
                }
            
            }
            // Generates GroupOutput for non DefaultGroup (length == 0 results in no output).
            if(BaseTypes.length) {
                // split up Hidden and Visible Sections for future flexibility.
                if(GroupName === `Hidden`){
                    if(InSectionName === `Currency` || InSectionName === `Card`){
                        Output += this.PrintColorAndMapIcon(InSectionName, GroupName, {DisableDropSound: ``, StackSize: `1`}, BaseTypes);
                    }else{
                        Output += this.PrintColorAndMapIcon(InSectionName, GroupName, {DisableDropSound: ``}, BaseTypes);
                    }
                }else{
                    Output += this.PrintColorAndMapIcon(InSectionName, GroupName, Object.assign({DisableDropSound: ``}, ItemSettings), BaseTypes);
                }
            
            }
        
        }
        
        return Output;
    },
    Print_Hide: function(InClassName, InBaseTypes = []){
        return this.PrintColorAndMapIcon(InClassName, `Hidden`, {}, InBaseTypes);
    },
    Print_CheckBoolean: function(InCheckValue){
        if(!this.Base.FilterData.has(`SetupData.CheckValues`)) return ``;
        let bAllowAction = false
            , SavedCheckValues = this.Base.FilterData.get(`SetupData.CheckValues.${InCheckValue}`) || this.CheckValues[InCheckValue].CurrentValue;
        
        return parseInt(SavedCheckValues);
    },
    
    WriteFilter: function(){
        
        wzUpdateHeader(`Writing Filter...`);

        //Log(this.ActiveData);
        
        // Shapes: [Circle, Diamond, Hexagon, Square, Star, Triangle]
        // Colors [White, Green, Blue, Yellow, Orange(Brown), Red]
        let UnspecifiedGroups = ["Currency", "Card", "Map"];
        
        let Output = ``, BaseTypes = [];
        
        // -- TOP_COMMENT -- \\
        Output += this.Print_TopComment();

        // -- TEMP_NEW_LEAGUE -- \\ Incubators
        //Output += `\nShow\n`;
        //Output += `    Rarity <= Rare\n`;
        //Output += `    ItemLevel < 20\n`;
        //Output += `    SetBackgroundColor 0 0 37 175\n`;
        //Output += `    SetBorderColor 55 155 255 175\n`;
        Output += this.Print_CheckValue(`LeagueLegion`);
    
        // -- LEAGUE -- \\
        Output += this.Print_CheckValue(`LeagueEssence2`);
        Output += `\nHide\n`;
        Output += `    Class "Currency"\n`;
        Output += `    BaseType "Essence"\n`;
        const TalismanOutput = this.Print_CheckValue(`LeagueTalisman`);
        
        if (!this.Print_CheckBoolean(`LeagueTalisman`))
        {
            Output += `\nHide\n`;
            Output += `    Class "Amulet"\n`;
            Output += `    BaseType "Talisman"\n`;
        }
        else
        {
            Output += TalismanOutput;
        }
        Output += this.Print_CheckValue(`LeagueBreach`);
        Output += this.Print_CheckValue(`LeagueMetamorph`);
        Output += this.Print_CheckValue(`LeagueHarvest`);
        Output += this.Print_CheckValue(`LeagueHarvest2`);
    
        // -- BASE_ITEMS -- \\
        //Output += this.Print_CheckValue(`BaseElder`);
        //Output += this.Print_CheckValue(`BaseShaper`);
        Output += this.Print_CheckValue(`BaseInfluenced`);
        Output += this.Print_CheckValue(`BaseSynthesis`);
        Output += this.Print_Group(`Default Equipment`);
    
        Output += this.Print_CheckValue(`ClusterJewels`);
        Output += this.Print_CheckValue(`BaseJewels`);
        
        // -- RECIPE -- \\
        Output += this.Print_CheckValue(`RecipesSocketsCount`);
        Output += this.Print_CheckValue(`RecipesSocketsRGB`);
        Output += this.Print_CheckValue(`MiscSocketsCount`);
        if(this.Print_CheckBoolean(`RecipesChaos`)) Output += this.Print_CheckValue(`RecipesChaos`);
    
        // -- CURRENCY -- \\
        Output += this.Print_Group(`Currency`);
        Output += this.Print_CheckValue(`MiscCurrencyStacks`);
    
        // -- GEM -- \\
        Output += this.Print_Group(`Gems`);
        Output += this.Print_CheckValue(`RecipesGem`);
        Output += this.Print_CheckValue(`MiscGem`);
    
        // -- MAP -- \\
        //Output += this.Print_CheckValue(`MapFragments`);
        Output += this.Print_Map();
    
        // -- UNIQUES -- \\
        Output += this.Print_CheckValue(`MiscUniques`);
        
        // -- FLASK -- \\
        if(this.Print_CheckBoolean(`MiscFlasks`)) {
            Output += this.Print_Flasks();
        }else{
            Output += this.Print_Hide(`Flask`);
        }
    
        // -- CARD -- \\
        Output += this.Print_Group(`Card`);
    
        // -- LEVELING -- \\
        if(this.Print_CheckBoolean(`MiscLevelingGear`)) Output += this.Print_CheckValue(`MiscLevelingGear`);
    
        Output += this.Print_CheckValue(`MiscEnchantment`);
    
        Output += this.Print_CheckValue(`MiscGeneral`);
        
        Output += `\nHide\n`;
        Output += `    Class "Currency"\n`;
        Output += `    StackSize > 1\n`;
        // -- UNSPECIFIED -- \\
        for(let GroupId in UnspecifiedGroups) {
            let GroupName = UnspecifiedGroups[GroupId];
            Output += this.PrintColorAndMapIcon(GroupName, `Unspecified`);
        }
    
        Output += this.Print_CheckValue(`LeagueIncursion`);

        Output += `\nHide\n`;
        Output += `    Class "Gem"\n`;
    
        Output += `\nHide\n`;
        Output += `    Rarity <= Rare\n`;
        Output += `    ItemLevel > 20\n`;
    
        Output += `\nShow\n`;
        Output += `    Rarity <= Rare\n`;
        Output += `    ItemLevel < 20\n`;
        Output += `    SetBackgroundColor 0 0 37 175\n`;
        Output += `    SetBorderColor 55 155 255 175\n`;
        
        
        if(this.Base.FilterSettings.has(`Path`)){
            wzIO.file_put_contents(`${this.Base.FilterSettings.get(`Path`)}/${this.Base.contentType}.filter`, Output);
        }
        //Log(Output);
    },
    
    sidebarBtns_: function(){
        let TestBtn = false
            , WriteFilterBTN = false;
        
        
        TestBtn = {
            "ONCLICK": "_cms.Base.LoadFilters()",
            "TEXT": "Add Group"
        };
    
        WriteFilterBTN = {
            "ONCLICK": "_cms.WriteFilter()",
            "TEXT": "Write"
        };
        
        let Out = this.Base.GenerateSidebarButtons();
        //Out.push(TestBtn);
        Out.push(WriteFilterBTN);
        
        return Out;
    },
    sidebarList_: function(){
        return this.Base.GenerateSidebarList();
    }
    
};
