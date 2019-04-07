/**
 * Created by Ware on 5/31/2018.
 *
 * @author Ware (Daniel Kamp)
 * @license MIT
 * @website https://github.com/WareBare
 *
 */

module.exports = class cParser extends libWZ.Core.cBase{
    
    constructor(){
        super();
    }
    
    /**
     *
     * @param $fileContents
     */
    parseData($fileContents){
        //return JSON.parse(super.file_get_contents(this.filepath));
        return JSON.parse($fileContents);
    }
    
    /**
     *
     * @param $data
     */
    stringifyData($data){
        return JSON.stringify($data, null, 4);
    }
};
