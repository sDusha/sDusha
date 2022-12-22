let prev_max2 = 10000
for(let i = 1; i <= 10; i++){
    let max = 0;
    let name = "";
    for(let key in images){
        if (max < parseInt(images[key]["points_2022"]) && parseInt(images[key]["points_2022"]) < prev_max2){
            max = parseInt(images[key]["points_2022"]);
            name = images[key]['Name'];
        }
    }
    prev_max2 = max;
    document.getElementById(String(i)+'team_points').textContent = max   
    document.getElementById(String(i)+'team').textContent = name;
}