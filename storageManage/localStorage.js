export default {

    //manage storage
    setStorage:function(storageName,storageValue){
        
        if (window.localStorage) {
            if (typeof storageValue != 'string'){
                storageValue = JSON.stringify(storageValue);
            }
            localStorage.setItem(storageName,storageValue);
        }else{
            alert('This browser does NOT support localStorage');
        }
    },
    getStorage:function(storageName) {
        var result = JSON.parse(localStorage.getItem(storageName));
        
        if (result) {
            return result;
        }else{
            return '';
        }
    }
}