module.exports= (fullDate) => 
    new Date(fullDate.displayDate.slice(fullDate.displayDate.indexOf('-')+2))