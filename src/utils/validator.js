export const validateMovie=(movieInfo)=>{
    const{title,storyLine,language,releaseDate,status,type,genres,tags,cast,}=movieInfo
   
    if(!title.trim()) return{error:'Title is missing'}
    if(!storyLine.trim()) return{error:'Story Line is missing'}
    if(!language.trim()) return{error:'language is missing'}
    if(!releaseDate.trim()) return{error:'release Date is missing'}
    if(!status.trim()) return{error:'status is missing'}
    if(!type.trim()) return{error:'type is missing'}
    if(!genres.length) return{error :"genres are missing"}
    for(let gen of genres){
     if(!gen.trim()) return  {error:'Invalid genres'}
    }
    if(!tags.length) return{error :"tags are missing"}
    for(let tag of tags){
     if(!tag.trim()) return  {error:'tag genres'}
    }
    if(!cast.length) return{error :"cast are missing"}
     for(let c of cast){
      if(typeof c!=='object') return  {error:'Invalid cast'}
    }
   
   return{error:null}
    }