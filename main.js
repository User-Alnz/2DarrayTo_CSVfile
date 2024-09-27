
var array2D = [[ "names",  "role",      "city",   "wage", "old_role"],
                [ "Paul",  "sale",      "Lyon",    34000, "assistant"], 
                [ "Marie", "manager",   "Lyon",    37000, "assistant"],   
                [ "Paul",  "assistant", "Paris",   24000, "assistant"]];

function    Transform2DarrayToString(array2D)
{

    var     idxRow;
    var     idxColumn;
    var     rowLength;
    var     columnLength;
    var     string;

    idxRow = 0;
    idxColumn = 0;
    rowLength = array2D.length;
    columnLength = array2D[0].length;
    string = '';
    
    console.log("I am array2D: ", array2D);
    console.log("rowLength : ", rowLength);
    console.log("columnLength: ", columnLength);

    while(idxRow < rowLength)
    {
        idxColumn = 0;
                while(idxColumn < columnLength) // -1 to exclude last column from adding coma
                {
                    if(idxColumn === columnLength-1) // if last column of the row which we are reading
                    {
                        string += array2D[idxRow][idxColumn];
                        string += '\n';
                    }
                    else
                    {
                        array2D[idxRow][idxColumn] += ','
                        string += array2D[idxRow][idxColumn];
                    }
                    
                    idxColumn++;
                }
        idxRow++;
    }
    
    console.log(string);
    return(string);
}


Transform2DarrayToString(array2D);