const shortenText = (text) =>{
    return  text.split(" ").slice(0,3).join(" ");
}

export  {shortenText}
// اینجا یادم باشه برای فانکشن از {} استفاده میکنیم که اکسپورتش کنیم