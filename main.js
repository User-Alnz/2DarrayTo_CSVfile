var array2D = [
    [ "name",  "role",      "city",   "wage"],
    [ "Paul",  "sale",      "Lyon",    34000], 
    [ "Marie", "manager",   "Lyon",    37000],   
    [ "Paul",  "assistant", "Paris",   24000]];

    
function main(array2D)
{
    var     csv;
    var     idxRow;
    var     rowLength;
    var     temp;

    idxRow = 0;
    rowLength = array2D[0].length;
    
    while(idxRow < rowLength)
    {
            temp = array2D[idxRow];
            //console.log(array2D);
            //console.log(temp);
            //addComa(temp);
            addComa(temp);
            csv = createNewTab(temp, rowLength);
            console.log(temp);

            idxRow++;
    }

    return(csv)
}

//test = ['name', 'role', 'city', 'wage'];

function addComa(test)
{
    var     idx = 0;
    var     length = test.length;
    
    while(idx < length-1)
    {
        test[idx] += ','; 
        //console.log(test[idx]);
        idx++;
    }
    //console.log(test);
    return(test);
}

function createNewTab(temp, tabLength)
{
    var    newTab;

    newTab = []

}

//readtest(test);
main(array2D);