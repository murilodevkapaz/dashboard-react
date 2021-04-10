const formatDate = (date: string): string=>{
    const dateFormated = new Date(date);
    const day = (dateFormated.getDate())<=9? "0"+(dateFormated.getDate()) :(dateFormated.getDate()) ;
    const month = (dateFormated.getMonth()+1)<=9? "0"+(dateFormated.getMonth()+1) :(dateFormated.getMonth()+1) ;
    const year = dateFormated.getFullYear();


    return `${day}/${month}/${year}`;
};

export default formatDate;