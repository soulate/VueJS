export function gFnCheckValid(obj) {

  let valid = obj.valid;
  let value = obj.value;
  let error = obj.error;
  let target = obj.target;
  let noData = obj.noData;

  if(value=='') {
    return noData;
  }

  if(valid=='kor'){

    let pattern = /[^ㄱ-ㅎ가-힣]/g;
    if(pattern.test(value)){
      return error;
    }
  }
  if(valid=='eng'){
    let pattern = /[^a-z]/gi;
    if(pattern.test(value)){
      return error;
    }
  }
  if(valid=='korEng'){
    let pattern = /[^ㄱ-ㅎ가-힣a-z]/gi;
    if(pattern.test(value)){
      return error;
    }
  }
  if(valid=='notNumber'){
    let pattern = /[0-9]/g;
    if(pattern.test(value)){
      return error;
    }
  }
  if(valid=='number'){
    let pattern = /[^0-9]/g;
    if(pattern.test(value)){
      return error;
    }
  }
  if(valid=='maxLength'){
    let len = value.length;
    if(len > target.dataset.maxlength){
      return error;
    }
  }
  if(valid=='maxByte'){

    let byte = 0;
    for(let i = 0 ; i < value.length ; i++){
      if(escape(value.charAt(i)).length >= 4)
        byte += 3;
      else if(escape(value.charAt(i)) == "%A7") //§기호는 3Byte.
        byte += 3;
      else
      if(escape(value.charAt(i)) != "%0D") // Carriage Return 제외.
        byte++;
    }
    if(byte > target.dataset.maxbyte){
      return error;
    }
  }
  if(valid=='url'){
    let pattern = /^http(s)?:\/\/(www\.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    if(!pattern.test(value)){
      return error;
    }
  }

  return '';
}
