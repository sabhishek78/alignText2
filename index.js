function alignText(text,width,alignment){
  let start=0;
  let end=width;
  let stringLength=width;
  let result='';
  let sentence='';
  while(start+stringLength<=text.length){
    // console.log('start='+start);
     if(text[start+stringLength]==' '){
   sentence=text.slice(start,stringLength+start);
 }
 else{
   while(text[start+stringLength]!==' '){
     stringLength--;
   }
   sentence=text.slice(start,stringLength+start);
 }
// console.log(sentence);

 if(alignment=='left'){
   let padSpaceLength=width-sentence.length;
   for(let i=0;i<padSpaceLength;i++){
     sentence+=' ';
   }
 }
 if(alignment=='right'){
   let padSpaceLength=width-sentence.length;
   for(let i=0;i<padSpaceLength;i++){
     sentence=' '+sentence;
   }
 }
if(alignment=='center'){
   let padSpaceLength=width-sentence.length;
   for(let i=0;i<padSpaceLength/2;i++){
     sentence=' '+sentence;
   }
   for(let i=0;i<padSpaceLength/2;i++){
     sentence+=' ';
   }
   
 }
 console.log(sentence);
 result=result+sentence;
 result=result+'\n';
 start=start+stringLength+1;
 
 stringLength=width;
 sentence="";

  }
 sentence=text.slice(start,text.length);
 if(alignment=='left'){
   let padSpaceLength=width-sentence.length;
   for(let i=0;i<padSpaceLength;i++){
     sentence+=' ';
   }
 }
 if(alignment=='right'){
   let padSpaceLength=width-sentence.length;
   for(let i=0;i<padSpaceLength;i++){
     sentence=' '+sentence;
   }
 }
  if(alignment=='center'){
   let padSpaceLength=width-sentence.length;
   for(let i=0;i<padSpaceLength/2;i++){
     sentence=' '+sentence;
   }
   for(let i=0;i<padSpaceLength/2;i++){
     sentence+=' ';
   }
 }
 result+=sentence;
 return result;
  
}

let text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
console.log(alignText(text,30,'left'));
console.log(alignText(text,30,'right'));
 console.log(alignText(text,30,'center'));