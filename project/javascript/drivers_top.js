let prev_max = 10000
for(let i = 1; i <= 10; i++){
    let max = 0;
    let name = "";
    for(let key in driver_images){
        if (max < parseInt(driver_images[key]["points_2022"]) && parseInt(driver_images[key]["points_2022"]) < prev_max){
            max = parseInt(driver_images[key]["points_2022"]);
            name = driver_images[key]['name'];
        }
    }
    prev_max = max;
    document.getElementById(String(i)+'points').textContent = max   
    document.getElementById(String(i)+'driver').textContent = name;
}