function previous_date(year,month,day){
    let  date_str = year + '-' + month + '-' + day;
    let event = new Date(date_str);
    event.setDate(day-1);
    console.log(event.getFullYear() + `-` +(Number(event.getMonth()) + 1 ) + '-' +event.getDate());
    
}

previous_date(2016, 9, 30)
previous_date(2016, 10, 1)