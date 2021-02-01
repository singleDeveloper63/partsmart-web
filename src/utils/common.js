/**
 * 
 * @param {String} str 
 */

function copyToClipboard(str){
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

function notEmpty(obj){
  const fields = [];
  Object.keys(obj)
    .forEach( field => {
      if(obj[field] !== ""){
        fields.push({ field : obj[field] })
      }
    })
  return fields;
}

function createFilterFromObject(filterObject = {}){
  let filters = "";
  Object.keys(filterObject)
    .forEach( (key) =>{
      if(filterObject[key] !== ""){
          filters+=`${key}=${filterObject[key]}&`
      }
    })
    return filters;
}

export {
  copyToClipboard,
  notEmpty,
  createFilterFromObject
}