function register()
{
    let days=parseInt(document.getElementById("days").value || 0);
    let persons=parseInt(document.getElementById("persons").value || 0);
    let rooms=document.getElementById("type").options.selectedIndex;
    let amenity=document.getElementById("ame").options.selectedIndex;
    let advance=parseInt(document.getElementById("pay").value || 0);
    let add=0;
    let roomcost;
    let amenitycost;
    if(rooms===0)
    {
      roomcost=2500*days;
    }
    else if(rooms===1)
    {
      roomcost=4000*days;
    }
    if(amenity===0)
    {
      amenitycost=1000*days;
    }
    else if(amenity===1)
    {
      amenitycost=300*days;
    }
    document.getElementById("roomcost").value=roomcost;
    document.getElementById("amen").value=amenitycost;
    if(persons>2)
    {
     add=(persons-2)*1000*days;
    }
    document.getElementById("additional").value=add;
    document.getElementById("total").value=roomcost+amenitycost+add;
    document.getElementById("bal").value=roomcost+amenitycost+add-advance;
}